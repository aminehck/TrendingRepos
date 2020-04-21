<template>
	<div>
		<div v-bind:key="repo.id" v-for="repo in repos">
			<Repo v-bind:repo="repo" />
		</div>
		
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