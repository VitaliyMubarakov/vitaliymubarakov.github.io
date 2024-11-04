console.log(`


██████████████████████████████████████
█▄─▄─▀█▄─█─▄███▄─▄█▄▄▄░█─▄▄▄▄█▄─▀█▄─▄█
██─▄─▀██▄─▄█████─███▄▄░█▄▄▄▄─██─█▄▀─██
▀▄▄▄▄▀▀▀▄▄▄▀▀▀▀▄▄▄▀▄▄▄▄▀▄▄▄▄▄▀▄▄▄▀▀▄▄▀
`)

$('#media').load('./resume.html');

const nameMedia = document.getElementById('nameMedia');
nameMedia.textContent = `© Vitaliy Mubarakov ${new Date().getFullYear()}`;
const projects = document.getElementsByClassName('projectBlock');

let listArr = Array.from(projects)
listArr.forEach(e => {
    SetBlockStartSize(e);
})

function n(val, max, min) { return (val - min) / (max - min); }

function SetBlockStartSize(e) {
    e.style.transform = `scale(${1})`;
    let childrens = Array.from(e.children)

    let findedElement;
    for (let i = 0; i < childrens.length; i++) {
        const ee = childrens[i];

        if (ee.classList[0] == "projectDemoBlock") {
            findedElement = ee;
            break;
        }
    }

    let height = getDistanceBetweenFirstAndThirdChild3(childrens[0], findedElement);
    //childrens[0].style.backgroundColor = `white`;
    //findedElement.style.backgroundColor = `white`;
    e.style.minHeight = `${height + 45 + 84}px`;
}

const elements = document.getElementsByClassName('scalableElement');
window.addEventListener('scroll', () => {
    UpdateSize();
});

//setInterval(UpdateSize, 200);
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
function UpdateSize() {
    for (let i = 0; i < elements.length; i++) {
        const e = elements[i];

        const rect = e.getBoundingClientRect(); // Положение элемента относительно окна
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;

        // Проверяем видимость верхней, нижней, левой и правой границы элемента
        const visibleHeight = Math.max(0, Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0));
        const visibleWidth = Math.max(0, Math.min(rect.right, windowWidth) - Math.max(rect.left, 0));

        // Процент видимости по высоте и ширине
        const visibilityY = visibleHeight / 30 / rect.height;
        const visibilityX = visibleWidth / 30 / rect.width;

        // Берём минимальный процент видимости, чтобы учесть как вертикальную, так и горизонтальную прокрутку
        const visibility = Math.min(visibilityY, visibilityX);

        // Масштабируем от 1 (когда элемент полностью невиден) до 2 (когда полностью виден)
        const scale = Math.min(1 + visibility * 6, 1.2);
        console.log(visibility * 100);
        e.style.transform = `scale(${scale})`;
        e.style.opacity = `${1 - n(visibility * 100, 0, 1.4)}`;
    }
}

// Выбираем элемент, за которым нужно наблюдать
const grid = document.getElementById("grid");

// Создаём новый ResizeObserver
const resizeObserver = new ResizeObserver(entries => {
    UpdateSize();
});

// Начинаем наблюдать за изменениями размера элемента
resizeObserver.observe(grid);



Open(projects[0]);

function Open(index) {
    let e = projects[index];

    if (e.classList.contains("isOpen")) {
        e.classList.remove("isOpen");
        e.classList.add("isClosed");
        e.style.height = `${0}px`;

    } else {
        e.classList.remove("isClosed");
        e.classList.add("isOpen");
        let height = getFitContentHeightWithMargin(e) - 230;
        e.style.height = `${height}px`;
    }

    UpdateSize();
}

function getFitContentHeightWithMargin(element) {
    const fitContentHeight = element.scrollHeight;

    // Получаем margin из стилей
    const computedStyle = window.getComputedStyle(element);
    const marginTop = parseFloat(computedStyle.marginTop);
    const marginBottom = parseFloat(computedStyle.marginBottom);

    return fitContentHeight + marginTop + marginBottom;
}

function getDistanceBetweenFirstAndThirdChild(firstElement, lastElement) {
    // Получаем позиции первого и третьего дочерних элементов
    const firstChildRect = firstElement.getBoundingClientRect();
    const thirdChildRect = lastElement.getBoundingClientRect();

    // Вычисляем расстояние между верхней границей первого элемента и нижней границей третьего элемента
    const distance = thirdChildRect.bottom - firstChildRect.top;
    return distance;
}

function getDistanceBetweenFirstAndThirdChild2(firstElement, lastElement) {
    // Получаем позиции первого и третьего дочерних элементов
    const firstChildRect = firstElement.getBoundingClientRect();
    const thirdChildRect = lastElement.getBoundingClientRect();
    // Получаем отступы
    const firstChildStyles = window.getComputedStyle(firstElement);
    const thirdChildStyles = window.getComputedStyle(lastElement);
    const firstChildMarginBottom = parseFloat(firstChildStyles.marginBottom);
    const thirdChildMarginTop = parseFloat(thirdChildStyles.marginTop);
    // Добавляем отступы к расстоянию
    const distance = (thirdChildRect.bottom + thirdChildMarginTop) - (firstChildRect.top - firstChildMarginBottom);

    return distance;
}

function getDistanceBetweenFirstAndThirdChild3(firstElement, lastElement) {
    const firstChildRect = firstElement.getBoundingClientRect();
    const thirdChildRect = lastElement.getBoundingClientRect();
    const parentRect = firstElement.parentElement.getBoundingClientRect();

    // Находим координаты первого и третьего элемента относительно родителя
    const localTopFirst = firstChildRect.top - parentRect.top;
    const localBottomThird = thirdChildRect.bottom - parentRect.top;

    // Расстояние между верхом первого и низом третьего элемента в локальных координатах
    const distance = localBottomThird - localTopFirst;

    return distance;
}

function Scroll(id) {
    const el = document.getElementById(id);
    el.scrollIntoView({ block: "center", inline: "center", behavior: "smooth" });
}