import express from "express"
import mongoose, { connect, mongo } from "mongoose"
import cors from "cors"
import Houses from "../Backend/Routes/Houses.js"



const app = express();
app.use(cors());
app.use(express.json());

// ✅ Mount routes here
app.use("/api/houses", Houses);

app.get("/", (req, res) => {
  res.send("API is running...");
});


//connect to db 

mongoose.connect("mongodb+srv://cruelzoro:6ew4IZQi4doZZp60@rentaldbcluster.xginfmf.mongodb.net/")
.then(()=> console.log("Database Connected"))
.catch((err)=>console.log(err))

app.listen(5000, ()=>{
    console.log("Server Running on port 5000")
})