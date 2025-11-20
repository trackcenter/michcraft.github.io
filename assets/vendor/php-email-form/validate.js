document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("contact-form");
  form.addEventListener("submit", submitForm);

  function submitForm(event) {
    event.preventDefault();

    var nameInput = form.querySelector("#name");
    var emailInput = form.querySelector("#email");
    var subjectInput = form.querySelector("#subject");
    var messageInput = form.querySelector("#message");

    var isValid = true;

    var errorMessages = form.getElementsByClassName("error-message");
    for (var i = 0; i < errorMessages.length; i++) {
      errorMessages[i].innerText = "";
    }

    if (nameInput.value.trim() === "") {
      isValid = false;
      document.getElementById("name-error").innerText = "Veuillez fournir un nom.";
    }

    if (emailInput.value.trim() === "") {
      isValid = false;
      document.getElementById("email-error").innerText = "Veuillez fournir une adresse e-mail.";
    }

    if (subjectInput.value.trim() === "") {
      isValid = false;
      document.getElementById("subject-error").innerText = "Veuillez fournir un objet pour le message.";
    }

    if (messageInput.value.trim() === "") {
      isValid = false;
      document.getElementById("message-error").innerText = "Veuillez fournir un message.";
    }

    if (isValid) {
      var xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action, true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          form.reset();
          document.getElementById("sent-message").innerText = "E-mail bien envoyé !";
        } else {
          document.getElementById("error-message").innerText = "Une erreur s'est produite lors de l'envoi de l'e-mail. Veuillez réessayer plus tard.";
        }
      };
      xhr.send(new FormData(form));
    }
  }
});