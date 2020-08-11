<template>
	<div id="app">
		<AppHeader :home="home"/>
		<router-view class="page-content"/>
		<AppFooter/>
	</div>
</template>

<script>
	import AppHeader from '@/components/AppHeader.vue';
	import AppFooter from '@/components/AppFooter.vue';

	export default {
		components: {
			AppHeader, AppFooter
		},
		computed:{
			home(){
				if(this.$route.path == '/'){
					return true;
				}
				return false;
			}
		}
	}
</script>

<style lang="scss">
	html, body{
		margin: 0;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		padding: 0;
		font-size: 18px;
	}
	
	.__hide{
		display: none!important;
	}
	.__row{
		
		.split-left, .split-right{
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-self: stretch;
		}
		
		.split-left{
			align-items: flex-start;
		}
		
		.card-wrapper{
			width: 250px;
			border-radius: 5px;
			transition: all .2s ease-in;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 25px 10px;
			
			.card-content{
				max-width: 70%;
				text-align: center;
				
				.card-title{
					margin: 25px auto;
					font-weight: 700;
				} 
				
				.tags{
					
					span{
						display: inline-flex;
						align-items: center;
						padding-right: 8px;
					}
					
					i{
						padding-right: 3px;
					}
				}
			}		
		}
		
		.card-wrapper-norm{
			background-color: #F9F9F9;
			
			&:hover{
				background-color: #FFFFFF;
				box-shadow: -5px 10px 5px #F9F9F9, 
							-5px 10px 10px #F9F9F9, 
							-5px -5px 10px #F9F9F9, 
							5px 5px 10px #F9F9F9;
			}
		}

		.card-wrapper-alt{
			background-color: #FFFFFF;
			box-shadow: -5px 10px 5px #F9F9F9, 
						-5px 10px 10px #F9F9F9, 
						-5px -5px 10px #F9F9F9, 
						5px 5px 10px #F9F9F9;
			
			&:hover{
				background-color: #F9F9F9;
				box-shadow: none;
			}
		}		
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
	
	.mo-button{
		text-decoration: none;
		color: #000000;
		background-color: transparent;
		border: 2px solid #f9f9f9;
		border-radius: 4px;
		font-size: 14px;
		padding: 5px 15px;
		i{
			padding-right: 5px;
		}
	}
	
	.section-title{
		font-family: 'Oregano';
		font-style: italic;
		font-weight: 500;
		letter-spacing: 0.1rem;
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
