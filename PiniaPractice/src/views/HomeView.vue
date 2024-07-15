<template>
  <div class="home">
    <div class="count">
      {{ storeCounter.count }}
    </div>
    <div class="buttons">
      <button @click="decreaseCount">-</button>
      <button @click="increaseCount">+</button>
    </div>
    <hr />
    <div>This number is: {{ oddOrEven }}</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore()
const count = ref(0)

const increaseCount = () => {
  count.value++
}

const decreaseCount = () => {
  count.value--
}

const oddOrEven = computed(() => {
  return count.value % 2 === 0 ? 'Even' : 'Odd'
})
</script>

<style>
.count {
  font-size: 60px;
  margin: 20px;
}
.buttons button {
  font-size: 40px;
  margin: 10px;
}
</style>
