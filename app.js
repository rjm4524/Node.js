const express = require('express'); //npm install express --save
const app = express();

//app.use('/폴더',express.static(__dirname+'/폴더'))

app.use('/Script',express.static(__dirname+"/working.js"))

app.listen(8000,()=> { 
    console.log("누군가 들어왔습니다.")
});

//처리해주는 루틴 추가 (Spring의 Controller 역할)
app.get('/',(req,res)=>{ //http 명령어중 get으로 요청했을때
    console.log('첫화면')
    res.send("어서오세요 첫화면입니다.")
}) 

app.get('/about',(req,res)=>{
    console.log('about')
    res.sendFile(__dirname+'/about.html')
}) 

app.get('/working',(req,res)=>{
    console.log('working')
    res.sendFile(__dirname+'/working.html')
}) 

