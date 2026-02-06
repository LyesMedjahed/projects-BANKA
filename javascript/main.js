
/*======================================
---Section-one title gsap animation----
------By Lyes - 06-02-2026-----
====================================== */

/*
gsap.from("#title .char", {
  scale: 0.8,
  opacity: 0,
  stagger: 0.05,
  ease: "back.out(1.7)",
  duration: 1
})
*/

/* =======================================================
   DESKTOP (référence : 1920 × 1080)
=========================================================*/

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
  gsap.set(card2, { x: "-22vw", y: "240vh" });

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
  .to(card2, { x: "-40vw", y: "410vh", ease: "power1.inOut" });

});

/* =======================================
   GSAP FOR MOBILE - Vertical scrolling
========================================== */ 
/* 
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
*/

/*======================================
---Section-seven gsap animation----
------By Lyes - 06-02-2026-----
====================================== */
/*STANDARD card */
gsap.from(".banka1", {
  x: -300,
  opacity: 0,
  duration: 2,
  rotation: -180,
  scrollTrigger: {
    trigger: ".banka1",
    start: "top 50%",
    end: "top 20%",
    scrub: true
  }
})

/*Golden card */
gsap.from(".banka3", {
  x: 300,
  opacity: 0,
  duration: 2,
  rotation: 180,
  scrollTrigger: {
    trigger: ".banka3",
    start: "top 50%",
    end: "top 20%",
    scrub: true
  }
})

/*Silver card */
gsap.from(".banka22", {
  x: -300,
  y: -500,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".section-seven",
    start: "top 30%",
    toggleActions: "play none none reverse"
  }

})




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
