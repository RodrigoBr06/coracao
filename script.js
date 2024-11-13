const botao=document.querySelector(".btn")
const nav= document.querySelector(".nav")
const div= document.querySelector("#conteiner")


botao.addEventListener("click", () =>
nav.classList.toggle("active"))

botao.addEventListener("click", function (){
    if(div.style.display==="none"){
        div.style.display="block"
    }else{
        div.style.display="none"
    }
})