<script setup>
import {useTimerStore} from "../stores/timer"

const timer = useTimerStore()

defineProps({isAnimated: Boolean});
</script>

<template>
  <div :class="{ animated: isAnimated, clock: true }">
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
.animated .fade-enter-active, .animated .fade-leave-active {
  transition: opacity 0.25s, transform 0.25s;
}

.animated .fade-enter-from {
  transform: translateY(-20px);
  opacity: 0;
}

.animated .fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.animated .fade-leave-from, .animated .fade-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.clock {
  justify-content: center;
  align-items: center;
  user-select: none;
  display: flex;
  gap: 0.25em;
}

.digit {
  width: 0.6em;
  height: 2em;
}

.digit, .colon {
  justify-content: center;
  align-items: center;
  font-size: 3em;
  display: flex;
}
</style>