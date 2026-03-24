document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("reservation-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector('input[placeholder="Name"]').value.trim();
    const email = form.querySelector('input[placeholder="Email"]').value.trim();
    const phone = form.querySelector('input[placeholder="Phone Number"]').value.trim();
    const time = form.querySelector('input[type="time"]').value;
    const guests = form.querySelector('input[placeholder="Guests"]').value;

    if (!name || !email || !phone || !time || !guests) {
      showMessage("⚠️ Please fill in all fields.", "error");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showMessage("❌ Please enter a valid email address.", "error");
      return;
    }

    showMessage(`✅ Thank you, ${name}! Your reservation for ${guests} guest(s) at ${time} is confirmed.`, "success");
    form.reset();
  });

  function showMessage(message, type) {
    let msg = document.getElementById("form-feedback");

    if (!msg) {
      msg = document.createElement("div");
      msg.id = "form-feedback";
      msg.style.marginTop = "15px";
      msg.style.fontWeight = "bold";
      form.appendChild(msg);
    }

    msg.textContent = message;
    msg.style.color = type === "success" ? "green" : "red";
    msg.style.backgroundColor = type === "success" ? "#e7ffe7" : "#ffe7e7";
    msg.style.padding = "10px";
    msg.style.borderRadius = "5px";
    msg.style.border = `1px solid ${type === "success" ? "green" : "red"}`;
  }
});
