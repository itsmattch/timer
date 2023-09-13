<script setup>
import {useTimerStore} from "../stores/timer"

const timer = useTimerStore()
</script>

<template>
  <input type="range" min="300" max="3600" step="300" v-model="timer.seconds">
  <input type="button" value="start" @click="timer.start">
</template>

<style scoped>

</style>