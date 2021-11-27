import Mock from 'mockjs'

Mock.mock('/user/login', 'post', (config) => {
    console.log(config.body)
    const { username, password } = config.body
    return {
        username: username,
        password: password
    };
})