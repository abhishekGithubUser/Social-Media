import ApplicationError from '../../error-handler/applicationError.js'

export default class CommentModel{

   

    constructor(userId, postId,comment,id){
        this.id=id;
        this.postId=postId;
        this.comments=getObj(userId,comment);
    }

    static addComment(userId, postId,comment){
        let id = comments.length + 1;
        const postExist=comments.find((p)=> p.postId==postId);
        if(!postExist){
            const commentObj=new CommentModel(userId, postId,comment,id)
            comments.push(commentObj);
        }else{
            const postExistNewUserCommIndex = postExist.comment.findIndex((c)=> c.userId==userId);
            if(postExistNewUserCommIndex !== -1){
                postExist.comment[postExistNewUserCommIndex]={
                    userId:userId,
                    userComment:comment
                }
            }else{
                let newUserComment = {
                    userId:userId,
                    userComment:comment
                }
                postExist.comment.push(newUserComment)
            }
        }
    }

    static getPostComment( postId){
        const comment = comments.find((c)=> c.postId==postId);
        return comment;
    }

    static updateComment(postId,userId,comment){
        const post = comments.find((c)=> c.postId==postId);
        if(post){
            const userCommentIndex= post.comment.findIndex(u=> u.userId==userId);
            if(userCommentIndex !== -1){
                let newCom={
                    userId:userId,
                    comment:comment
                }
                post.comment[userCommentIndex] =newCom
            }else{
                throw new ApplicationError("This user hase No Comment on this Post",404);
            }
        }else{
            throw new ApplicationError("Post not found ",400);
        }


    }

    static deleteComment(postId,userId){
        const post = comments.find((c)=> c.postId==postId);
        if(post){
            const userCommentIndex= post.comment.findIndex(u=> u.userId==userId);
            if(userCommentIndex !== -1){
                
                post.comment.splice(userCommentIndex,1) 
            }else{
                throw new ApplicationError("This user hase No Comment on this Post ! Delete request are Denay",404);
            }
        }else{
            throw new ApplicationError("Post not found ",400);
        }
    }

}

function getObj(userId,msg) {
    const obj={
        userId:userId,
        userComment:msg
    }
    let newArr=[]
    newArr.push(obj);
    return newArr;
}

const comments=[
    {
        id:1,
        postId:2,
        comment:[{
            userId:1,
            userComment:"This post was WOW"
        }]
    }
]