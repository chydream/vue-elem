<template>
   <div class="header-top" v-show="!isFullScreen">
        <div class="header-left">
            <i class="fa fa-navicon" @click="toggleCollapse"></i>
        </div>
        <div class="header-right">
            <el-tooltip class="item" effect="dark" content="首页" placement="bottom">
                <el-button>上左</el-button>
            </el-tooltip>
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
        }
    },
    computed: {
        ...mapGetters(['isFullScreen'])
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
    line-height: 60px;
    width: 50%;
    float:right;
    text-align: right;
  }
</style>
