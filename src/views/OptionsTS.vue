<template>
  <div id="options-ts">
    <h1>Options API + TypeScript</h1>
    <h2>{{ count }}</h2>

    <div class="num">
      <el-button @click="handleClick('-')">减少-</el-button>
      <span class="num1">{{ num1 }}</span>
      <el-button @click="handleClick('+')">增加+</el-button>
    </div>

    <el-input v-model.number="num2" style="width: 240px;"></el-input>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Nums {
  num1: number,
  num2: number
}
export default defineComponent({
  name: 'OptionsTS',
  data(): Nums {
    return {
      num1: 0,
      num2: 10,
    };
  },
  computed: {
    count(): number {
      return this.num1 + this.num2;
    },
  },
  methods: {
    handleClick(type: string): void {
      if (type === '+') { this.num1 += 2; }
      if (type === '-') { this.num1 -= 2; }
      1 && window.open();
    },
  },
  created() {
    console.log('Options API + TypeScript :>> ');
  },
});
</script>

<style>

</style>
