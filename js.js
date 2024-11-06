console.log(`
██████████████████████████████████████
█▄─▄─▀█▄─█─▄███▄─▄█▄▄▄░█─▄▄▄▄█▄─▀█▄─▄█
██─▄─▀██▄─▄█████─███▄▄░█▄▄▄▄─██─█▄▀─██
▀▄▄▄▄▀▀▀▄▄▄▀▀▀▀▄▄▄▀▄▄▄▄▀▄▄▄▄▄▀▄▄▄▀▀▄▄▀
`)



console.info("- StartInitWeb v 3");

//$("#wrapper").load("./about.html body")
let wrapper = document.getElementById("wrapper");

console.info("2");
//SetHtmlAbout();
//setTimeout(SetHtmlProjects, 6000);
Init();

async function Init() {
    let projectsHTML = await GetHtmlAbout();
    let homeHTML = await GetProjectAbout();

    console.log("Load data");
    console.log(projectsHTML);
    console.log("=====================================");
    console.log(homeHTML);

    async function GetHtmlAbout() {
        return await fetch('about.html')
            .then(response => {
                if (!response.ok) throw new Error("Ошибка загрузки данных");
                return response.text();
            })
            .catch(error => console.error("Ошибка:", error));
    }

    async function GetProjectAbout() {
        return await fetch('projects.html')
            .then(response => {
                if (!response.ok) throw new Error("Ошибка загрузки данных");
                return response.text();
            })
            .catch(error => console.error("Ошибка:", error));
    }
}



// async function asdada() {
//     Hide(wrapper);
//     await fetch('about.html')
//         .then(response => {
//             if (!response.ok) throw new Error("Ошибка загрузки данных");
//             return response.text();
//         })
//         .then(data => {
//             console.info("2");
//             const parser = new DOMParser();
//             const doc = parser.parseFromString(data, 'text/html');
//             const textContent = doc.body; // Извлекаем текст из <body>
//             projectsHTML = data;
//             wrapper.innerHTML = data;

//             setTimeout(() => Show(wrapper), 50); // Задержка для запуска анимации
//             window.scrollTo(0, 0); 

//         })
//         .catch(error => console.error("Ошибка:", error));
// }

// async function SetHtmlProjects() {
//     Hide(wrapper);
//     await fetch('projects.html')
//         .then(response => {
//             if (!response.ok) throw new Error("Ошибка загрузки данных");
//             return response.text();
//         })
//         .then(data => {
//             console.info("2");
//             const parser = new DOMParser();
//             const doc = parser.parseFromString(data, 'text/html');
//             const textContent = doc.body; // Извлекаем текст из <body>
//             console.info("3");
//             console.log("Текст из HTML файла:", textContent);
//             console.log("Текст из файла:", data);
//             console.info("4");
//             wrapper.innerHTML = data;
//             eval("InitProjectJS();");
//             setTimeout(() => Show(wrapper), 50); // Задержка для запуска анимации
//             window.scrollTo(0, 0); 

//         })
//         .catch(error => console.error("Ошибка:", error));
// }

function Hide(e) {
    e.classList.remove("visible");
    e.classList.add("invisible");
}
function Show(e) {
    e.classList.remove("invisible");
    e.classList.add("visible");
}

