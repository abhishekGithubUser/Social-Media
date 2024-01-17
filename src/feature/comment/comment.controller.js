import CommentModel from "./comment.model.js";

export default class CommentController{

    addComment(req, res){
        const userId = req.userId;
        const { postId, userComment} = req.body;
        console.log(userId,postId,userComment)
        CommentModel.addComment(userId,postId,userComment);
        res.status(200).send("Comment Was Add on this post");
    }

    getComment(req, res){
        const postId = req.params.id;
        const comment=CommentModel.getPostComment(postId);
        res.status(200).send(comment);
    }

    updateComment(req, res){
        const userId = req.userId;
        const { postId, userComment} = req.body;
        console.log(userId,postId,userComment)
        CommentModel.updateComment(postId,userId,userComment);
        res.status(200).send("Comment Was Update Successfully on this post");
    }

    deleteComment(req, res){
        const postId = req.params.postId;
        const userId = req.userId;
        CommentModel.deleteComment(userId,postId);
        res.status(200).send("Comment was Delete Successfully");
    }
}