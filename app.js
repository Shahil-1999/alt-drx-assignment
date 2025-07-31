const express = require('express')
const app = express()
const arithmaticRoutes = require('./routes/arithmatic.routes')
const historyRoutes = require('./routes/history.routes')
// require('body-parser')
app.use(express.json())
app.use('/calculations',  arithmaticRoutes)
app.use('/history', historyRoutes)
app.listen(3000, ()=>{
    console.log(`server listining on port 3001:  http://localhost:${3000}`);
})