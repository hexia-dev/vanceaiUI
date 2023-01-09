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
| height | 走马灯的高度 | string | - | - |
| initial-index | 初始状态激活的幻灯片的索引，从 0 开始 | number | - | 0 |
| trigger | --- | --- | --- | --- |
