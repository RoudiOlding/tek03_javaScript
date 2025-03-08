const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

document.getElementById('download-cv').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'De Los Ríos.pdf';
    link.download = 'De Los Ríos.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

function handleModals() {
    const modalTriggers = document.querySelectorAll('[data-modal-target]');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('[data-close-modal]');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const targetModal = document.querySelector(trigger.dataset.modalTarget);
            targetModal.classList.add('active');
        });
    });

    modals.forEach(modal => {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.remove('active');
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            modal.classList.remove('active');
        });
    });
}

handleModals();

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text");
    const cursor = document.querySelector(".cursor");
    const typingContainer = document.getElementById("typing-container");

    const textArray = ["Desarrollador Web", "Diseñador UX / UI", "Progamador Móvil"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function updateText() {
        const currentText = textArray[textIndex];

        if (isDeleting) {
            charIndex = Math.max(0, charIndex - 1);
        } else {
            charIndex++;
        }

        textElement.innerHTML = currentText.substring(0, charIndex);

        let typingSpeed = isDeleting ? 80 : 100;

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 1000;
        } else if (isDeleting && charIndex === 0) {
            textElement.innerHTML = "";
            setTimeout(() => {
                isDeleting = false;
                textIndex = (textIndex + 1) % textArray.length;
                updateText();
            }, 1500);
            return;
        }

        setTimeout(updateText, typingSpeed);
    }

    function centerTypingContainer() {
        typingContainer.style.display = "inline-flex";
        typingContainer.style.alignItems = "center";
        typingContainer.style.justifyContent = "center";
        typingContainer.style.width = "100%";
    }

    centerTypingContainer();
    updateText();
});

document.getElementById("toggle-projects").addEventListener("click", function() {
    const hiddenProjects = document.querySelectorAll(".project-card-hidden-project");
    const button = document.getElementById("toggle-projects");

    hiddenProjects.forEach(project => {
        if (project.style.display === "none" || project.style.display === "") {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });

    // Cambiar el texto del botón entre "+" y "-"
    button.textContent = (button.textContent === "+") ? "-" : "+";
});