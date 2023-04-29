const express = require('express')
const app = express()

//监听客户端的get和post请求，并向客户端想要具体的内容
app.get('/user', (req, res) => {
    //向客户端响应一个json对象
    res.send({ name: 'zs', age: 20, gender: '男' })
})
app.post('/user', (req, res) => {
    res.send('请求成功')
})


app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})