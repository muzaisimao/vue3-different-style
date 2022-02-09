<template>
  <h1>Ref-Sugar#369</h1>
  <h2>{{ count }}</h2>

  <div class="num">
    <el-button @click="handleClick('-')">减少-</el-button>
    <span class="num1">{{ num1 }}</span>
    <el-button @click="handleClick('+')">增加+</el-button>
  </div>

  <el-input v-model.number="num2" style="width: 240px;"></el-input>
</template>

<script setup>
// 提案地址: https://github.com/vuejs/rfcs/discussions/369
// - https://github.com/vuejs/rfcs/discussions/413
// 文档: https://github.com/vuejs/rfcs/blob/ref-sugar-2/active-rfcs/0000-ref-sugar.md
// - https://github.com/vuejs/vue-next/tree/master/packages/reactivity-transform
import { onMounted } from 'vue';

// sugar
// let num1 = $(ref(0));
// let num2 = $(ref(10));
// let count = $(computed(() => num1 + num2));

// aliases
let num1 = $ref(0);
const num2 = $ref(10);
const count = $computed(() => num1 + num2);

function handleClick(type) {
  if (type === '+') { num1 += 2; }
  if (type === '-') { num1 -= 2; }
}

onMounted(() => {
  console.log('Ref-Sugar#369 :>> ');
});
</script>

<style>

</style>
