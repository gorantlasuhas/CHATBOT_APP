const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')

const userRoutes = require("./routes/userRoutes")
const app = express()

app.use(cors())
app.use(express.json())
app.use("/users", userRoutes)

const PORT = process.env.PORT || 5000;
const MONGOOSE_URL = "mongodb://chatbot:chatbot@ac-hwpd5r2-shard-00-00.jehxqb8.mongodb.net:27017,ac-hwpd5r2-shard-00-01.jehxqb8.mongodb.net:27017,ac-hwpd5r2-shard-00-02.jehxqb8.mongodb.net:27017/?ssl=true&replicaSet=atlas-lzgio8-shard-0&authSource=admin&retryWrites=true&w=majority"

mongoose.connect(MONGOOSE_URL, {useNewUrlParser: true})
.then(()=> app.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}`);
}))
.catch(err=>{
    console.log(err)
})