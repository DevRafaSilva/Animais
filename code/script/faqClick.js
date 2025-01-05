export default class faqClick {
  constructor(dataClick, dataConteudo) {
    this.dataTituloFaq = document.querySelectorAll(dataClick);
    this.dataConteudoFaq = document.querySelectorAll(dataConteudo);
  }

  ativarFaq(index) {
    this.dataConteudoFaq[index].classList.toggle('on');
  }

  init() {
    this.dataTituloFaq.forEach((itemClick, index) => {
      itemClick.addEventListener('click', () => {
        this.ativarFaq(index);
      });
    });
  }
}
