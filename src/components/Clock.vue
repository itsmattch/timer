<script setup>
import {useTimerStore} from "../stores/timer"

const timer = useTimerStore()
</script>

<template>
  <div class="clock">
    <Transition mode="out-in" name="fade">
      <div :key="timer.positions[0]" class="digit">{{ timer.positions[0] }}</div>
    </Transition>
    <Transition mode="out-in" name="fade">
      <div :key="timer.positions[1]" class="digit">{{ timer.positions[1] }}</div>
    </Transition>
    <div class="colon">∶</div>
    <Transition mode="out-in" name="fade">
      <div :key="timer.positions[2]" class="digit">{{ timer.positions[2] }}</div>
    </Transition>
    <Transition mode="out-in" name="fade">
      <div :key="timer.positions[3]" class="digit">{{ timer.positions[3] }}</div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s, transform 0.25s;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-from, .fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.clock {
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 0.25em;
}

.digit {
  height: 2em;
  width: 0.6em;
}

.digit, .colon {
  justify-content: center;
  align-items: center;
  font-size: 4em;
  display: flex;
}
</style>