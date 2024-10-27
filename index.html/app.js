var password = document.getElementById("password");
var length = 12;

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var number = "01234567879"
var symbol = "@#$%^&*()_-{}[]<>/?''\|";

function CreatePassword(){
    let password = "";
    password +=uppercase[Math.floor(Math.random() * uppercase.length)];
    password +=lowercaseercase[Math.floor(Math.random() * lowercase.length)];
    password +=number[Math.floor(Math.random() * number.length)];
    password +=symbol[Math.floor(Math.random() * symbol.length)];
}
