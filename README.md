# Trending GitHub Repositories

A small Vue.js application to list **the most starred GitHub repositories** that were created in the last 30 days. 

## Demo

[Live Demo](https://trending-github-repos.netlify.app/)

## How does it works ?

### - Fetching Data 

After designing the ***Repository*** & ***RepositoryList*** compenents, connecte the app via the [GitHub API](https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc) to get the top starred repositories by passing two parameters : `created` date (last 30 days) & the current page (by default `page = 1`).

### - Infinite Scrolling

Configure the ***Intersection Observer*** and attach it to the ***Trigger*** component, then emit a ***triggerIntersected*** event to be used to trigger `loadMore` function and fetch additional repositories.

## Includes 

- Vuejs, Vue-cli3
- Axios
- Intersection Observer
- GitHub API

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
