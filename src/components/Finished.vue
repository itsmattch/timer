<script setup>
import {useTimerStore} from "../stores/timer"
import Refresh from "./icons/Refresh.vue";

const timer = useTimerStore()
</script>

<template>
  <div class="content">
    <div class="scream">TIMEOUT</div>
  </div>
  <div class="buttons">
    <button @click="timer.restart"><Refresh/></button>
  </div>
</template>