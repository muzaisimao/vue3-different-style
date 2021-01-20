<template>
    <h1>Composition API + TypeScript</h1>
    <h2>{{ count }}</h2>

    <div class="num">
      <el-button @click="handleClick('-')">减少-</el-button>
      <span class="num1">{{ num1 }}</span>
      <el-button @click="handleClick('+')">增加+</el-button>
    </div>

    <el-input v-model.number="num2" style="width: 240px;"></el-input>
</template>

<script lang="ts">
import {
  ref, computed, Ref, ComputedRef, defineComponent, onMounted,
} from 'vue';

export default defineComponent({
  name: 'CompositionTS',
  setup() {
    const num1: Ref<number> = ref(0);
    const num2: Ref<number> = ref(10);

    const count: ComputedRef<number> = computed(() => num1.value + num2.value);

    function handleClick(type: string): void {
      if (type === '+') { num1.value += 2; }
      if (type === '-') { num1.value -= 2; }
    }

    onMounted(() => {
      console.log('Composition API + TypeScript :>> ');
    });

    return {
      num1, num2, count, handleClick,
    };
  },
});
</script>

<style>

</style>
