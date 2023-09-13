import {computed, ref} from 'vue'
import {defineStore} from 'pinia'

export const useTimerStore = defineStore('timer', () => {
    // state: ready, active, paused, finished
    const state = ref('ready')
    const seconds = ref(1800)

    const positions = computed(() => {
        return [
            Math.floor(seconds.value / 600),
            Math.floor(seconds.value / 60) % 10,
            Math.floor(seconds.value % 60 / 10),
            seconds.value % 60 % 10,
        ]
    })

    setInterval(() => {
        if (seconds.value === 0) finish()
        if (state.value !== 'active' || seconds.value <= 0) return
        seconds.value--
    }, 1000)

    function pause() {
        if (state.value === 'active') state.value = 'paused'
    }

    function start() {
        if (state.value === 'ready' || state.value === 'paused') state.value = 'active'
    }

    function finish() {
        if (state.value === 'active') state.value = 'finished'
    }

    function restart() {
        seconds.value = 1800
        state.value = 'ready'
    }

    return {state, seconds, positions, pause, start, restart}
});