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

// Animaciones
document.addEventListener("DOMContentLoaded", function () {
    const experienceCards = document.querySelectorAll(".experience-info .grid-card");
    const experienceImage = document.querySelector(".experience-info img");
    const experienceTitle = document.querySelector("#experience .section-title");

    function showExperienceContent() {
        const triggerBottom = window.innerHeight * 0.85;

        if (experienceTitle) {
            const titleTop = experienceTitle.getBoundingClientRect().top;
            if (titleTop < triggerBottom) {
                setTimeout(() => {
                    experienceTitle.classList.add("show");
                }, 200);
            }
        }

        experienceCards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerBottom) {
                setTimeout(() => {
                    card.classList.add("show");
                }, index * 300);
            }
        });

        if (experienceImage) {
            const imgTop = experienceImage.getBoundingClientRect().top;
            if (imgTop < triggerBottom) {
                setTimeout(() => {
                    experienceImage.classList.add("show");
                }, 400);
            }
        }
    }

    window.addEventListener("scroll", showExperienceContent);
    showExperienceContent();
});

document.addEventListener("DOMContentLoaded", function () {
    const projectsTitle = document.querySelector(".projects .section-title");
    const projectCards = document.querySelectorAll(".project-card:nth-child(-n+3)");

    function showProjects() {
        const triggerBottom = window.innerHeight * 0.8;

        if (projectsTitle) {
            const titleTop = projectsTitle.getBoundingClientRect().top;
            if (titleTop < triggerBottom) {
                projectsTitle.classList.add("show");
            }
        }

        projectCards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerBottom) {
                setTimeout(() => {
                    card.classList.add("show");
                }, index * 200);
            }
        });
    }

    window.addEventListener("scroll", showProjects);
    showProjects();
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about-container");
    const aboutImage = document.querySelector(".about .image-wrapper img");
    const infoElements = [
        document.querySelector(".info-box h3"),
        document.querySelector(".info-box h1"),
        document.querySelector(".info-box #typing-container"),
        document.querySelector(".info-box .btn-group"),
        document.querySelector(".socials")
    ];

    function showAboutSection() {
        const triggerBottom = window.innerHeight * 0.8;

        if (aboutSection) {
            const sectionTop = aboutSection.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                aboutSection.classList.add("show");
            }
        }

        if (aboutImage) {
            const imgTop = aboutImage.getBoundingClientRect().top;
            if (imgTop < triggerBottom) {
                aboutImage.classList.add("show");
            }
        }

        infoElements.forEach((element, index) => {
            if (element) {
                const elementTop = element.getBoundingClientRect().top;
                if (elementTop < triggerBottom) {
                    setTimeout(() => {
                        element.classList.add("show");
                    }, index * 200);
                }
            }
        });
    }

    window.addEventListener("scroll", showAboutSection);
    showAboutSection();
});

document.addEventListener("DOMContentLoaded", function () {
    const skillsTitle = document.querySelector(".skills .section-title");

    function showSkillsTitle() {
        const triggerBottom = window.innerHeight * 0.8;

        if (skillsTitle) {
            const titleTop = skillsTitle.getBoundingClientRect().top;
            if (titleTop < triggerBottom) {
                skillsTitle.classList.add("show");
            }
        }
    }

    window.addEventListener("scroll", showSkillsTitle);
    showSkillsTitle();
});