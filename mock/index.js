import Mock from 'mockjs'


const Users = ['admintemplatepro_admin', 'admintemplatepro_visitor']
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
    if (token == Users[0]) {
        return {
            status: 'success',
            msg: '成功',
            data: {
                name: '城外三石',
                roles: 'admin',
                id: 0
            }

        }
    } else if (token == Users[1]) {
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