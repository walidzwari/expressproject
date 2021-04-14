const express = require ('express');
const app = express();

app.use(date =(req,res,next)=>{
    let newdate=new Date()
    let hours=newdate.getHours()
    let day=newdate.getDay()
    if((hours<9|| hours>17)&&((day==6 || day==0))){
        res.send('closed')
    }
    else{next()}
   
    
})


app.use(express.static(__dirname+'/public'))




app.listen(3000,(err)=>{
    if(err) console.log('server is not running')
    else console.log('server is running on port 3000')
})  