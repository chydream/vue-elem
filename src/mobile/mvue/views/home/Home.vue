<template>
    <div>
        <div>dddddddddd</div>
        <span @click="logout">登出</span>
    </div>
</template>
<script>
export default {
    data () {
        return {
            msg: 'hello'
        }
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
        },
        // 下拉加载
        refreshData () {
            var vm = this    
            var panelCtrl = document.getElementById('transferTMCPanel')
            panelCtrl.addEventListener('scroll', function (event) {        
                var height = this.offsetHeight
                var scrollTop = this.scrollTop
                var scrollHeight = this.scrollHeight

                if ((scrollHeight - (height + scrollTop)) < 50) {
                    if (vm.tmcTransferCodePageIndex < vm.tmcTransferCodePageCount) {
                        if (!vm.loading) {
                            vm.tmcTransferCodePageIndex++
                            vm.loading = true
                            vm.loadTip = '加载中'
                        }
                    }
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
</style>
