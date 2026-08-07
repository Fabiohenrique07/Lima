/*adiciona um "listener" para o movimento do mouse*/
window.addEventListener("mousemove", (elemento) => {
    const estrelinha = document.createElement("div");
    estrelinha.className = "estrelinha";
    estrelinha.innerHTML = "&#10022;";
    /*acrescentando a classe "estrelinha"*/
    document.body.appendChild(estrelinha);

    const pos = "(${elemnto.clientX}, ${elemento.clientY})";
    estrelinha.className = "estrelinha";
    estrelinha.innerHTML = "&#10022";
    estrelinha.style.left = elemento.clientX + "px";
    estrelinha.style.top = elemento.clientY + "px";
    estrelinha.style.position = "fixed";
    estrelinha.innerHTML = "&#10022;";

    const xAleatorio = (Math.random() - 0.5) * 50 + "px";
    estrelinha.style.setProperty("--xAleatorio", xAleatorio);
    
    /*acrescentando a div classe "estrelinha" body*/
    document.body.appendChild(estrelinha);

    //removendo o elemento após o término da animação (800ms)
    setTimeout(()=>{
        estrelinha.remove();
    }, 800)

})