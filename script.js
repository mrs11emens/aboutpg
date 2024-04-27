// Scroll animation
window.addEventListener('scroll', () => {
    // Creating consts which contains detection of website position and sections
    const sections = document.querySelectorAll('.section');
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const bottomThreshold = document.body.clientHeight - windowHeight;

    // If scroll reaches the end of website, script will show only 2 last sections
    if (scrollTop >= bottomThreshold) {
        sections.forEach((section, index) => {
            if (index >= sections.length - 2) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    } else {
        // Checking for every section to be visible
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }
});
// Modal contents, made for dividing section content from modal. Section content shows enshortened information, while modal shows full info
const modalContents = {
    // in about you can post information like your nickname: "I'm [nickname], a [your work or something else], based [optional, your region, country or continent] I have a [passion/smth else] for [your work your passinated/else]
    about: "I'm ..., a ... programmer, based everywhere. I have a ... for ... For today, i haven't released my projects, but soon they will be on my GitHub(or other open-source code portals).",
    // in portfolio you can post some of your closed/Opensrc projects
    portfolio: "Explore some of my recent projects. Here you can find a showcase of my work, including .... For today, I've worked on ...",
    // in opensource send your countributions to not your projects
    opensource: "Check out my contributions to the open-source community</a>. I believe in the power of collaboration and enjoy sharing my code with others",
    // Contacts to talk or send ideas,else
    contact: "Feel free to get in touch with me. Whether you have a project idea, a question, or just want to say hello, I'd love to hear from you."
};

// Open modal(modal is the window in web), name of functions tells by itself
function openModal(sectionId) {
    // That's modal const variable creation
    const modal = document.getElementById('modal');
    // Creating modal content variable
    const modalContent = document.getElementById('modal-content');

    // Getting text to modal, from modalContents with sectionId, means for section with sectionId "about" it will show modalContents.about 
    const content = modalContents[sectionId];

    // Inserting text in modal
    modalContent.innerHTML = content;
    modal.style.display = 'block';
}
// Closing a modal.
document.getElementById('close-modal').addEventListener('click', () => {
    closeModal();
});

// Closing a modal (probably not work, if not - fixed soon)
window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
});

// Creating an animation to close modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.transition = 'opacity 0.5s ease'; // make anim smooth
    modal.style.opacity = '0'; // no opacity
    setTimeout(() => {
        modal.style.display = 'none'; // making modal invisible after closing
        modal.style.transition = ''; // removing transition after closing
        modal.style.opacity = ''; // removing opacity
    }, 500); // anim time, ms
}

// is element visible in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}
