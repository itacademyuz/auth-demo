const express = require('express')
const path  = require('path')
const engine = require('ejs-mate')
const app = express()
app.engine('ejs', engine)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../templates/views'))
require('./dbconfig').connect()
app.get('/', (req, res)=>{
    return res.render('index')
})


app.get('/register', (req, res)=>{
    res.render('register')
})

app.post('/register', (req, res)=>{
    // TODO: ro'yxatdan o'tish kodini yozishimiz kerak
})
app.get('/login', (req, res)=>{
    res.render('login')
})

app.post('/login', (req, res)=>{
    // TODO: profilga kirish kodini yozishimiz kerak
})
app.get('/secret', (req, res)=>{
    // TODO: bu sahifani faqat saytga a'zo bo'lgan foydalanuvchilargina ko'rishi kerak
    res.render('secret')
})
app.listen(3001, ()=>{
    console.log(`Port raqami 3001`);
})