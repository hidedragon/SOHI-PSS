<template>
    <div>
        <Modal :title="title" v-model="isShowV" :mask-closable="false" width="90%" height="90%">
            <h4 slot="header">{{title}}</h4>
            <a class="ivu-modal-close" @click="closed"><i class="ivu-icon ivu-icon-ios-close-empty"></i></a>
            <Tabs>
                <TabPane v-for="(item, index) in tabDatas" :key="index" :label="item.label" :name="item.name">
                    <div v-if="item.type==='flow'">
                        <div style="width: 90%;margin-left: 5%;">
                            <Steps :current="0" size="small">
                                <Step title="创建"></Step>
                                <Step title="设计中"></Step>
                                <Step title="待审批"></Step>
                                <Step title="已完成"></Step>
                            </Steps>
                        </div>
                        <hr style="border: solid 0.5px #e9eaec;margin-top: 5px;"/>
                        <div style="margin-top: 10px;">
                            <div class="form-row">
                                <span style="color: red;">*名称：</span>
                                <Input style="width:450px;" v-model="item.data.name"/>
                            </div>
                            <div class="form-row">
                                <span>类型：</span>
                                <Input style="width:450px;" v-model="item.data.type"/>
                            </div>
                            <div class="form-row-text">
                                <span>描述：</span>
                                <Input style="width:80%;" type="textarea" :autosize="{minRows: 5,maxRows: 10}" v-model="item.data.desc" />
                            </div>
                            <div>
                                <span style=" display: inline-block;width: 120px;text-align:right;">资料上传：</span>
                                <div style="display: inline-block;">
                                    <Upload
                                            multiple
                                            action="//jsonplaceholder.typicode.com/posts/">
                                        <Button type="ghost" icon="ios-cloud-upload-outline">选择文件</Button>
                                    </Upload>
                                </div>
                                <div style="display: inline-block;margin-left: 15px;">
                                    <Button type="primary">需求提取</Button>
                                </div>
                                <div style="display: inline-block;margin-left: 15px;">
                                    <Button type="success">智能设计</Button>
                                </div>

                            </div>
                            <div style="margin-left:120px;">
                                <Tag closable color="blue">文件一</Tag>
                                <Tag closable color="green">文件二</Tag>
                                <Tag closable color="red">文件三</Tag>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="item.type==='requirement'">
                        <Tabs type="card">
                            <TabPane label="文件一">
                                文件一解析内容
                            </TabPane>
                            <TabPane label="文件二">
                                文件二解析内容
                            </TabPane>
                            <TabPane label="文件三">
                                文件三解析内容
                            </TabPane>
                        </Tabs>
                    </div>
                    <div  v-else-if="item.type==='planningResult'">
                        设计成果
                    </div>
                    <span v-else>
                        {{item.data.v1}}
                    </span>
                </TabPane>
            </Tabs>
            <div slot="footer">
                <Button type="ghost" style="" @click="closed">关闭</Button>
            </div>
        </Modal>
    </div>
</template>

<script>

    export default {
        name: 'task-modal',
        props: {
            title: {
                type: String,
                default: ''
            },
            actions: {
                type: Array,
                default: function () {
                    return [];
                }
            },
            tabDatas: {
                type: Array,
                default: function () {
                    return [];
                }
            },
            isShow: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            isShow: function (newVal) {
                this.isShowV = newVal
            },
            tabDatas: function (newVal) {
                this.tabDatas = newVal
            }
        },
        data() {
            return {
                isShowV: false,
                tabDatasV: false
            }
        },
        methods: {
            closed: function () {
                //调用父组件关闭当前窗体
                this.$emit('closed');
            },
        }
    }
</script>
<style>
    .form-row{
        width: 100%;
        margin-bottom: 10px;
    }
    .form-row span{
        display: inline-block;
        width: 120px;
        text-align:right;
    }
    .form-row input{
        height: 30px;
    }
    .form-row-text{
        width: 100%;
        margin-bottom: 10px;
    }
    .form-row-text span{
        display: inline-block;
        width: 120px;
        text-align:right;
    }
</style>
