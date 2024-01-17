export default class likeModel{

  

    static toggelLikesByPostId(postId,userId){
        const post = likes.find((l)=> l.postId==postId);
        const idIndex = post.likesUserIds.findIndex(id=> id==userId)
        if(idIndex == -1){
           post.likesUserIds.push(userId);
           return post;
        }else{

            post.likesUserIds.splice(idIndex,1);
            return post;
        }
    }

    static getByPostId(postId){
        const like = likes.find((l)=> l.postId==postId)
        
        return like;
    }

}

const likes=[
    {
        id:1,
        postId:1,
        likesUserIds:[1,2]
    },
    {
        id:2,
        postId:2,
        likesUserIds:[1,2]
    },
    {
        id:2,
        postId:3,
        likesUserIds:[1,2]
    },
    {
        id:2,
        postId:5,
        likesUserIds:[1,2]
    }
]