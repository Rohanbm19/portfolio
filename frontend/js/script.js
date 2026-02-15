// Common functionality for all pages

document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Projects Page
const projectData = [
  {
    title: "Fake News Detector",
    image: "images/fake.png",
    description: "A sophisticated web application that leverages machine learning APIs and JavaScript to detect fake news with high accuracy. The application analyzes article content, checks credibility indicators, and compares information against reliable fact-checking databases.",
    features: [
      "Real-time article analysis",
      "ML-powered fake news detection",
      "Credibility scoring system",
      "Multi-source fact-checking",
      "User-friendly interface",
      "Detailed analysis reports"
    ],
    tech: "JavaScript, React, APIs, Machine Learning"
  },
  {
    title: "Money Manager",
    image: "images/manager.png",
    description: "A comprehensive personal finance management application designed to help users take control of their money. This application enables users to track income and expenses, create budgets, set financial goals, and gain insights into their spending habits with detailed analytics.",
    features: [
      "Track income and expenses",
      "Budget creation and management",
      "Financial goal setting",
      "Expense categorization",
      "Spending analytics and reports",
      "Bank account integration",
      "Transaction history",
      "Monthly and yearly summaries"
    ],
    tech: "JavaScript, HTML5, CSS3, Database"
  },
  {
    title: "Managlore",
    image: "images/namma.png",
    description: "Managlore is an innovative knowledge management platform designed to preserve and share the rich history and documentation of your projects. It serves as a centralized repository for project lore, historical records, and organizational knowledge.",
    features: [
      "Comprehensive documentation system",
      "Historical record preservation",
      "Version control for documents",
      "Search and discovery tools",
      "Knowledge base organization",
      "Team collaboration features",
      "Export and backup capabilities",
      "Access control and permissions"
    ],
    tech: "JavaScript, HTML5, CSS3, Knowledge Management Systems"
  },
  {
    title: "AI Study Planner",
    image: "images/ai.png",
    description: "AI Study Planner is an intelligent productivity platform designed to help students create personalized study schedules based on subjects, deadlines, and available time. It uses AI to generate structured weekly plans, optimize study hours, and improve learning efficiency.",
    features: [
      "AI-generated personalized study plans",
      "Weekly structured timetable generation",
      "Subject and deadline management",
      "Dynamic schedule adjustment",
      "Progress tracking dashboard",
      "Clean and responsive UI",
      "Google authentication support",
      "Real-time plan generation using AI API"
    ],
    tech: "React.js, Node.js, Express.js, MongoDB / Firebase, Groq / OpenAI API, HTML5, CSS3"
  }
];

function openModal(index) {
  const project = projectData[index];
  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('modalImage').src = project.image;
  document.getElementById('modalDescription').textContent = project.description;
  document.getElementById('modalTech').textContent = project.tech;
  
  const featuresList = document.getElementById('modalFeatures');
  featuresList.innerHTML = '';
  project.features.forEach(feature => {
    const li = document.createElement('li');
    li.textContent = feature;
    featuresList.appendChild(li);
  });
  
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// Achievements Page
const certificateData = [
  {
    image: "images/nitk.png"
  },
  {
    image: "images/r.jpeg"
  },
  {
    image: "images/tiara.jpg"
  },
  {
    image: "images/cer.jpg"
  },
  {
    image: "images/sosc.jpeg"
  }
];

function openCertModal(index) {
  const cert = certificateData[index];
  document.getElementById('certImage').src = cert.image;
  const modal = document.getElementById('certModal');
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

function closeCertModal() {
  const modal = document.getElementById('certModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// Modal close on outside click
window.onclick = function(event) {
  const projectModal = document.getElementById('projectModal');
  const certModal = document.getElementById('certModal');
  
  if (projectModal && event.target == projectModal) {
    closeModal();
  }
  if (certModal && event.target == certModal) {
    closeCertModal();
  }
}

// Contact Form
function handleSubmit(event) {
  event.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
  event.target.reset();
}


fetch("https://portfolio-1-qrnm.onrender.com/plan", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ topic }),
});
