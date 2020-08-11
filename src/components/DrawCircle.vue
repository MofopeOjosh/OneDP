
<template>
    <div class="circle">
		<img class="circle" src="img/dp-circle.png" height="170">
		<div class="title t-36">
			<span><slot></slot></span>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'DrawCircle',
	}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	
	@import url('https://fonts.googleapis.com/css?family=Oregano');
	
	.circle{
		position: relative;
		overflow: hidden;
		text-align: center;
		padding: 20px 0;
		
		.title{
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			display: flex;
			flex-wrap: wrap;
			position: absolute;
			justify-content: center;
			align-items: center;
			font-family: 'Oregano';
			font-style: italic;
			font-weight: 100;
			
			> *{
				letter-spacing: 0.05rem;
				margin: 10%;
			}
		}
	}

</style>
