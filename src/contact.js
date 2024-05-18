const serviceId      = import.meta.env.VITE_SERVICE_ID;
const templateId     = import.meta.env.VITE_TEMPLATE_ID;
const publicKeyValue = import.meta.env.VITE_PUBLIC_KEY;

console.log("Service ID:", serviceId);
console.log("Template ID:", templateId);
console.log("Public Key:", publicKeyValue);

// Form code
const sendEmail = () => {

// Iniitialization code
   (function () {
    emailjs.init({
      publicKey: publicKeyValue,
    });

    console.log("Test");
  })();

  window.onload = function () {
    document
      .getElementById("contact-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
     emailjs.sendForm(serviceId, templateId, this).then(
          () => {
            console.log("SUCCESS!");
            document.getElementById("contact-form").reset();
            showAlert("light", "Email sent successfully!");
          },
          (error) => {
            console.log("FAILED...", error);
            showAlert(
              "danger",
              "Failed to send email. Please try again later."
            );
          }
        );
      });
  };

  function showAlert(type, message) {
    const alertElement = document.getElementById("email-alert");
    alertElement.className = `alert alert-${type}`;
    alertElement.textContent = message;
    alertElement.style.display = "block";

    // Hide the alert after 5 seconds
    setTimeout(() => {
      alertElement.style.display = "none";
    }, 5000);
  }
}

sendEmail()