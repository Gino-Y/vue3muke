/*
* 环境配置封装
*/
const env = import.meta.env.MODE || 'prod' ;
const EnvConfig = {
    dev:{
        baseApi:'/',
        mockApi:'https://www.fastmock.site/mock/3f178a38b0322459463415ac2343eb61/api'
    },
    test:{
        baseApi:'//test.futurefe.com/api',
        mockApi:'https://www.fastmock.site/mock/3f178a38b0322459463415ac2343eb61/api'
    },
    prod:{
        baseApi:'//futurefe.com/api',
        mockApi:''
    }
}
export default {
    env,
    mock:true,
    ...EnvConfig[env]
}