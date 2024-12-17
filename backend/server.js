import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoutes.js';

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/food', foodRouter);

app.get('/', (req,res)=>{
    res.send('Hello World');
});

app.listen(PORT, ()=>console.log(`sever running on http://localhost:${PORT}`));
