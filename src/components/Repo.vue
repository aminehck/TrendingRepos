<template>
	<div class="repo-item -shadow">
		<div class="repo-img">
			<img src="https://avatars1.githubusercontent.com/u/35059503?v=4">
		</div>
		<div class="repo-info">
			<h2>Repo name</h2>
			<p>Repo description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure eius exercitationem aperiam. Ea possimus dolores assumenda harum odit. Rerum nesciunt culpa ut eveniet quos officiis laboriosam esse? Quidem, alias rerum!</p>
			<hr>
			<button type="button" class="btn btn-sm btn-primary">Stars: 118k</button>
			<button type="button" class="btn btn-sm btn-danger">Issues: 1.6k</button>
			<span>Submitted 30 days ago by aminefreelancer</span>
		</div>
	</div>
</template>

<script>
	export default {
		
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