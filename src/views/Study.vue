<template id="study">
  <h1>111</h1>
</template>

<script>
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getCurrentInstance } from 'vue';

export default {
  setup() {
    const vm = getCurrentInstance();
    console.log('vm :>> ', vm);
  },
};
</script>

<style>

</style>
