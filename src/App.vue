<template>
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
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="currentTemp"
            />
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
            <input
              type="radio"
              name="base"
              :id="`r${base.id}`"
              :value="base"
              v-model="currentBase"
            />
            {{ base.name }}
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
            <input
              type="radio"
              name="syrup"
              :id="`r${syrup.id}`"
              :value="syrup"
              v-model="currentSyrup"
            />
            {{ syrup.name }}
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
            <input
              type="radio"
              name="creamer"
              :id="`r${creamer.id}`"
              :value="creamer"
              v-model="currentCreamer"
            />
            {{ creamer.name }}
          </label>
        </template>
      </li>
    </ul>
  </div>

  <div class="current-beverage">
    <h2>Current Beverage</h2>
    <p>
      <b>{{ currentTemp }}</b> <b>{{ currentBase.name }}</b>
      with <b>{{ currentSyrup.name }}</b> and <b>{{ currentCreamer.name }}</b>
    </p>

    <form @submit.prevent="handleSubmit">
      <label for="bname">Beverage Name:</label>
      <input type="text" id="bname" v-model="beverageName" />
      <br /><br />
      <input type="submit" value="Make Beverage" />
    </form>
  </div>
  <br>
  <div id="beverage-container" class="current-beverage">
    <h2>Saved Beverages</h2>
    <ul>
      <li v-for="(bev, index) in store.beverage" :key="index">
        <button @click="store.showBeverage(bev)">
          {{ bev.name || "Unnamed Beverage" }}
        </button>
      </li>
    </ul>
  </div>

  <div class="tiny-talk">
    <h2>Assignment 4 - Kyle Gordon - Brew Sampler</h2>
    <p>Go to the barista stand and lab out some drinks! Make and Save them here!</p>
    <p>Visit the <a href="https://github.com/GVSU-CIS371/assignment4-gordokyl-swimstar/tree/main" target="_blank">GitHub repo</a> here.</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useBeverageStore } from "./stores/beverageStore";
import { storeToRefs } from "pinia";

import Beverage from "./components/Beverage.vue";
const store = useBeverageStore();

const {
  temps, bases, syrups, creamers,
  currentTemp, currentBase, currentCreamer, currentSyrup
} = storeToRefs(store);

const beverageName = ref("");

function handleSubmit() {
  store.makeBeverage(beverageName.value);
  beverageName.value = "";
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
}
ul {
  list-style: none;
}
.current-beverage {
  text-align: center;
  margin: 0 auto;
  padding: 0.25rem;
  background-color: #6e4228;
  border: 2px dotted #fff;
}
.tiny-talk{
  text-align: center;
}
</style>