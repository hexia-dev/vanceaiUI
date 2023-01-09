import DemoTest from './demo'
import Carousel from './carousel'
import CarouselItem from './carousel-item'


const components = {
  DemoTest,
  Carousel,
  CarouselItem
}
const install = function(Vue){
  if(install.installed) return

  Object.keys(components).forEach((key)=>{
     Vue.component(components[key].name,components[key])
  })
}

const API={
  install
}

export default API