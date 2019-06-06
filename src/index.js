/* jshint esversion: 6 */
import './scss/main.scss';
import { updateTeam } from './assets/js/team';
import { initMap } from './assets/js/map';
import { updateNavbar } from './assets/js/navbar';
const $ = window.$;

$(window).on('scroll resize', () => {
  updateNavbar();
});

$(window).on('resize', () => {
  updateTeam();
});

updateNavbar();
updateTeam();
initMap();


// used for webpack-dev-server hot loading
if (module && module.hot) module.hot.accept();
