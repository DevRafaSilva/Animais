export default function menuMobile() {
  const dataMenuMobile = document.querySelector('[data-menu-mobile]');
  const dataMenuUl = document.querySelector('[data-menu-ul]');
  const dataTopoMenuMobile = document.querySelector('[data-topo-menu-mobile]');

  dataMenuMobile.addEventListener('click', () => {
    dataMenuUl.classList.toggle('on');
    dataTopoMenuMobile.classList.toggle('on');
  });

  window.addEventListener('click', (event) => {
    if (!dataMenuMobile.contains(event.target)) {
      dataMenuUl.classList.remove('on');
      dataTopoMenuMobile.classList.remove('on');
    }
  });
}
