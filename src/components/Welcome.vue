<script>
export default {
  name:'welcome',
  props:['msg']
}
</script>

<template>
  <h1>欢迎来到主界面-{{msg}}</h1>
  <router-link to="/login">登陆</router-link>
</template>

<style scoped>
a{
  color:#42b983
}
</style>
