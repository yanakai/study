import Mock from 'mockjs' //es6语法引入mock模块

Mock.mock("http://localhost:8090/user",{
    'name': '@name',//随机生成用户名
    'email': '@email',//随机生成email
    'age|1-10': 5
});
Mock.mock("http://localhost:8090/menu",{
    'id': '@ircrement',//随机生成姓名
    'name': 'menu',
    'order|10-20': 12
})