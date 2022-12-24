let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

document
  .querySelectorAll(".about .video-container .controls .control-btn")
  .forEach((btn) => {
    btn.onclick = () => {
      let src = btn.getAttribute("data-src");
      document.querySelector(".about .video-container .video").src = src;
    };
  });

const parentContainer = document.querySelector(".box-container");
parentContainer.addEventListener("click", (event) => {
  const current = event.target;
  const isReadMoreBtn = current.className.includes("read-more-btn");
  if (!isReadMoreBtn) return;
  const currentText = event.target.parentNode.querySelector(".read-more-text");
  currentText.classList.toggle("read-more-text--show");
  current.textContent = current.textContent.includes("read more")
    ? "read less >"
    : "read more >";
});

const childContainer = document.querySelector(".content");
childContainer.addEventListener("click", (event) => {
  const current = event.target;
  const isReadMoreBtn = current.className.includes("read-more-btn");
  if (!isReadMoreBtn) return;
  const currentText =
    event.target.childNode.querySelector(".read-more-content");
  currentText.classList.toggle("read-more-content--show");
  current.textContent = current.textContent.includes("read more")
    ? "read less >"
    : "read more >";
});
