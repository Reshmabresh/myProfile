const filterContainer = document.getElementById("project-filters");
const projectsContainer = document.getElementById("projects-container");

const categories = ["All", ...new Set(projectsData.map(p => p.category))];

function renderFilters() {
  filterContainer.innerHTML = "";

  categories.forEach(category => {
    const btn = document.createElement("button");
    btn.innerText = category;
    btn.className = "filter-btn" + (category === "All" ? " active" : "");

    btn.addEventListener("click", () => {
      document.querySelectorAll("#project-filters .filter-btn")
        .forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      filterAndRender();
    });

    filterContainer.appendChild(btn);
  });
}

function filterAndRender() {
  const query = document.getElementById("project-search").value.toLowerCase();
  const activeCategory = document.querySelector("#project-filters .filter-btn.active")?.textContent || "All";

  let filtered = projectsData;

  if (activeCategory !== "All") {
    filtered = filtered.filter(p => p.category === activeCategory);
  }

  if (query) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      (p.technologies || []).some(t => t.toLowerCase().includes(query))
    );
  }

  renderProjects(filtered);
}

function initProjectFilter() {
  renderFilters();
  filterAndRender();
}
