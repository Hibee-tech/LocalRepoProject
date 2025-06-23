// Hamburger Menu Functionality
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger")
  const navMobile = document.getElementById("navMobile")

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMobile.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  const mobileLinks = document.querySelectorAll(".nav-mobile-link")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navMobile.classList.remove("active")
    })
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    const isClickInsideNav = navMobile.contains(event.target)
    const isClickOnHamburger = hamburger.contains(event.target)

    if (!isClickInsideNav && !isClickOnHamburger && navMobile.classList.contains("active")) {
      hamburger.classList.remove("active")
      navMobile.classList.remove("active")
    }
  })

  // Smooth scrolling for navigation links
  const allLinks = document.querySelectorAll('a[href^="#"]')
  allLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = targetSection.offsetTop - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Form submission
  const contactForm = document.querySelector(".contact-form")
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()
    alert("Thank you for your message! We will get back to you soon.")
    this.reset()
  })

  // Add scroll effect to header
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header")
    if (window.scrollY > 100) {
      header.style.background = "rgba(255, 255, 255, 0.95)"
      header.style.backdropFilter = "blur(10px)"
    } else {
      header.style.background = "var(--text-white)"
      header.style.backdropFilter = "none"
    }
  })
})
