<template>
    <div class="onedp-circle" :style="{'height': circle_height, 'width': circle_width, 'background-size': circle_width+' '+circle_height}">
		<span class="onedp-title" :style="{'width': title_width,}" :class="text_size">{{title}}</span>
	</div>
</template>

<script>
export default {
	name: 'OnedpCircle',
	props: {
		'height': Number,
		'width': Number,
		'text_size': String,
		'title': String
	},
	data(){
		return {
			title_width: '',
			circle_height: '',
			circle_width: ''
		}
	},
	mounted(){
		this.circle_height = this.height + 'px';
		this.circle_width = this.width + 'px';
		this.title_width = (this.width - 40) + 'px';
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import url('https://fonts.googleapis.com/css?family=Oregano');
	.onedp-circle{
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		background-image: url('../assets/onedp-circle.png');
		text-align: center;
		background-repeat: no-repeat;
	}
	.onedp-title{
		margin: 0;
		font-family: 'Oregano';
		font-style: italic;
		font-weight: 100;
	}
</style>
