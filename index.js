const express = require('express');
const app = express();
const port = process.env.PORT||5050;

app.get('/',(req,res)=>{
    res.send("hello dev")
})
app.listen(port,()=>{
    console.log(`server running on port:${port}`);
})




