const express=require('express');
const app=express();
const expressLayouts=require('express-ejs-layouts');
const indexRouter=require('./routes/index')
app.set('view engine','ejs');
app.set('views',__dirname + '/views');
app.set('layout','layouts/layout');
app.use(express.static('public'));
app.use('/',indexRouter);
const mongoose=require('mongoose');
mongoose.connect(process.env.DATABASE_URL,{useNewUrlparser:true})
.then(()=>console.log(`Mongo DB connected`))
.catch(()=>console.log(`Mongo DB not connected`))
const port=process.env.PORT||3000;
app.listen(port,()=>console.log(`Listening to ${port}...`))