<template>
  <div>
    <h2>Chaos Demo</h2>
    {{ instances }}
    <ul>
      <li v-for="instance in instances" :key="instance">
        <ErrorBoundary :key="instance" :fall-back="ProductFailed">
          <VueChaos :chance="5" error-message="my error">
            I can emit chaos with odds of {{ instance }}
          </VueChaos>
        </ErrorBoundary>
      </li>
    </ul>
  </div>
</template>

<script>
import VueChaos from 'vue-chaos';
import {ErrorBoundary} from 'vue-error-boundary';
import ProductFailed from '@/ProductFailed';

export default {
  name: "Demo",
  components: {
    VueChaos,
    ErrorBoundary,
  },
  data() {
    return {
      instances: [...Array(Math.round(Math.random() * 7))].map((v, i) => i + 1),
      ProductFailed
    }
  }
}
</script>

<style scoped>

</style>
