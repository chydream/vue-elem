const mixinsFun = {
  data () {
    return {
      filePath: 'http://192.168.80.105/FileCenter',
      permission: {
        view: 'view',
        add: 'add',
        edit: 'edit',
        delete: 'delete'
      }
    }
  },
  created () {
  },
  methods: {
    handleConfirm (msg, callback) {
      this.$confirm(msg, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        callback()
      }).catch(() => {         
      })
    },
    tip (msg, type) {
      this.$message({
        message: msg,
        type: type
      })
    },
    handleLoading (interval) {
      const loading = this.$loading({
        lock: 'true',
        text: '加载中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)' 
      })
      setTimeout(() => {
          loading.close()
      }, interval)
    }
  }
}
const mixinsIndex = {
  install: function (Vue, options) {
    Vue.mixin(mixinsFun)
  }
}

export default mixinsIndex
