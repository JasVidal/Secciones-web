const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    panel.classList.add("active");
  });
});

const removeActiveClasses = () => {
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });
  };