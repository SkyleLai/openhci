import './scss/main.scss';
import groups from './assets/js/groups';
import initMap from './assets/js/map';
const $ = window.$;

$(window).on('scroll resize load', () => {
  if ($(window).width() < 540) {
    $('#navbar').addClass('fixed-top');
    $('#theme').css('padding-top', '0');
  } else if ($(window).scrollTop() >= $('#banner').height()) {
    $('#navbar').addClass('fixed-top');
    $('#theme').css('padding-top', '56px');
  } else {
    $('#navbar').removeClass('fixed-top');
    $('#theme').css('padding-top', '0');
  }
});

$(window).on('resize', () => {
  updateTeam();
});

const updateTeam = () => {
  const w = $(window).width(),
    bp = [0, 580, 855, 1130];
  let count = 0;
  while (w >= bp[count]) count++;

  $('.carousel-inner').empty();
  $('.carousel-indicators').empty();
  const p = Math.ceil(groups.length / count);
  for (let i = 0; i < p; i++) {
    let groupsHTML = '';
    for (let j = 0; j < count && i * count + j < groups.length; j++)
      groupsHTML += groups[i * count + j];
    $(`
      <div class="carousel-item">
        <div class="d-flex">
          ${groupsHTML}
        </div>
      </div>
    `).appendTo('#team .carousel-inner');
    $(`<li data-target="#team-carousel" data-slide-to="${i}"></li>`).appendTo(
      '#team .carousel-indicators'
    );
  }
  $('#team .carousel-item')
    .first()
    .addClass('active');
  $('#team .carousel-indicators li')
    .first()
    .addClass('active');
  $('#carousel').carousel();
};

updateTeam();
initMap();

// used for webpack-dev-server hot loading
if (module && module.hot) module.hot.accept();
