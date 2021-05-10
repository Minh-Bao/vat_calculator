import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//load Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//import vue-currency-filter
import VueCurrencyFilter from 'vue-currency-filter';
Vue.use(VueCurrencyFilter, {
    symbol : '€',
    fractionCount: 2,
    symbolPosition: 'back'
})

new Vue({
  render: h => h(App),
}).$mount('#app')


