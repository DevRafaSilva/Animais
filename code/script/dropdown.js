export default class dropdown {
  constructor(dataDrodown, dataHover) {
    this.dataDropDown = document.querySelector(dataDrodown);
    this.dataHoverDropdown = document.querySelector(dataHover);
    this.adicionarClasseOver = this.adicionarClasseOver.bind(this);
    this.removerClasseLeave = this.removerClasseLeave.bind(this);
    this.adicionarClasseAoClick = this.adicionarClasseAoClick.bind(this);
  }

  adicionarClasseOver() {
    this.dataDropDown.classList.add('on');
  }

  removerClasseLeave() {
    if (typeof this.dataDropDown.dataset.outside == 'undefined') {
      this.dataDropDown.classList.remove('on');
    }
  }

  adicionarClasseAoClick(event) {
    event.preventDefault();
    this.dataDropDown.classList.add('on');
    this.dataDropDown.setAttribute('data-outside', 'sair');
  }

  clickFora(event) {
    if (
      !this.dataDropDown.contains(event.target) &&
      !this.dataHoverDropdown.contains(event.target)
    ) {
      this.dataDropDown.removeAttribute('data-outside');
      this.dataDropDown.classList.remove('on');
    }
  }

  init() {
    this.dataHoverDropdown.addEventListener(
      'mouseover',
      this.adicionarClasseOver,
    );
    this.dataDropDown.addEventListener('mouseleave', this.removerClasseLeave);

    this.dataHoverDropdown.addEventListener('click', (event) =>
      this.adicionarClasseAoClick(event),
    );
    window.addEventListener('click', (event) => this.clickFora(event));
  }
}
