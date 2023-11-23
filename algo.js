const dp2=document.querySelector("#dp2")
const caixaAr=document.querySelector("#a2")
const botselctxt=document.querySelector("#b4")  // obtive todos os elementos necessários para minha estrutura 
const botremotxt=document.querySelector("#b3")
const botaddtxtdp=document.querySelector("#b2")
const botaddtxtat=document.querySelector("#b1")
let i=0
const imt=document.querySelector("#li")
const ttx=document.querySelector("#ttx")
const textos=["Texto 1","Texto 2","Texto 3","Texto 4","Texto 5","Texto 6"]

const remodest=()=>{
   const dest=[...document.querySelectorAll(".dest")]
   dest.map((i)=>{
       i.classList.remove("dest")
   })
}
const adiciona=(txt)=>{
    //const cp=document.createElement("div")      //criei uma função que cria elementos idênticos aos da minha estrutura 
    //cp.setAttribute("class", "es")
    const nel=document.createElement("div")
    nel.setAttribute("id","n"+i)
    nel.setAttribute("class", "ds")
    nel.innerHTML=(txt)  
    nel.addEventListener("click",(e)=>{
        remodest()
      e.target.classList.toggle("dest")
    })

    //cp.appendChild(nel)

    return nel
}

textos.map((e)=>{
   const atx=adiciona(e)
    dp2.appendChild(atx)
    i++
})

const inpselec=()=>{
   const ecr=[...document.querySelectorAll(".dest")]
   return ecr[0]
}                        
    botselctxt.addEventListener("click",()=>{
    const chf=inpselec()                    //configurei um botão que verifica qual dos meus elementos estão selecionados 
    if(chf==undefined){
    alert("Selecione um texto primeiro!")
    }else{
    alert("Você selecionou o " + chf.textContent)
    }
    })     
                                               
    botremotxt.addEventListener("click",()=>{
        const chf=inpselec()
        try{                                    
        chf.remove()
       } 
        catch(ai){
         alert("Selecione um texto para ser removido!")
        }
        })
 
    botaddtxtat.addEventListener("click",()=>{
        const chf=inpselec()
        try{                                        //configurei um botão que adicona um novo elemento anteriormente do elemento selecionado 
            if(ttx.value!=""){
            const adta=adiciona(ttx.value)
            dp2.insertBefore(adta,chf)
        }else{
         alert("você não deve adicionar um texto vazio!")  
        }
       } 
        catch(ai){
         alert("Selecione um texto primeiro, para determinar onde o texto novo ira ficar!")
        } 
        })
        botaddtxtdp.addEventListener("click",()=>{
            const chf=inpselec()                      
            try{                                 //configurei um botão que adicona um novo elemento a frente do elemento selecionado 
                if(ttx.value!=""){ 
                const adta=adiciona(ttx.value)
                dp2.insertBefore(adta,chf.nextSibling)
            }else{
             alert("você não deve adicionar um texto vazio!")
            }
           } 
            catch(ai){
             alert("Selecione um texto primeiro, para determinar onde o texto novo ira ficar!")
            } 
            }) 