<template>
  <div id="options">
    <h1>Options API</h1>
    <h2>{{ count }}</h2>

    <div class="num">
      <el-button @click="handleClick('-')">减少-</el-button>
      <span class="num1">{{ num1 }}</span>
      <el-button @click="handleClick('+')">增加+</el-button>
    </div>

    <el-input v-model.number="num2" style="width: 240px;"></el-input>
  </div>
</template>

<script>
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default {
  name: 'Options',
  data() {
    return {
      num1: 0,
      num2: 10,
    };
  },
  computed: {
    count() {
      return this.num1 + this.num2;
    },
  },
  methods: {
    handleClick(type) {
      if (type === '+') { this.num1 += 2; }
      if (type === '-') { this.num1 -= 2; }
    },
  },
  created() {
    console.log('Options API :>> ');
  },
};
</script>

<style>

</style>
