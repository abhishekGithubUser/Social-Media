import jwt from 'jsonwebtoken'
import ApplicationError from '../error-handler/applicationError.js';

const jwtAuth = (req, res, next)=>{

    // console.log(req.headers);

    const token = req.headers['authorization'];

    if(!token){
        throw new ApplicationError("Unauthorization User", 401);
    }

    try {
        const payload= jwt.verify(token,"K9vbxJmnlWhWLN0WhArE0STFvzjU27wY");
        console.log(payload);

        req.userId = payload.userId;

    } catch (error) {
        res.status(401).send("Unauthories User")
    }

    next();
}

export default jwtAuth;
