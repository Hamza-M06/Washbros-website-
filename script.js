const menuButton=document.querySelector(".menu-toggle");
const navLinks=document.querySelector(".nav-links");
menuButton.addEventListener("click",()=>{const open=navLinks.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(open));});
document.querySelectorAll(".nav-links a").forEach(link=>link.addEventListener("click",()=>{navLinks.classList.remove("open");menuButton.setAttribute("aria-expanded","false");}));
document.getElementById("year").textContent=new Date().getFullYear();
