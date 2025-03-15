<script setup>
import { ref, computed } from 'vue';
import TheCircle from "@/components/TheCircle.vue";

const cx = ref(50);
const cy = ref(50);
const r = ref(50);
const size = ref(100);
</script>

<template>
  <h1>Composable example</h1>

  <div>
    <h2>Give me some parameters to work on</h2>

    <div class="input-container">

      <label for="inputCX">CX: </label>
      <input type="number" id="inputCX" v-model="cx" />

      <label for="inputCY">CY: </label>
      <input type="number" id="inputCY" v-model="cy" />

      <label for="inputRadius">Radius: </label>
      <input type="number" id="inputRadius" v-model="r" />

      <label for="inputSize">Size: </label>
      <input type="number" id="inputSize" v-model="size" />
    </div>
  </div>

  <the-circle :cx="cx" :cy="cy" :r="r" :size="size"/>
</template>

<style scoped>
.input-container {
  padding: 5rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-items: start;
}
</style>