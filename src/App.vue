<template>
  <div id="app">
    <RepoList v-bind:repos="repos" />
  </div>
</template>

<script>
import RepoList from '@/components/RepoList.vue';

export default {
  name: 'App',
  components: {
    RepoList,
  },
  data() {
    return {
      repos: [
        {
          id: 1,
          name: "Repo name",
          description: "Repo description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure eius exercitationem aperiam. Ea possimus dolores assumenda harum odit. Rerum nesciunt culpa ut eveniet quos officiis laboriosam esse? Quidem, alias rerum!",
          stars: 118,
          issues: 1.6,
          owner: "aminefreelancer",
          avatar: "https://avatars1.githubusercontent.com/u/35059503?v=4",
          days: 30
        },
        
      ]
    }
  },
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
