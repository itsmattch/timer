<script setup>
import {useTimerStore} from "../stores/timer"
import Clock from "./Clock.vue";
import Play from "./icons/Play.vue";

const timer = useTimerStore()
</script>

<template>
  <Clock/>
  <input type="range" min="300" max="3600" step="300" v-model="timer.seconds">
  <div class="buttons">
    <button @click="timer.start"><Play/></button>
  </div>
</template>