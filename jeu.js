let button = document.getElementById ('button')
let message = document.getElementById ('message')
let form = document.getElementById ('form')
let link = document.getElementById ('link')

const secretNumber = Math.floor(Math.random() *100);
let attemps = 3 ;

button.onclick = function(){
const input = document.getElementById("input");
if(input.value != ""){
    if(input.value < secretNumber){
        message.innerText = 'le nombre est plus grand que' + input.value + '';
        message.style.color = "#999"
    }else if (input.value > secretNumber){
        message.innerText = 'le nombre est plus petit que' + input.value + '';
        message.style.color ='#999'
    }
    if(attemps == 0){
        message.innerText = 'Vous avez perdu , il fallait trouver' + secretNumber + '!';
        message.style.color = "red";
        form.style.color = "none";
        link.style.color = "flex";
    }
    attemps--;
    if(input.value == secretNumber){
        message.innerText = 'Bravo, vous avez trouvé le nombre qui est ' + secretNumber +'!';
        message.style.color = "green";
        form.style.color = "none";
        link.style.color = "flex";
    }
}else{
    message.innerText = "Le champ est vide !";
    message.style.color = "red";
}
}