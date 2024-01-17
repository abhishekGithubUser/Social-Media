import ApplicationError from "../../error-handler/applicationError.js";

export default class PostModel{
    
    constructor(userId, caption, imgUrl,id){
        this.id= id;
        this.userId = userId;
        this.caption=caption;
        this.imgUrl=imgUrl;
    }

    static addPost(userId, caption, imgUrl){
        let id = posts.length+1;
        const newpost = new PostModel(userId, caption, imgUrl,id);
        posts.push(newpost);
    }

    static getAllPost(){
        return posts;
    }

    static getById(id){
        const post=posts.find((p)=> p.id==id);
        return post;
    }

    
    static getByUserId(id){
        const post=posts.filter((p)=> p.userId==id);
        return post;
    }


    static deletePost(id, userId){
        const foundPostInex = posts.findIndex((p)=> p.id == id && p.userId == userId);
        if(foundPostInex == -1){
            throw new ApplicationError("This user Post not found",404);
        }
        posts.splice(foundPostInex,1);
    }

    static updatePost(id,userId, caption,imgUrl){
        const foundPostInex = posts.findIndex((p)=> p.id == id && p.userId == userId);
        if(foundPostInex == -1){
            throw new ApplicationError("This user not Authories to change!! ",404);
        }
        const newPost ={
            id:id,
            userId:userId,
            caption:caption,
            imgUrl:imgUrl
        }

        posts[foundPostInex]=newPost;
    }
}

const posts = [
    new PostModel(1,"this is the 1 Post","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXD4O07nqZ4mOhxDhErP9Y1yxrjlhob1bbA&usqp=CAU",1),
    new PostModel(2,"this is the 2 Post","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3zRrfPRojkiRY51ivaRTZjxBJasTfP4JPRw&usqp=CAU",2),
    new PostModel(2,"this is the 3 Post","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXD4O07nqZ4mOhxDhErP9Y1yxrjlhob1bbA&usqp=CAU",3),
    new PostModel(2,"this is the 4 Post","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-W6ziGGO-8yiMnM4IMC51NbyluBx-7JOI7A&usqp=CAU",4),
]