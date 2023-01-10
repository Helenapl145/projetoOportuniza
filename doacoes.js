document.getElementById('btnSubmit').addEventListener('click', (event) => {
    event.preventDefault()

    const name = document.getElementById('nomeDoador').value
    const email = document.getElementById('emailDoador').value
    const valor = document.getElementById('valorDoado').value
    const cartao = document.getElementById('numCard').value
 
    console.table([name,email,valor,cartao])
})


