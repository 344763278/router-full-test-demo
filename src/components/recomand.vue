<template>
	<div class="root">
		<ul class="items"> 
			<router-link tag="li" :to="'/recomand/'+item.id" v-for="item in list">{{item.desc}}</router-link>
		</ul>
		<router-view class="view"></router-view>
	</div>
</template>
<script>
export default {
	data() {
		return {
			list: [
				{id:1,desc:111},
				{id:2,desc:222},
				{id:3,desc:333},
				{id:4,desc:444},
				{id:5,desc:555},
			]
		}
	}
}
	
</script>
<style scoped>
	ul{
		padding: 10px;
		margin: 0;
	}
	li{
		list-style: none;
		height: 30px;
		line-height: 30px;
		margin-bottom: 10px;
		background-color: #ccc;
		text-align: center;
	}
	.view{
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: #eee;  
	}
</style>