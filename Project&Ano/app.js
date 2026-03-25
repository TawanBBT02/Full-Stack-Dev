const express = require('express');
const app = express();

// บอก Express ว่าไฟล์ template อยู่ที่โฟลเดอร์ 'views'
app.set('view engine', 'ejs');

// ในไฟล์ app.js
app.get('/', (req, res) => {
    // ใช้คำสั่ง res.render()
    // พารามิเตอร์แรกคือชื่อไฟล์ (ไม่ต้องใส่ .ejs)
    // พารามิเตอร์ที่สองคือ "ข้อมูล" ที่จะส่งไปแสดงผล
    res.render('index', { 
        name: 'สมชาย', 
        date: new Date().toLocaleDateString() 
    });
});

app.get('/ab', (req, res) => {
    // ใช้คำสั่ง res.render()
    // พารามิเตอร์แรกคือชื่อไฟล์ (ไม่ต้องใส่ .ejs)
    // พารามิเตอร์ที่สองคือ "ข้อมูล" ที่จะส่งไปแสดงผล
    res.render('about', { 
        name: 'สมชาย', 
        date: new Date().toLocaleDateString() 
    });
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});