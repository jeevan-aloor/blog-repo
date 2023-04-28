const {BlogModel}=require('../Model/blogSchema')
const {Router}=require('express')

const allBlogRoute=Router()
allBlogRoute.get("/",async(req,res)=>{
    // res.send("hello")
    try {
        let data=await BlogModel.find()
        res.send(data)
        
    } catch (error) {
        console.log(error)
        console.log("error")
        
    }
})

allBlogRoute.post("/addblog",async(req,res)=>{
    const {blogtitle,blogdescription,blogimage,blogdate}=req.body
    try {
        let data=new BlogModel({
            blogtitle,
            blogdescription,
            blogimage,
            blogdate:Date()
        })
        await data.save()
        res.send("blog added")
        console.log("blog added")

        
    } catch (error) {
        console.log(error)
        console.log("error")
        
    }

})


module.exports={
    allBlogRoute
}