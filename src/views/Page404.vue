<template>
  <div class="page-404">
			<onedp-circle :width="165" :height="127" text_size="t-24" title="Ermm, you shouldn't be here"/>
			<p class="t-24">No really, there's nothing here for you</p>
			<div class="actions">
				<button class="t-14 dp-button"><i class="fas fa-angle-left"></i> Back</button> 
				<button class="t-14 dp-button"><i class="fas fa-home"></i> Home</button> 
			</div>
  </div>
</template>

<script>
// @ is an alias to /src
import OnedpCircle from '@/components/OnedpCircle.vue';

	export default {
		name: 'Page404',
		components: {
			OnedpCircle
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
			justify-content: space-between;
			width: 400px;
		}
	}
</style>