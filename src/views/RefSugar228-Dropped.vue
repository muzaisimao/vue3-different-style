<template>
  <h1>Ref-Sugar#228</h1>
  <h2>{{ count }}</h2>

  <div class="num">
    <el-button @click="handleClick('-')">减少-</el-button>
    <span class="num1">{{ num1 }}</span>
    <el-button @click="handleClick('+')">增加+</el-button>
  </div>

  <el-input v-model.number="num2" style="width: 240px;"></el-input>
</template>

<!-- eslint-disable no-labels, no-unused-labels, no-undef -->
<script setup>
import { computed, onMounted } from 'vue';

ref: num1 = 0;
ref: num2 = 10;
ref: count = computed(() => num1 + num2);

function handleClick(type) {
  if (type === '+') { num1 += 2; }
  if (type === '-') { num1 -= 2; }
}

onMounted(() => {
  console.log('Ref-Sugar#228 :>> ');
});
</script>

<style>

</style>
