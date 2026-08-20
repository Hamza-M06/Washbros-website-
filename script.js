const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav-links a").forEach(a => {
  a.addEventListener("click", () => navLinks.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

const quoteForm = document.getElementById("quoteForm");
const formStatus = document.getElementById("formStatus");
const submitBtn = quoteForm?.querySelector('button[type="submit"]');

quoteForm?.addEventListener("submit", async (e) => {
  e.preventDefault();

  formStatus.textContent = "";
  formStatus.className = "form-status";
  submitBtn.disabled = true;
  submitBtn.textContent = "SENDING...";

  const formData = new FormData(quoteForm);

  try {
    const response = await fetch("https://formspree.io/f/xyegloek", {
      method: "POST",
      body: formData,
      headers: { "Accept": "application/json" }
    });

    if (response.ok) {
      quoteForm.reset();
      formStatus.textContent = "Thanks! We got your quote request and will contact you shortly. 🚗🫧";
      formStatus.className = "form-status success";
    } else {
      const data = await response.json();
      formStatus.textContent =
        data?.errors?.[0]?.message ||
        "Something went wrong. Please try again or call us.";
      formStatus.className = "form-status error";
    }
  } catch (err) {
    formStatus.textContent =
      "Couldn't send your request. Please try again or call 905-745-6521.";
    formStatus.className = "form-status error";
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "REQUEST PRICING";
  }
});
