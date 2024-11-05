console.log(`
██████████████████████████████████████
█▄─▄─▀█▄─█─▄███▄─▄█▄▄▄░█─▄▄▄▄█▄─▀█▄─▄█
██─▄─▀██▄─▄█████─███▄▄░█▄▄▄▄─██─█▄▀─██
▀▄▄▄▄▀▀▀▄▄▄▀▀▀▀▄▄▄▀▄▄▄▄▀▄▄▄▄▄▀▄▄▄▀▀▄▄▀
`)



console.info("- StartInitWeb v 3");

//$("#wrapper").load("./about.html body")
let wrapper = document.getElementById("wrapper");

console.info("1");
SetHtmlAbout();

async function SetHtmlAbout() {
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
            console.info("3");
            console.log("Текст из HTML файла:", textContent);
            console.log("Текст из файла:", data);
            console.info("4");
            wrapper.innerHTML = data;
        })
        .catch(error => console.error("Ошибка:", error));
}

