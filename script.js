const messages = [
    "Ты уверена?",
    "Точно уверена??",
    "Прям на все 100%?",
    "Ну пожалуйста...",
    "Подумай о своем выборе!",
    "Если ты скажешь нет, то я буду сильно грустить...",
    "Я буду очень грустить...",
    "Я буду очень-очень грустить...",
    "Ладно, больше не буду спрашивать...",
    "Шучу! Скажи мне да! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}