function initModal() {
  const trigger = document.getElementById("modal-trigger");
  const modal = document.getElementById("contact-modal");
  const close = document.getElementById("modal-close");

  if (!trigger || !modal || !close) return;

  trigger.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  close.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
}
