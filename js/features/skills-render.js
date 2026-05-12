function renderSkillFilters() {
  const container = document.getElementById("skills-filters");
  const categories = ["All", ...new Set(skillsData.map(s => s.category))];

  container.innerHTML = "";

  categories.forEach(category => {
    const btn = document.createElement("button");
    btn.innerText = category;
    btn.className = "filter-btn" + (category === "All" ? " active" : "");

    btn.addEventListener("click", () => {
      document.querySelectorAll("#skills-filters .filter-btn")
        .forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filtered = category === "All"
        ? skillsData
        : skillsData.filter(s => s.category === category);

      renderSkills(filtered);
    });

    container.appendChild(btn);
  });
}

function renderSkills(skills) {
  const container = document.getElementById("skills-container");
  container.innerHTML = "";

  skills.forEach(skill => {
    const div = document.createElement("div");
    div.className = "skill-card";

    div.innerHTML = `
      <span class="skill-letter">${skill.shortLabel}</span>
      <p class="skill-name">${skill.name}</p>
      <p class="skill-cat">${skill.category}</p>
      <p class="skill-desc">${skill.description}</p>
    `;

    container.appendChild(div);
  });
}

function initSkills() {
  renderSkillFilters();
  renderSkills(skillsData);
}
