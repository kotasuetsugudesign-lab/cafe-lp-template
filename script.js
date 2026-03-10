/* =====================================================
   Cafe LP Template - script.js
   Header / Hamburger / FAQ / Fade Animation
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

  /* ===============================
     1. ハンバーガーメニュー
  =============================== */

  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  if (hamburger && navMenu) {

    hamburger.setAttribute("aria-expanded", "false");

    hamburger.addEventListener("click", function () {

      const isActive = navMenu.classList.toggle("active");

      /* ハンバーガーの×切り替え */
      hamburger.classList.toggle("active");

      /* スクロール防止 */
      document.body.classList.toggle("menu-open", isActive);

      hamburger.setAttribute("aria-expanded", isActive);
    });

    /* ナビリンククリックで閉じる */
    document.querySelectorAll(".nav-menu a").forEach(link => {
      link.addEventListener("click", function () {

        navMenu.classList.remove("active");
        hamburger.classList.remove("active");

        document.body.classList.remove("menu-open");

        hamburger.setAttribute("aria-expanded", "false");

      });
    });

    /* ESCキーで閉じる */
    document.addEventListener("keydown", function (e) {

      if (e.key === "Escape") {

        navMenu.classList.remove("active");
        hamburger.classList.remove("active");

        document.body.classList.remove("menu-open");

        hamburger.setAttribute("aria-expanded", "false");

      }

    });
  }


  /* ===============================
     2. ヘッダースクロール演出
  =============================== */

  const header = document.querySelector(".header");

  if (header) {

    window.addEventListener("scroll", function () {

      if (window.scrollY > 80) {

        header.classList.add("scrolled");

      } else {

        header.classList.remove("scrolled");

      }

    });

  }


  /* ===============================
     3. FAQアコーディオン
  =============================== */

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    if (question && answer) {

      question.setAttribute("aria-expanded", "false");
      answer.style.maxHeight = null;

      question.addEventListener("click", function () {

        faqItems.forEach(otherItem => {

          const otherQuestion = otherItem.querySelector(".faq-question");
          const otherAnswer = otherItem.querySelector(".faq-answer");

          if (otherItem !== item) {

            otherItem.classList.remove("active");

            if (otherAnswer) otherAnswer.style.maxHeight = null;

            if (otherQuestion) {
              otherQuestion.setAttribute("aria-expanded", "false");
            }

          }

        });

        item.classList.toggle("active");

        const isActive = item.classList.contains("active");

        question.setAttribute("aria-expanded", isActive);

        if (isActive) {

          answer.style.maxHeight = answer.scrollHeight + "px";

        } else {

          answer.style.maxHeight = null;

        }

      });

    }

  });


  /* ===============================
     4. スクロールフェードアニメ
  =============================== */

  const fadeTargets = document.querySelectorAll(
    ".section, .menu-block, .gallery-grid img, .access-inner, .faq-item, .cta"
  );

  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("fade-in");

      }

    });

  }, {
    threshold: 0.2
  });

  fadeTargets.forEach(target => {

    target.classList.add("fade-init");

    observer.observe(target);

  });

});