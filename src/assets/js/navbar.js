/* jshint esversion: 6 */
const $ = window.$;

export const updateNavbar = () => {
  if ($(window).width() < 992) return;
  if ($(window).scrollTop() >= $('#banner').height()) {
    $('#navbar').css({
      position: 'fixed',
      top: '0',
      right: '0',
      left: '0',
      'z-index': '1030'
    });
    $('#theme').css({ 'padding-top': `${$('#navbar').outerHeight()}px` });
  } else {
    $('#navbar').removeAttr('style');
    $('#theme').css('padding-top', '0');
  }
};
