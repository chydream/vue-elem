<template>
  <div>
    <!-- <el-select v-model="value" placeholder="请选择" clearable filterable multiple disabled >
      <el-option
        v-for ="item in options"
        :key ="item.value"
        :label ="item.label"
        :value ="item.value"
        :disabled ="item.disabled"
        ></el-option>
    </el-select>
    <el-time-select
      v-model="value1"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30'
      }"
      placeholder="选择时间">
    </el-time-select> -->
    <!-- <el-time-picker
      arrow-control
      v-model="value2"
      :picker-options="{
        selectableRange: '18:30:00 - 20:30:00'
      }"
      ></el-time-picker> -->
      <!-- <el-date-picker
        v-model="value6"
        type="datetime"
        range-separator="至"
        placeholder="选择日期时间">
      </el-date-picker> -->
      <!-- <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload> -->
      <!-- <div class="block">
        <span class="demonstration">默认不区分颜色</span>
        <el-rate
          v-model="value1"
          show-text
          show-score
          score-template="{value}"
          :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
        </el-rate>
        <el-rate
          v-model="value5"
          show-score
          text-color="#ff9900"
          score-template="{value}">
        </el-rate>
      </div> -->
      <!-- <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table> -->
      <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理ss" name="first">用户管理55</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs> -->
      <img :src="imgUrl">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    // const item = {
    //   date: '2016-05-02',
    //   name: '王小虎',
    //   address: '上海市普陀区金沙江路 1518 弄'
    // }
    return {
      imgUrl: '',
      activeIndex: '1',
      activeIndex2: '1',
      show: true,
      show2: true,
      show3: true,
      // tableData: Array(20).fill(item),
      radio: '1',
      radio2: 3,
      radio10: '1',
      num1: 2,
      value: '',
      value2: new Date(2016, 9, 10, 18, 40),
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value1: '',
      value5: '',
      value6: '',
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  methods: {
    handleChange (key) {
      console.log(key)
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleExceed (files, fileList) {
      // this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove (file, fileList) {
      // return this.$confirm(`确定移除 ${ file.name }？`)
    },
    loadImageAsync (url) {
      return new Promise(function (resolve, reject) {
        const image = new Image()
        image.onload = function () {
          resolve(image)
        }
        image.onerror = function () {
          reject(new Error('Could not load image at' + url))
        }
        image.src = url
      })
    },
    getJSon (url) {
      const promise = new Promise(function (resolve, reject) {
        const handler = function () {
          if (this.readyState !== 4) {
            return
          }
          if (this.status === 200) {
            resolve(this.response)
          } else {
            reject(new Error(this.statusText))
          }
        }
        const client = new XMLHttpRequest()
        client.open('GET', url)
        client.onreadystatechange = handler
        client.responseType = 'json'
        client.setRequestHeader('Accept', 'application/json')
        client.send()
      })
      return promise
    }
  },
  created () {
    // const promise = new Promise(function (resolve, reject) {
    //   console.log('Promise')
    //   resolve()
    // })
    // promise.then(function () {
    //   console.log('resolved.')
    // })
    // console.log('Hi!')
    this.loadImageAsync(require('../../assets/logo.png'))
    this.getJSon('/api/list-common').then(function (response) {
      console.log(response)
    }, function (error) {
      console.error('出错了', error)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
  }
</style>
