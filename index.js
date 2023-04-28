const express=require('express')
const {connection}=require('./db')
const {allBlogRoute} =require('./Routes/BlogRoutes')
const cors=require('cors')

const app=express()
app.use(cors({
    origin:"*"
}))

app.use(express.json())

app.use("/",allBlogRoute)


app.listen(8000,async ()=>{
    try {
        await connection
        console.log("connection done")
        
    } catch (error) {
        console.log("connection not done")
        
    }
    console.log("server is running 8000")
})


// const date = new Date();
// console.log( Date());