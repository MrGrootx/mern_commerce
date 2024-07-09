import express from "express";
import dotenv from "dotenv";

import connecDB from './database/db.js';



dotenv.config();

const app = express()


app.get('/', (req, res) => {
   res.send('Hello World!')
});


app.listen(process.env.PORT, () => {
   console.log('App listening on port 3000!');
   connecDB();
});