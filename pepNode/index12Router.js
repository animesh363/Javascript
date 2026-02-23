import express from 'express';
import userRouter from './Routers/userRouter.js';
import productRouter from './Routers/productRouter.js';

const app = express();

app.listen(8080,()=>{
    console.log("Server Started!");
})



app.use("/api/users", userRouter )
app.use("/api/products", productRouter )