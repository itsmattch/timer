<script setup>
import {useTimerStore} from "../stores/timer"
import Clock from "./Clock.vue";
import Play from "./icons/Play.vue";

const timer = useTimerStore()
</script>

<template>
  <div class="content">
    <Clock/>
    <input type="range" min="60" max="3600" step="60" v-model="timer.seconds">
  </div>
  <div class="buttons">
    <button @click="timer.start"><Play/></button>
  </div>
</template>