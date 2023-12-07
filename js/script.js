let mudarTema = document.getElementById("mudarTema");
let atualizar = document.getElementById("atualizar");
var tema = window.localStorage.getItem("tema");
if(tema == "escuro") {
    document.body.classList.add("dark"); 
}
mudarTema.addEventListener("click",()=>{
   document.body.classList.toggle("dark");
   if(tema == "escuro"){
    window.localStorage.setItem("tema","claro");
   }
   else{
    window.localStorage.setItem("tema","escuro");
   }
   
})

atualizar.addEventListener('click',()=>{
    window.location.reload(); 
})

