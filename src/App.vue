<template>
	<div id="app">
		<Header :class="useHeader===false ? 'hide-lg' : ''"/>
		<router-view class="page-content" :class="{not_home: 'page-content-not-home'}"/>
		<Footer/>
	</div>
</template>

<script>
	import Header from '@/components/Header.vue';
	import Footer from '@/components/Footer.vue';

	export default {
		components: {
			Header, Footer
		},
		computed:{
			useHeader(){
				if(this.$route.path == '/'){
					return false;
				}
			}
		}
	}
</script>

<style lang="scss">
	html, body{
		margin: 0;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		padding: 0;
	}
	.page-content{
		
	}
	@media screen and (max-width: 600px){
		.hide-sm{
			display: none!important;
		}
		.invisible{
			opacity: 0;
			display: none!important;
		}
	}
	@media screen and (min-width: 600px){
		.hide-lg{
			display: none!important;
		}
	}
	.section-pad{
		padding-top: 100px;
		padding-bottom: 100px;
	}
	.dp-button{
		text-decoration: none;
		color: #000000;
		background-color: transparent;
		border: 2px solid #f9f9f9;
		border-radius: 4px;
		padding: 5px 15px;
		i{
			padding-right: 5px;
		}
	}
	.page-content{
		margin-bottom: 40px;
		width: 100%;
	}
	.page-content-no-home{
		margin-top: 50px;
	}
	.header-links{
		padding: 0;
		list-style-type: none;
		display: inline-flex;
		font-size: 14px;
		a{
			display: inline-block;
			margin-left: 30px;
			text-decoration: none;
			color: #000000;
		}
	}
	.section-title{
		font-size: 20px;
		font-family: 'Oregano';
		font-style: italic;
		margin: 0;
		display: inline-block;
		&::after{
			content: '';
			display: block;
			background-color: #652D92;
			width: 100%;
			height: 2px;
		}
	}
	.t-10{
		font-size: 10px
	}
	.t-12{
		font-size: 12px
	}
	.t-14{
		font-size: 14px
	}
	.t-16{
		font-size: 16px
	}
	.t-18{
		font-size: 18px
	}
	.t-20{
		font-size: 20px
	}
	.t-24{
		font-size: 24px
	}
	.t-36{
		font-size: 36px
	}
</style>
