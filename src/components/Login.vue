<script >
import Welcome from './Welcome.vue'
export default {
  name:'login',
  components:{Welcome},
  methods:{
    gouHome(){
      this.$router.push('/welcome')
    }
  }
}
</script>

<template>
  <h1>欢迎来到登陆界面</h1>
  <Welcome msg="jack"/>
  <el-button @click="gouHome">回首页</el-button>
</template>

<style >

</style>
