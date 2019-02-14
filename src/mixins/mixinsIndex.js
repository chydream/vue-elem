const mixinsFun = {
  data () {
    return {
      filePath: 'http://192.168.80.105/FileCenter',
      permission: {
        view: 'view',
        add: 'add',
        edit: 'edit',
        delete: 'delete'
      },
      // 页面缓存配置
      keepAlivePage: ['Page', 'Auth'],
      keepAlivePath: ['/item/page', '/item/auth']
    }
  },
  methods: {
  }
}
const mixinsIndex = {
  install: function (Vue, options) {
    Vue.mixin(mixinsFun)
  }
}

export default mixinsIndex
