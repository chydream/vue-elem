<template>
<div>
   <div class="home-header">
      <div>dddddddddd</div>
      <span @click="logout">登出</span>
   </div>
   <transition name="fade">
      <router-view></router-view>
    </transition>
</div>
</template>
<script>

export default {
  data () {
    return {
      msg: '123'
    }
  },
  computed: {
  },
  created () {
  },
  mounted () {
  },
  methods: {
    logout () {
      this.showConfirm('提示', '确定要退出吗？', () => {
          this.$store.dispatch('mobileUser/Logout').then(res => {
              if (res.success) {
                  this.$router.push('/')
              } else {
                  this.showToast(res.message)
              }
          })
      })
    }
  }
}
</script>

<style scoped lang="less">
.home-header{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #f6f6f6;
}
.home-header span{
    position: absolute;
    right: 0;
    top: 0;
}
</style>
