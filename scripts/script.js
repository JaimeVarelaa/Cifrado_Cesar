document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".sidebar ul li a");
  const iframe = document.querySelector(".content iframe");
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const url = this.getAttribute("href");
      links.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");
      iframe.style.opacity = 0;
      setTimeout(() => {
        iframe.src = url;
        setTimeout(() => {
          iframe.style.opacity = 1;
        }, 500);
      }, 800);
    });
  });
});
