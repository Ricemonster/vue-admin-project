import Mock from 'mockjs'

Mock.mock('/user/login', 'post', (config) => {
    return config;
})