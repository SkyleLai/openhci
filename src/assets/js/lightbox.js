/* jshint esversion: 6 */
// import { TimelineMax } from 'gsap';
export const showLightbox = () => { 
    $('#admission').lightbox();
    // $('li').on('click', '#admission', function() {
    //     $(".lightbox").addClass('active');
    //     var tl = new TimelineMax({repeat:0});
    //     tl.fromTo($(".lightbox .info"), 0.5, {x:-30,opacity:0},{x:-30,opacity:0});
    //     tl.fromTo($(".lightbox .info"), 0.5, {x:-30,opacity:0},{x:0,opacity:1});
    //     tl.fromTo($(".lightbox .list:nth-child(2) .title"), 0.5, {x:-30,opacity:0},{x:0,opacity:1});
    //     tl.fromTo($(".lightbox .list:nth-child(2) .content"), 0.5, {x:-30,opacity:0},{x:0,opacity:1});
    //     tl.fromTo($(".lightbox .list:nth-child(3) .title"), 0.5, {x:-30,opacity:0},{x:0,opacity:1});
    //     tl.fromTo($(".lightbox .list:nth-child(3) .content"), 0.5, {x:-30,opacity:0},{x:0,opacity:1});
    // });

    // $(".lightbox .close").on("click", function() {
    //     console.log('press');
    //     $(".lightbox").removeClass('active');
    // });
};