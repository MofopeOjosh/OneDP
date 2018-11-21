<template>
	<div class="home">
		<div class="banner">
			<section class="banner-left">
				<onedp-circle :width="165" :height="127" text_size="t-24" title="Project"/>
				<br>
				<Menu/>
			</section>
			<section class="banner-right">
				<p class="t-18 heading">Title Here</p>
				<p class="t-14 subheading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi veniam debitis officiis assumenda! Culpa adipisci velit dolor a alias corrupti blanditiis nisi repudiandae commodi veritatis.</p>
				<Social/>
			</section>
		</div>
		<div class="projects">
			<p class="section-title">Projects</p>
			<section class="project-cards">
				<div class="project-card-wrapper">
					<div class="project-card">
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
	</div>
</template>

<script>
// @ is an alias to /src
import OnedpCircle from '@/components/OnedpCircle.vue';
import Menu from '@/components/Menu.vue';
import Social from '@/components/Social.vue';

export default {
	name: 'home',
	components: {
		OnedpCircle, Menu, Social
	}
}
</script>

<style scoped lang="scss">
	.banner{
		display:flex;
		.banner-left, .banner-right{
			width: 50%;
			padding: 60px 100px 10px; 
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-self: stretch;
		}
		.banner-left{
			background-color: #F9F9F9;
			text-align: left;
			align-items: flex-start;
		}
		.banner-right{
			background-color: #F4EDFB;
			align-items: flex-end;
			.heading{
				margin: 0;
				font-weight: 700;
			}
			.subheading{
				text-align: right;
				margin-left: 17vw;
			}
		}
	}
	.projects{
		padding: 60px 100px; 
		.project-cards{
			display: flex;
			.project-card-wrapper{
				background-color: #F9F9F9;
				width: 250px;
				border-radius: 5px;
				transition: all .2s ease-in;
				.project-card{
					padding: 25px 30px;
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
		}
		
	}
</style>