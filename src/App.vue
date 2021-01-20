<template>
    <img alt="Vue logo" src="./assets/logo.png" style="margin: 50px;">
    <div style="margin: 30px 0px;">
      <el-button type="primary" @click="goto('/options')">Options API</el-button>
      <el-button type="success" @click="goto('/options-ts')">Options API + TS</el-button>
      <el-button type="danger" @click="goto('/composition')">Composition API</el-button>
      <el-button type="warning" @click="goto('/composition-ts')">Composition API + TS</el-button>
    </div>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  methods: {
    goto(path: string) {
      this.$router.push(path);
      // const a = Math.random();
      // a && Math.random();

      // const num = a ? 1 : 2;
      // const num2 = a ? num ? 3 : 4 : 1;
    },
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.num {
  margin-bottom: 30px;
  .num1 {
    width: 64px;
    display: inline-block;
    font-size: 24px;;
    color: #2c3e50;
    margin: 10px;
  }
}

</style>
