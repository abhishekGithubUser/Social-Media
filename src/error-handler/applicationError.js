
export default class ApplicationError extends Error{

    constructor(massage, code){
        super(massage)
        this.code=code;
    }
}