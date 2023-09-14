<script setup>
import {useTimerStore} from "./stores/timer"
import Active from "./components/Active.vue";
import Ready from "./components/Ready.vue";
import Finished from "./components/Finished.vue";
import Paused from "./components/Paused.vue";
import {onMounted, reactive, watchEffect} from "vue";

const timer = useTimerStore()

const deco = reactive({
  x: 200,
  y: 200,
})

watchEffect(() => {
  document.body.dataset.state = timer.state;
})

onMounted(() => {
  window.addEventListener('mousemove', (event) => {
    deco.x = event.clientX - 500;
    deco.y = event.clientY - 500;
  })
})
</script>

<template>
  <ready v-if="timer.state === 'ready'"/>
  <active v-if="timer.state === 'active'"/>
  <finished v-if="timer.state === 'finished'"/>
  <paused v-if="timer.state === 'paused'"/>
  <div class="deco" :style="{ top: `${deco.y}px`, left: `${deco.x}px` }"></div>
</template>
