import Vue from 'vue'
import App from './App.vue'
import '../components/css/index.scss'
import DemoTest from '../components/lib/demo/index'
import Carousel from '../components/lib/carousel/index'
import CarouselItem from '../components/lib/carousel-item/index'

// eslint-disable-next-line vue/multi-word-component-names
// Vue.component('name', DemoTest)
Vue.use(DemoTest) //DemoTest.install-->Vue.componnet
Vue.use(Carousel)
Vue.use(CarouselItem)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
