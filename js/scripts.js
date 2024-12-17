document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.question');

  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.question-title');
      const content = self.querySelector('.question-answer');

      self.classList.toggle('open');

      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    });
  });


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          let el = document.querySelector(this.getAttribute('href'));
          if (el) {
            el.scrollIntoView({
                behavior: 'smooth'
            });
        }
      });
  });

  const body = document.body;
  const header = document.querySelector(".header");

  let disableScroll = function () {
    body.classList.add('disable-scroll');
  }

  let enableScroll = function () {
    body.classList.remove('disable-scroll');
  }

  const menu       = document.querySelector(".menu");
  const menu_open  = document.querySelector(".menu-open");
  const menu_close = document.querySelector(".menu-close");

  menu_open.addEventListener('click', function() {
    menu.classList.add("open");
    disableScroll();
  });

  menu_close.addEventListener('click', function() {
    menu.classList.remove("open");
    enableScroll();
  });

  menu.addEventListener('click', function(e) {
    if (e.target.tagName.toLowerCase() === 'a') {
      menu.classList.remove("open");
      enableScroll();
    }
  });

  const quiz = document.querySelector('.quiz');
  const quiz_head = document.querySelector('.quiz-head');

  if (quiz) {
    setTimeout(() => {
      quiz.classList.add('active');
    }, 4000);

    quiz_head.addEventListener('click', e => {
      quiz.classList.toggle('active');
    });
  }

});
