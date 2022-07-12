// Iniciao do Bloco de codigo para exibir data e hora atualizados

var dataHora;
var zeroFill = n => {  return ('0' + n).slice(-2); }
// Cria intervalo
var interval = setInterval(() => {
var now = new Date();
dataHora = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + ' às ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes());
// Exibe na tela usando a div#data-hora
//console.log(dataHora);
}, 1000);


// Fim do Bloco de codigo para exibir data e hora atualizados

function dxcSelectTentativas(){
    let op = document.getElementById("dxc-select-tentativas").value;

    switch(siteAtendidoLexmark) {
        case '1':
            siteAtendidoLexmark = "<b>SITE ATENDIDO:</b>&nbsp&nbsp".concat("Baixo Guandu").concat("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"); 
        break;
        case '2':
            siteAtendidoLexmark = "<b>SITE ATENDIDO:</b>&nbsp&nbsp".concat("Cariacica Porto Velho").concat("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"); 
        break;
        case '3':
            siteAtendidoLexmark = "<b>SITE ATENDIDO:</b>&nbsp&nbsp".concat("Cariacica").concat("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"); 
        break;
       
        default:
            siteAtendidoLexmark = "<b>SITE ATENDIDO:</b>&nbsp&nbsp".concat("Site não informado").concat("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
    } 


}

function dxcFunctionUserNotFound(){

    let dataAgendamento = document.getElementById("dxc-input-date").value;
    let horaInicio = document.getElementById("dxc-input-hora-inicio").value
    let horaFinal = document.getElementById("dxc-input-hora-final").value
    let selectTentativas = document.getElementById("dxc-select-tentativas").value
    let ramal = document.getElementById("dxc-input-text-ramal").value
    let email = document.getElementById("dxc-input-userEmail").value
    let userName = document.getElementById("dxc-input-userName").value
    let numChamado = document.getElementById("numChamado").value

    



   // console.log(selectTentativas);



}













