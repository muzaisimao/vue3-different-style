import { defineComponent, ref, computed, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const num1 = ref(0);
    const num2 = ref(10);

    const count = computed(() => num1.value + num2.value);

    function handleClick(type) {
      if (type === '+') { num1.value += 2; }
      if (type === '-') { num1.value -= 2; }
    }

    onMounted(() => {
      console.log('vue-jsx :>> ');
    });

    return () => (
      <div>
        <h1>Vue-jsx</h1>
        <h2>{ count.value }</h2>

        <div class="num">
          <el-button onClick={ () => handleClick('-') }>减少-</el-button>
          <span class="num1">{ num1.value }</span>
          <el-button onClick={ () => handleClick('+') }>增加+</el-button>
        </div>

        <el-input v-model={ [num2.value, ['number']] } style="width: 240px;"></el-input>
      </div>
    );
  },
});
