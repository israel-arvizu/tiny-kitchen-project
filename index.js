import express from "express";
import { orders } from './orders.js'
import { MONGO_URI } from './config/keys.js'
import mongoose from "mongoose";

const app = express();

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("MongoDB connected!"))
    .catch((err) => console.log(err))

app.use(express.json());
app.use("/api/orders", orders)

const port = process.env.PORT || 5001
const callback = () => console.log(`Server is running on port ${port}`)


app.listen(port, callback)
