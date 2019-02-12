<template>
  <div class="login">
    <div class="content">
      <form id="login-form" class="login-form">
        <h3 class="form-title">登录</h3>
        <div class="alert alert-danger display-hide">
          <button class="close" data-close="alert"></button>
          <span>输入你的用户名或密码</span>
        </div>
        <div class="form-group field-loginform-username required">
          <label class="control-label visible-ie8 visible-ie9" for="loginform-username">用户名</label>
          <div class="input-icon">
            <i class="fa fa-user"></i>
            <input type="text" id="loginform-username" class="form-control placeholder-no-fix"  name="LoginForm[username]" autocomplete="off" placeholder="用户名" aria-required="true" v-model="username">
            <p class="help-block help-block-error"></p>
          </div>
        </div>
        <div class="form-group field-loginform-password required">
          <label class="control-label visible-ie8 visible-ie9" for="loginform-password">密码</label>
          <div class="input-icon">
            <i class="fa fa-lock"></i>
            <input type="password" id="loginform-password" class="form-control placeholder-no-fix" name="LoginForm[password]" autocomplete="off" placeholder="密码" aria-required="true" v-model="password">
            <p class="help-block help-block-error"></p>
          </div>
        </div>
        <div class="form-actions">
          <label class="rememberme mt-checkbox mt-checkbox-outline">
            <input type="checkbox" name="LoginForm[rememberMe]" value="1"> 记住我
            <span></span>
          </label>
          <button type="button" class="btn green pull-right" @click="getLogin">登录</button>
        </div>
      </form>
    </div>
    <div class="copyright">2016 © copyright</div>
  </div>
</template>
<script>

export default {
  name: 'login',
  data () {
    return {
      msg: 'hello',
      username: '',
      password: ''
    }
  },
  methods: {
    getLogin () {
      var params = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('user/Login', params).then(res => {
        // console.log(res)
        if (res.success) {
          this.$router.push('/index/home')
        } else {
          this.$message({
            message: res.message,
            type: 'error'
          })
        }
      })
    }
  },
  created () {
     window.jQuery(function () {
      // init background slide images
      window.jQuery.backstretch([
          'http://www.qinimai.com/backend/web/statics/metronic/imgs/7.jpg',
          'http://www.qinimai.com/backend/web/statics/metronic/imgs/2.jpg',
          'http://www.qinimai.com/backend/web/statics/metronic/imgs/3.jpg',
          'http://www.qinimai.com/backend/web/statics/metronic/imgs/4.jpg'
        ], {
            fade: 1000,
            duration: 8000
        }
      )
    })
  }
}
</script>
<style scoped lang="scss">
@import url("./css/login.css");
</style>
