const mixinsFun = {
  data () {
    return {
      filePath: 'http://192.168.80.105/FileCenter'
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
