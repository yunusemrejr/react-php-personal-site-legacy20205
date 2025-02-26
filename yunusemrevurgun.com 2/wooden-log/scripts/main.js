
//CODE FOR HEADER INJECTION BEGIN
const nav = document.querySelector('#header-inject');
nav.innerHTML = `    
<style> 
  .navbar {
    background-color: rgba(10, 25, 47, 0.85);
    backdrop-filter: blur(10px);
    padding: 1rem 2rem;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    box-sizing: border-box;
  }
  .navbar-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navbar-logo {
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color: #64ffda;
    z-index: 1001;
  }
  .nav-links-desktop {
    display: flex;
    gap: 2rem;
  }
  .nav-link {
    text-decoration: none;
    color: #8892b0;
    transition: color .3s ease;
    font-size: 1rem;
    font-weight: 500;
  }
  .nav-link:hover {
    color: #64ffda;
  }
  .menu-icon {
    display: none;
    cursor: pointer;
    z-index: 1001;
  }
  .hamburger {
    width: 30px;
    height: 20px;
    position: relative;
  }
  .hamburger span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: #64ffda;
    border-radius: 9px;
    transition: .25s ease-in-out;
  }
  .hamburger span:nth-child(1) {
    top: 0;
  }
  .hamburger span:nth-child(2) {
    top: 9px;
  }
  .hamburger span:nth-child(3) {
    top: 18px;
  }
  .hamburger.open span:nth-child(1) {
    top: 9px;
    transform: rotate(45deg);
  }
  .hamburger.open span:nth-child(2) {
    opacity: 0;
  }
  .hamburger.open span:nth-child(3) {
    top: 9px;
    transform: rotate(-45deg);
  }
  .nav-links-mobile {
    display: none;
  }
  .nav-links-mobile a {
    font-size: 1.2rem;
    padding: .5rem 0;
  }
  .nav-links-mobile.open {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    background-color: rgba(10, 25, 47, 0.95);
    backdrop-filter: blur(10px);
    padding: 5rem 2rem;
    gap: 2rem;
  }
  @media (max-width: 768px) {
    .nav-links-desktop {
      display: none;
    }
    .menu-icon {
      display: block;
    }
    .nav-links-mobile.open {
      display: flex;
    }
  }
  .main-content {
    padding-top: 80px;
  }
</style> 
<nav class="navbar">
  <div class="navbar-container">
    <a href="/" class="navbar-logo">Yunus Emre Vurgun</a>
    <div class="menu-icon">
      <div class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="nav-links-desktop">
      <a href="https://yunusemrevurgun.com/index/" class="nav-link">Home</a>
      <a href="https://yunusemrevurgun.com/index/about" class="nav-link">About</a>
      <a href="https://yunusemrevurgun.com/blog/" class="nav-link">Blog</a>
      <a href="https://yunusemrevurgun.com/wooden-log/" class="nav-link">Updates</a>
      <a href="https://yunusemrevurgun.com/index/gallery/gallery.html" class="nav-link">Gallery</a>
      <a href="https://yunusemrevurgun.com/index/projects" class="nav-link">Projects</a>
    </div>
    <div id="nav-links-mobile" class="nav-links-mobile">
      <a href="https://yunusemrevurgun.com/index/" class="nav-link" onclick="closeMenu()">Home</a>
      <a href="https://yunusemrevurgun.com/index/about" class="nav-link" onclick="closeMenu()">About</a>
      <a href="https://yunusemrevurgun.com/blog/" class="nav-link" onclick="closeMenu()">Blog</a>
      <a href="https://yunusemrevurgun.com/wooden-log/" class="nav-link" onclick="closeMenu()">Updates</a>
      <a href="https://yunusemrevurgun.com/index/gallery/gallery.html" class="nav-link" onclick="closeMenu()">Gallery</a>
      <a href="https://yunusemrevurgun.com/index/projects" class="nav-link" onclick="closeMenu()">Projects</a>
    </div>
  </div>
</nav>
<div class="main-content"></div>`;

let isMenuOpen = false;

function toggleMenu() {
  isMenuOpen = !isMenuOpen;
  const navLinks = document.getElementById("nav-links-mobile");
  const hamburger = document.querySelector(".hamburger");
  if (isMenuOpen) {
    navLinks.classList.add("open");
    hamburger.classList.add("open");
  } else {
    navLinks.classList.remove("open");
    hamburger.classList.remove("open");
  }
}

function closeMenu() {
  isMenuOpen = false;
  document.getElementById("nav-links-mobile").classList.remove("open");
  document.querySelector(".hamburger").classList.remove("open");
}

document.querySelector(".menu-icon").addEventListener("click", toggleMenu);

//CODE FOR HEADER INJECTION END
