<template>
<p>hi</p>
</template>

<script lang="ts">
import Vue from 'vue';
const componentName = 'VueChaos';

export default Vue.component(componentName, {
  props:{
    chance:{
      default: false,
      type: Boolean
    },
    errorMessage:{
      default: `${componentName} created chaos!`,
      type: String
    }
  }
});
</script>
