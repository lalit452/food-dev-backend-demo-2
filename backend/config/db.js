import mongoose from "mongoose";

// export const connectDB = async ()=>{
//     await mongoose.connect('mongodb+srv://lalitkumarmeena452:9928878728@cluster0.o3kvy.mongodb.net/food-del')
//     .then(()=>console.log("DB Connected"));
// }

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://lalitkumarmeena452:9928878728@cluster0.suz7i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(()=>console.log("DB Connected"));
}