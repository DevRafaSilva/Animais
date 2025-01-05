export default function bitcoinFetch() {
  const dataBitcoin = document.querySelector('[data-bitcoin]');
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((dados) => {
      let bitcoinVendaPreco = (1000 / dados.BRL.sell).toFixed(4);
      dataBitcoin.innerText = bitcoinVendaPreco;
    });
}
