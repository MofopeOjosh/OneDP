<template>
  <div class="page-404">
			<dp-circle :width="165" :height="127" text_size="t-24" title="Ermm, you shouldn't be here"/>
			<p class="t-18">No really, there's nothing here for you</p>
			<div class="actions">
				<a href="/" class="t-14 dp-button"><i class="fas fa-angle-left"></i> Back</a> 
				<a href="/" class="t-14 dp-button"><i class="fas fa-home"></i> Home</a> 
			</div>
  </div>
</template>

<script>
// @ is an alias to /src
import DpCircle from '@/components/DpCircle.vue';

	export default {
		name: 'Page404',
		components: {
			DpCircle
		}
	}
</script>

<style lang="scss">
	.page-404{
		margin-top: 100px;
		display: flex;
		flex-direction: column;
		align-items: center;
		p{
			margin: 60px auto;
		}
		.actions{
			display: flex;
			// justify-content: space-between;
			// width: 400px;
		}
	}
</style>