<script setup>
import {useTimerStore} from "../stores/timer"

const timer = useTimerStore()
</script>

<template>
  TIME OUT
  <input type="button" value="restart" @click="timer.restart">
</template>

<style scoped>

</style>