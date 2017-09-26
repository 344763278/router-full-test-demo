<template>
<div id="app"> 
  <ul class="c"> 
    <router-link tag="li" to="/recomand">推荐</router-link>
    <router-link tag="li" to="/singer">歌手</router-link>
    <router-link tag="li" to="/song">歌单</router-link>
    <router-link tag="li" to="/like">喜欢</router-link>
  </ul>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
  *{
    padding:0;
    margin: 0;
  }
  .c{
    display: flex;
  }
  .c li{
    flex: 1;
    text-align: center;
    height: 40px;
    line-height: 40px;
    list-style: none;
  }
  .c li.router-link-active{
    background-color: #666;
    color: #fff;
  }
</style>
