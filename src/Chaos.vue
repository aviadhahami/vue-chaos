<template>
<p>hi</p>
</template>

<script lang="ts">
import Vue from 'vue';
const componentName = 'VueChaos';

export default {
  props:{
    chance:{
      default: false,
      type: Boolean
    },
    errorMessage:{
      default: `${componentName} created chaos!`,
      type: String
    },
    runInProduction:{
      default: false,
      type: Boolean
    }
  }
};
</script>
