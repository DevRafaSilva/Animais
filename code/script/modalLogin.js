export default class modalLogin {
  constructor(modal, fechar, linkModal) {
    this.dataModaLogin = document.querySelector(modal);
    this.dataFecharModal = document.querySelector(fechar);
    this.dataLinkLogin = document.querySelector(linkModal);
  }

  init() {
    this.dataFecharModal.addEventListener('click', () => {
      this.dataModaLogin.classList.remove('on-modal');
    });

    this.dataLinkLogin.addEventListener('click', () => {
      this.dataModaLogin.classList.add('on-modal');
    });

    window.addEventListener('click', (target) => {
      if (
        target.target == this.dataModaLogin &&
        this.dataModaLogin.classList.contains('on-modal')
      ) {
        this.dataModaLogin.classList.remove('on-modal');
      }
    });
  }
}
