<template>
  <div>
    <h2>Chaos Demo</h2>
    {{instances}}
    <ErrorBoundary v-for="instance in instances" :key="instance" style="border:1px solid black;">
      odds of {{instance}}
      <VueChaos :chance="5" error-message="MY error">
        I can emit chaos
      </VueChaos>
    </ErrorBoundary>
  </div>
</template>

<script>
import {VueChaos} from 'vue-chaos';
import ErrorBoundary from 'vue-error-boundary';
export default {
  name: "Demo",
  components:{
    VueChaos,
    ErrorBoundary
  },
  data() {
    return {
      a:"1'",
      instances: [...Array(Math.round(Math.random() * 7))].map((v, i) => i)
    }
  }
}
</script>

<style scoped>

</style>
