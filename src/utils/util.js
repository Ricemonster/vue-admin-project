// 获取所有路由信息
export function getallroutes() {
    let routes = []
    let files = require.context("@/router/modules", false, /\.js$/);
    files.keys().forEach(key => {
        routes.push(files(key).default);
    });
    return routes
}
//  根据 roles 生产路由表
export function buildroutes(allroutes, roles) {
    let routes = []
    allroutes.forEach((item) => {
        if (item.meta && item.meta.roles) {
            if (item.meta.roles.indexOf(roles) != -1) {
                routes.push(item)
            }
        } else {
            routes.push(item)
        }
    })
    return routes
}

//  路由去重
export function repeatRoutes(allroutes, nowroutes) {
    return nowroutes.filter(item => !allroutes.some(ele => ele.path === item.path))
}