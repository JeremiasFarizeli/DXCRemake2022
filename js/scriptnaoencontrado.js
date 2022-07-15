// Iniciao do Bloco de codigo para exibir data e hora atualizados

var dataHora;
var zeroFill = n => { return ('0' + n).slice(-2); }
// Cria intervalo
var interval = setInterval(() => {
    var now = new Date();
    dataHora = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + ' às ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes());
    // Exibe na tela usando a div#data-hora
    //console.log(dataHora);
}, 1000);
// Fim do Bloco de codigo para exibir data e hora atualizados

//variáveis globais:

let horaSomada


function setHoraFinal(){
    let horaRecebida = document.getElementById("dxc-input-hora-inicio").value
    let horaSplit = horaRecebida.split(":")
    let hora = horaSplit["0"] 
    let minuto = horaSplit["1"]
    horaSomada = 0

    let horaInt = parseInt(horaSplit["0"]) + 1

    horaSomada =  `${horaInt}:${minuto}`
    document.getElementById("dxc-input-hora-final").value = horaSomada
}

// INICIO BLOCO DE FUNÇÕES PARA COPIAR TEXTOS PÁGINA USUÁRIO NÃO ENCONTRADO
function copiarTextoUserNaoEncontradoAnotacoes() {
    let textoCopiado = document.getElementById("dxc-text-anotacaoes");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");

}
function copiarTextoUserNaocodEquipamento() {
    let textoCopiado = document.getElementById("dxc-text-codEquipamento");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
function copiarTextoAssuntoEmail() {
    let textoCopiado = document.getElementById("dxc-text-assuntoEmail");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
function copiarTextoEmailPadrao() {
    let textoCopiado = document.getElementById("dxc-textarea-emailPadrao");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
// FIM BLOCO DE FUNÇÕES PARA COPIAR TEXTOS PÁGINA USUÁRIO NÃO ENCONTRADO




//  FUNÇÃO BOTÃO GERAR PAGINA USER NOT FOUND
function dxcFunctionUserNotFound() {
    
    // COLETA DADOS DA PAGINA USUÁRIO NÃO ENCONTRADO
    let horaInicio = document.getElementById("dxc-input-hora-inicio").value
    let horaFinal = document.getElementById("dxc-input-hora-final").value
    let ramal = document.getElementById("dxc-input-text-ramal").value
    let celular = document.getElementById("dxc-input-text-celular").value
    let email = document.getElementById("dxc-input-userEmail").value
    let userName = document.getElementById("dxc-input-userName").value
    let numChamado = document.getElementById("numChamado").value

    let dataAgendamento = document.getElementById("dxc-input-date").value;
    let str2 = dataAgendamento; 
    let mes2 = str2.slice(5, 7);
    let dia2 = str2.slice(8, 10);
    let dataFormatada = dia2+"/"+mes2;

    // CODIGOS DO CAMPO CODIGO DO EQUIPAMENTO
    let codEquipamento = "LOCAL1EMAIL"
    op = document.getElementById("dxc-select-tentativas").value;
    switch (op) {
        case '1ª':
            codEquipamento = "LOCAL1EMAIL"
            break;
        case '2ª':
            codEquipamento = "LOCAL2EMAIL"
            break;
        case '3ª':
            codEquipamento = "LOCAL3EMAIL"
            break;
    }

    // FORMANDO AS STRINGS
    let anotacoes = `#3Strikes
${op} Tentativa de contato com usuário feita em ${dataHora} Via teams e telefone. Novo contato previsto para ${dataFormatada} - ${horaSomada}.`

    // **********************************************************************
    let emailPadrao = 
`Bom dia/Boa tarde!

Sr(a) ${userName},

Informo que tentamos entrar em contato através dos telefones ${ramal}, ${celular} e pelo Teams ${email}, mas não foi possível.

Tentaremos novamente o contato:
Dia: 13/07
Horário: Entre ${horaInicio} e ${horaSomada}

Desde já agradecemos

Equipe DXC 
`
    // **********************************************************************

    let assuntoEmail = `IMPORTANTE - Para o atendimento ao seu chamado ${numChamado} - ${op} Tentativa de contato.`

    // **********************************************************************
    
    //TEXTO PARA CODIGO DO EQUIPAMENTO: 
    document.getElementById("dxc-text-codEquipamento").value = codEquipamento
    //CAMPO ANOTAÇÕES
    document.getElementById("dxc-text-anotacaoes").value = anotacoes
    //CAMPO ASSUNTO DO EMAIL 
    document.getElementById("dxc-text-assuntoEmail").value = assuntoEmail   
    //TEXTO CORPO DO EMAIL
    document.getElementById("dxc-textarea-emailPadrao").value = emailPadrao


    // ZERANDO OS CAMPOS.
    dataAgendamento = document.getElementById("dxc-input-date").value = ""
    horaInicio = document.getElementById("dxc-input-hora-inicio").value = ""
    horaFinal = document.getElementById("dxc-input-hora-final").value = ""
    ramal = document.getElementById("dxc-input-text-ramal").value = ""
    celular = document.getElementById("dxc-input-text-celular").value = ""
    email = document.getElementById("dxc-input-userEmail").value = ""
    userName = document.getElementById("dxc-input-userName").value = ""
    numChamado = document.getElementById("numChamado").value = ""
}
//  FIM DA FUNÇÃO BOTÃO GERAR PAGINA USER NOT FOUND












