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
                        // this.$router.push('/')
                    } else {
                        this.showToast(res.message)
                    }
                })
            })
        }
    }
}
</script>
<style lang="less" scoped>
</style>
