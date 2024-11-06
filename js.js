console.log(`
██████████████████████████████████████
█▄─▄─▀█▄─█─▄███▄─▄█▄▄▄░█─▄▄▄▄█▄─▀█▄─▄█
██─▄─▀██▄─▄█████─███▄▄░█▄▄▄▄─██─█▄▀─██
▀▄▄▄▄▀▀▀▄▄▄▀▀▀▀▄▄▄▀▄▄▄▄▀▄▄▄▄▄▀▄▄▄▀▀▄▄▀
`)



console.info("- StartInitWeb v 6");

//$("#wrapper").load("./about.html body")
let wrapper = document.getElementById("wrapper");

console.info("2");
//SetHtmlAbout();
//setTimeout(SetHtmlProjects, 6000);

let projectsHTML;
let aboutHTML;

Init();

async function Init() {
    //get html
    projectsHTML = await GetHtmlProject();
    aboutHTML = await GetHtmlAbout();

    //initJS
    

    console.log("Load data");
    console.log(projectsHTML);
    console.log("=====================================");
    console.log(aboutHTML);



    async function GetHtmlAbout() {
        return await fetch('about.html')
            .then(response => {
                if (!response.ok) throw new Error("Ошибка загрузки данных");
                return response.text();
            })
            .catch(error => console.error("Ошибка:", error));
    }
    async function GetHtmlProject() {
        return await fetch('projects.html')
            .then(response => {
                if (!response.ok) throw new Error("Ошибка загрузки данных");
                return response.text();
            })
            .catch(error => console.error("Ошибка:", error));
    }
}

function LoadData(type) {
    Hide(wrapper);

    switch (type) {
        case "about":
            wrapper.innerHTML = aboutHTML;
            break;
        
        case "projects":
            wrapper.innerHTML = projectsHTML;
            eval("InitProjectJS();");
            break;

        default:
            break;
    }

    setTimeout(() => Show(wrapper), 100); // Задержка для запуска анимации
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

