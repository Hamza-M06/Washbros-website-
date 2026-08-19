const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("quoteForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent("Wash Bros Quote Request");
  const body = encodeURIComponent(
    `Name: ${data.get("name")}
Phone: ${data.get("phone")}
Vehicle: ${data.get("vehicle")}
Service: ${data.get("service")}
Location: ${data.get("location")}`
  );
  window.location.href = `mailto:washbrosgta@gmail.com?subject=${subject}&body=${body}`;
});
