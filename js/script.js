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
    let dataAgendamento = document.getElementById("dxc-input-date").value;
    let horaInicio = document.getElementById("dxc-input-hora-inicio").value
    let horaFinal = document.getElementById("dxc-input-hora-final").value
    let ramal = document.getElementById("dxc-input-text-ramal").value
    let email = document.getElementById("dxc-input-userEmail").value
    let userName = document.getElementById("dxc-input-userName").value
    let numChamado = document.getElementById("numChamado").value


    // CODIGOS DO CAMPO CODIGO DO EQUIPAMENTO
    let codEquipamento = "LOCAL1EMAIL"
    op = document.getElementById("dxc-select-tentativas").value;
    switch (op) {
        case '1º':
            codEquipamento = "LOCAL1EMAIL"
            break;
        case '2º':
            codEquipamento = "LOCAL2EMAIL"
            break;
        case '3º':
            codEquipamento = "LOCAL3EMAIL"
            break;
    }





//  provisório
document.getElementById("dxc-textarea-emailPadrao").value = 
`Bom dia/Boa tarde!

Sr(a) Wellington Rezende,

Informo que tentamos entrar em contato através dos telefones +55 (027) 3333-27997092530 / 27988146507 - 27997092530 / 27988146507 e pelo Teams Wellington.Rezende@vale.com, mas não foi possível.

Tentaremos novamente o contato:
Dia: 13/07
Horário: Entre 08 e 09

Desde já agradecemos

Equipe DXC 
`


    // FORMANDO AS STRINGS
    let anotacoes = `#3Strikes
1º Tentativa de contato com usuário feita em 12/07 às 12:54 Via teams e telefone. Novo contato previsto para 13/07- 09h.`


    //TEXTO PARA CODIGO DO EQUIPAMENTO: 
    document.getElementById("dxc-text-codEquipamento").value = codEquipamento

    //CAMPO ANOTAÇÕES
    document.getElementById("dxc-text-anotacaoes").value = anotacoes

    //CAMPO ASSUNTO DO EMAIL 
    //document.getElementById("userNotFoundTextoEmail").innerHTML = (req);

    //TEXTO CORPO DO EMAIL
    //document.getElementById("userNotFoundTexto").innerHTML = (texto);



}













