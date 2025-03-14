import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config.js"
// import cartRouter from "./routes/cartRoute.js";


// /app config
const app = express()
const port = process.env.PORT || 3000;



// middleware
app.use(express.json());
 
//db connection
connectDB();

app.use(cors({
    origin: "https://food-dev-frontend-demo-2.vercel.app",
    credentials: true
}));

// api end points
app.get("/", (req, res) => {
    res.send("Server is running on Vercel!");
  });

app.use("/api/food", foodRouter)
app.use("/images", express.static("uploads"))
app.use("/api/user",userRouter)
// app.use("/api/cart",cartRouter)

console.log("Environment Variables:");
console.log("JWT_SECRET:", process.env.JWT_SECRET);
console.log("PORT:", process.env.PORT);


// app.use((req, res, next) => {
//     console.log(`Received ${req.method} request to ${req.url}`);
//     next();
// });

// app.get("/",(req,res)=>{
//     res.send("API Working")
// })

app.listen(port, ()=>{
    console.log(`Server Started on http://localhost:${port}`)
})
