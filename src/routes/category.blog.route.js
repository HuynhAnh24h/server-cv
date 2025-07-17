import { Router } from "express"
import {createCteBlog,getAllCteBlog,getCteBlogById,updateCteBlog, deleteCteBlog} from "../controllers/category.controller.js"
import { verifyToken } from "../middlewares/verifyToken.js"
const categoryBlogRoute = Router()

categoryBlogRoute.post("/create-cte-blog",verifyToken, createCteBlog)
categoryBlogRoute.get("/get-all-cte-blog", getAllCteBlog)
categoryBlogRoute.get("/get-cte-blog-id/:cte_blog_id", getCteBlogById)
categoryBlogRoute.put("/update-cte-blog/:cte_blog_id",updateCteBlog)
categoryBlogRoute.delete("/delete-cte-blog/:cte_blog_id",verifyToken, deleteCteBlog)

export default categoryBlogRoute