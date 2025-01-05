export default class Slider {
  constructor(sliderContainer, sliderImgItem, sliderNav, anterior, proximo) {
    this.sliderContainer = document.querySelector(sliderContainer);
    this.sliderNav = document.querySelectorAll(sliderNav);
    this.sliderImgItem = document.querySelectorAll(sliderImgItem);

    this.btnAnterior = document.querySelector(anterior);
    this.btnProximo = document.querySelector(proximo);

    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.centroDaTela = this.centroDaTela.bind(this);
    this.opacityTabNav = this.opacityTabNav.bind(this);
    this.navegarProxima = this.navegarProxima.bind(this);
    this.navegarAnterios = this.navegarAnterios.bind(this);
    this.distancia = 100;
    this.posicaoSalva = 100;
    this.contador = 0;
  }

  onStart(event) {
    event.preventDefault();
    this.startX = event.clientX;
    console.log(event);
    if (event.type !== 'touchstart') {
      if (event.clientX >= 400) {
        this.navegarProxima();
      } else {
        this.navegarAnterios();
      }
    } else {
      if (event.changedTouches[0].clientX >= 200) {
        this.navegarProxima();
      } else {
        this.navegarAnterios();
      }
    }
    this.sliderContainer.addEventListener('mousemove', this.onMove);
  }

  opacityTabNav() {
    this.sliderNav.forEach((itemClick, index) => {
      itemClick.addEventListener('click', () => {
        this.contador = index;
        this.sliderNav.forEach((itemAdd) => {
          itemAdd.classList.remove('on');
        });
        itemClick.classList.add('on');
      });
    });

    let filtro = this.sliderImgItem.forEach((item, index) => {
      if (this.sliderImgItem[index].classList == 'on') {
        this.sliderNav[index].classList.add('on');
      } else {
        this.sliderNav[index].classList.remove('on');
      }
    });
  }

  navegarAnterios() {
    if (this.contador > 0) {
      this.contador -= 1;
      this.sliderContainer.style.transform = `translate3D(-${
        this.contador * this.sliderImgItem[0].width
      }px, 0, 0)`;
      this.centroDaTela(this.contador);
      this.opacityTabNav(this.contador);
    }
  }
  navegarProxima() {
    if (this.contador < 5) {
      this.contador += 1;
      this.sliderContainer.style.transform = `translate3D(-${
        this.contador * this.sliderImgItem[0].width
      }px, 0, 0)`;
      this.centroDaTela(this.contador);
      this.opacityTabNav(this.contador);
    }
  }

  centroDaTela(indexImg) {
    let centroDaTela = window.innerWidth / 2;
    this.sliderImgItem.forEach((itemImg) => {
      const rect = itemImg.getBoundingClientRect();
      const leftRect = rect.left + rect.width / 2;
      if (Math.abs(leftRect - centroDaTela) <= 200) {
        itemImg.classList.add('on');
      } else {
        itemImg.classList.remove('on');
      }
    });
    if (indexImg != undefined) {
      this.sliderImgItem.forEach((item, index) => {
        if (index == indexImg) {
          item.classList.add('on');
        } else {
          item.classList.remove('on');
        }
      });
    }
  }

  navegarTab() {
    this.sliderNav.forEach((itemNav, index) => {
      itemNav.addEventListener('click', (event) => {
        this.posicaoSalva = this.sliderImgItem[index].offsetLeft;
        this.sliderContainer.style.transform = `translate3D(-${this.posicaoSalva}px, 0, 0)`;

        this.centroDaTela(index);
      });
    });
  }

  onMove(event) {
    const moverX = event.clientX - this.startX;
    this.distancia = this.posicaoSalva + moverX;
    this.centroDaTela();
    this.opacityTabNav();
    this.sliderContainer.style.transform = `translate3D(-${this.distancia}px, 0, 0)`;
  }

  onEnd() {
    this.posicaoSalva = this.distancia;
    this.sliderContainer.removeEventListener('mousemove', this.onMove);
  }

  addSlideEvent() {
    this.sliderImgItem.forEach((itemImg) => {
      itemImg.addEventListener('mousedown', this.onStart);
      itemImg.addEventListener('touchstart', this.onStart);
    });
    this.sliderContainer.addEventListener('mouseup', this.onEnd);
    this.sliderContainer.addEventListener('touchend', this.onEnd);
  }

  init() {
    this.centroDaTela();
    this.addSlideEvent();
    this.navegarTab();
    this.opacityTabNav();
    this.btnAnterior.addEventListener('click', this.navegarAnterios);
    this.btnProximo.addEventListener('click', this.navegarProxima);
    return this;
  }
}
