import Vue from 'vue'
import mixinsIndex from './mixinsIndex'
import mixinsMobile from './mixinsMobile'
const Plugins = [mixinsIndex]
Plugins.map((plugin) => {
    Vue.use(plugin)
})
export default Vue
