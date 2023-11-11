const express =require('express')
const cors = require('cors')
const  mongoose  = require('mongoose')
const UserRoutes = require('./routes/UserRoutes');

const app = express()

app.use(cors());
app.use(express.json());



mongoose
    .connect("mongodb://localhost:27017/netflix-app",{
        useNewUrlParser:true,
        useUnifiedTopology:true, 
    } ).then(()=>{
        console.log("Netflix Database Connected")
    });

app.use('/api/users', UserRoutes);

app.listen(8000, console.log("server started"));