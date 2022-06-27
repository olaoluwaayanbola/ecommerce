const express = require('express');
const app = express();
const mongoose = require("mongoose")
const dotenv = require('dotenv');
const authRoute = require("./routes/auth");
const userRoute = require("./routes/User");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/Cart");
const orderRoute = require("./routes/order");
dotenv.config()

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("DB CONNECTED"))
    .catch((err) => console.log(`DB CONNECT ${err}`))

app.listen(3000);

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", cartRoute);






