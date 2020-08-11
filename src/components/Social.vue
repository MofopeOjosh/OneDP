<template>
	<ul class="nav-links">
		<a href="/onedp" target="_blank">
			<i class="fab fa-github"></i>
		</a> 
		<a href="/onewp" target="_blank">
			<i class="fab fa-medium"></i>
		</a>
		<a href="/onemp" target="_blank">
			<i class="fab fa-twitter"></i>
		</a>
	</ul>
</template>

<script>
export default {
	name: 'Social'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

	.nav-links{
		a{
			color: #000000;
			margin-left: 10px;
		}
		a:hover{
			color: #652D92;
		}
	}

</style>
