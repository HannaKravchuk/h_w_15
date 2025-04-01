document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.slider__link');
    
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      });
    });
    
    window.addEventListener('scroll', function() {
      const sections = document.querySelectorAll('[id^="content-"], #start');
      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          currentSection = '#' + section.getAttribute('id');
        }
      });
      
      links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentSection) {
          link.classList.add('active');
        }
      });
    });
  });