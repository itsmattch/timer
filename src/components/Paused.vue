<script setup>
import {useTimerStore} from "../stores/timer"

const timer = useTimerStore()
</script>

<template>
  <input type="button" value="resume" @click="timer.start">
  <input type="button" value="restart" @click="timer.restart">
</template>

<style scoped>

</style>