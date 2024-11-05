console.log(`
██████████████████████████████████████
█▄─▄─▀█▄─█─▄███▄─▄█▄▄▄░█─▄▄▄▄█▄─▀█▄─▄█
██─▄─▀██▄─▄█████─███▄▄░█▄▄▄▄─██─█▄▀─██
▀▄▄▄▄▀▀▀▄▄▄▀▀▀▀▄▄▄▀▄▄▄▄▀▄▄▄▄▄▀▄▄▄▀▀▄▄▀
`)



console.info("- StartInitWeb v 0.9");

//$("#wrapper").load("./about.html body")
let wrapper = document.getElementById("wrapper");


async function SetHtmlAbout() {
    await fetch('about.html')
        .then(response => {
            if (!response.ok) throw new Error("Ошибка загрузки данных");
            return response.text();
        })
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const textContent = doc.body; // Извлекаем текст из <body>
            console.log("Текст из HTML файла:", textContent);
            console.log("Текст из файла:", data);
            wrapper.innerHTML = textContent;
        })
        .catch(error => console.error("Ошибка:", error));
}

