export default function animaNumeros() {
  const dataNumeros = document.querySelectorAll('[data-numeros]');
  dataNumeros.forEach((itemNumero) => {
    let concatenador = 0;
    const total = +itemNumero.innerText;
    const incremento = Math.floor(total / 100);
    const animacaoNumeros = setInterval(() => {
      concatenador += incremento;
      itemNumero.innerText = concatenador;

      if (concatenador > total) {
        itemNumero.innerText = total;
        clearInterval(animacaoNumeros);
      } else {
      }
    }, 50 * Math.random());
  });
}
