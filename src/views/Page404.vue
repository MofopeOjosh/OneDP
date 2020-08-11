<template>
  <main class="page-404-wrapper">
	  	<div class="page-404">
			<draw-circle>Ermm, you shouldn't be here</draw-circle>
			<p>No really, there's nothing here for you</p>
			<div class="actions">
				<a href="/" class="t-14 mo-button"><i class="fas fa-angle-left"></i> Back</a> 
				<a href="/" class="t-14 mo-button"><i class="fas fa-home"></i> Home</a> 
			</div>
		</div>
  </main>
</template>

<script>
// @ is an alias to /src
import DrawCircle from '@/components/DrawCircle.vue';

	export default {
		name: 'Page404',
		components: {
			DrawCircle
		}
	}
</script>

<style lang="scss">
	.page-404-wrapper{
		text-align: center;
		min-height: calc(100vh - 90px);
	}
	.page-404{
		padding: 100px 10px 50px;
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		p{
			font-size: 24px;
			display: inline;
			margin: 20px auto 40px;
		}
		.actions{
			display: flex;
			justify-content: space-between;
			align-self: stretch;
		}
	}
</style>