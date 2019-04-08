import CryptoJS from 'crypto-js'
const mixinsFun = {
  data () {
    return {
      
    }
  },
  created () {
  },
  methods: {
    showToast (text, type) {
      this.$vux.toast.show({
        text: text,
        type: type == undefined ? 'text' : type
      })
    }
  }
}
const mixinsMobile = {
  install: function (Vue, options) {
    Vue.mixin(mixinsFun)
  }
}

export default mixinsMobile
