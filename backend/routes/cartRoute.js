import express from 'express';
import {addToCart,removeFromCart,getCart} from '../controllers/cartController.js';
import authMiddleware from '../middleware/auth.js'

const cartRouter = express.Router();

cartRouter.use('/get',authMiddleware,getCart);
cartRouter.use('/add',authMiddleware,addToCart);
cartRouter.use('/remove',authMiddleware,removeFromCart);

export default cartRouter;