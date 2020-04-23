<template>
	<div class="repo-item -shadow">
		<div class="repo-img">
			<img :src=repo.owner.avatar_url>
		</div>
		<div class="repo-info">
			<h2>{{repo.name}}</h2>
			<p>{{repo.description}}</p>
			<hr>
			<button type="button" class="btn btn-sm btn-primary">
				<i class="fa fa-star"></i> Stars: {{repo.stargazers_count}}
			</button>
			<button type="button" class="btn btn-sm btn-danger">
				<i class="fa fa-exclamation-circle"></i> Issues: {{repo.open_issues_count}}
			</button>
			<span>Submitted {{submittedDays(repo.created_at)}} days ago by {{repo.owner.login}}</span>
		</div>
	</div>
</template>

<script>

	export default {
		name: "Repos",
		props: ["repo"],
		methods: {
			submittedDays(date) {
				//Today Time type
				const today = new Date();
				//Convert created Date from String to Time type
				const createdDate = new Date(date);
				//Calculate the no. of days between two dates 
				const days = Math.floor((today-createdDate) / (1000 * 3600 * 24));
				return  days;
			}
		}
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
.repo-img img {
	width:150px;
	height:150px;
}

.repo-info {
	flex-direction: column;
	margin-left: 40px
}

.btn {
	margin: 0px 5px;
}
</style>