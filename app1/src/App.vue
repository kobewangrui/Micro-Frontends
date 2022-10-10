<template>
  <div id="app">
    <p>
      <router-link to="/">应用二页面1</router-link>
    </p>
    <p>
      <router-link to="/about">应用二页面2</router-link>
    </p>
    <p>
      <router-link to="/helloword">应用二页面3</router-link>
    </p>
    <p>
      应用一调用父组件：<HelloWorld/>
    </p>
    <router-view></router-view>
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
