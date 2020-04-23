<template>
	<div id="app">
		<RepoList v-bind:repos="repos" />
		<Trigger @triggerIntersected="loadMore"/>
	</div>
</template>

<script>
import RepoList from '@/components/RepoList.vue';
import Trigger from '@/components/Trigger.vue';
import TriggerService from '@/services/TriggerService.js'

export default {
	name: 'App',
	components: {
		RepoList,
		Trigger
	},
	data() {
		let date = new Date();
		date.setDate(date.getDate() - 30);
		return {
			repos: [],
			page: 0,
			lastMonth: date.toISOString().split('T')[0],
		}
	},
	created() {
		TriggerService.getRepos(this.lastMonth, this.page)
		.then(result => this.repos = result.data.items)
		.catch(error => console.log(error));
	},
	methods: {
		async loadMore() {
			this.page += 1;
			TriggerService.getRepos(this.lastMonth, this.page)
			.then(result => this.repos = [...this.repos, ...result.data.items])
			.catch(error => console.log(error));
		}
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
