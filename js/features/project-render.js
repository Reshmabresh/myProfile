function renderProjects(projects) {
  const container = document.getElementById("projects-container");
  const countEl = document.getElementById("project-count");

  container.innerHTML = "";
  countEl.textContent = projects.length + " project" + (projects.length !== 1 ? "s" : "");

  projects.forEach((project, i) => {
    const card = document.createElement("div");
    card.className = "project-card";

    const tags = (project.technologies || [])
      .map(t => `<span class="tech-tag">${t}</span>`)
      .join("");

    const githubBtn = project.github
      ? `<a href="${project.github}" target="_blank" class="project-github">
           <svg viewBox="0 0 24 24"><path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1.2.9 2.3v3.3c0 .3.2.7.8.6A12 12 0 0012 .3"/></svg>
           Source
         </a>`
      : `<span class="project-category" style="font-style:italic;opacity:0.5;">No repo yet</span>`;

    card.innerHTML = `
      <p class="project-card-num">0${i + 1}</p>
      <h3 class="project-card-name">${project.name}</h3>
      <p class="project-card-desc">${project.description}</p>
      <div class="tech-tags">${tags}</div>
      <div class="project-card-footer">
        <span class="project-category">${project.category}</span>
        ${githubBtn}
      </div>
    `;

    container.appendChild(card);
  });
}
