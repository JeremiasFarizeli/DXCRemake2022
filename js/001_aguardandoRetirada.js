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
    let textoCopiado = document.getElementById("dxc-text-anotacaoes-aguardandoRetirada");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");

}
function copiarTexto() {
    let textoCopiado = document.getElementById("dxc-text-codEquipamento");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

// FIM BLOCO DE FUNÇÕES PARA COPIAR TEXTOS PÁGINA USUÁRIO NÃO ENCONTRADO



//  FUNÇÃO BOTÃO GERAR PAGINA
function dxcFunctionAguardandoRetirada() {
    
  
    // CODIGOS DO CAMPO CODIGO DO EQUIPAMENTO
    let codEquipamento = `AGUARDANDO RETIRADA`

    // FORMANDO AS STRINGS
    let anotacoes = `#AguardandoRetirada

Equipamento reparado, aguardando retirada.`



    // **********************************************************************
    
    //TEXTO PARA CODIGO DO EQUIPAMENTO: 
    document.getElementById("dxc-text-codEquipamento").value = codEquipamento
    //CAMPO ANOTAÇÕES
    document.getElementById("dxc-text-anotacaoes-aguardandoRetirada").value = anotacoes


    // ZERANDO OS CAMPOS.
    //dataAgendamento = document.getElementById("dxc-input-date").value = ""

}
//  FIM DA FUNÇÃO BOTÃO GERAR PAGINA
