<script setup>
import {useTimerStore} from "../stores/timer"

const timer = useTimerStore()
</script>

<template>
  <input type="button" value="pause" @click="timer.pause">
  <input type="button" value="restart" @click="timer.restart">
</template>

<style scoped>

</style>