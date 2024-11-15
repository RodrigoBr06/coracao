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

var fotoLapis=document.querySelector("#lapis")

function lapis1(){
    fotoLapis.src="img/lápisbixinho2.png"  
    

}
function lapis2(){
    fotoLapis.src="img/canetarosa.png"
}
function lapis3(){
    fotoLapis.src="img/canetacolorida.png"
}
function lapis4(){
    fotoLapis.src="img/Screenshot_20240926-204914~2.png"
}
function lapis5(){
    fotoLapis.src="img/Screenshot_20240926-204910~2.png" 
}

lp1.addEventListener("click",lapis1)
lp2.addEventListener("click",lapis2)
lp3.addEventListener("click",lapis3)
lp4.addEventListener("click",lapis4)
lp5.addEventListener("click",lapis5)


//abaixo os botoes da caneta

var cnt1=document.querySelector("#caneta1")
var cnt2=document.querySelector("#caneta2")
var cnt3=document.querySelector("#caneta3")
var cnt4=document.querySelector("#caneta4")
var cnt5=document.querySelector("#caneta5")

var fotoCaneta=document.querySelector("#caneta")

function caneta1(){
    fotoCaneta.src="img/lápisbixinho2.png"  
    

}
function caneta2(){
    fotoCaneta.src="img/canetarosa.png"
}
function caneta3(){
    fotoLapis.src="img/canetacolorida.png"
}
function caneta4(){
    fotoCaneta.src="img/Screenshot_20240926-204914~2.png"
}
function caneta5(){
    fotoCaneta.src="img/Screenshot_20240926-204910~2.png" 
}

cnt1.addEventListener("click",caneta1)
cnt2.addEventListener("click",caneta2)
cnt3.addEventListener("click",caneta3)
cnt4.addEventListener("click",caneta4)
cnt5.addEventListener("click",caneta5)

// abaixo os botoes da mochila

var mch1=document.querySelector("#caneta1")
var mch2=document.querySelector("#caneta2")
var mch3=document.querySelector("#caneta3")
var mch4=document.querySelector("#caneta4")
var mch5=document.querySelector("#caneta5")

var fotoMochila=document.querySelector("#muchila")

function muchila1(){
    fotoMochila.src="img/mochilaStit.png"
    

}
function muchila2(){
    fotoMochila.src="img/mochila2.png"
}
function muchila3(){
    fotoMochila.src="img/mochila.png"
}
function muchila4(){
    fotoMochila.src="img/mochila branca.png"
}
function muchila5(){
    fotoMochila.src="img/Screenshot_20240926-204910~2.png" 
}

mch1.addEventListener("click",muchila1)
mch2.addEventListener("click",muchila2)
mch3.addEventListener("click",muchila3)
mch4.addEventListener("click",muchila4)
mch5.addEventListener("click",muchila5)

// abaixo botoes da pochete

var pch1=document.querySelector("#caneta1")
var  pch2=document.querySelector("#caneta2")
var  pch3=document.querySelector("#caneta3")
var  pch4=document.querySelector("#caneta4")
var  pch5=document.querySelector("#caneta5")

var fotoPochete=document.querySelector("#pochete")

function pochete1(){
    fotoPochete.src="img/lápisbixinho2.png"  
    

}
function pochete2(){
    fotoPochete.src="img/canetarosa.png"
}
function pochete3(){
    fotoPochete.src="img/canetacolorida.png"
}
function pochete4(){
    fotoPochete.src="img/Screenshot_20240926-204914~2.png"
}
function pochete5(){
    fotoPochete.src="img/Screenshot_20240926-204910~2.png" 
}

pch1.addEventListener("click",pochete1)
pch2.addEventListener("click",pochete2)
pch3.addEventListener("click",pochete3)
pch4.addEventListener("click",pochete4)
pch5.addEventListener("click",pochete5)

//abaixo botoes dos cadernos

var cd1=document.querySelector("#caneta1")
var  cd2=document.querySelector("#caneta2")
var  cd3=document.querySelector("#caneta3")
var  cd4=document.querySelector("#caneta4")
var  cd5=document.querySelector("#caneta5")

var fotoCadernos=document.querySelector("#pochete")

function caderno1(){
    fotoPochete.src="img/cadernoemocao.png"
    

}
function caderno2(){
    fotoCadernos.src="img/cadernoemocao.png"
}
function caderno3(){
    fotoCadernos.src="img/cadernosHely.png"
}
function caderno4(){
    fotoCadernos.src="img/pixar.png"
}
function caderno5(){
    fotoCadernos.src="img/pixar2.png"
}

cd1.addEventListener("click",caderno1)
cd2.addEventListener("click",caderno2)
cd3.addEventListener("click",caderno3)
cd4.addEventListener("click",caderno4)
cd5.addEventListener("click", caderno5)

