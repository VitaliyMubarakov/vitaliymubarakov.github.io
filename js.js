console.log("AHAH")

const elements = document.getElementsByClassName('scalableElement');
console.log(elements.length);
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
        console.log(visibility);

        // Масштабируем от 1 (когда элемент полностью невиден) до 2 (когда полностью виден)
        const scale = Math.min(1 + visibility * 6, 1.2);

        e.style.transform = `scale(${scale})`;
    }
}


const projects = document.getElementsByClassName('projectBlock');

Open(projects[0]);

// function Open(e) {
//     let height = getFitContentHeightWithMargin(e);
//     e.style.height = `${height}px`;
//     console.log(e.scrollHeight)
//}
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