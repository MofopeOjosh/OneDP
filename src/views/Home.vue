<template>
	<div class="home">
		<div class="banner shared">
			<section class="split-left">
				<dp-circle :width="165" :height="127" text_size="t-24" title="Mofope Ojosh"/>
				<Menu class="hide-sm link-group"/>
			</section>
			<section class="split-right">
				<p class="heading"></p>
				<p class="t-16 subheading">Collaborating with people to 
					bring intersting ideas to life.. 
					explore new technologies..
					experiment with processes..
					and have fun!</p>
				<Social class="hide-sm link-group"/>
			</section>
		</div>
		<div class="projects shared">
			<p class="section-title">Projects</p>
			<section class="dp-cards">
				<div class="dp-card-wrapper dp-card-wrapper-norm">
					<div class="dp-card">
						<i class="fab fa-vuejs t-36" style="color: green"></i>
						<p class="card-title">Infinite Scrolling with Vue</p>
						<p class="t-14">Abstract Emeka</p>
						<p class="tags t-14">
							<span>
								<i class="fas fa-circle t-10" style="color: yellow"></i> Frontend
							</span>
							<span>
								<i class="fas fa-circle t-10" style="color: red"></i> Design
							</span>
						</p>
						
					</div>
				</div>
			</section>
		</div>
		<div class="stories shared">
			<section class="split-left">
				<dp-circle :width="165" :height="127" text_size="t-24" title="Stories & Tutorials"/>
				<div class="actions hide-sm">
					<a href="#" class="dp-button">Browse</a>
					<a href="#" class="dp-button">Go To Medium</a>
				</div>
			</section>
			<section class="split-right">
				<div class="dp-card-wrapper dp-card-wrapper-alt">
					<div class="dp-card">
						<i class="fab fa-medium-m t-36" style="color: green"></i>
						<p class="card-title">There is a story to <br> every project</p>
						<p class="t-16">I share some of these stories <br> on Medium</p>
					</div>
					<div class="actions link-group">
						<a href="#" class="dp-button">Browse</a>
						<a href="#" class="dp-button">Go To Medium</a>
					</div>
				</div>
			</section>
		</div>
		<div class="people shared">
			<section class="split-left">
				<p class="section-title">Projects</p>
				<p class="t-16 subheading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi veniam debitis officiis assumenda! </p>
				<a href="#" class="dp-button">Search for anyone or yourself</a>
			</section>
			<section class="split-right">
				<img class="user" src="../assets/user.jpg"/>
				<p class="t-16 bottom-0">John Doe</p>
			</section>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import DpCircle from '@/components/DpCircle.vue';
import Menu from '@/components/Menu.vue';
import Social from '@/components/Social.vue';

export default {
	name: 'home',
	components: {
		DpCircle, Menu, Social
	},
	computed: {
		
	}
}
</script>

<style scoped lang="scss">
	.home{
		
	}
	.shared{
		.split-left, .split-right{
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-self: stretch;
		}
		.split-left{
			align-items: flex-start;
		}
		.dp-card-wrapper{
			width: 250px;
			border-radius: 5px;
			transition: all .2s ease-in;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 25px 10px;
			.dp-card{
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
		.dp-card-wrapper-norm{
			background-color: #F9F9F9;
			&:hover{
				background-color: #FFFFFF;
				box-shadow: -5px 10px 5px #F9F9F9, -5px 10px 10px #F9F9F9, -5px -5px 10px #F9F9F9, 5px 5px 10px #F9F9F9;
				// &::before{
				// 	content: '';
				// 	position: absolute;
				// 	display: block;
				// 	background-color: #FFFFFF;
				// 	box-shadow: 0px -10px 10px #F9F9F9;
				// }
			}
		}
		.dp-card-wrapper-alt{
			background-color: #FFFFFF;
			box-shadow: -5px 10px 5px #F9F9F9, -5px 10px 10px #F9F9F9, -5px -5px 10px #F9F9F9, 5px 5px 10px #F9F9F9;
			&:hover{
				background-color: #F9F9F9;
				box-shadow: none;
			}
		}		
	}
	.banner{
		display:flex;
		.split-left, .split-right{
			padding: 50px 5% 10px; 
			flex: 1;
		}
		.split-left{
			background-color: #F9F9F9;
			text-align: left;
		}
		.split-right{
			background-color: #F4EDFB;
			align-items: flex-end;
			.heading{
				margin: 0;
				font-weight: 700;
			}
			.subheading{
				text-align: right;
			}
		}
		.link-group{
			margin-top: 50px;
		}
	}
	.projects{
		padding: 50px 10%; 
		.dp-cards{
			display: flex;
			margin-top: 50px;
			justify-content: center;
		}
	}
	.people{
		display:flex;
		flex-wrap: wrap;
		.split-left, .split-right{
			padding: 50px 5%; 
			flex: 1;
		}
		.split-left{
			text-align: left;
			background-color: #F4EDFB;
			.subheading{
				margin: 50px 0;
			}
		}
		.split-right{
			align-items: center;
			background-color: #F9F9F9;
			.user{
				height: 150px;
				width: 150px;
				border-radius: 100%;
				margin-bottom: 10px;
			}
		}
	}
	.stories{
		display: flex;
		// border-top: 1px solid #F9F9F9;
		.split-left, .split-right{
			padding: 50px 5% 100px; 
		}
		.dp-card-wrapper{
			align-content: left;
		}
		.split-left{
			flex: 4;
		}
		.split-right{
			flex: 5;
		}
		.dp-card-wrapper-alt{
			width: 100%;
			height: 300px;
		}
		.dp-card{
			max-width: 70%!important;	
		}
	}

	@media screen and (max-width: 600px){
		.shared{
			flex-direction: column;
		}
		.split-left, .split-right{
			align-items: center!important;
			justify-content: center;
		
		}
		.banner.shared{
			margin-top: 50px;
			background-color: #F4EDFB;
			padding: 50px 5% 10px; 
			.split-left, .split-right{
				background-color: #F4EDFB;
				align-items: center!important;
				justify-content: center;
				padding: 30px!important; 
				.subheading{
					text-align: center;
				}
			}
		}	
		.people.shared{
			background-color: #F4EDFB;
			flex-direction: column;
			.split-left, .split-right{
				background-color: #F4EDFB;
				padding: 25px!important; 
				.subheading{
					text-align: center;
				}
			}
		}	
		.stories.shared{
			padding: 50px 10%; 
			border-top: 1px solid #F9F9F9;
			.split-left, .split-right{
				padding: 0!important;
				padding-bottom: 50px!important; 
				.subheading{
					margin: 30px auto;
					text-align: center;
				}
			}
			.link-group{
				margin-top: 50px;
			}
		}		
	}
	
</style>