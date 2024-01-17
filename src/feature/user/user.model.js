import ApplicationError from "../../error-handler/applicationError.js";

export default class UserModel{

    constructor(name, email, password ){
        this.id = users.length+1;
        this.name=name;
        this.email=email;
        this.password=password

    }


    static add(name , email, password){
        let user = users.find((u)=> u.email == email);
        if(user){
             throw new ApplicationError("User already exists",422)
        }
        let newUser = new UserModel(name,email,password);
        users.push(newUser);
    }


    static signIn(email, password){
        let user = users.find((u)=> u.email==email && u.password==password);
        if(!user){
            throw new ApplicationError("Invalid Credential", 400)
        }
        return user;
    }


    static getAll(){
        return users;
    }
} 

let users=[
    {
        id: 1,
        name:"user1",
        email: "user1@social.com",
        password: "Password1"
    },
    {
        id: 2,
        name:"user2",
        email: "user2@social.com",
        password: "Password2"
    }
];