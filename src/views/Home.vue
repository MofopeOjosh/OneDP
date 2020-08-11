<template>
	<main class="home">
		<section class="projects __row">
			<h3 class="section-title">Projects</h3>
			<div class="cards">
				<div class="card-wrapper card-wrapper-norm">
					<div class="card-content">
						<i class="fab fa-vuejs t-36" style="color: green"></i>
						<p class="card-title">Infinite Scrolling with Vue</p>
						<p>Abstract Emeka</p>
						<p class="tags">
							<span>
								<i class="fas fa-circle t-10" style="color: yellow"></i> Frontend
							</span>
							<span>
								<i class="fas fa-circle t-10" style="color: red"></i> Design
							</span>
						</p>
						
					</div>
				</div>
			</div>
		</section>
		<section class="people">
			<article class="split-left">
				<h3 class="section-title">Peopla</h3>
				<p class="subheading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi veniam debitis officiis assumenda! </p>
				<a href="#" class="mo-button">Search for anyone or yourself</a>
			</article>
			<article class="split-right">
				<img class="user" src="../assets/user.jpg"/>
				<p class="bottom-0">John Doe</p>
			</article>
		</section>
		<section class="stories __row">
			<article class="split-left">
				<draw-circle>Stories &amp; Tutorials</draw-circle>
				<div class="actions hide-sm">
					<a href="#" class="mo-button">Browse</a>
					<a href="#" class="mo-button">Go To Medium</a>
				</div>
			</article>
			<article class="split-right">
				<div class="card-wrapper card-wrapper-alt">
					<div class="card-content">
						<i class="fab fa-medium-m t-36" style="color: green"></i>
						<h3 class="card-title">There is a story to <br> every project</h3>
						<p>I share some of these stories <br> on Medium</p>
					</div>
					<div class="actions link-group">
						<a href="#" class="mo-button">Browse</a>
						<a href="#" class="mo-button">Go To Medium</a>
					</div>
				</div>
			</article>
		</section>
	</main>
</template>

<script>
// @ is an alias to /src
import DrawCircle from '@/components/DrawCircle.vue';

export default {
	name: 'home',
	components: {
		DrawCircle
	},
	computed: {
		
	}
}
</script>

<style scoped lang="scss">

	.projects{
		padding: 120px 10%; 
		text-align: center;
		.mo-cards{
			display: flex;
			margin-top: 50px;
			justify-content: center;
		}
	}
	.people{
		display:flex;
		flex-wrap: wrap;
		.split-left, .split-right{
			padding: 100px 5%; 
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
			text-align: center;
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
			padding: 120px 5% 100px; 
		}
		.card-wrapper{
			align-content: left;
		}
		.split-left{
			flex: 4;
		}
		.split-right{
			flex: 5;
		}
		.card-wrapper-alt{
			width: 100%;
			height: 300px;
		}
		.card-content{
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