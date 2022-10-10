<template>
  <div id="app">
    <p>
      <a href="/">基座应用（公用部分）</a>
    </p>
    <p>
      <a href="/vue1">子应用APP1</a>
    </p>
    <p>
      <a href="/vue2">子应用APP2</a>
    </p>
    <router-view></router-view>
    <div id="container1"></div>
    <div id="container2"></div>
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
