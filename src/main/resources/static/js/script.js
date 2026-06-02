console.log("Portfolio chargé 🚀");

document.addEventListener("DOMContentLoaded", function () {
  fetch("/components/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;
    });
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("/components/navbar.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;

      const page = window.location.pathname.split("/").pop();

      document.querySelectorAll("#navbar a").forEach((link) => {
        const href = link.getAttribute("href");

        if (href === page) {
          link.classList.add("active");
        }
      });
    });
});

function loadProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  fetch("/api/projects")
    .then((res) => res.json())
    .then((projects) => {
      container.innerHTML = "";

      projects.forEach((project) => {
        const card = document.createElement("div");
        card.classList.add("project-card");

        card.innerHTML = `
    <h3>${project.name}</h3>
    <p>${project.description}</p>
    <div class="project-actions">
      <a href="${project.link}" target="_blank">Voir projet</a>
      <button class="btn-outline" onclick="previewMarkdown('${project.mdFile}')">
        Aperçu
      </button>
    </div>
`;
        container.appendChild(card);
      });
    });
  console.log("LOAD PROJECTS OK");
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("JS CHARGÉ OK");

  const page = window.location.pathname.split("/").pop();

  console.log("PAGE DETECTÉE:", page);

  if (page === "projects") {
    console.log("LOAD PROJECTS OK");
    loadProjects();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("/components/footer.html")
    .then((res) => res.text())
    .then((data) => {
      const footer = document.getElementById("footer");
      if (footer) {
        footer.innerHTML = data;
      }
    });
});

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    console.log("Form submit détecté ✅");

    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    const responseBox = document.getElementById("response");

    // loading state
    responseBox.className = "response-message";
    responseBox.style.display = "block";
    responseBox.textContent = "Sending message...";

    fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.text())
      .then((response) => {
        responseBox.className = "response-message response-success";
        responseBox.textContent = "Message sent successfully ✔";

        contactForm.reset();
      })
      .catch((error) => {
        responseBox.className = "response-message response-error";
        responseBox.textContent = "Error sending message. Please try again ❌";
      });
  });
}

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

hiddenElements.forEach((el) => observer.observe(el));

function openModal() {
  document.getElementById("md-modal").style.display = "block";
}

function closeModal() {
  document.getElementById("md-modal").style.display = "none";
}

function previewMarkdown(file) {
  fetch(file)
    .then((res) => res.text())
    .then((md) => {
      document.getElementById("md-viewer").innerHTML = marked.parse(md);

      openModal();
    });
}
