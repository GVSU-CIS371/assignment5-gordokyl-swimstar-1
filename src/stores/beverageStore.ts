import { defineStore } from "pinia";
import {
  BaseBeverageType,
  CreamerType,
  SyrupType,
  BeverageType,
} from "../types/beverage";
import tempretures from "../data/tempretures.json";
import { db } from "../firebase.ts"; 
import {
  collection,
  getDocs,
  setDoc,
  doc,
  onSnapshot,
  query,
  where,
  Unsubscribe,
} from "firebase/firestore";
import { User } from "firebase/auth";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures as string[],
    currentTemp: tempretures[0] as string,
    bases: [] as BaseBeverageType[],
    currentBase: null as BaseBeverageType | null,
    syrups: [] as SyrupType[],
    currentSyrup: null as SyrupType | null,
    creamers: [] as CreamerType[],
    currentCreamer: null as CreamerType | null,
    beverages: [] as BeverageType[],
    currentBeverage: null as BeverageType | null,
    currentName: "",
    user: null as User | null,
    unsubscribe: null as Unsubscribe | null,
  }),

  actions: {
    async init() {
      try {
        const [baseSnap, creamerSnap, syrupSnap] = await Promise.all([
          getDocs(collection(db, "bases")),
          getDocs(collection(db, "creamers")),
          getDocs(collection(db, "syrups")),
        ]);

        this.bases = baseSnap.docs.map((d) => ({ id: d.id, ...d.data() } as BaseBeverageType));
        this.creamers = creamerSnap.docs.map((d) => ({ id: d.id, ...d.data() } as CreamerType));
        this.syrups = syrupSnap.docs.map((d) => ({ id: d.id, ...d.data() } as SyrupType));

        if (this.bases.length > 0) this.currentBase = this.bases[0];
        if (this.creamers.length > 0) this.currentCreamer = this.creamers[0];
        if (this.syrups.length > 0) this.currentSyrup = this.syrups[0];
      } catch (error) {
        console.error("Error initializing:", error);
      }
    },

    setUser(user: User | null) {
      if (this.unsubscribe) {
        this.unsubscribe();
        this.unsubscribe = null;
      }

      this.user = user;

      if (user) {
        const q = query(
          collection(db, "beverages"),
          where("userId", "==", user.uid)
        );

        this.unsubscribe = onSnapshot(q, (snapshot) => {
          this.beverages = snapshot.docs.map((d) => d.data() as BeverageType);
        });
      } else {
        this.beverages = [];
      }
    },

    async makeBeverage(): Promise<string> {
      if (!this.user) return "No user logged in, please sign in first.";
      
      if (!this.currentName || !this.currentBase || !this.currentCreamer || !this.currentSyrup) {
        return "Please complete all beverage options and the name before making a beverage.";
      }

      const bevId = Date.now().toString();
      const newBeverage: BeverageType = {
        id: bevId,
        userId: this.user.uid,
        name: this.currentName,
        temp: this.currentTemp,
        base: this.currentBase,
        creamer: this.currentCreamer,
        syrup: this.currentSyrup,
      };

      try {
        await setDoc(doc(db, "beverages", bevId), newBeverage);
        return `Beverage ${this.currentName} made successfully!`;
      } catch (error) {
        return "Error saving beverage.";
      }
    },

    showBeverage(bev: BeverageType) {
      this.currentTemp = bev.temp;
      this.currentBase = bev.base;
      this.currentCreamer = bev.creamer;
      this.currentSyrup = bev.syrup;
      this.currentName = bev.name;
    }
  },
});