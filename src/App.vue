<script setup>
import {useTimerStore} from "./stores/timer"
import Active from "./components/Active.vue";
import Ready from "./components/Ready.vue";
import Finished from "./components/Finished.vue";
import Paused from "./components/Paused.vue";

const timer = useTimerStore()
</script>

<template>
  <div>{{ timer.positions }}</div>
  <ready v-if="timer.state === 'ready'"/>
  <active v-if="timer.state === 'active'"/>
  <finished v-if="timer.state === 'finished'"/>
  <paused v-if="timer.state === 'paused'"/>
</template>
