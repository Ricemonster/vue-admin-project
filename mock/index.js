import Mock from 'mockjs'


const token = '[admintemplatepro_admin,admintemplatepro_visitor]'
Mock.mock('/user/login', 'post', (config) => {
    let { username, password } = JSON.parse(config.body)
    if ((username === 'admin' || username === 'visitor') && password === '123456') {
        if (username === 'admin') {
            return {
                status: 'success',
                msg: '登录成功',
                data: {
                    token: token[0]
                }
            }
        } else {
            return {
                status: 'success',
                msg: '登录成功',
                data: {
                    token: token[1]
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

Mock.mock('/user/getuserinfo', 'post', (config) => {})