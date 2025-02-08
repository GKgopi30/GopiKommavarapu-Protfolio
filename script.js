

  
  const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burgerMenu.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });


    const form = document.getElementById('contact-form');
    const thankYouMessage = document.getElementById('thank-you-message');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent default form submission
      const formData = new FormData(form);
  
      fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      })
        .then((response) => {
          if (response.ok) {
            form.style.display = 'none';
            thankYouMessage.style.display = 'block';
          } else {
            alert('There was an issue submitting the form.');
          }
        })
        .catch(() => {
          alert('Something went wrong.');
        });
    });

    const codeDisplay = document.getElementById("code-display");

const codeText = `const coder = {
  name: 'Gopi Kommavarapu',
  skills: {
    frontend: ['ReactJS', 'NextJS', 'ViteJS', 'Redux', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'Material UI'],
    backend: ['Node.js with Express', 'MongoDB', 'MySQL'],
    tools: ['Git', 'GitHub', 'VS Code'],
  },
  softSkills: ['Problem-Solving', 'Quick Learning', 'Team Collaboration'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return this.hardWorker && this.problemSolver && this.skills.length >= 5;
  }
};`;

let index = 0;
function typeCode() {
    if (index < codeText.length) {
        codeDisplay.innerHTML += codeText[index];
        index++;
        setTimeout(typeCode, 30);
    }
}

document.addEventListener("DOMContentLoaded", typeCode);