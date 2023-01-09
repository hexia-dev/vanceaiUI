import DemoTest from './src/main.vue'

DemoTest.install = function(Vue){
  Vue.component(DemoTest.name,DemoTest)
}

export default DemoTest