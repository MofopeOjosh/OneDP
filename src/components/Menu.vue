<template>
	<ul class="nav-links">
		<li><router-link to="/onedp">One DP</router-link> </li>
		<li><router-link to="/onewp">One WP</router-link></li>
		<li><router-link to="/onemp">One MP</router-link></li>
		<li><router-link to="/404">404</router-link></li>
	</ul>
</template>

<script>
export default {
	name: 'Menu'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

	.nav-links{

		li{
			margin-right: 30px;
		}
		
		li:first-child{
			a{
				margin-left: 0!important;
			}
		}

		a{
			color: #000000;
			display: inline-block;
			text-decoration: none;
		
			&::after{
				content: '';
				display: block;
				background-color: #652D92;
				width: 0;
				height: 2px;
				transition: width .5s;
			}
			
			&:hover::after{
				width: 100%;
			}
		}
	}

</style>
