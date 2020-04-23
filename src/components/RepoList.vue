<template>
	<div>
		<Repo v-bind:key="repo.id" v-for="repo in repos" v-bind:repo="repo" />
		
	</div>
</template>

<script>
import Repo from '@/components/Repo.vue';

	export default {
		name: "Repos",
		components: {
			Repo
		},
		props: ["repos"]
	}
</script>

<style scoped>

</style>