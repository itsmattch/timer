<script setup>
import {useTimerStore} from "../stores/timer"

const timer = useTimerStore()
</script>

<template>
  <div class="clock">
    <div class="digit">{{ timer.positions[0] }}</div>
    <div class="digit">{{ timer.positions[1] }}</div>
    <div class="colon">:</div>
    <div class="digit">{{ timer.positions[2] }}</div>
    <div class="digit">{{ timer.positions[3] }}</div>
  </div>
</template>

<style scoped>
.clock {
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 0.25em;
}

.digit {
  height: 2em;
  width: 1em;
}

.colon {
}

.digit, .colon {
  justify-content: center;
  align-items: center;
  font-size: 4em;
  display: flex;
}
</style>