function renderSkills() {
    const skillsContainer = document.getElementById("skills-container");
    const skillsFilters = document.getElementById("skills-filters");

    let currentCategory = "All";

    // ---------- FILTER BUTTONS ----------
    const categories = ["All", ...new Set(skillsData.map(s => s.category))];

    skillsFilters.innerHTML = "";

    categories.forEach(category => {
        const btn = document.createElement("button");
        btn.textContent = category;
        btn.className = "filter-btn";

        btn.addEventListener("click", () => {
            currentCategory = category;
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderCards();
        });

        skillsFilters.appendChild(btn);
    });

    // ---------- CARD RENDER ----------
    function renderCards() {
        skillsContainer.innerHTML = "";

        const filtered = currentCategory === "All"
            ? skillsData
            : skillsData.filter(s => s.category === currentCategory);

        filtered.forEach(skill => {
            const card = document.createElement("div");
            card.className = "skill-card";

            card.innerHTML = `
                <img src="${skill.logo}" alt="${skill.name}">
                <h3>${skill.name}</h3>
                <p>${skill.description}</p>
            `;

            skillsContainer.appendChild(card);
        });
    }

    renderCards();
}

renderSkills();