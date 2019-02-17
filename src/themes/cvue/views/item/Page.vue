<template>
    <div class="page">
        {{msg}}
        <input type="text" placeholder="请输入" value="" name="inputTxt" v-model="inputValue"/>
    </div>
</template>
<script>
export default {
    name: 'Page',
    props: {
        inputValue: {
            type: String,
            default: ''
        }
    },
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
