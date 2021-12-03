import Mock from 'mockjs'


const token = 'admintemplatepro_123456'
Mock.mock('/user/login', 'post', (config) => {
    let { username, password } = JSON.parse(config.body)
    if ((username === 'admin' || username === 'visitor') && password === '123456') {
        return {
            status: 'success',
            msg: '登录成功',
            data: {
                token
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