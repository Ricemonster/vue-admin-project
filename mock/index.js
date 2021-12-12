import Mock from 'mockjs'

// 所有用户表
const Allusers = [
        { name: 'admin', password: '123456', roles: 'admin' },
        { name: 'visitor', password: '123456', roles: 'visitor' },
    ]
    // 所有用户的token比对表
const tokens = ['admintemplatepro_admin', 'admintemplatepro_visitor']

const UserGroup = [{
        name: '管理员',
        role: 'admin',
        views: [],
        operate: []
    },
    {
        name: '游客',
        role: 'visitor',
        views: [],
        operate: []
    }
]
Mock.mock('/user/login', 'post', (config) => {
    let { username, password } = JSON.parse(config.body)
    if ((username === 'admin' || username === 'visitor') && password === '123456') {
        if (username === 'admin') {
            return {
                status: 'success',
                msg: '登录成功',
                data: {
                    token: Users[0]
                }
            }
        } else {
            return {
                status: 'success',
                msg: '登录成功',
                data: {
                    token: Users[1]
                }
            }
        }

    } else {
        return {
            status: 'error',
            msg: '用户名或密码错误！'
        }
    }
})

Mock.mock('/user/getuserinfo', 'post', (config) => {
    let { token } = JSON.parse(config.body)
    if (token == tokens[0]) {
        return {
            status: 'success',
            msg: '成功',
            data: {
                name: '管理员',
                roles: 'admin',
                id: 0
            }

        }
    } else if (token == tokens[1]) {
        return {
            status: 'sucess',
            msg: '成功',
            data: {
                name: '游客',
                roles: 'visitor',
                id: 0
            }
        }
    }
})

Mock.mock('/user/getAllUser', 'post', (config) => {
    return {
        status: 'success',
        msg: '成功',
        data: Allusers
    }
})


Mock.mock('/user/getUserGroup', 'post', (config) => {
    return {
        status: 'success',
        msg: '成功',
        data: UserGroup
    }
})