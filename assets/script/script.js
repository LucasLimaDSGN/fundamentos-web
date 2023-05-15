const nome = document.getElementById("nome")

let txtNome = document.getElementById("txtNome")

function validaNome(){
    if(nome.value.length<2){
        txtNome.innerHTML = "O nome precisa ter 2 ou mais caracteres"
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = "O campo nome foi preenchido corretamente"
        txtNome.style.color = 'green'
    }

}
const email = document.getElementById("email")

let txtEmail = document.getElementById("txtEmail")

function validaEmail (){
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = "O email digitado é invalido"
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = "O campo email foi preenchido corretamente"
        txtEmail.style.color = 'green'
    }

}