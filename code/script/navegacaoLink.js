export default class navegacaoLista {
  constructor(links, linkConteudo) {
    this.dataLinkClick = document.querySelectorAll(links);
    this.dataContainerLink = document.querySelectorAll(linkConteudo);
  }

  distanciaLink(index, event) {
    event.preventDefault();
    const topo = this.dataContainerLink[index].offsetTop;
    window.scroll({
      top: topo,
      behavior: 'smooth',
    });
  }

  addLinkEvents() {
    this.dataLinkClick.forEach((itemClick, index) => {
      itemClick.addEventListener('click', (event) => {
        this.distanciaLink(index, event);
      });
    });
  }
  init() {
    this.addLinkEvents();
  }
}
