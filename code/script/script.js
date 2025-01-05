import tabNav from './modaltab.js';
import animacaoAoScroll from './animacaoAoScroll.js';
import animaNumeros from './animacaonumeros.js';
import horarioFuncionamento from './horarioFuncionamento.js';
import modalLogin from './modalLogin.js';
import dropdown from './dropdown.js';
import menuMobile from './menuMobile.js';
import bitcoinFetch from './bitcoinfetch.js';
import navegacaoLista from './navegacaoLink.js';
import faqClick from './faqClick.js';
import tooltip from './tooltip.js';
import slider from './slider.js';

const navegacaoLinks = new navegacaoLista(
  '[data-link-click]',
  '[data-container-link]',
);
navegacaoLinks.init();
const faqClickClass = new faqClick('[data-titulo-faq]', '[data-conteudo-faq]');
faqClickClass.init();

const animarScroll = new animacaoAoScroll('[data-anima-scrool]');
animarScroll.init();

const modalTabNav = new tabNav('[data-imagem-tab]', '[data-tab-conteudo]');
modalTabNav.init();

const modalLoginConst = new modalLogin(
  '[data-modal-login]',
  '[data-fechar-modal]',
  '[data-link-login]',
);
modalLoginConst.init();

const tooltipInit = new tooltip(
  '[data-tooltip]',
  '[data-mapa]',
  '[data-mapa-img]',
);
tooltipInit.init();

const dropdownMenu = new dropdown('[data-drop-down]', '[data-hover-dropdown]');
dropdownMenu.init();

const horario = new horarioFuncionamento(
  '[data-horario-abre]',
  '[data-fechado]',
  '[data-semana]',
);
horario.init();

const sliderEvent = new slider(
  '[data-slider-container]',
  '[data-img-slide-item]',
  '[data-slider-nav]',
  '[data-anterior]',
  '[data-proximo]',
);
sliderEvent.init();

animaNumeros();
menuMobile();
bitcoinFetch();
