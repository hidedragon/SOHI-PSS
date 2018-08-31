const {mysqlDb,Sequelize} = require('../store');

/**
 * 规划任务信息
 */
let planningTask = {
    id: {
        type: Sequelize.STRING,
        primaryKey:true,
        title:"id",
    },
    name: {
        type: Sequelize.STRING,
        title:"任务名称"
    },
    type: {
        type: Sequelize.STRING,
        title:"任务类型"
    },
    uploadFiles: {
        type: Sequelize.TEXT,
        title:"上传文件"
    },
    reuirements: {
        type: Sequelize.TEXT('long'),
        title:"任务需求"
    },
    resultFiles: {
        type: Sequelize.TEXT,
        title:"结果文件"
    },
    resultAnalyse: {
        type: Sequelize.TEXT('long'),
        title:"结果文件智能数据"
    },
    customer: {
        type: Sequelize.STRING,
        title:"业主"
    },
    designer: {
        type: Sequelize.STRING,
        title:"设计者"
    },
    approver: {
        type: Sequelize.STRING,
        title:"审批人"
    },
    createTime: {
        type: Sequelize.DATE,
        title:"创建时间"
    },
    commitTime: {
        type: Sequelize.DATE,
        title:"提交时间"
    },
    designTime: {
        type: Sequelize.DATE,
        title: "设计完成时间"
    },
    approvedTime: {
        type: Sequelize.DATE,
        title:"审批通过时间"
    },
    flowState: {
        type: Sequelize.STRING,
        title:"流程状态",
        desc: "draft 草稿"
    }
}



let sourceFileModel = mysqlDb.define('t_planning_task', planningTask, {
    freezeTableName: true // Model 对应的表名将与model名相同
})
sourceFileModel.sync({force: false});


module.exports = {
    sourceFileModel,
    sourceFile,
    sourceFileDataModel,
    sourceFileData
}