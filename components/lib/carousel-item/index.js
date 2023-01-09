import CarouselItem from '/components/lib/carousel/src/item.vue';

/* istanbul ignore next */
CarouselItem.install = function(Vue) {
  Vue.component(CarouselItem.name, CarouselItem);
};

export default CarouselItem;
