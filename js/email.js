
(function(){
  emailjs.init("YOUR_PUBLIC_KEY");
})();

document.addEventListener("DOMContentLoaded", function(){
  const form = document.getElementById("contact-form");
  if(!form) return;

  form.addEventListener("submit", function(e){
    e.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
      .then(function(){
        alert("Message sent successfully!");
        form.reset();
      }, function(){
        alert("Failed to send message.");
      });
  });
});
