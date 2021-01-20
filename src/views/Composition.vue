<template>
    <h1>Composition API</h1>
    <h2>{{ count }}</h2>

    <div class="num">
      <el-button @click="handleClick('-')">减少-</el-button>
      <span class="num1">{{ num1 }}</span>
      <el-button @click="handleClick('+')">增加+</el-button>
    </div>

    <el-input v-model.number="num2" style="width: 240px;"></el-input>

   <div>
      <button @click="updateValue">click</button>
      <p>{{ value }}</p>
      <p>value: {{ $store.state.value }}</p>
   </div>
</template>

<script>
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ref, computed, onMounted } from 'vue';
import { useStore, mapState, mapMutations } from 'vuex';

export default {
  name: 'Composition',
  setup() {
    const $store = useStore();
    function useState(key) {
      return computed(() => mapState([key])[key].call({ $store }));
    }
    function useMutations(key) {
      return mapMutations([key])[key].bind({ $store })();
    }

    const value = useState('value');
    const updateValue = () => useMutations('updateValue');
    console.log('updateValue :>> ', updateValue);

    const num1 = ref(0);
    const num2 = ref(10);

    const count = computed(() => num1.value + num2.value);

    function handleClick(type) {
      if (type === '+') { num1.value += 2; }
      if (type === '-') { num2.value -= 2; }
    }

    onMounted(() => {
      console.log('Composition API :>> ');
    });

    return {
      num1,
      num2,
      count,
      handleClick,
      value,
      updateValue,
    };
  },
};
</script>

<style>

</style>
