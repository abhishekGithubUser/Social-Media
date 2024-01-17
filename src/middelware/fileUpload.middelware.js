
import multer from "multer";

const diskStroage = multer.diskStorage({
    destination: function(req,file, cb){
        cb(null,'./src/feature/post/fileUpload')
    },
    filename:function(req,file,cb){
        let fileName = Math.random()*2E9 +"-"+file.originalname;
        cb(null,fileName);
    }
})


export const upload = multer({storage:diskStroage});