<template>
    <div class="cvue-upload">
        <el-upload
            :class="cssClass"
            ref="cvue-upload"
            :action="actionUrl"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-success="handleSuccess"
            :on-error="handleError"
            :before-upload="handleBeforeupload"
            :headers="token"
            :data="fileParams"
            :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">上传文件不能超过20M</div>
        </el-upload>
    </div>
</template>
<script>
export default {
    name: 'upload',
    data () {
        return {
            msg: '123',
            fileList: [] // 附件列表
        }
    },
    computed: {
        fileParams () {
            return {
                mark: '',
                keyWord: ''
            }
        }
    },
    props: {
        cssClass: {
            type: String,
            default: ''
        },
        actionUrl: {
            type: String,
            default: 'https://jsonplaceholder.typicode.com/posts/'
        },
        token: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    methods: {
        // 上传前
        handleBeforeupload (file) {
            var m = (file.size / (1024 * 1024)).toFixed(2)
            if (m > 30) {
              this.$message({message: '最大限制30M', type: 'error'})
              return false
            }
            return true
        },
        // 成功
        handleSuccess (response, file, fileList) {
          if (response.success) {
            this.$message({message: response.message, duration: 2000, type: 'success'})
          } else {
            this.$message({message: response.message, duration: 2000, type: 'error'})
          }
        },
        // 错误
        handleError (err, file, fileList) {
            console.log(err)
        },
        // 移除
        handleRemove (file, fileList) {
            // return true
        },
        // 预览
        handlePreview (file) {
        }
    }
}
</script>
<style lang="sass" scoped>
</style>
