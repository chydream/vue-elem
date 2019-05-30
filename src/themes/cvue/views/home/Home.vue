<template>
    <!-- <div>
        {{msg}}
        <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" style="width: 100%">
            <el-table-column label="Date" prop="date">
            </el-table-column>
            <el-table-column label="Name" prop="name">
            </el-table-column>
            <el-table-column align="right">
                <template slot="header" slot-scope="scope">456456</template>
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div> -->
    <div class="home">
        <cvue-table :option="tableOption" :data="tableData" ref="tbl1" 
                            :isShowAdd="false" :page="page"
                            :loading="tableLoading"
                            @current-change="handleCurrentChange"
                            @size-change="handleSizeChange"
                            @cellClick = "handleCellClick"
                            :isShowPage="true">
                    <el-button type="text" size="small" @click="handleClick(scope.row)" slot="cloumnSlot">编辑</el-button>
                    <!-- 本网质量 -->
                    <el-table-column label="本网质量" slot="multipleCloumn" align="center">
                        <el-table-column :prop="cloumn.prop"
                            :label="cloumn.label"
                            :width="cloumn.width"
                            :align="cloumn.align"
                            :headerAlign="cloumn.headerAlign"
                            :key="cloumn.prop"
                            v-for="(cloumn) in ownNetworkQuality">
                            <template slot-scope="scope">
                                <div class="cell-wrap" @click="handleCellClick(scope.row,scope.$index,cloumn.prop)">
                                    <span >{{scope.row[cloumn.prop]}}</span>
                                </div>
                            </template>
                        </el-table-column>
                    </el-table-column>
                    <!-- 出口质量 -->
                    <el-table-column label="出口质量" slot="multipleCloumn" align="center">
                        <el-table-column :prop="cloumn.prop"
                            :label="cloumn.label"
                            :width="cloumn.width"
                            :align="cloumn.align"
                            :headerAlign="cloumn.headerAlign"
                            :key="cloumn.prop"
                            v-for="(cloumn) in thirdNetworkQuality">
                            <template slot-scope="scope">
                                <div class="cell-wrap" @click="handleCellClick(scope.row,scope.$index,cloumn.prop)">
                                    <span >{{scope.row[cloumn.prop]}}</span>
                                </div>
                            </template>
                        </el-table-column>
                    </el-table-column>
                    <!-- 操作按钮 -->
                    <el-table-column fixed="right" slot="actionMenu" label="操作" align="center"
                        header-align="center"  width="160">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" @click="handleEdit(scope.row)">编辑</el-button>
                            <el-button type="text" size="small" @click="handleFaultAnalysis(scope.row)">故障分析</el-button>
                            <el-button type="text" size="small" @click="handleDelete(scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </cvue-table>
    </div>
</template>
<script>
import cvueTable from '@/components/cvue-table'
export default {
    name: 'Home',
    components: {
        cvueTable
    },
    data () {
        return {
            cybercafeCount: {
                offline: 0,
                online: 0,
                sum: 0
            },
            rowId: '',
            keyword: '',
            tableLoading: false,
            dialogVisible: false,
            dialogVisibleEdit: false,
            dialogVisibleAdd: false,
            dialogVisibleNet: false,
            dialogVisibleExit: false,
            dialogVisibleCondition: false,
            dialogVisibleFault: false,
            tablePage: 1,
            page: {
                total: 1, // 总页数
                currentPage: 1, // 当前页数
                pageSize: 6, // 每页显示多少条
                pageSizes: [6, 10, 50, 100]
            },
            tableOption: {
                stripe: true,
                width: '100%',
                border: true,
                index: true,
                cloumn: [
                    {prop: 'id', label: '网吧ID', align: 'center', solt: true, width: 60},
                    {prop: 'name', label: '网吧名称', align: 'center', width: 160},
                    {prop: 'status', label: '在线情况', align: 'center'}
                ]
            },
            ownNetworkQuality: [
                {prop: 'DNS', label: 'DNS地址', align: 'center'},
                {prop: 'packetLossRate', label: '丢包率', align: 'center'},
                {prop: 'shake', label: '抖动', align: 'center'},
                {prop: 'delayed', label: '平均延时', align: 'center'}
            ],
            thirdNetworkQuality: [
                {prop: 'thirdDNS', label: 'DNS地址', align: 'center'},
                {prop: 'thirdPacketLossRate', label: '丢包率', align: 'center'},
                {prop: 'thirdShake', label: '抖动', align: 'center'},
                {prop: 'thirdDelayed', label: '平均延时', align: 'center'}
            ],
            tableData: [
                {
                  id: '1', name: '网吧1', status: '在线', DNS: '5555', packetLossRate: '5555', shake: '5555', delayed: '555', thirdDNS: '5555', thirdPacketLossRate: '5555', thirdShake: '5555', thirdDelayed: '666'
                },
                {
                  id: '1', name: '网吧1', status: '在线', DNS: '5555', packetLossRate: '5555', shake: '5555', delayed: '555', thirdDNS: '5555', thirdPacketLossRate: '5555', thirdShake: '5555', thirdDelayed: '555'
                },
                {
                  id: '1', name: '网吧1', status: '在线', DNS: '5555', packetLossRate: '5555', shake: '5555', delayed: '555', thirdDNS: '5555', thirdPacketLossRate: '5555', thirdShake: '5555', thirdDelayed: '555'
                },
                {
                  id: '1', name: '网吧1', status: '在线', DNS: '5555', packetLossRate: '5555', shake: '5555', delayed: '555', thirdDNS: '5555', thirdPacketLossRate: '5555', thirdShake: '5555', thirdDelayed: '555'
                },
                {
                  id: '1', name: '网吧1', status: '在线', DNS: '5555', packetLossRate: '5555', shake: '5555', delayed: '555', thirdDNS: '5555', thirdPacketLossRate: '5555', thirdShake: '5555', thirdDelayed: '555'
                },
                {
                  id: '1', name: '网吧1', status: '在线', DNS: '5555', packetLossRate: '5555', shake: '5555', delayed: '555'
                },
                {
                  id: '1', name: '网吧1', status: '在线', DNS: '5555', packetLossRate: '5555', shake: '5555', delayed: '555'
                },
                {
                  id: '1', name: '网吧1', status: '在线', DNS: '5555', packetLossRate: '5555', shake: '5555', delayed: '555'
                }
            ]
        }
    },
    mounted () {
        // this.handleList(this.keyword) // 获取列表详情
        // this.getCybercafeNum() // 获取网吧数量
    },
    methods: {
        handleClick (row) {
            console.log(row)
        },
        // 改变pagesize
        handleSizeChange (val) {
            this.page.pageSize = val
            this.handleList(this.keyword)
        },
        // 改变页码
        handleCurrentChange (val) {
            this.tablePage = val
            this.handleList(this.keyword)
        },
        // 网吧搜索
        handleSearch () {
            this.tablePage = 1
            this.handleList(this.keyword)
        },
        // 列表接口
        handleList (keyword) {
            this.tableLoading = true
            var params = {
                pageIndex: this.tablePage,
                pageSize: this.page.pageSize,
                keyword: keyword
            }
            this.$store.dispatch('home/GetCybercafes', params).then(res => {
                // console.log(res)
                if (res.code == 1) {
                    // var data = res.data[0]
                    var data = res.data
                    this.tableData = data.list.map(item => {
                        return {
                            id: item.id, 
                            name: item.name, 
                            status: item.status,
                            DNS: item.ownNetworkQuality.DNS, 
                            packetLossRate: item.ownNetworkQuality.packetLossRate, 
                            shake: item.ownNetworkQuality.shake,  
                            delayed: item.ownNetworkQuality.delayed,  
                            thirdDNS: item.thirdNetworkQuality.DNS,  
                            thirdPacketLossRate: item.thirdNetworkQuality.packetLossRate,  
                            thirdShake: item.thirdNetworkQuality.shake, 
                            thirdDelayed: item.thirdNetworkQuality.delayed
                        }
                    })
                    // console.log(this.tableData)
                    this.page.total = data.total
                    this.page.currentPage = this.tablePage 
                } else {
                    this.$message({
                        message: res.msg,
                        duration: 2000,
                        type: 'error'
                    })
                }
                this.tableLoading = false
            })
        },
        // 单元格单击
        handleCellClick (row, index, prop) {
            this.rowId = row.id
            // console.log(prop)
            if (prop == 'id') {
                this.dialogVisible = true
            }
            if (prop == 'DNS' || prop == 'packetLossRate' || prop == 'shake' || prop == 'delayed') {
                this.dialogVisibleNet = true
            }
            if (prop == 'thirdDNS' || prop == 'thirdPacketLossRate' || prop == 'thirdShake' || prop == 'thirdDelayed') {
                this.dialogVisibleExit = true
            }
            if (prop == 'status') {
                this.dialogVisibleCondition = true
            }
        },
        // 关闭弹窗
        closeDialog (params) {
            if (params == 'id') {
                this.dialogVisible = false
            }
            if (params == 'condition') {
                this.dialogVisibleCondition = false
            }
            if (params == 'net') {
                this.dialogVisibleNet = false
            }
            if (params == 'exit') {
                this.dialogVisibleExit = false
            }
            if (params == 'edit') {
                this.dialogVisibleEdit = false
            }
            if (params == 'add') {
                this.dialogVisibleAdd = false
            }
            if (params == 'fault') {
                this.dialogVisibleFault = false
            }
        },
        // 确认
        confirmDialog (params) {
            if (params == 'id') {
                this.dialogVisible = false
            }
            if (params == 'condition') {
                this.dialogVisibleCondition = false
            }
            if (params == 'net') {
                this.dialogVisibleNet = false
            }
            if (params == 'exit') {
                this.dialogVisibleExit = false
            }
            if (params == 'edit') {
                this.dialogVisibleEdit = false
            }
             if (params == 'add') {
                this.dialogVisibleAdd = false
            }
            if (params == 'fault') {
                this.dialogVisibleFault = false
            }
        },
        // 编辑
        handleEdit (row) {
            this.rowId = row.id
            this.dialogVisibleEdit = true
        },
        // 新增
        handleAdd () {
            this.dialogVisibleAdd = true
        },
        // 删除
        handleDelete () {
             this.$confirm('确定要删除吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$store.dispatch('home/DeleteCybercafesDetail', this.rowId).then(res => {
                    // console.log(res)
                    if (res.code == 1) {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        })
                    } else {
                        this.$message({
                            type: 'error',
                            message: res.msg
                        })
                    }
                })               
            }).catch(() => {
            })
        },
        // 故障分析
        handleFaultAnalysis () {
            this.dialogVisibleFault = true
        },
        // 获取网吧数量
        getCybercafeNum () {
            this.$store.dispatch('home/CountCybercafe').then(res => {
                // console.log(res)
                if (res.code == 1) {
                    this.cybercafeCount = res.data
                }
            })
        }
    }
}
// export default {
//     name: 'Home',
//     data () {
//         return {
//             msg: 'sss',
//             tableData: [{
//                 date: '2016-05-02',
//                 name: '王小虎',
//                 address: '上海市普陀区金沙江路 1518 弄'
//                 }, {
//                 date: '2016-05-04',
//                 name: '王小虎',
//                 address: '上海市普陀区金沙江路 1517 弄'
//                 }, {
//                 date: '2016-05-01',
//                 name: '王小虎',
//                 address: '上海市普陀区金沙江路 1519 弄'
//                 }, {
//                 date: '2016-05-03',
//                 name: '王小虎',
//                 address: '上海市普陀区金沙江路 1516 弄'
//                 }],
//                 search: ''
//         }
//     }
// }
</script>
<style lang="scss">
    .home{
        height: auto!important;
    }
</style>
