function initContactValidation() {
  const form = document.getElementById("contact-form");
  const message = document.getElementById("form-message");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();

    if (!name || !email) {
      message.style.color = "#e05c5c";
      message.textContent = "All fields are required.";
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      message.style.color = "#e05c5c";
      message.textContent = "Please enter a valid email address.";
      return;
    }

    message.style.color = "#c9a96e";
    message.textContent = "Message sent! I'll get back to you soon.";

    setTimeout(() => {
      document.getElementById("contact-modal").classList.add("hidden");
      document.getElementById("contact-name").value = "";
      document.getElementById("contact-email").value = "";
      message.textContent = "";
    }, 1800);
  });
}
