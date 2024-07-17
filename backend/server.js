import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRoute from './routes/userRoute.js'
import 'dotenv/config.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'



// app config
const app = express()
const port = 4000


// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// api endpoints
app.use('/api/food', foodRouter)
app.use('/images', express.static('uploads'))
app.use('/api/user', userRoute)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)



app.get('/',(req,res)=>{
    res.send('API working')
})

app.listen(port, ()=>{
    console.log(`server started on http://localhost:${port}`)
})

//mongodb+srv://bershin:dzYJsYpLWUpGHKqG@cluster0.8qtr3en.mongodb.net/