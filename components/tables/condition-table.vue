<template>
    <div>
        <Row :gutter="10">
            <Col span="24">
                <Card>
                    <p slot="title">
                        <Icon type="pinpoint"></Icon>
                        规划任务列表
                    </p>
                    <Row>
                        <Input v-model="searchConName" icon="search" @on-change="handleSearch" placeholder="请输入关键字搜索..." style="width: 300px" />
                    </Row>
                    <Row style="margin-top: 10px;">
                        <i-button type="primary" size="small" style="margin-left: 5px;" :key="item.title"
                                  v-for="item in buttons" @click="item.onClick">{{item.title}}</i-button>
                    </Row>
                    <Row class="margin-top-10 searchable-table-con1">
                        <Table :columns="tableColumns" :data="datas"></Table>
                    </Row>
                </Card>
            </Col>

        </Row>
    </div>
</template>

<script>

export default {
    name: 'condition-table',
    props: {
        tableColumns: {
            type:Array,
            default:function () {
                return [];
            }
        },
        tableDatas:{
            type:Array,
            default:function () {
                return [];
            }
        },
        buttons:{
            type:Array,
            default:function () {
                return [];
            }
        },
        conditions:{
            type:Array,
            default:function () {
                return [];
            }
        },
    },
    data () {
        return {
            searchConName: '',
            datas: []
        };
    },
    methods: {
        search (data, argumentObj) {
            let res = data;
            let dataClone = data;
            for (let argu in argumentObj) {
                if (argumentObj[argu].length > 0) {
                    res = dataClone.filter(d => {
                        return d[argu].indexOf(argumentObj[argu]) > -1;
                    });
                    dataClone = res;
                }
            }
            return res;
        },
        handleSearch () {
            this.datas = this.search(this.datas, {name: this.searchConName});
        }
    },
    mounted () {
        this.datas = this.tableDatas;
    },
    watch: {
        tableDatas:function (newVal) {
            this.datas = newVal;
        }
    }
};
</script>
<style lang="less">
    @import "../../assets/css/common.less";
    @import './components/table.less';
</style>
