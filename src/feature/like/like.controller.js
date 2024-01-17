import ApplicationError from "../../error-handler/applicationError.js";
import likeModel from "./like.model.js";

export default class LikeController{

    toggelPostLike(req, res){
        const postId = req.params.postId;
        const userId= req.userId;
        console.log(postId,userId)
        const post=likeModel.toggelLikesByPostId(postId,userId);
        res.status(200).json({mag:"Likes of this user successfully toggel", Post : post})
    }

    getOnePostLikes(req, res){
       const postId = req.params.postId;
       const likes=likeModel.getByPostId(postId);
       console.log(postId)
        if(!likes){
            throw new ApplicationError("Post like not Found!!",404)
        }

        res.status(200).json({massage:"UserIds Which user are likes",like:likes});
    }
}