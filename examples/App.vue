<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <DemoTest 
      imgSrc="demo-1.jpg"
      summary="summary test"
    />

    <DemoTest 
      imgSrc="demo-1.jpg"
      summary="summary test  2"
    >
      <template #footer>
        <div> Footer</div>
      </template>
    </DemoTest>

    <DemoTest 
      imgSrc="demo-1.jpg"
      :width="370"
      :imgHeight="90"
    >
      Summary 33
      <template #footer>
        <div> Footer 222</div>
      </template>
    </DemoTest>

    <carousel height="150px">
      <carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </carousel-item>
    </carousel>

  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
