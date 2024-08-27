function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function () {
  const textArray = ['Front-End Developer', 'UI/UX Designer', 'Web Developer', 'WordPress Developer'];
  let textIndex = 0;
  let charIndex = 0;
  const typingSpeed = 100; // Speed of typing in milliseconds
  const eraseSpeed = 50; // Speed of erasing in milliseconds
  const pauseDuration = 1500; // Pause duration after typing is done

  function type() {
    const textElement = document.getElementById('typed-text');
    const currentText = textArray[textIndex];

    if (charIndex < currentText.length) {
      textElement.textContent += currentText.charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, pauseDuration);
    }
  }

  function erase() {
    const textElement = document.getElementById('typed-text');

    if (charIndex > 0) {
      textElement.textContent = textElement.textContent.slice(0, -1);
      charIndex--;
      setTimeout(erase, eraseSpeed);
    } else {
      textIndex = (textIndex + 1) % textArray.length;
      setTimeout(type, typingSpeed);
    }
  }

  type(); // Start typing effect on page load
});

function showCategory(category) {
  const categories = document.querySelectorAll('.project-category');
  categories.forEach(cat => {
    if (cat.id === `${category}-projects`) {
      cat.style.display = 'block';
    } else {
      cat.style.display = 'none';
    }
  });
}

// Optionally, you could add some initialization if you want a specific category to be displayed by default.
document.addEventListener('DOMContentLoaded', () => {
  showCategory('web'); // Default to showing web projects
});
