
import ApplicationError from "../../error-handler/applicationError.js";
import PostModel from "./post.model.js";

export default class PostController{


    getAllPost(req, res){
        const posts = PostModel.getAllPost();
        res.status(200).send(posts);
    }

    getById(req, res){
        const id = req.params.id;
        const post = PostModel.getById(id);
        if(!post){
            throw new ApplicationError("Post Not Found ",404);
        }
        res.status(200).send(post);
    }

    
    getByUserId(req, res){
        const id = req.userId;
       
        console.log(id)
        const post = PostModel.getByUserId(id)
        if(!post){
            throw new ApplicationError("Post Not Found ",404);
        }
        res.status(200).send(post);
    }
    
    addPost(req, res){
        const { caption} = req.body;
        let userId=req.userId;
        console.log(userId)
        let imgUrl = './src/feature/post/fileUpload/'+ req.file.filename
        PostModel.addPost(userId, caption,imgUrl);

        res.status(201).send("Post was successfully")
        
    }

    deletePost(req, res){
        const id = req.params.id;
        const userId = req.userId;
        PostModel.deletePost(id, userId);
        res.status(200).send("Post Wwas deleted")
    }

    update(req,res){
        const id = req.params.id;
        const userId = req.userId;
        const { caption} = req.body;
        let imgUrl = './src/feature/post/fileUpload/'+ req.file.filename
        PostModel.updatePost(id,userId, caption,imgUrl);
        res.status(200).send("Post was Updated")


    }
}