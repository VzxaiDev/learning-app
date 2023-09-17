<script>
	export let title = "Title";
</script>

<div class="header">
	<h1 class="title">{title}</h1>
	<button class="pfp"></button>
</div>

<style>
.header{
	background: white;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
}
.pfp{
	width: 45px;
	height: 45px;
	background-image: url(https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhZGllbnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80);
	object-fit: cover;
	background-size: 45px 45px;
	border-radius: 10px;
	cursor:pointer;
	border: none;
}
.title{
	width: 100%;
	margin: 0px;
}
</style>