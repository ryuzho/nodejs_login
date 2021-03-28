"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click",login);

function login(){
    const req = {
        id : id.Value,
        psword : psword.value,
    };
    console.log(req);
}