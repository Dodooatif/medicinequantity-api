const express = require("express")
const connectDB = require("./config/connectDB")
const dotenv = require("dotenv")
const morgan = require("morgan")
const medication = require("./routes/medication")
const user = require("./routes/user")
const cors = require("cors")

dotenv.config();

const app = express();

//connection
connectDB();

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors())

//routes
app.use("/api/DA/medications", medication);
app.use("/api/DA/users", user);


//home route
app.get("/", (req,res) => {
    res.send("<h1> Welcome </h1>")
})

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`server started on port ${port}`))