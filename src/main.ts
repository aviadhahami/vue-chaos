import Vue from 'vue'
import Chaos from "@/Chaos.vue";

Vue.config.productionTip = false

new Vue({
  render: h => h(Chaos),
}).$mount('#app')
