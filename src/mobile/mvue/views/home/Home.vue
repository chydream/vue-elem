<template>
    <div class="home-wrap" id="downLoad">
        <div class="home-body">
            <ul class="list-home">
                <li v-for="(item,index) in listArr" :key="index">{{item.str}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            msg: 'hello',
            listArr: [
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'},
                {str: 'ddddddd'}
            ],
            page: 1,
            pageSize: 5,
            total: 1
        }
    },
    created () {
    },
    mounted () {
        this.refreshData()
    },
    methods: {
        refreshData1 () {
            var self = this
            self.getNodeList(self.page, self.pageSize)
            var wPow = document.getElementById('wPow')
            var wBody = document.getElementById('wBody')
            var wOffsetHeight = wBody.offsetHeight
            var wOffsetTop = wBody.offsetTop
            wPow.addEventListener('scroll', function (ev) {
                var fitHeight = wOffsetTop - 50 + wOffsetHeight * (self.page - 1)
                if (this.scrollTop > fitHeight) {
                    if (self.page < self.total) {
                        self.page += 1
                        self.getNodeList(self.page, self.pageSize)
                    }
                }
            })
        },
        refreshData2 () {
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
                            // getTMCCodeHistroyList()
                        }
                    }
                }
            })
        },
        // getTMCCodeHistroyList () {
        //     // 成功回调函数
        //     function getTMCCodeHistroyListSuccessCallBack (data) {
        //         if (data.success){// 成功
        //         var theDataArray = data.data;
        //         if (commonFun.isVarIsNullOrEmptyStr(theDataArray)){
        //             return;
        //         }

        //         vm.tmcTransferCodePageCount = ((data.total % vm.tmcTransferCodePageSize) > 0) ? ((data.total / vm.tmcTransferCodePageSize) + 1) : (data.total / vm.tmcTransferCodePageSize);
        //         for(var i = 0; i < theDataArray.length; i++){
        //             var dataItem = theDataArray[i];
        //             vm.tmcTransferCodeHistData.push(dataItem);
        //         }
        //         if (vm.tmcTransferCodePageIndex >= vm.tmcTransferCodePageCount){
        //             vm.loading = false;
        //             vm.loadTip = '已经到底部';
        //         }else{
        //             vm.loading = false;
        //             vm.loadTip = '显示更多';
        //         }
        //         }else{
        //         vm.showToast = true;
        //         vm.toastText = data.message;
        //         }
        //     }

        //     var vm = this;
        //     var token = commonFun.getToken();
        //     gTransferTMC.getTransferTokenIntegralList(vm, getTMCCodeHistroyListSuccessCallBack, null, token, this.tmcTransferCodePageIndex, this.tmcTransferCodePageSize);
        // },
        // 下拉加载
        refreshData () {
            var self = this 
            var downLoad = document.getElementById('downLoad')
            downLoad.addEventListener('scroll', function (ev) {
                var height = this.offsetHeight
                var scrollTop = this.scrollTop
                var scrollHeight = this.scrollHeight
                console.log(height)
                console.log(scrollTop)
                console.log(scrollHeight)
            })
        }
    }
}
</script>
<style lang="less" scoped>
.home-wrap{
    height: 300px;
    overflow: auto;
    padding-top: 40px;
    margin-top:40px;
    .list-home li{
        height: 30px;
        line-height: 30px;
    }
}
</style>
