// Variáveis para armazenar os valores de segundos, minutos e horas
let seconds = 0;
let minutes = 0;
let hours = 0;

// Variáveis para exibir os valores formatados (com dois dígitos)
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

// Variável para armazenar o intervalo do cronômetro
let interval = null;

// Variável para rastrear o status do cronômetro (se está rodando ou parado)
let status = "stopped";

// Função principal do cronômetro que é chamada a cada segundo
function stopwatch() {
    // Incrementa os segundos
    seconds++;

    // Se os segundos atingem 60, incrementa os minutos e reseta os segundos
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        // Se os minutos atingem 60, incrementa as horas e reseta os minutos
        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    // Formata os segundos para ter dois dígitos
    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    } else {
        displaySeconds = seconds;
    }

    // Formata os minutos para ter dois dígitos
    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    } else {
        displayMinutes = minutes;
    }

    // Formata as horas para ter dois dígitos
    if (hours < 10) {
        displayHours = "0" + hours.toString();
    } else {
        displayHours = hours;
    }

    // Atualiza a exibição do tempo na página
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

// Função para iniciar ou parar o cronômetro
document.getElementById("startStopBtn").addEventListener("click", function () {
    // Se o cronômetro está parado, inicia
    if (status === "stopped") {
        interval = window.setInterval(stopwatch, 1000); // Chama a função stopwatch a cada segundo
        document.getElementById("startStopBtn").innerHTML = "Parar"; // Muda o texto do botão para "Parar"
        status = "started"; // Atualiza o status para "iniciado"
    } else {
        // Se o cronômetro está rodando, para
        window.clearInterval(interval); // Para o intervalo
        document.getElementById("startStopBtn").innerHTML = "Iniciar"; // Muda o texto do botão para "Iniciar"
        status = "stopped"; // Atualiza o status para "parado"
    }
});

// Função para resetar o cronômetro
document.getElementById("resetBtn").addEventListener("click", function () {
    window.clearInterval(interval); // Para o intervalo caso esteja rodando
    seconds = 0; // Reseta os segundos
    minutes = 0; // Reseta os minutos
    hours = 0; // Reseta as horas
    document.getElementById("display").innerHTML = "00:00:00"; // Reseta a exibição do tempo
    document.getElementById("startStopBtn").innerHTML = "Iniciar"; // Muda o texto do botão para "Iniciar"
    status = "stopped"; // Atualiza o status para "parado"
});
