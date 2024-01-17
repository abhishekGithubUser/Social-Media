import express from 'express';
import LikeController from './like.controller.js';

const likeRoutes = express.Router();

const likeController = new LikeController();
likeRoutes.get('/toggle/:postId',likeController.toggelPostLike)
likeRoutes.get('/:postId',likeController.getOnePostLikes)


export default likeRoutes;