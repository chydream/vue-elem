import {mapGetters} from 'vuex'
export default {
  name: 'Left',
  data () {
    return {
      menu: []
    }
  },
  mounted () {
    this.getMenuData()
  },
  methods: {
    goUrl (path) {
      if (this.activeIndex != path && path == '/item/page') {
        this.$store.commit('common/KEEP_ALIVE', [])
      }
      this.$router.push(path)
    },
    getMenuData () {
      this.$store.dispatch('user/GetMenu').then(res => {
        if (res.success) {
          this.menu = res.data
          console.log(this.menu)
        } else {
          console.log(res.message)
        }
      })
    }
  },
  computed: {
    ...mapGetters(['isCollapse']),
    activeIndex () {
      return this.$route.path
    }
  },
  render () {
    return (
      <el-aside style="{width:this.isCollapse? '64px':'230px'}">
        <div class="logo">
          <transition name="fade">
            <div class="" v-show="isCollapse">E</div>
          </transition>
          <transition name="fade">
            <div class="" v-show="!isCollapse"> ERP 管理系统</div>
          </transition>
        </div>
        <div class="menu">
          <el-menu
            default-active="{this.activeIndex}"
            class="el-menu-vertical-demo"
            background-color="#00142a"
            text-color="rgba(255, 255, 255, 0.65)"
            active-text-color="#409eff"
            collapse="{this.isCollapse}"
            unique-opened="true">
            <template v-for="(item,index) in menu">
              <el-menu-item index="item.href" click="this.goUrl(item.href)" v-if="item.children.length==0" key="index">
                <i class="item.icon"></i>
                <span slot="title">{item.label}</span>
              </el-menu-item>

              <el-submenu index="item.label" key="index" v-else>
                <template slot="title">
                  <i class="item.icon"></i>
                  <span>{item.label}</span>
                </template>

                <el-menu-item index="/index/home" click="goUrl('/index/home')">
                  <i class="el-icon-document"></i>
                  <span slot="title">首页</span>
                </el-menu-item>

              </el-submenu>

            </template>
          </el-menu>
        </div>
      </el-aside>
    )
  }
}