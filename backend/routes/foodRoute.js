import express from "express";
import { addFood, listFood ,removeFood} from "../controllers/foodController.js";
import multer from "multer"

const foodRouter = express.Router(); //using this router we can add get ,post delete meathod


// Image storage Engine

const storage = multer.diskStorage({ 
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`) 
    }
})

const upload = multer({storage:storage})
foodRouter.post("/add",upload.single("image") ,addFood)
foodRouter.get("/list",listFood )
foodRouter.post("/remove", removeFood)
// foodRouter.post("/remove", (req, res) => {
//     res.json({ message: "Remove route hit" });
// });




export default foodRouter;