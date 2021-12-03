<script >
import Welcome from './Welcome.vue'
export default {
  name:'login',
  components:{Welcome},
  mounted() {
    this.$request({
      method:'get',
      url:'/login',
      data:{
        name:'jack'
      }
    }).then((res)=>{
      console.log(res)
    })
  },
  methods:{
    gouHome(){
      this.$router.push('/welcome')
    }
  }
}
</script>

<template>
  <h1>欢迎来到登陆界面</h1>
  <el-button @click="gouHome">回首页</el-button>
</template>

<style >

</style>
