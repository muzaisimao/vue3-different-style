<template>
  <img alt="Vue logo" src="./assets/logo.png" style="margin: 50px;">
  <div style="margin: 30px 0px;">
    <el-button size="large" plain type="primary" @click="goto('/options')">Options API</el-button>
    <el-button size="large" plain type="warning" @click="goto('/composition')">Composition API</el-button>
    <el-button size="large" plain type="info" @click="goto('/ref-sugar227')">RefSugar#227</el-button>
    <el-button size="large" plain type="success" @click="goto('/ref-sugar369')">RefSugar#369</el-button>
    <el-button size="large" plain @click="goto('/vue-jsx')">vue-jsx</el-button>
    <el-button size="large" plain type="danger">RefSugar#228 - 废弃了</el-button>
  </div>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  methods: {
    goto(path) {
      this.$router.push(path);
    },
  },
});
</script>

<style lang="scss">
#app {
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
