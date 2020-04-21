<template>
	<div class="repo-item -shadow">
		<div class="repo-img">
			<img :src=repo.avatar>
		</div>
		<div class="repo-info">
			<h2>{{repo.name}}</h2>
			<p>{{repo.description}}</p>
			<hr>
			<button type="button" class="btn btn-sm btn-primary">Stars: {{repo.stars}}</button>
			<button type="button" class="btn btn-sm btn-danger">Issues: {{repo.issues}}</button>
			<span>Submitted {{repo.days}} days ago by {{repo.owner}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Repos",
		props: ["repo"],
	}
</script>

<style scoped>
.repo-item {
	display: flex;
	padding: 20px;
	margin-bottom: 24px;
	transition: all 0.2s linear;
}
.repo-item:hover {
	transform: scale(1.01);
	box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.repo-img {
	flex-direction: column;
}
.repo-info {
	flex-direction: column;
	margin-left: 40px
}
.btn {
	margin: 0px 5px;
}
</style>