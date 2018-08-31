<template>
    <div>
        <condition-table
                :tableDatas="tableDatas"
                :tableColumns="tableColumns"
                :buttons="toolbarBtns"
        ></condition-table>
        <task-modal
                :isShow="showTaskModal"
                title="任务详情"
                @closed="closeModal"
                :tabDatas="tabDatas"
        >
        </task-modal>
    </div>
</template>

<script>
    import conditionTable from '~/components/tables/condition-table'
    import taskModal from '~/components/task'

    export default {
        name: 'requirement-commit',
        components: {
            conditionTable,
            taskModal
        },
        data() {
            return {
                tabDatas: [
                    {
                        label: '任务流程',
                        name: 'taskFlow',
                        type: 'flow',
                        data: {
                            name: '',

                        }
                    },
                    {
                        label: '任务需求',
                        name: 'taskRequirement',
                        type: 'requirement',
                        data: {
                            v1: 'aaa11'
                        }
                    },
                    {
                        label: '设计成果',
                        name: 'planningResult',
                        data: {
                            v1: 'aaa11'
                        }
                    },
                    {
                        label: '日常沟通',
                        name: 'taskChat',
                        data: {
                            v1: 'aaa11'
                        }
                    },
                    {
                        label: '流转记录',
                        name: 'flowHistory',
                        data: {
                            v1: 'bbb'
                        }
                    }
                ],
                showTaskModal: false,
                tableDatas: [
                    {
                        name: 'Aresn',
                        tel: '17712345678'
                    },
                    {
                        name: 'Lison',
                        tel: '17787654321'
                    },
                    {
                        name: 'Lili',
                        tel: '12212345678'
                    },
                    {
                        name: 'Lucy',
                        tel: '13312345678'
                    }
                ],
                tableColumns: [
                    {
                        key: 'name',
                        title: '姓名'
                    },
                    {
                        key: 'tel',
                        title: '电话号码'
                    }
                ]
            }
        },
        computed: {
            toolbarBtns() {
                let btns = [];
                btns.push(
                    {
                        title: "新增",
                        onClick: () => {
                            this.showTaskModal = true;
                        }
                    }
                );
                return btns;
            },
        },
        methods: {
            closeModal: function () {
                this.showTaskModal = false;
            }
        },
        created() {

        }
    }
</script>
<style lang="less">

</style>