// ==================== Typing Effect ====================
const text = "Hi, I'm Sufiyan Surve";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 50);
  }
}

// Start typing effect when page loads
window.addEventListener('load', type);

// ==================== Hamburger Menu ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
}

// ==================== Scroll Animation ====================
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
});

// Observe all hidden elements
document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));

// ==================== Active Navigation Link ====================
window.addEventListener('scroll', () => {
  let current = '';
  
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href').substring(1) === current) {
      link.style.color = 'var(--primary-color)';
    }
  });
});

// ==================== Smooth Scroll Behavior ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ==================== Navbar Scroll Effect ====================
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(10, 14, 39, 0.95)';
    navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.5)';
  } else {
    navbar.style.background = 'rgba(10, 14, 39, 0.8)';
    navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
  }
});

// ==================== Counter Animation ====================
function animateCounter(element, target, duration = 1000) {
  let current = 0;
  const increment = target / (duration / 16);
  
  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current);
      setTimeout(updateCounter, 16);
    } else {
      element.textContent = target;
    }
  };
  
  updateCounter();
}

// ==================== Parallax Effect ====================
window.addEventListener('scroll', () => {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  parallaxElements.forEach(el => {
    const scrollPosition = window.scrollY;
    const elementPosition = el.offsetTop;
    const distance = scrollPosition - elementPosition;
    el.style.transform = `translateY(${distance * 0.5}px)`;
  });
});

// ==================== Ripple Effect ====================
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ripple.style.position = 'absolute';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.background = 'rgba(255, 255, 255, 0.5)';
    ripple.style.borderRadius = '50%';
    ripple.style.pointerEvents = 'none';
    ripple.style.animation = 'ripple 0.6s ease-out';
    
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      width: 400px;
      height: 400px;
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ==================== Page Load Animation ====================
window.addEventListener('load', () => {
  document.body.style.animation = 'fadeInPage 0.5s ease-out';
  
  const fadeStyle = document.createElement('style');
  fadeStyle.textContent = `
    @keyframes fadeInPage {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(fadeStyle);
});

// ==================== Keyboard Navigation ====================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
  }
});

console.log('🚀 Portfolio loaded successfully!');