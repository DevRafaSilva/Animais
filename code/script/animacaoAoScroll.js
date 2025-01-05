export default class animacaoAoScroll {
  constructor(conteudoAnima) {
    this.dataAnimaScrool = document.querySelectorAll(conteudoAnima);
    this.windoDoTopo = window.innerHeight * 0.6;
    this.getDistance = this.getDistance.bind(this);
  }

  getDistance() {
    this.distancia = [...this.dataAnimaScrool].map((item) => {
      const topo = item.getBoundingClientRect().top;
      return {
        item,
        offSetTopo: topo - this.windoDoTopo,
      };
    });
    this.adicionarAnima(this.distancia);
  }

  adicionarAnima(elemento) {
    elemento.forEach(({ offSetTopo, item }) => {
      if (offSetTopo < 0) item.classList.add('on');
    });
  }

  init() {
    if (this.dataAnimaScrool && this.dataAnimaScrool.length > 0) {
      window.addEventListener('scroll', this.getDistance);
      this.getDistance();
    }
  }
}
