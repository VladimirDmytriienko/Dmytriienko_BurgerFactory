const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  document.body.classList.toggle("active-nav");
});


document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    
    event.preventDefault();

  
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.classList.remove("active-nav");

   
    const target = document.querySelector(link.hash);

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  });
});



const links = document.querySelectorAll('a[href^="#"]');
  
  // добавьте обработчик клика для каждой ссылки
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      // отмените стандартное поведение ссылки
      event.preventDefault();
  
      // получите целевой элемент, на который ссылается ссылка
      const targetElement = document.querySelector(link.getAttribute('href'));
  
      // прокрутите страницу к элементу, используя плавную анимацию
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });