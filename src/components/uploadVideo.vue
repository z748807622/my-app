<template>
    <div>
        <div style="border-bottom: 1px solid #dcdfe6;padding: 9px 0;font-size: 21px;">系统管理</div>
        <div class="fileTable" style="margin: 0 6px">
            <el-button style="float: left" @click.stop="uploadVideoFile" type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
            <el-button style="float: left" @click.stop="stopPlay" type="primary">停止播放<i class="el-icon-upload el-icon--right"></i></el-button>
            <el-table
                    :data="uploadSetting.tableData"
                    style="width: 100%"
                    :row-class-name="tableRowClassName">
                <el-table-column
                        prop="videoPath"
                        label="文件名"
                        width="180">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" @click="delVideo(scope.row)" size="small">删除</el-button>
                        <el-button type="text" @click="playVideo(scope.row)" size="small">开始播放</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-dialog title="上传视频"
                   :visible="uploadSetting.uploadShow"
                   style="z-index: 10000"
                   width="30%"
                   :before-close="uploadClose">
            <el-upload
                    class="upload-demo"
                    drag
                    :limit= "uploadSetting.limit"
                    :auto-upload="uploadSetting.autoUpload"
                    ref="upFile"
                    :before-upload="beforeAvatarUpload"
                    :on-success="fileUploadSuccess"
                    :action="uploadSetting.serverAddr"
                    :disabled="uploadSetting.uploadAble"
                    multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传视频文件</div>
            </el-upload>
            <span slot="footer" class="dialog-footer">
                <el-button @click="uploadSetting.uploadClose = false">取 消</el-button>
                <el-button type="primary" @click="submit">提 交</el-button>
            </span>
        </el-dialog>
    </div>
</template>



<script>
    export default {
        name: "uploadVideo",
        data(){
            return {
                uploadSetting: {
                    uploadAble: false,
                    serverAddr: "http://" + this.GLOBAL.ip + ":8033/api/video",
                    uploadShow: false,
                    autoUpload: false,
                    showList: false,
                    limit: 1,
                    tableData: [{
                        fileId: 1,
                        fileName: '文件1'
                    },{
                        fileId: 2,
                        fileName: '文件2'
                    }]
                },
            }
        },
        created(){
            console.log("视频列表开始获取")
            this.showFileList()
        },
        methods: {
            stopPlay(){
                let data = {
                    code: 9999,
                    type: 0
                }
                this.GLOBAL.msgSocket.send(JSON.stringify(data))
            },
            playVideo(item){
                console.log("点击获取信息",item)
                let data = {
                    videoPath: item.videoPath,
                    code: 9999,
                    type: 1
                }
                this.GLOBAL.msgSocket.send(JSON.stringify(data))
            },
            delVideo(video){
                let that = this
                this.$confirm('是否删除:' + video.videoName, '删除', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warn'
                }).then(() => {
                    that.GLOBAL.axios.delete(that.GLOBAL.httpServe + "/api/video/" + video.videoId).then((res) => {
                        if (res.data.code == 0) {
                            that.$message({message:'删除成功',type:'success'});
                            that.showFileList()
                        } else{
                            that.$message.error("获取视频列表失败")
                        }
                    }).catch((err) => {
                        that.$message.error("获取视频列表失败:" + err)
                    })
                }).catch(() => {
                    this.$message({message:'删除取消',type:'success'})
                })
            },
            showFileList(){
                this.GLOBAL.axios.get(this.GLOBAL.httpServe + "/api/video",{}).then((res) => {
                    console.log("videoFile",res)
                    if (res.data.code == 0){
                        this.uploadSetting.tableData = res.data.data
                        this.$message({message:'获取视频列表成功',type:'success'});
                    } else {
                        this.$message.error("获取视频列表失败")
                    }
                }).catch((err) => {
                    this.$message.error("获取视频列表失败:" + err)
                })
            },
            tableRowClassName({rowIndex}) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            },
            uploadVideoFile(){
                this.uploadSetting.uploadShow = true
            },
            uploadClose(){
                this.uploadSetting.uploadShow = false
                this.$refs.upFile.clearFiles()
                console.log('上传文件关闭')
            },
            beforeAvatarUpload(file){
                let that = this
                console.log('上传文件', file)

            },
            fileUploadSuccess() {
                this.$message({
                    message: '上传成功',
                    type: 'success'
                });
                this.$refs.upFile.clearFiles()
                this.uploadSetting.uploadShow = false
            },
            submit(){
                if (!this.$refs.upFile || !this.$refs.upFile.uploadFiles || this.$refs.upFile.uploadFiles.length == 0) {
                    console.log("this.$refs.upFile.uploadFiles",this.$refs.upFile)
                    this.$message.error('未选择文件');
                    return;
                }
                let that = this
                this.$confirm('是否上传该文件？','继续上传文件',{
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'info'
                }).then(() => {
                    this.$message({
                        message: '开始上传',
                        type: 'success'
                    });
                    that.$refs.upFile.submit()
                }).catch(() => {
                    this.$message({
                        message: '取消上传',
                        type: 'warn'
                    });
                })
            }
        }
    }
</script>

<style scoped>

</style>