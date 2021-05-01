import Highway from '@dogstudio/highway';
import {TimelineMax} from 'gsap';
import { gsap } from "gsap";

// GSAP Library
import Tween from 'gsap';

// Fade
class Fade extends Highway.Transition {


  in({ from, to, done }) {
    // Reset Scroll
    window.scrollTo(0, 0);

    // Remove Old View
    from.remove();

    new TimelineMax({onComplete:done}).to(from,0.5,{opacity:0})
    .fromTo(to, 1,{opacity:0},{opacity:1})

    var tl = gsap.timeline();
     tl.from(".nav, .nav-bar, ul", { 
      duration:2, 
      opacity: 0,
      stagger:0.4,
      ease:"expo.inOut",
    });
    tl.from(".animate-this", { 
      duration:1, 
      y: 30, 
      opacity: 0,
      stagger:0.4,
      ease:"power2.out",
      delay:0.3,
    });
     tl.from(".edge-overlay", { 
      duration:2.5, 
      y: 90, 
      opacity: 0, 
      ease: "elastic.out(1, 0.3)",
      delay:0.1
    });
 
  
  


   // gsap.from('.content' ,{y:50 , duration:1.5, stagger:0.5, delay: '0.2', ease: "elastic.out(0.5, 0.3)"});

     // gsap.from('.anim2' ,{opacity:0, scale:0, duration:1, ease: "elastic.out(1, 0.5)"});

    // gsap.from(".edge-overlay", {scale:1.125, opacity:0, duration:2, repeat:-1, yoyo:true, delay:'0.3'})

  }

  
  out({ from, done }) {
  
  new TimelineMax({onComplete:done})
  .to(from,1,{opacity:0})

  var tl = gsap.timeline();
  tl.to(".loading-screen", {
        duration:1.4,
        width: "100%",
        left: "0%",
        ease: "expo.inOut",
        stagger:{
          grid: [4,8],
          from: "left",
          amount: 0.5
        },
        delay:0.2
    });
    tl.to(".loading-screen", {
        duration: 1.4,
        width: "100%",
        left: "100%",
        ease: "expo.inOut",
        stagger:{
          grid: [4,8],
          from: "right",
          amount: 0.5
        },
        delay:0.2
    });
    tl.set(".loading-screen", { left: "-100%", ease: "expo.inOut", delay:"0.1"}, "-=0.1");
    var tl = gsap.timeline();
      tl.to(".loader", {
        duration:1,
        opacity:1,
        y:0,
        ease: "expo.inOut",
        delay:1
    });
    tl.to(".loader", {
        duration: 1,
        opacity:0,
        y:-50,
        ease: "expo.inOut",
        delay:0.2
    });
    tl.set(".loader", {y:"-50", opacity: "0", ease: "Expo.easeIn"}, "+=1");




  }

}

export default Fade;