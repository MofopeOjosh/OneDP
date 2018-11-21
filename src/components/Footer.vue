<template>
    <footer>
		<p class="t-14"><i class="fas fa-copyright"></i> Copyright 2018</p>
    </footer>
</template>

<script>
export default {
	name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer{
	position: fixed;
	bottom: 0;
	width: 100%;
	margin-top: 100px;
	color: #ffffff;
	background-color: #000000;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
