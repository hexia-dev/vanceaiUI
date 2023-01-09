# Carousel
轮播组件

### 示例
<!-- <m-carousel height="150px">
  <m-carousel-item v-for="item in 4" :key="item">
    <h3 class="small">{{ item }}</h3>
  </m-carousel-item>
</m-carousel> -->

### 代码
```html
<m-carousel height="150px">
  <m-carousel-item v-for="item in 4" :key="item">
    <h3 class="small">{{ item }}</h3>
  </m-carousel-item>
</m-carousel>
```

### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| height | 轮播图的高度 | string | - | - |
| initial-index | 初始状态激活的幻灯片的索引，从 0 开始 | number | - | 0 |
| trigger | 指示器的触发方式 | string | click | - |
| autoplay | 是否自动切换 | boolean | - | TRUE |
| interval | 自动切换的时间间隔，单位为毫秒 | number | - | 3000 |
| indicator-position | 指示器的位置 | string | outside/none | - |
| arrow | 切换箭头的显示时机 | string | always/hover/never | hover |
| type | 轮播图的类型 | string | card | - |
| loop | 是否循环显示 | boolean | - | TRUE |
| direction | 轮播图展示的方向 | string | horizontal/vertical | horizontal |