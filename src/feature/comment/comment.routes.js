import express from 'express'
import CommentController from './comment.controller.js';

const commentRoutes = express.Router();

const commentController = new CommentController();


commentRoutes.get('/:id', commentController.getComment);
commentRoutes.post("/",commentController.addComment);
commentRoutes.put("/",commentController.updateComment);
commentRoutes.delete('/:postId',commentController.deleteComment)

export default commentRoutes;