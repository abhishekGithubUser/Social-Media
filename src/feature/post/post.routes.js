import express from 'express'
import PostController from './post.controller.js';
import { upload } from '../../middelware/fileUpload.middelware.js';

const postRoute = express.Router();

const postController = new PostController()

postRoute.get("/all",postController.getAllPost);

postRoute.get('/:id',postController.getById);

postRoute.get('/',postController.getByUserId);

postRoute.post('/',upload.single("imgUrl"),postController.addPost)

postRoute.delete("/:id",postController.deletePost);

postRoute.put('/:id',upload.single("imgUrl"),postController.update);


export default postRoute;