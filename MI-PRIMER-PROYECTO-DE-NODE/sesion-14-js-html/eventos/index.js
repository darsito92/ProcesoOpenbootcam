const hTexto = document.getElementById("h-texto")
console.log(hTexto);

hTexto.addEventListener("cambioTexto",Evento=>{
    console.log(Evento.detail)
    hTexto.innerText = Evento.detail.texto
    hTexto.style.color=Evento.detail.color
})

function cambiarTexto(nuevoTexto,color){
    const Evento = new CustomEvent("cambioTexto",{
        detail:{
            texto:nuevoTexto,
            color
        }
    })
    hTexto.dispatchEvent(Evento)
}