console.log(`
██████████████████████████████████████
█▄─▄─▀█▄─█─▄███▄─▄█▄▄▄░█─▄▄▄▄█▄─▀█▄─▄█
██─▄─▀██▄─▄█████─███▄▄░█▄▄▄▄─██─█▄▀─██
▀▄▄▄▄▀▀▀▄▄▄▀▀▀▀▄▄▄▀▄▄▄▄▀▄▄▄▄▄▀▄▄▄▀▀▄▄▀
`)



console.info("- StartInitWeb v 14");

//$("#wrapper").load("./about.html body")
let wrapper = document.getElementById("wrapper");

console.info("1");
//SetHtmlAbout();
//setTimeout(SetHtmlProjects, 6000);

async function SetHtmlAbout() {
    Hide(wrapper);
    await fetch('about.html')
        .then(response => {
            if (!response.ok) throw new Error("Ошибка загрузки данных");
            return response.text();
        })
        .then(data => {
            console.info("2");
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const textContent = doc.body; // Извлекаем текст из <body>
            
            wrapper.innerHTML = data;
            
            setTimeout(() => Show(wrapper), 50); // Задержка для запуска анимации
            window.scrollTo(0, 0); 

        })
        .catch(error => console.error("Ошибка:", error));
    
}

async function SetHtmlProjects() {
    Hide(wrapper);
    await fetch('projects.html')
        .then(response => {
            if (!response.ok) throw new Error("Ошибка загрузки данных");
            return response.text();
        })
        .then(data => {
            console.info("2");
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const textContent = doc.body; // Извлекаем текст из <body>
            console.info("3");
            console.log("Текст из HTML файла:", textContent);
            console.log("Текст из файла:", data);
            console.info("4");
            wrapper.innerHTML = data;
            eval("InitProjectJS();");
            setTimeout(() => Show(wrapper), 50); // Задержка для запуска анимации
            window.scrollTo(0, 0); 

        })
        .catch(error => console.error("Ошибка:", error));
}

function Hide(e) {
    e.classList.remove("visible");
    e.classList.add("invisible");
}
function Show(e) {
    e.classList.remove("invisible");
    e.classList.add("visible");
}

