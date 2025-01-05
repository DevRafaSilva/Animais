export default class tabNav {
  constructor(tabImg, tabConteudo) {
    this.dataIimagemTab = document.querySelectorAll(tabImg);
    this.dataTabConteudo = document.querySelectorAll(tabConteudo);
    // const dataIimagemTab = document.querySelectorAll('[data-imagem-tab]');
    // const dataTabConteudo = document.querySelectorAll('[data-tab-conteudo]');
  }

  tabClick(index) {
    this.dataTabConteudo.forEach((itemAparece) => {
      itemAparece.classList.remove('on');
    });
    this.dataTabConteudo[index].classList.add('on');
  }

  init() {
    this.dataIimagemTab.forEach((itemClick, index) => {
      itemClick.addEventListener('click', () => {
        this.tabClick(index);
      });
    });
  }
}
