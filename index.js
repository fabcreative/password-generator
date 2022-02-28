
let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","^","&","(",")","[","]","{","}",",",".",";",":","`","~","/","_","?","=","+","-","'",'"',"<",">",]

let firstPassword = document.getElementById("password-1")
let secondPassword = document.getElementById("password-2")
let thirdPassword = document.getElementById("password-3")
let fourthPassword = document.getElementById("password-4")



function generatePassword() {

    let password = ""

    let passwordLenght = document.getElementById("myRange").value


    for (i=0; i<passwordLenght; i++) {

        let index = Math.floor(Math.random() * 91)
        password += characters[index]
    }

    return password
}

function generateAllPasswords() {

    firstPassword.textContent = generatePassword()
    secondPassword.textContent = generatePassword()
    thirdPassword.textContent = generatePassword()
    fourthPassword.textContent = generatePassword()

}


var slider = document.getElementById("myRange");
var output = document.getElementById("lenght");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}