<template>
	<div class="header-wrapper">
		<header>
			<router-link to="/">
				<img alt="OneDP logo" height="30" src="../assets/logo.png">
			</router-link>
			<div class="links">
				<Menu/>
				<Social/>
			</div>
		</header>
	</div>
</template>

<script>
import Menu from '@/components/Menu.vue';
import Social from '@/components/Social.vue';

export default {
	name: 'Header',
	components: {
		Menu, Social
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header-wrapper{
	background-color: #F9F9F9;
	position: fixed;
	top: 0;
	width: 100%;
}
header{
	margin: 0 100px;
	height: 50px;
	display: flex;
	align-items: center;
	.links{
		display: flex;
		flex: 1;
		justify-content: space-between;
	}
}
</style>
