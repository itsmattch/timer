<script setup>
import {useTimerStore} from "../stores/timer"
import Clock from "./Clock.vue";
import Pause from "./icons/Pause.vue";
import Refresh from "./icons/Refresh.vue";

const timer = useTimerStore()
</script>

<template>
  <Clock/>
  <div class="buttons">
    <button @click="timer.pause"><Pause/></button>
    <button @click="timer.restart"><Refresh/></button>
  </div>
</template>