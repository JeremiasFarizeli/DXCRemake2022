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


// INICIO BLOCO DE FUNÇÕES PARA COPIAR TEXTOS PÁGINA USUÁRIO NÃO ENCONTRADO
function copiarTextoAgendamentoAnotacoes() {
    let textoCopiado = document.getElementById("dxc-text-anotacaoes");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");

}
function copiarTextocodEquipamento() {
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



//  FUNÇÃO BOTÃO GERAR PAGINA
function dxcFunctionAgendamento() {
    
    // COLETA DADOS DA PAGINA USUÁRIO NÃO ENCONTRADO
    let horaInicio = document.getElementById("dxc-input-hora-inicio").value
    let horaFinal = document.getElementById("dxc-input-hora-final").value
    let userName = document.getElementById("dxc-input-userName").value
    let numChamado = document.getElementById("numChamado").value

    let dataAgendamento = document.getElementById("dxc-input-date").value;
    let str2 = dataAgendamento; 
    let mes2 = str2.slice(5, 7);
    let dia2 = str2.slice(8, 10);
    let dataFormatada = dia2+"/"+mes2;

    // CODIGOS DO CAMPO CODIGO DO EQUIPAMENTO
    let codEquipamento = `AGENDADO PARA ${dataFormatada}`

    // FORMANDO AS STRINGS
    let anotacoes = `#Agendado

Atendimento agendado para ${dataFormatada} entre ${horaInicio}h e ${horaFinal}h.`

    // **********************************************************************
    let emailPadrao = 
`Sr(a) ${userName},

Recebemos o seu chamado: ${numChamado}. Conforme solicitado estamos programando o atendimento do chamado para ${dataFormatada}.

Horário previsto para contato será entre ${horaInicio}h e ${horaFinal}h.
Agradecemos a sua compreensão.

Atenciosamente
Equipe DXC.Technology
`
    // **********************************************************************

    let assuntoEmail = `Agendamento de atendimento do chamado ${numChamado}.`

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
    userName = document.getElementById("dxc-input-userName").value = ""
    numChamado = document.getElementById("numChamado").value = ""
}
//  FIM DA FUNÇÃO BOTÃO GERAR PAGINA
