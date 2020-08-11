<template>
	<header class="header">
		
		<div ref="banner" class="banner __row" :class="home ? '' : '__hide'">
			<section class="split-left">
				<draw-circle>One Day Projects</draw-circle>
			</section>
			<section class="split-right">
				<h3 class="heading">Mofope Ojosh</h3>
				<p class="subheading">Collaborating with people to 
					bring intersting ideas to life.. 
					explore new technologies..
					experiment with processes..
					and have fun!</p>
			</section>
		</div>
		
		<nav ref="nav" class="__nav" :class="home ? 'home-nav' : 'nav-bg'" :style="style">
			<Menu/>
			<Social/>
		</nav>
	</header>
</template>

<script>
	import Menu from '@/components/Menu.vue';
	import Social from '@/components/Social.vue';
	import DrawCircle from '@/components/DrawCircle.vue';

	export default {
		name: 'AppHeader',
		props: {
			home: Boolean
		},
		components: {
			Menu, Social, DrawCircle
		},
		data(){
			return {
				style: false
			}
		},
		created () {
			window.addEventListener('scroll', this.stickyNav);
		},
		destroyed () {
			window.removeEventListener('scroll', this.stickyNav);
		},
		methods: {
			stickyNav(){

				var nav = this.$refs.nav;
				var banner = this.$refs.banner;
				var position = banner.getBoundingClientRect().top;
				if(position <= -200){
					nav.classList.add('nav-fixed')
					nav.classList.remove('home-nav')
				}
				else{
					console.log(position, nav)
					nav.classList.add('home-nav')
					nav.classList.remove('nav-fixed')
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	
	.header{
		align-items: center;
		
		.banner{
			display:flex;
			min-height: 400px;
			
			.split-left, .split-right{
				padding: 50px 5%; 
			}
			
			.split-left{
				background-color: #F9F9F9;
				text-align: left;
			}
			
			.split-right{
				background-color: #F4EDFB;
				text-align: right;
				
				.heading{
					margin: 0;
					font-weight: 700;
				}
				
				.subheading{
					text-align: right;
				}
			}
		}

		.home-nav{
			margin-top: -50px!important;
			background-color: transparent;
		}

		.nav-fixed{
			position: fixed;
			top: 0;
			width: 100%;
			background-color: #F9F9F9;
		}
		
		.__nav{
			padding: 0 5%;
			display: flex;
			position: -webkit-sticky;
			flex: 1;
			height: 50px;
			width: 100%;
			justify-content: space-between;
			
			.nav-links{
				align-items: center;
				padding: 0;
				list-style-type: none;
				display: inline-flex;
				font-size: 16px;
			
			}
		}
		
		@media screen and (max-width: 600px){
			justify-content: space-between;
			
			.__nav{
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
