document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault();

    const formData = new FormData(this)

    emailjs.send().then(response =>
    {
        document.getElementById('response-message').innerText = 'Mensagem enviada com Sucesso!';
        this.reset();
    })

    .catch(error =>
    {
        document.getElementById('response-message').innerText = 'Erro ao enviar a Mensagem!!'
        console.error('erro ao enviar o e-mail', error)
    });
});
