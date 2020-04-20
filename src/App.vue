<template>
  <div id="app">
    <Repo/>
    
  </div>
</template>

<script>
import Repo from '@/components/Repo.vue';

export default {
  name: 'App',
  components: {
    Repo
  }
}
</script>

<style>
html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  line-height: 1.5;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50; 
  padding: 20px;
}
.-shadow {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
}
</style>
