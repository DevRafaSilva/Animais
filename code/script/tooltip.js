export default class tooltip {
  constructor(tooltip, mapa, mapaImg) {
    this.dataTooltip = document.querySelector(tooltip);
    this.dataMapa = document.querySelector(mapa);
    this.dataMapaImg = document.querySelector(mapaImg);
    this.criarDiv = document.createElement('div');
  }

  criarTooltip(event) {
    this.criarDiv.classList.add('tooltip');
    this.dataMapa.appendChild(this.criarDiv);
    this.criarDiv.innerText = this.dataTooltip.dataset.tooltip;
    this.criarDiv.style.left = `${event.clientX + 10}px`;
    this.criarDiv.style.top = `${event.clientY + 10}px`;
    this.dataMapaImg.addEventListener('mousemove', (moveEvent) => {
      this.criarDiv.style.left = `${moveEvent.clientX + 30}px`;
      this.criarDiv.style.top = `${moveEvent.clientY + 120}px`;
    });
  }

  init() {
    this.dataMapaImg.addEventListener('mouseover', (event) => {
      this.criarTooltip(event);
    });
    this.dataMapaImg.addEventListener('mouseleave', () => {
      this.criarDiv.remove();
      this.dataMapaImg.removeEventListener('mouseover', this.dataMapaImg);
      this.dataMapaImg.removeEventListener('mousemove', this.dataMapaImg);
      this.dataMapaImg.removeEventListener('mouseleave', this.dataMapaImg);
    });
  }
}
