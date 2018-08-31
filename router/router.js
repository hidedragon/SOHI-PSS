// router.js
// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    children: [
        {
            path: '/index',
            title: '主页',
            name: 'index',
            icon: 'ios-home'
        }
    ]
}

export const mainRouter = {
    path: '/front',
    name: 'front-index',
    title: '主页'
}

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/planning-manage',
        icon: 'ios-albums-outline',
        title: '规划管理',
        name: 'planning-manage',
        children: [
            {
                path: '/planning-manage/requirement-commit',
                title: '规划任务提交',
                name: 'planning-manage-requirement-commit',
                icon: 'star'
            },
            {
                path: '/planning-manage/planning-design',
                title: '规划任务设计',
                name: 'planning-manage-planning-design',
                icon: 'ios-compose-outline'
            },
            {
                path: '/planning-manage/planning-approve',
                title: '规划任务审批',
                name: 'planning-manage-planning-approve',
                icon: 'android-contact'
            },
            {
                path: '/planning-manage/planning-archived',
                title: '已归档任务',
                name: 'planning-manage-planning-archived',
                icon: 'ios-briefcase-outline'
            }
        ]
    },
    {
        path: '/tables',
        icon: 'ios-grid-view',
        title: '表格',
        name: 'tables',
        children: [
            {
                path: '/tables/dragable-table',
                title: '可拖拽排序',
                icon: 'arrow-move',
                name: 'tables-dragable-table'
            },
            {
                path: '/tables/editable-table',
                title: '可编辑表格',
                icon: 'edit',
                name: 'tables-editable-table'
            }
        ]
    },
    {
        path: '/error-page',
        icon: 'android-sad',
        title: '错误页面',
        name: 'errorpage',
        children: [
            {
                path: '/error-page/403',
                title: '403错误',
                name: 'error-page-403',
                icon: 'close-circled'
            },
            {
                path: '/error-page/404',
                title: '404错误',
                name: 'error-page-404',
                icon: 'alert-circled'
            },
            {
                path: '/error-page/500',
                title: '500错误',
                name: 'error-page-500',
                icon: 'settings'
            }
        ]
    }
]
