const express = require("express");
const app = express();

const cors  = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");


dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes);

//mongoose connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }).then(() => {
        console.log("DB Connection Successful!")
    }).catch((err) => console.log(err));

 app.listen(process.env.PORT, ()=>{
    console.log(`Server started on Port ${process.env.PORT}`);
})