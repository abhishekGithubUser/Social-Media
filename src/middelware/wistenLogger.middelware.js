import winston from "winston";

const logger = winston.createLogger({
    level:"info",
    format: winston.format.json(),
    defaultMeta:{ service : "request Logger" },
    transports:[
        new winston.transports.File({filename : "logger.txt"})
    ]
})


 export  const loggerMiddelware =  (req, res, next)=>{
    const data = `\n ${req.url} ${JSON.stringify(req.body)}`
    logger.info(data);

    next();
 }