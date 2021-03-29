"use strict";

class UserStorage{
    static #users = {
        id : ["jiho", "김팀장", "나개발"],
        psword : ["1234","1234","123456"],
        name : ["우리밋","홍길동","나개발"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }
}

module.exports = UserStorage;