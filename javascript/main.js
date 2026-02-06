

/* =======================================================
   DESKTOP (référence : 1920 × 1080)
=========================================================*/
/*
gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

mm.add("(min-width: 1024px)", () => {
  const card1 = document.querySelector(".card1");

  // position initiale
  gsap.set(card1, { x: 0, y: 0 });

  // Timeline pour section 1 → 3
  gsap.timeline({
    scrollTrigger: {
      trigger: ".section-one",
      start: "center 70%",
      endTrigger: ".section-three",
      end: "center center",
      scrub: 1.3,
      invalidateOnRefresh: true,
    }
  })
  .to(card1, { x: "-26vw", y: "68vh", ease: "power1.inOut" })  // section 2
  .to(card1, { x: "32vw", y: "154vh", ease: "power1.inOut" }); // section 3
});
*/

gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

mm.add("(min-width: 1024px)", () => {

  // --- CARD 1 ---
  const card1 = document.querySelector(".card1");
  gsap.set(card1, { x: 0, y: 0 });

  gsap.timeline({
    scrollTrigger: {
      trigger: ".section-one",
      start: "center 70%",
      endTrigger: ".section-three",
      end: "center center",
      scrub: 1.3,
      invalidateOnRefresh: true,
    }
  })
  .to(card1, { x: "-26vw", y: "68vh", ease: "power1.inOut" })
  .to(card1, { x: "32vw", y: "156vh", ease: "power1.inOut" });

  // --- CARD 2 ---
  const card2 = document.querySelector(".card2");
  gsap.set(card2, { x: -370, y: 1650 });

  gsap.timeline({
    scrollTrigger: {
      trigger: ".section-four",
      start: "top 60%",
      endTrigger: ".section-six",
      end: "center center",
      scrub: 1.3,
      invalidateOnRefresh: true,
    }
  })
  .to(card2, { x: "3vw", y: "320vh", ease: "power1.inOut" })
  .to(card2, { x: "-40vw", y: "400vh", ease: "power1.inOut" });




});




/* =======================================
   GSAP FOR MOBILE - Vertical scrolling
========================================== */ 
 mm.add("(max-width: 1023px)", () => {
  const card = document.querySelector(".card1");

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


/*==========================
----burger menu---
============================ */

const burger = document.getElementById('burger');
const navBar = document.querySelector('.navBar ul');

burger.addEventListener('click', () => {
  navBar.classList.toggle('active');  // ouvre/ferme le menu
  burger.classList.toggle('active');  // optionnel : anime le burger
});



/*================================
-- Titles & paragraphs animations 
By Lyes: 04/02/2026
=================================*/

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("section").forEach(section => {
  const texts = section.querySelectorAll(".cardTitle, .paragraph");

  if (!texts.length) return;

  gsap.from(texts, {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 45%",
      toggleActions: "play reverse play reverse"
    }
  });
});

/*faq*/ 
   const faqs = document.querySelectorAll(".faq-item");

    faqs.forEach((faq) => {
      faq.querySelector(".faq-question").addEventListener("click", () => {
        faqs.forEach((item) => {
          if (item !== faq) item.classList.remove("active");
        });
        faq.classList.toggle("active");
      });
    });


/*=================================================
-- Change Automatically years allrights reserved 
By Lyes: 05/02/2026
===================================================*/
    const years =   document.getElementById("year").textContent = new Date().getFullYear();
