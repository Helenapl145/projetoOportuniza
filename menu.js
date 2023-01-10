const navBtn = document.querySelector(".cell-navegacao")
const baseNavegacao = document.querySelector(".base-navegacao")

navBtn.addEventListener("click", () => {
    const visibilidade = baseNavegacao.getAttribute("data-visible")

    if(visibilidade === "false"){
        baseNavegacao.setAttribute('data-visible', true)
        navBtn.setAttribute('aria-expanded', true)
      
    }else if(visibilidade === "true"){
        baseNavegacao.setAttribute('data-visible', false)
        navBtn.setAttribute('aria-expanded', false)
    }
})