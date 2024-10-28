<script setup>
import { ref, computed } from 'vue'

const c = ref(0)

const f = computed({
  get: () => c.value * (9 / 5) + 32,
  set: (value) => {
    c.value = (value - 32) * (5 / 9)
  }
})
</script>

<template>
  <input type="number" v-model="c"> Celsius =
  <input type="number" v-model="f"> Fahrenheit
</template>
