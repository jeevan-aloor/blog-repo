const mongoose=require('mongoose')
const myBlogSchema=mongoose.Schema({
    blogimage:String,
    blogtitle:String,
    blogdescription:String,
    blogdate:String
})

const BlogModel=mongoose.model("blogs",myBlogSchema)
module.exports={
    BlogModel
}