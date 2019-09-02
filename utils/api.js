import request from './request'
// const app = getApp()
// const { basePath_data, basePath_home } = app.globalData

// mock
// const basePath_home = 'https://yapi-inc.dingteam.com/mock/58/home';
// const basePath_data = 'https://yapi-inc.dingteam.com/mock/53/data';
// const basePath_design = 'https://yapi-inc.dingteam.com/mock/28/design';
// const basePath_org = 'https://yapi-inc.dingteam.com/mock/43/org';

// 本地环境
// const basePath_home = 'https://test.dingteam.com/local/api/home';
// const basePath_data = 'https://test.dingteam.com/local/api/data';
// const basePath_design = 'https://test.dingteam.com/local/api/design';
// const basePath_org = 'https://test.dingteam.com/local/v/org';
// const basePath_open = 'https://test.dingteam.com/local/open';

// 华安本地
// export const basePath = 'http://e-test.dingteam.com:9999/home/h5';
// const basePath_home = 'http://e-test.dingteam.com:9999/home';
// const basePath_data = 'http://e-test.dingteam.com:9999/data';
// const basePath_design = 'http://e-test.dingteam.com:9999/design';
// const basePath_org = 'http://e-test.dingteam.com:8088/org';
// const basePath_open = 'http://e-test.dingteam.com:8089/open';

// 测试环境
// export const basePath = 'http://e-test.dingteam.com/home/h5';
// const basePath_home = 'http://e-test.dingteam.com/home';
// const basePath_data = 'http://e-test.dingteam.com/data';
// const basePath_design = 'http://e-test.dingteam.com/design';
// const basePath_org = 'http://e-test.dingteam.com/org';
// const basePath_open = 'http://e-test.dingteam.com/open';

// 预发环境
export const basePath = 'https://e-pre.dingteam.com/home/h5';
const basePath_home = 'https://e-pre.dingteam.com/home';
const basePath_data = 'https://e-pre.dingteam.com/data';
const basePath_design = 'https://e-pre.dingteam.com/design';
const basePath_org = 'https://e-pre.dingteam.com/org';
const basePath_open = 'https://e-pre.dingteam.com/open';

// 线上环境
// export const basePath = 'https://e.dingteam.com/home/h5';
// const basePath_home = 'https://e.dingteam.com/home';
// const basePath_data = 'https://e.dingteam.com/data';
// const basePath_design = 'https://e.dingteam.com/design';
// const basePath_org = 'https://e.dingteam.com/org';
// const basePath_open = 'https://e.dingteam.com/open';

// 开发环境
// const basePath_data = 'https://yapi-inc.dingteam.com/mock/53/data';
// const basePath_design = 'https://yapi-inc.dingteam.com/mock/28/design';
// const basePath_org = 'https://yapi-inc.dingteam.com/mock/43/org';


// 获取OSS上传Token
export const getOssToken = (data = {}) =>
    request(basePath_open + '/oss/gettoken', data, 'post')

// 获取Token
export const getToken = (data = {}) =>
    request(basePath_home + '/service/getUserToken', data, 'post')

// 获取应用列表
export const getAppList = (data = {}) =>
    request(basePath_data + '/app/list', data, 'post')

// 获取应用
export const getApps = (data = {}) =>
    request(basePath_data + '/app/get', data, 'post')

// 当前应用待处理任务数
export const workflowTodoCount = (data = {}) =>
    request(basePath_data + '/workflow/todoCount', data, 'post')

// 获取最新定义
export const workflowDesign = (data = {}) =>
    request(basePath_data + '/workflow/design', data, 'post')

// 新增提交
export const workflowSave = (data = {}) =>
    request(basePath_data + '/workflow/save', data, 'post')

// 更新|流程提交
export const workflowUpdate = (data = {}) =>
    request(basePath_data + '/workflow/update', data, 'post')

// 获取流程表单
export const workflowGet = (data = {}) =>
    request(basePath_data + '/workflow/get', data, 'post')

// 任务列表
export const workflowListTask = (data = {}) =>
    request(basePath_data + '/workflow/listTask', data, 'post')

// 日志接口
export const workflowLogs = (data = {}) =>
    request(basePath_data + '/workflow/logs', data, 'post')

// 已读未读操作
export const workflowReadStatus = (data = {}) =>
    request(basePath_data + '/workflow/readStatus', data, 'post')

// 流程表单数据列表
export const workflowList = (data = {}) =>
    request(basePath_data + '/workflow/list', data, 'post')

// 默认新建权限
export const workflowAuth = (data = {}) =>
    request(basePath_data + '/workflow/auth', data, 'post')

//获取表单设计
export const formDesign = (data = {}) =>
    request(basePath_data + '/form/design', data, 'post')

//获取表单权限
export const formAuth = (data = {}) =>
    request(basePath_data + '/form/auth', data, 'post')

//获取表单数据
export const formGet = (data = {}) =>
    request(basePath_data + '/form/get', data, 'post')

//获取表单数据列表
export const formList = (data = {}) =>
    request(basePath_data + '/form/list', data, 'post')

//新增表单数据
export const formSave = (data = {}) =>
    request(basePath_data + '/form/save', data, 'post')

//更新表单数据
export const formUpdate = (data = {}) =>
    request(basePath_data + '/form/update', data, 'post')

//删除表单数据
export const formRemove = (data = {}) =>
    request(basePath_data + '/form/remove', data, 'post')

//批量删除表单数据
export const formRemoveBatch = (data = {}) =>
    request(basePath_data + '/form/removeBatch', data, 'post')

//获取流水号
export const getSerialNo = (data = {}) =>
    request(basePath_data + '/form/getSerialNo', data, 'post')

//历史记录
export const getRecords = (data = {}) =>
    request(basePath_data + '/form/records', data, 'post')

//获取报表布局
export const reportDesign = (data = {}) =>
    request(basePath_data + '/report/design', data, 'post')

//获取报表数据
export const reportData = (data = {}) =>
    request(basePath_data + '/report/data', data, 'post')

//获取表单评论列表
export const formListComment = (data = {}) =>
    request(basePath_data + '/form/listComment', data, 'post')

//保存表单评论
export const formSaveComment = (data = {}) =>
    request(basePath_data + '/form/saveComment', data, 'post')

//获取流程表单评论列表
export const workflowListComment = (data = {}) =>
    request(basePath_data + '/workflow/listComment', data, 'post')

//保存流程表单评论
export const workflowSaveComment = (data = {}) =>
    request(basePath_data + '/workflow/saveComment', data, 'post')

//获取用户信息
export const adminDetail = (data = {}) =>
    request(basePath_design + '/admin/detail', data, 'post')

//获取下级部门和人员
export const getOrgChild = (data = {}) =>
    request(basePath_org + '/addressbook/getOrgChild', data, 'post')

//模糊搜索部门和人员
export const getOrgSearch = (data = {}) =>
    request(basePath_org + '/addressbook/getOrgSearch', data, 'post')

//获取角色组
export const getRoleGroup = (data = {}) =>
    request(basePath_org + '/addressbook/getRoleGroup', data, 'post')

//获取角色下人员
export const getRoleUsers = (data = {}) =>
    request(basePath_org + '/addressbook/getRoleUsers', data, 'post')

//模糊搜索角色和人员
export const getRoleSearch = (data = {}) =>
    request(basePath_org + '/addressbook/getRoleSearch', data, 'post')

//当前版本
export const accountCurrent = (data = {}) =>
    request(basePath_org + '/account/current', data, 'post')