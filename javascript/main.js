
/*================================================
---GSAP smooth Animation -- By Lyes: 02/02/2026--- 
================================================== */

gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

/* =======================================================
   DESKTOP (laptop)
=========================================================*/
mm.add("(min-width: 1024px)", () => {
  gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

mm.add("(min-width: 1024px)", () => {
  const card = document.querySelector(".tiltcard");

  // 🔧 POINTS DE POSITION PAR SECTION
  // y = distance depuis la section-one
  const positions = [
    { x: 0,    y: 0 },     // section 1 (centre)
    { x: -620, y: 550 },   // section 2 (gauche + bas)
    { x: 220,  y: 1200 },   // section 3 (droite + bas)
    { x: -370, y: 1650 },  // section 4
    { x: -120,  y: 2200 },  // section 5
    { x: -630, y: 2800 },  // section 6
    { x: -220,    y: 3350 },  // section 7 (centre final)
  ];

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-one",
      start: "center 90%",
      endTrigger: ".section-seven",
      end: "center center",
      scrub: 1.3,
      invalidateOnRefresh: true,
    },
  });

  positions.forEach((pos, i) => {
    if (i === 0) return;

    tl.to(card, {
      x: pos.x,
      y: pos.y,
      ease: "power1.inOut",
    });
  });
});
});


/* =======================================
   GSAP FOR MOBILE - Vertical scrolling
========================================== */ 
mm.add("(max-width: 1023px)", () => {
  const card = document.querySelector(".tiltcard");

  // reset propre
  gsap.set(card, {
    x: 0,
    y: 0,
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-one",
      start: "top top",
      end: "+=4600",           
      scrub: 1.2,
      invalidateOnRefresh: true,
    },
  });

  tl.to(card, {
    y: 4600,
    ease: "none",  // 🔑 IMPORTANT : pas d’accélération
  });
});

/*==========================
----header on scroll----
============================ */

const headerMenu = document.getElementById('headerMenu');

window.addEventListener('scroll', () => {
  headerMenu.classList.toggle('scrolled', window.scrollY > 5);
});

/*================
---burger menu---
================= */
/*
const burgerMenu = document.getElementById('line2');

burgerMenu.addEventListener('click', ()=> {
  burgerMenu.style.display = 'none';
})
*/

const burger = document.getElementById('burger');
const navBar = document.querySelector('.navBar ul');

burger.addEventListener('click', () => {
  navBar.classList.toggle('active');  // ouvre/ferme le menu
  burger.classList.toggle('active');  // optionnel : anime le burger
});



