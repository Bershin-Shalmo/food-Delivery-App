import mongoose from 'mongoose'

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://bershin:dzYJsYpLWUpGHKqG@cluster0.8qtr3en.mongodb.net/Food-DeliveryApp').then(()=>console.log('Database connected'))
}