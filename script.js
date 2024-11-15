const botao=document.querySelector(".btn")
const nav= document.querySelector(".nav")
const div= document.querySelector("#conteiner")


botao.addEventListener("click", () =>
nav.classList.toggle("active"))
//para ativar o efeito rosa

botao.addEventListener("click", function (){
    if(div.style.display==="none"){
        div.style.display="block"
         
    }else{
        div.style.display="none"
        //para sumir a div
        
      
    }
})
;// começa os botoes
var lp1=document.querySelector("#lapis1")
var lp2=document.querySelector("#lapis2")
var lp3=document.querySelector("#lapis3")
var lp4=document.querySelector("#lapis4")
var lp5=document.querySelector("#lapis5")
var lp6=document.querySelector("#botao6")
var fotoLapis=document.querySelector("#lapis")

function ft1(){
    fotoLapis.src="img/lápisbixinho2.png"  
    

}
function ft2(){
    fotoLapis.src="img/canetarosa.png"
}
function ft3(){
    fotoLapis.src="img/canetacolorida.png"
}
function ft4(){
    fotoLapis.src="img/Screenshot_20240926-204914~2.png"
}
function ft5(){
    fotoLapis.src="img/Screenshot_20240926-204910~2.png" 
}

lp1.addEventListener("click",ft1)
lp2.addEventListener("click",ft2)
lp3.addEventListener("click",ft3)
lp4.addEventListener("click",ft4)
lp5.addEventListener("click",ft5)
