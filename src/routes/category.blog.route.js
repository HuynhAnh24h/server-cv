import { Router } from "express"
import {createCteBlog,getAllCteBlog,getCteBlogById,updateCteBlog, deleteCteBlog} from "../controllers/category.controller.js"

const categoryBlogRoute = Router()

categoryBlogRoute.post("/create-cte-blog", createCteBlog)
categoryBlogRoute.get("/get-all-cte-blog", getAllCteBlog)
categoryBlogRoute.get("/get-cte-blog-id/:cte_blog_id", getCteBlogById)
categoryBlogRoute.put("/update-cte-blog/:cte_blog_id",updateCteBlog)
categoryBlogRoute.delete("/delete-cte-blog/:cte_blog_id", deleteCteBlog)

export default categoryBlogRoute