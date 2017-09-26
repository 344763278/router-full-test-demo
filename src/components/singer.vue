<template>
	<div class="root">
		<ul class="items"> 
			<!-- <router-link tag="li" :to="'/singer/'+item.id" v-for="item in list">{{item.desc}}</router-link> -->
			<li v-for="(item, index) in list" :key="index" @click="goto(item)">{{item.desc}}</li>
		</ul>
		<router-view class="view"></router-view>
	</div>
</template>
<script>
export default {
	data() {
		return {
			list: [
				{id:1,desc:'王杰'},
				{id:2,desc:'周杰伦'},
				{id:3,desc:'张学友'},
				{id:4,desc:'周星驰'},
				{id:5,desc:'刘德华'},
			]
		}
	},
	methods: {
		goto(item) {
			this.$router.push({
				path: '/singer/:id',
				query:{
					item: item
				}
			})
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