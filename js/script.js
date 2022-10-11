// Animação scroll reveal
ScrollReveal({ reset: true });
ScrollReveal().reveal('.scrol', {delay: 100});



//Animção de digitação titulo
const titulo = document.querySelector('.titulo')
function digitacao(texto, contador ) {

    if (contador < texto.length) {
        setTimeout(() => {
            titulo.textContent += texto.charAt(contador);
            contador++;
            digitacao(texto, contador);
    }, 40)
    }
}
digitacao("Entregas expressas RJ", 0)