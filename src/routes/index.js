import userRouter from "./user.route.js";

const AppRouters = (app) =>{
    app.use("/api/user", userRouter)
}

export default AppRouters