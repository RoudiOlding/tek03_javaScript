// Handle the header and the burger menu
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
};

// Download CV
document.getElementById('download-cv').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'De Los Ríos.pdf';
    link.download = 'De Los Ríos.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Handle the modals
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

// Handle the type effect
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text");
    const typingContainer = document.getElementById("typing-container");

    const textArray = ["Desarrollador Web", "Diseñador UX / UI", "Programador Móvil"];
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

// Handle the hiden projects
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-projects");
    const hiddenProjects = document.querySelectorAll(".project-card-hidden-project");

    function updateToggleButtonVisibility() {
        toggleButton.style.display = hiddenProjects.length > 0 ? "block" : "none";
    }

    toggleButton.addEventListener("click", function () {
        let isHiding = toggleButton.textContent === "Ver menos";

        hiddenProjects.forEach(project => {
            project.classList.toggle("show", !isHiding);
        });

        toggleButton.textContent = isHiding ? "Ver más" : "Ver menos";

        if (isHiding) {
            window.location.hash = "#experience";
            window.location.hash = "#projects";
        }
    });

    updateToggleButtonVisibility();
});

// Handle the skils hidens
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton2 = document.getElementById("toggle-skils");
    const hiddenSkils = document.querySelectorAll(".skils-card-hide");

    function toggleSkils() {
        let isHiding = toggleButton2.textContent === "Ver menos";

        hiddenSkils.forEach(skill => {
            skill.style.display = isHiding ? "none" : "flex";
        });

        toggleButton2.textContent = isHiding ? "Ver más" : "Ver menos";

        if (isHiding) {
            window.location.hash = "#projects";
            window.location.hash = "#skills";
        }
    }

    hiddenSkils.forEach(skill => {
        skill.style.display = "none";
    });

    toggleButton2.addEventListener("click", toggleSkils);
});