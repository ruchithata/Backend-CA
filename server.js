const express = require('express');
const connectDB = require('./src/database/db');
const userRouter = require('./src/controllers/users');

require('dotenv').config({
    path: 'src/config/.env'
});

const PORT = process.env.PORT;
const URI = process.env.URI;

const app = express();

app.use(express.json());
connectDB(URI);

app.get('/', (req,res)=>{
    res.send("Hello world!");
});

app.use('/api', userRouter);

app.listen(PORT, async()=>{
    try{
        console.log(`Server is running in ${PORT}`);
    }
    catch(err){
        console.log("Error running the server");
    }
});