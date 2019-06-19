const express=require('express')
const app=express();

app.get('*',(req,res)=>{//所有请求过来
    res.status(200);
    res.setHeader('content-type','charset=uft-8;text-html');
    res.end('ok');
})

app.listen(4000,()=>{//监听4000端口
    
    console.log('启动成功');
}) 