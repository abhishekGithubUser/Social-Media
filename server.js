import express from 'express'
import cors from 'cors'
import userRoutes from './src/feature/user/user.routes.js';
import ApplicationError from './src/error-handler/applicationError.js';
import bodyParser from 'body-parser';
import postRoute from './src/feature/post/post.routes.js';
import jwtAuth from './src/middelware/jwtAuth.middelware.js';
import likeRoutes from './src/feature/like/like.routes.js';
import commentRoutes from './src/feature/comment/comment.routes.js';
import { loggerMiddelware } from './src/middelware/wistenLogger.middelware.js';
import swagger from 'swagger-ui-express';
import apiDocs from './swagger.json' assert { type:"json"};


    const app = express();



    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(cors())
    app.use(loggerMiddelware)
    app.use("/api-docs", swagger.serve , swagger.setup(apiDocs))

    app.use('/api/user',userRoutes);
    app.use("/api/posts",jwtAuth,postRoute)
    app.use("/api/likes",jwtAuth,likeRoutes)
    app.use("/api/comments",jwtAuth,commentRoutes);

    app.use((err,req,res,next)=>{
        console.log(err);
        if(err instanceof ApplicationError){
            res.status(err.code).send(err.message)
        }

        //  Server Error 
        res.status(500).send("Oops! Something went wrong... Please try again later!")
    })

//  User send the wrong URL
    app.use((req, res)=>{
        res.status(404).send("Api not Found | Plese check the api documention for more api information localhost:3100/api-docs ")
    })

    app.listen(3100,()=>{
        console.log("server listen at port 3100");
    })