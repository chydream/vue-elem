<template>
    <div class="page">
        {{msg}}
        <input type="text" placeholder="请输入" value="" name="inputTxt"/>
    </div>
</template>
<script>
export default {
    name: 'Page',
    data () {
        return {
            msg: 'page page page'
        }
    }
}
</script>
<style lang="scss" scoped>
    // .page{
    //     background: red !important;
    //     height: 50%!important;
    // }
</style>
