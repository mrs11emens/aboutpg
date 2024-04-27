// Анимация при скролле
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const bottomThreshold = document.body.clientHeight - windowHeight;

    // Если достигнут конец страницы, показываем последние две секции
    if (scrollTop >= bottomThreshold) {
        sections.forEach((section, index) => {
            if (index >= sections.length - 2) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    } else {
        // Проверяем видимость каждой секции
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }
});
// Модальный контент
const modalContents = {
    about: "I'm ..., a c# & golang programmer, based everywhere. I have a passion for coding and enjoy working on various projects. For today, i haven't released my projects, but soon they will be on my GitHub(or other open-source code portals).",
    portfolio: "Explore some of my recent projects. Here you can find a showcase of my work, including RESTful API projects, WinForms & Xamarin (coming soon) projects. For today, I've worked (Except of those listed before) with web development(This page), Tk games. Planning on creating a chat using websocket & asterisk.",
    opensource: "<a href='https://github.com/mrs11emens'>Check out my contributions to the open-source community</a>. I believe in the power of collaboration and enjoy sharing my code with others",
    contact: "Feel free to get in touch with me. Whether you have a project idea, a question, or just want to say hello, I'd love to hear from you. Telegram: coming soon, mail's coming soon."
};

// Открытие модального окна с указанным контентом
function openModal(sectionId) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');

    // Получаем текст для модального окна по ID секции
    const content = modalContents[sectionId];

    // Вставляем текст в модальное окно
    modalContent.innerHTML = content;
    modal.style.display = 'block';
}
// Закрытие модального окна при клике на крестик
document.getElementById('close-modal').addEventListener('click', () => {
    closeModal();
});

// Закрытие модального окна при клике вне его области
window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
});

// Закрытие модального окна с анимацией
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.transition = 'opacity 0.5s ease'; // добавляем плавность перехода
    modal.style.opacity = '0'; // устанавливаем прозрачность 0
    setTimeout(() => {
        modal.style.display = 'none'; // скрываем модальное окно после завершения анимации
        modal.style.transition = ''; // сбрасываем стиль перехода
        modal.style.opacity = ''; // сбрасываем прозрачность
    }, 500); // время анимации в миллисекундах
}

// Проверка, виден ли элемент во viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}
