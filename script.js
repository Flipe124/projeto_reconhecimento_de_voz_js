// Verificação se o navegador tem suporte a API de reconhecimento de voz
if ("webkitSpeechRecognition" in window) {
    var recognition = new webkitSpeechRecognition();

    recognition.continuous = true;

    recognition.interimResults = true;

    // Criando variáveis de acesso aos elementos
    var startButton = document.getElementById("start-button");

    var output = document.getElementById("output");

    // Inicia o recognition ao clicar no botáo
    startButton.addEventListener('click', function () {
        recognition.start();
    })

    recognition.onresult = function (event) {
        var transcript = "";

        for (var i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
        }

        output.innerHTML = transcript;

    }

    recognition.onerror = function (event) {
        console.log('Error: ' + event.error);
    }

} else {
    console.log("Seu navegador não suporta a API de reconhecimento de voz!")
}