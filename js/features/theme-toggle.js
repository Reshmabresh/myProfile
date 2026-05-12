function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  // Load saved theme
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    toggleBtn.textContent = "Dark";
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
      localStorage.setItem("theme", "light");
      toggleBtn.textContent = "Dark";
    } else {
      localStorage.setItem("theme", "dark");
      toggleBtn.textContent = "Light";
    }
  });
}
