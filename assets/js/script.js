let hora = document.getElementById('hora');
let minuto = document.getElementById('minuto');
let segundo = document.getElementById('segundo');
let divisor = document.getElementsByClassName('divisor');
let diaSemana = document.getElementById('dia-semana');
let dia = document.getElementById('dia');
let mes = document.getElementById('mes');
let ano = document.getElementById('ano');
let msg = document.getElementById('msg');

function atualizaHora(){
    let agora = new Date();
    let horaAtual = agora.getHours();
    let minutoAtual = agora.getMinutes();
    let segundoAtual = agora.getSeconds();

    hora.innerHTML = horaAtual < 10 ? '0' + horaAtual : horaAtual;
    // Se o minuto for menor que 10, adiciona um zero antes do número
    minuto.innerHTML = minutoAtual < 10 ? '0' + minutoAtual : minutoAtual;
    // Se o segundo for menor que 10, adiciona um zero antes do número
    segundo.innerHTML = segundoAtual < 10 ? '0' + segundoAtual : segundoAtual;
}

function mesAno(){
    var agora = new Date();
    let diaAtual = agora.getDate();
    // getMonth() retornar 12 para dezembro
    let mesAtual = agora.getMonth() + 1;
    let anoAtual = agora.getFullYear();
    // Primeira letra do dia em maisculo
    diaSemana.innerHTML = agora.toLocaleDateString('pt-BR', {weekday: 'long'}).charAt(0).toUpperCase() + agora.toLocaleDateString('pt-BR', {weekday: 'long'}).slice(1);
    dia.innerHTML = diaAtual;
    mes.innerHTML = mesAtual;
    ano.innerHTML = anoAtual;
}

// Exibe mensagem de boas vindas se for manhã, tarde ou noite
function boasVindas(){
    let agora = new Date();
    let horaAtual = agora.getHours();
    if(horaAtual >= 6 && horaAtual < 12){
        msg.innerHTML = 'Bom dia!';
    }else if(horaAtual >= 12 && horaAtual < 18){
        msg.innerHTML = 'Boa tarde!';
    }else if(horaAtual >= 0 && horaAtual < 6){
        msg.innerHTML = 'Bom dia!';
    }
}

atualizaHora();
setInterval(atualizaHora, 1000);
mesAno();
boasVindas();
