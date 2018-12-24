<template>
	<div class="header-wrapper">
		<header>
			<router-link to="/">
				<img alt="OneDP logo" height="30" src="../assets/logo.png">
			</router-link>
			<a class="menu-btn" href="#" @click.prevent="toggleMenu">
				<i class="fas fa-bars"></i>
			</a>
			<div class="links" :class="{'invisible': showMenuButton}">
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
	},
	data: () => {
		return {
			showMenuButton: true
		}
	},
	methods: {
		toggleMenu(){
			this.showMenuButton = !this.showMenuButton;
		}
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
	margin: 0 5%;
	height: 50px;
	display: flex;
	align-items: center;
	.links{
		display: flex;
		flex: 1;
		justify-content: space-between;
	}
	@media screen and (max-width: 600px){
		justify-content: space-between;
		.links{
			opacity: 1;
			-moz-transition: opacity .25s ease-in-out;
			-webkit-transition: opacity .25s ease-in-out;
			transition: opacity .25s ease-in-out;
			position: absolute;
			flex-direction: column;
			top: 50px;
			left: 0;
			right: 0;
			justify-content: flex-end;
			align-items: flex-end;
			padding-right: 5%;
			background-color: rgba($color: #ffffff, $alpha: 1.0);
			.menu{
				flex-direction: column;
				text-align: right;
			}
		}
		.menu-btn{
			color: #000000;
		}
	}
	@media screen and (min-width: 600px){
		.menu-btn{
			display: none;
		}

	}
}
</style>
