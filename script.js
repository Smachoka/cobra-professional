function toggleNavLinks() {
  var links = document.getElementById("navLinks");
  if (links.style.display === "block") {
    links.style.display = "none"; // Collapse
  } else {
    links.style.display = "block"; // Expand
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const services = document.querySelectorAll(".service");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    services.forEach((service) => {
      const serviceTop = service.getBoundingClientRect().top;
      if (serviceTop < windowHeight - 50) {
        service.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Initial check in case some elements are in view at the start
});
