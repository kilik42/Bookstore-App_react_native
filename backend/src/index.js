import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import authroutes from './routes/authroutes.js';
// import bookroutes from './routes/bookroutes.js';
// import cartroutes from './routes/cartroutes.js';
// import orderroutes from './routes/orderroutes.js';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

console.log('PORT:', PORT);
app.use("/api/auth", authroutes);
// app.use("/api/books", bookroutes);
// app.use("/api/cart", cartroutes);
// app.use("/api/orders", orderroutes);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});