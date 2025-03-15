<script setup>
import useCircleStyle from "@/composables/useCircleStyle.ts";
import {toRef} from "vue";
import useSvgSize from "@/composables/useSvgSize.js";

const {
  cx,
  cy,
  r,
  size,
} = defineProps({
  cx: Number,
  cy: Number,
  r: Number,
  size: Number,
});


// TODO: I don't like the way I have to convert all the variables
// -> can I somehow minimize the complexity of this?
// -> currently: prop -> getter -> ref -> unref (in useCircleStyle)
const sizeRef = toRef(() => size);
const cxRef = toRef(() => cx);
const cyRef = toRef(() => cy);
const rRef = toRef(() => r);

const {circleStyle} = useCircleStyle({
  cxRef,
  cyRef,
  rRef
});

const {height, width} = useSvgSize(sizeRef);
</script>

<template>
  <div>
    <h3>Your Circle</h3>
    <h4>CX: {{ cx }} | CY: {{ cy }} | R: {{ r }} | Size: {{size}}</h4>
    <h4>Circle Style: {{circleStyle}}</h4>
    <h4>Width: {{width}}</h4>
    <h4>Height: {{height}}</h4>
  </div>

  <div class="circle-container">
    <svg :style="`--width=${width}`" xmlns="http://www.w3.org/2000/svg">
      <!-- suppress - we will use css -->
      <!--suppress RequiredAttributes -->
      <circle :style="circleStyle"/>
    </svg>
  </div>
</template>

<style scoped>
.circle-container {
  padding: 5rem;

}

svg {
  border: 1px solid red;
  width: v-bind(width+ 'px');
  height: v-bind(height+ 'px');
}
</style>