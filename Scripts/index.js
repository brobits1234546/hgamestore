let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
}
// Get references to the elements
const cookieBanner = document.getElementById('cookie-banner');
const acceptButton = document.getElementById('accept-cookies');

// Function to set a cookie
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = name + '=' + value + ';expires=' + expires.toUTCString();
}

// Function to check if the cookie is set
function checkCookie() {
  const name = 'cookie_consent';
  const value = 'accepted';
  const cookieValue = document.cookie.split('; ').find(row => row.startsWith(name));

  if (cookieValue) {
    cookieBanner.style.display = 'none';
  } else {
    // Block content until cookie is accepted
    document.body.style.overflow = 'hidden';
  }
}

// Event listener for the accept button
acceptButton.addEventListener('click', () => {
  setCookie('cookie_consent', 'accepted', 365); // Set a cookie to remember the choice
  cookieBanner.style.display = 'none';
  document.body.style.overflow = 'auto'; // Unblock content
});

// Check cookie status on page load
checkCookie();
const sidebar = document.getElementById('sidebar');

// Event listener for the slash key
document.addEventListener('keydown', (event) => {
  if (event.key === '/') {
    sidebar.classList.toggle('visible');
  }
});
// 
window.addEventListener('scroll', () => {
  const element = document.getElementById('parallax-element');
  const scrollPosition = window.scrollY;
  element.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});