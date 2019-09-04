import express from 'express';

const app = express();
const add = ( a:number , b:number ):number => a+b;

app.get('/',(req,res)=>{
   res.send('Hello');
   console.log(add(5,5))
});

app.listen(5000,()=>console.log('Server running'));