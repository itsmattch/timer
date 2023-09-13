<script setup>
import {useTimerStore} from "../stores/timer"
import Play from "./icons/Play.vue";
import Refresh from "./icons/Refresh.vue";

const timer = useTimerStore()
</script>

<template>
  <div class="scream">PAUSED</div>
  <div class="buttons">
    <button @click="timer.start">
      <Play/>
    </button>
    <button @click="timer.restart">
      <Refresh/>
    </button>
  </div>
</template>