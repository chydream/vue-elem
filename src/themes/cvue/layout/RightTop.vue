<template>
   <div class="header-top" v-show="!isFullScreen">
        <div class="header-left">
            <i class="fa fa-navicon" @click="toggleCollapse"></i>
        </div>
        <div class="header-right">
            <el-tooltip class="item" effect="dark" content="头像" placement="bottom">
                <img class="top-userImg" :src="userInfo.pic">
            </el-tooltip>
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    {{userInfo.userName}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item><a href="https://github.com/chydream/vue-elem" target="_blank">Git地址</a></el-dropdown-item>
                    <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div> 
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name: 'RightTop',
    data () {
        return {
            msg: 'hello'
        }
    },
    methods: {
        toggleCollapse () {
            this.$store.commit('common/SET_COLLAPSE')
        },
        logout () {
            this.handleConfirm('确定要退出吗？', () => {
                this.$store.dispatch('user/Logout').then(res => {
                    if (res.success) {
                        this.$router.push('/login')
                        this.$store.commit('common/CLEAR_TAG')
                    } else {
                        this.tip(res.message, 'error')
                    }
                })
            })
        }
    },
    computed: {
        ...mapGetters(['isFullScreen', 'userInfo'])
    }
}
</script>
<style lang="scss">
  .header-top{
    height: 60px;
    overflow: hidden;
    padding: 0 20px;
  }
  .header-left{
    line-height: 60px;
    width: 50%;
    float: left;
  }
  .header-left i{
      font-size: 22px;
  }
  .header-right{
    padding: 13px 0px;
    line-height: 20px;
    width: 50%;
    float:right;
    text-align: right;
  }
  .top-userImg{
    margin: 0 8px 0 10px;
    padding: 2px;
    width: 30px;
    height: 30px;
    border-radius: 100%!important;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #eee;
    vertical-align: middle;
  }
</style>
