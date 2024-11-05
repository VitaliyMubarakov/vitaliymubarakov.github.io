console.log(`
██████████████████████████████████████
█▄─▄─▀█▄─█─▄███▄─▄█▄▄▄░█─▄▄▄▄█▄─▀█▄─▄█
██─▄─▀██▄─▄█████─███▄▄░█▄▄▄▄─██─█▄▀─██
▀▄▄▄▄▀▀▀▄▄▄▀▀▀▀▄▄▄▀▄▄▄▄▀▄▄▄▄▄▀▄▄▄▀▀▄▄▀
`)



console.info("- StartInitWeb v 0.4");

//$("#wrapper").load("./about.html body")

$.get('about.html', function (data) {
    loadedContent = $(data).find('body').html(); // Извлекаем содержимое <body> и сохраняем в переменную
    $('#wrapper').html(loadedContent); // Вставляем содержимое в #wrapper
    console.log("Загруженные данные:", loadedContent);
});
