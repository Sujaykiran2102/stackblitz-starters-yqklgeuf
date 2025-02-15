const express = require('express');
const { resolve } = require('path');
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
import Menuroutes from "../routes/Menuroutes"

const app = express();
const PORT = process.env.PORT || 3010;
const uri = process.env.MONGOD_URI;

app.use(express.static('static'));
app.use(express.json());
app.use(cors());
app.use("/menu",Menuroutes);

mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("MongoDB Connected"))
.catch((err)=> console.error("MongoDB Connection Error",err));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});