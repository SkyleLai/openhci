/* jshint esversion: 6 */
import './scss/main.scss';
import { updateTeam } from './assets/js/team';
import { initMap } from './assets/js/map';
const $ = window.$;

const scene = document.getElementById('js-scene');
const parallax = new Parallax(scene);

const scene1 = document.getElementById('js-scene1');
const parallax1 = new Parallax(scene1);

$('.m-menu-opener').on('click', function() {
  $('.menu').toggleClass('active');
  $('.black-screen').toggleClass('active');
  $('.m-menu-opener').toggleClass('close');
});

$('.menu-btn,.black-screen').on('click', function() {
  $('.menu').removeClass('active');
  $('.black-screen').removeClass('active');
  $('.m-menu-opener').removeClass('close');
});

const controller = new ScrollMagic.Controller();
const sectionHeight =
  $('#landing').height() - ($('header').height() == 100 ? 100 : 0);
const sceneHeader = new ScrollMagic.Scene({
  triggerElement: '#landing',
  duration: sectionHeight,
  triggerHook: 0
})
  .setClassToggle('header', 'atLanding')
  .addTo(controller);
$(window).on('resize', function() {
  const sectionHeight =
    $('#landing').height() - ($('header').height() == 100 ? 100 : 0);
  const sceneHeader = new ScrollMagic.Scene({
    triggerElement: '#landing',
    duration: sectionHeight,
    triggerHook: 0
  })
    .setClassToggle('header', 'atLanding')
    .addTo(controller);
});

const sections = [
  $('#theme'),
  $('#intro'),
  $('#schedule'),
  $('#register'),
  $('#taichi'),
  $('#team'),
  $('#organizer')
];

for (let i = 0; i < sections.length; i++) {
  const sectionId = sections[i].attr('id');
  const sectionHeight = sections[i].outerHeight();
  const scene = new ScrollMagic.Scene({
    triggerElement: '#' + sectionId,
    duration: sectionHeight,
    triggerHook: 0.5
  })
    .setClassToggle('#menu' + i, 'menu-here')
    .addTo(controller);
}

var isScrolling = false;
$(function() {
  $('header a[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        isScrolling = true;
        $('html, body').animate(
          {
            scrollTop:
              target.offset().top - ($('header').height() == 100 ? 0 : 0)
          },
          400,
          function() {
            setTimeout(function() {
              isScrolling = false;
            }, 100);
          }
        );
        return false;
      }
    }
  });
});

$('#sign-up').on('click', function() {
  $('.lightbox').addClass('active');
});
$('.lightbox .close').on('click', function() {
  $('.lightbox').removeClass('active');
});

$(window).on('resize', () => {
  updateTeam();
});
updateTeam();
initMap();

// used for webpack-dev-server hot loading
if (module && module.hot) module.hot.accept();
