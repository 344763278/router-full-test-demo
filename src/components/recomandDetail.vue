<template>
	<div class="root">
		<div class="back"><span @click="back">&lt;</span></div>
		{{index}}
	</div>
</template>
<script>
export default {
	data() {
		return {
			index: this.$route.params.id
		}
	},
	methods: {
		back() {
			this.$router.back();
		}
	}
}
</script>
<style scoped>
	.back{
		height: 30px;
		line-height: 30px;
		background-color: #999; 
	}
	.back span{
		line-height: 30px;
		font-size: 20px;
		margin-left: 10px;
		font-weight: 700;
		cursor: pointer;
	}
</style>