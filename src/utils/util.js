// 获取所有路由信息
export function getallroutes() {
    let routes = []
    let files = require.context("@/router/modules", false, /\.js$/);
    files.keys().forEach(key => {
        routes.push(files(key).default);
    });
    return routes
}
// 根据 roles 构建动态路由表
export function buildroutes(allroutes, roles) {
    let routes = []
    allroutes.forEach((item) => {
        if (item.meta && item.meta.roles) {
            // 处理嵌套路由的权限判断
            if (item.children) {
                routes.push(_nestedRoute(item, roles))
            } else if (item.meta.roles.indexOf(roles) != -1) {
                routes.push(item)
            }
        } else {
            if (item.children) {
                routes.push(_nestedRoute(item, roles))
            } else {
                routes.push(item)
            }
        }
    })
    return _firstRoute(routes)
}

//  路由去重
export function repeatRoutes(allroutes, nowroutes) {
    return nowroutes.filter(item => !allroutes.some(ele => ele.path === item.path))
}

// 将导航页移到路由数组的第一项
function _firstRoute(allroutes) {
    let obj = {}
    allroutes.forEach((item, index) => {
        if (item.path == '/') {
            obj = item
            allroutes.splice(index, 1)
            return
        }
    })
    allroutes.unshift(obj)
    return allroutes
}


// 处理嵌套路由的权限判断
function _nestedRoute(item, roles) {
    let childrenList = []
    item.children.forEach((item, index) => {
        if (item.meta && item.meta.roles) {
            if (item.meta.roles.indexOf(roles) != -1) {
                childrenList.push(item)
            }
        } else {
            childrenList.push(item)
        }

    })
    item.children = childrenList
    return item
}

//  路由在history模式中,在地址栏中直接输入url会到404页面中的问题
export function history_is404(allroutes, nowroute) {
    let is404 = false
    allroutes.forEach(item => {
        if (item.path == nowroute) {
            is404 = true
        }
    })
    return is404

}