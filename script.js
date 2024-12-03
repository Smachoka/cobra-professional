function toggleNavLinks() {
  var links = document.getElementById("navLinks");
  if (links.style.display === "block") {
    links.style.display = "none"; // Collapse
  } else {
    links.style.display = "block"; // Expand
  }
}
