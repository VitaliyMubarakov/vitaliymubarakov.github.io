console.log(`
██████████████████████████████████████
█▄─▄─▀█▄─█─▄███▄─▄█▄▄▄░█─▄▄▄▄█▄─▀█▄─▄█
██─▄─▀██▄─▄█████─███▄▄░█▄▄▄▄─██─█▄▀─██
▀▄▄▄▄▀▀▀▄▄▄▀▀▀▀▄▄▄▀▄▄▄▄▀▄▄▄▄▄▀▄▄▄▀▀▄▄▀
`)



console.info("- StartInitWeb v 0.6");

//$("#wrapper").load("./about.html body")

$.get('about.html', function (data) {
    loadedContent = $(data).html(); // Извлекаем содержимое <body> и сохраняем в переменную
    $('#wrapper').html(loadedContent); // Вставляем содержимое в #wrapper
    console.log("Загруженные данные:", loadedContent);
});
