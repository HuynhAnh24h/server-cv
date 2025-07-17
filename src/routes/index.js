import userRouter from "./user.route.js"
import skillRouter from "./skill.route.js"
import servicesRoute from "./service.route.js"
import educationRoute from "./education.route.js"
import categoryBlogRoute from "./category.blog.route.js"
import categoryProjectRoute from "./category.project.route.js"


const AppRouters = (app) =>{
    app.use("/api/user", userRouter)
    app.use("/api/skill", skillRouter)
    app.use("/api/service", servicesRoute)
    app.use("/api/education", educationRoute)
    app.use("/api/category-blog",categoryBlogRoute)
    app.use("/api/category-project",categoryProjectRoute)
}

export default AppRouters