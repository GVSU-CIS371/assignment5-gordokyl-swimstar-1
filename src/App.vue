<template>
  <div v-if="currentBase">
      <div>
        <Beverage 
          :isIced="currentTemp === 'Cold'"
          :base="currentBase"
          :creamer="currentCreamer"
          :syrup="currentSyrup"
        />
        <ul>
          <li>
            <template v-for="temp in temps" :key="temp">
              <label>
                <input type="radio" :value="temp" v-model="currentTemp" />
                {{ temp }}
              </label>
            </template>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <template v-for="base in bases" :key="base.id">
              <label>
                <input type="radio" :value="base" v-model="currentBase" />
                {{ base.name }}
              </label>
            </template>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <template v-for="creamer in creamers" :key="creamer.id">
              <label>
                <input type="radio" :value="creamer" v-model="currentCreamer" />
                {{ creamer.name }}
              </label>
            </template>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <template v-for="syrup in syrups" :key="syrup.id">
              <label>
                <input type="radio" :value="syrup" v-model="currentSyrup" />
                {{ syrup.name }}
              </label>
            </template>
          </li>
        </ul>
      </div>

      <div class="current-beverage">
        <h2>Current Beverage</h2>
        <p v-if="currentBase && currentSyrup && currentCreamer">
          <b>{{ currentTemp }}</b> <b>{{ currentBase.name }}</b>
          with <b>{{ currentSyrup.name }}</b> and <b>{{ currentCreamer.name }}</b>
        </p>

        <form @submit.prevent="handleSubmit">
          <label for="bname">Beverage Name:</label>
          <input type="text" id="bname" v-model="currentName" :disabled="!user" />
          <br /><br />
          <input type="submit" value="Make Beverage" :disabled="!user" />
        </form>
        <p v-if="feedback" class="feedback">{{ feedback }}</p>

        <br>

        <div class="auth-container">
          <div v-if="user">
            <p>Welcome, <b>{{ user.displayName || user.email }}</b></p>
            <button @click="handleLogout">Sign Out</button>
          </div>
          <div v-else>
            <button @click="withGoogle">Sign in with Email</button>
            <p v-if="authError" class="error">{{ authError }}</p>
          </div>
        </div>
      </div>
      
      <br>

      <div v-if="user" id="beverage-container" class="current-beverage">
        <h2>Your Saved Beverages</h2>
        <ul v-if="beverages.length > 0">
          <li v-for="(bev, index) in beverages" :key="index">
            <button @click="store.showBeverage(bev)">
              {{ bev.name || "Unnamed Beverage" }}
            </button>
          </li>
        </ul>
        <p v-else>No beverages saved yet. Start brewing!</p>
      </div>
    </div>

    <div class="tiny-talk">
      <h2>Assignment 5 - Kyle Gordon - Brew In The Cloud</h2>
      <p>Visit the <a href="https://github.com/GVSU-CIS371/assignment5-gordokyl-swimstar-1" target="_blank">GitHub repo</a> here.</p>
    </div>

</template>

<script setup lang="ts">
  import { ref, onBeforeMount } from "vue";
  import { useBeverageStore } from "./stores/beverageStore";
  import { storeToRefs } from "pinia";
  import Beverage from "./components/Beverage.vue";

  import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    signOut, 
    onAuthStateChanged 
  } from "firebase/auth";

  const store = useBeverageStore();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const {
    temps, bases, syrups, creamers,
    currentTemp, currentBase, currentCreamer, currentSyrup,
    currentName, beverages, user
  } = storeToRefs(store);

  const feedback = ref("");
  const authError = ref("");

  onBeforeMount(() => {
    store.init();
    
    onAuthStateChanged(auth, (firebaseUser) => {
      store.setUser(firebaseUser);
    });
  });

  async function withGoogle() {
    try {
      authError.value = "";
      await signInWithPopup(auth, provider);
    } catch (error: any) {
      authError.value = "Failed to sign in: " + error.message;
    }
  }

  async function handleLogout() {
    try {
      await signOut(auth);
      feedback.value = "";
    } catch (error: any) {
      console.error("Logout failed", error);
    }
  }

  async function handleSubmit() {
    const message = await store.makeBeverage();
    feedback.value = message;
    
    if (message.includes("successfully")) {
      setTimeout(() => { feedback.value = "" }, 3000);
    }
  }
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
  color: white;
}
ul {
  list-style: none;
  padding: 0;
}
.current-beverage {
  text-align: center;
  margin: 0 auto;
  padding: 1rem;
  background-color: #6e4228;
  border: 2px dotted #fff;
}
.feedback {
  font-style: italic;
  margin-top: 10px;
  color: #2a9b0d;
}
.tiny-talk{
  text-align: center;
}
.auth-container {
  text-align: center;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 8px;
}
.error {
  color: #ff6b6b;
  font-size: 0.9rem;
}
.feedback {
  color: #ffd700;
  margin-top: 10px;
}
input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>