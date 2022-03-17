const toggleButton = document.getElementsByClassName("bar");
const navBarLinks = document.getElementsByClassName("main-nav-list");

toggleButton.addEventListener("click", () => {
    navBarLinks.classList.toggle("active");
});
