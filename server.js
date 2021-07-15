if(process.env.NODE_ENV!=='production')
{
    require('dotenv').config();
}
const express=require('express');
const app=express();
app.use(express.urlencoded({ extended: false }));
const expressLayouts=require('express-ejs-layouts');
const indexRouter=require('./routes/index')
const authorRouter=require('./routes/authors')
app.set('view engine','ejs');
app.set('views',__dirname + '/views');
app.set('layout','layouts/layout');
app.use(expressLayouts)
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/',indexRouter);
app.use('/authors',authorRouter);
const mongoose=require('mongoose');
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology: true})
.then(()=>console.log(`Mongo DB connected`))
.catch(()=>console.log(`Mongo DB not connected`))
const port=process.env.PORT||3000;
app.listen(port,()=>console.log(`Listening to ${port}...`))