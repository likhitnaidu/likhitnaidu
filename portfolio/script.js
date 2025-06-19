let backToTopBtn = document.getElementById("backToTopBtn");
window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrolltoskills(event) {
  event.preventDefault(); 
  const targetId = event.target.getAttribute("href").substring(1); 
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}
function scrolltohome(event) {
  event.preventDefault(); 
  const targetId = event.target.getAttribute("href").substring(1); 
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}
function scrolltoabout(event) {
  event.preventDefault(); 
  const targetId = event.target.getAttribute("href").substring(1); 
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}
function scrolltocontact(event) {
  event.preventDefault(); 
  const targetId = event.target.getAttribute("href").substring(1); 
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}
