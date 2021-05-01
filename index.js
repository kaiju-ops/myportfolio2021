import {map, preloadImages, preloadFonts} from './js/utils';
import Cursor from './js/cursor';
import { gsap } from "gsap";
import LocomotiveScroll from 'locomotive-scroll';
import Highway from '@dogstudio/highway';
import Fade from './js/fade';
// // Import Renderers
// import CustomRenderer from './js/custom-renderer.js';
var tl = gsap.timeline();
tl.from(".animate-this", { 
      duration:1, 
      y: 30, 
      opacity: 0,
      stagger:0.4,
      ease:"power2.out",
      delay:0.3,
    });

  // Initialize custom cursor
const cursor = new Cursor(document.querySelector('.cursor'));


// all images
const images = [...document.querySelectorAll('.content__img, images')];


// initialize Locomotive Scroll
const lscroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smartphone: {smooth: true},
    tablet: {smooth: true},
});


// Call Highway.Core once.
const H = new Highway.Core({
  transitions: {
  default: Fade,
  }
  });

// Listen the `NAVIGATE_IN` event
// This event is sent everytime a `data-router-view` is added to the DOM Tree
H.on('NAVIGATE_IN', ({ to, trigger, location }) => {
  

});


// Listen the `NAVIGATE_END` event
// This event is sent everytime the `done()` method is called in the `in()` method of a transition
H.on('NAVIGATE_END', ({ to, from, trigger, location }) => {

[...document.querySelectorAll('a')].forEach(link => {
        link.addEventListener('mouseenter', () => cursor.enter());
        link.addEventListener('mouseleave', () => cursor.leave());
    });

lscroll.update();
lscroll.scrollTo(0, 0);


});


  // Preload images and fonts
Promise.all([preloadImages(), preloadFonts('api4rrx')]).then(() => {
    // Remove loader (loading class)
    document.body.classList.remove('loading');
    // keep track of the previous and current scroll values
    let scroll = {cache: 0, current: 0};

    [...document.querySelectorAll('a')].forEach(link => {
        link.addEventListener('mouseenter', () => cursor.enter());
        link.addEventListener('mouseleave', () => cursor.leave());
    });


});


