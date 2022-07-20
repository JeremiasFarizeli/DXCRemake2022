
// INICIO BLOCO DE FUNÇÕES PARA COPIAR
function copiarTextoUserNaoEncontradoAnotacoes() {
    let textoCopiado = document.getElementById("dxc-text-anotacaoes-badUse");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");

}
function copiarCodEquipamento() {
    let textoCopiado = document.getElementById("dxc-text-codEquipamento");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

// FIM BLOCO DE FUNÇÕES PARA COPIAR

let anotacoes = ""
let serial = ""
let etag = ""


//  FUNÇÃO BOTÃO GERAR
function dxcFunctionBadUse() {


    op = document.getElementById("dxc-select-badUse").value;
    switch (op) {
        case '1ª':
            opt01()
            break;
        case '2ª':
            opt02()
            break;
        case '3ª':
            opt03()
            break;
        case '4ª':
            opt04()
            break;
        case '0':
            document.getElementById("dxc-show-badUseOptions").style.display = "none"
            alert("Escolha uma opção")
            document.getElementById("dxc-text-codEquipamento").value = ""
            document.getElementById("dxc-text-anotacaoes-badUse").value = ""
            document.getElementById("dxc-select-badUse").focus()
            break;
    }

    // **********************************************************************

    //TEXTO PARA CODIGO DO EQUIPAMENTO: 
    //document.getElementById("dxc-text-codEquipamento").value = ""


}
//  FIM DA FUNÇÃO BOTÃO GERAR PAGINA USER NOT FOUND

function dxcFunction() {
    serial = document.getElementById("dxc-input-serial").value
    etag = document.getElementById("dxc-input-etag").value

    document.getElementById("dxc-text-codEquipamento").value = "BAD USE - MANUTENÇÃO"

    anotacoes = `#Nãocobertopelagarantia - Aguardando Manutenção.

Chamado vendor: Em processo de abertura
Previsão: Não informada
Instalado equipamento de BKP: SIM (Serial: ${serial} / Etag: ${etag})`

    //CAMPO ANOTAÇÕES
    document.getElementById("dxc-text-anotacaoes-badUse").value = anotacoes

    // ZERANDO OS CAMPO
    document.getElementById("dxc-input-serial").value = ""
    document.getElementById("dxc-input-etag").value = ""
}







function opt01() {
    document.getElementById("dxc-show-badUseOptions").style.display = "none"
    document.getElementById("dxc-text-codEquipamento").value = "ORÇAMENTO"
    anotacoes = `#Nãocobertopelagarantia - Aguardando o Orçamento.

Enviado e-mail para a equipe de HardwareManagementVALE.`

    //CAMPO ANOTAÇÕES
    document.getElementById("dxc-text-anotacaoes-badUse").value = anotacoes

}


function opt02() {
    document.getElementById("dxc-show-badUseOptions").style.display = "none"
    document.getElementById("dxc-text-codEquipamento").value = "BAD USE - MANUTENÇÃO"
    anotacoes = `#Nãocobertopelagarantia - Aguardando Manutenção.

Chamado vendor: Em processo de abertura
Previsão: Não informada
Instalado equipamento de BKP: NÃO`

    //CAMPO ANOTAÇÕES
    document.getElementById("dxc-text-anotacaoes-badUse").value = anotacoes
}



function opt03() {
    document.getElementById("dxc-text-anotacaoes-badUse").value = ""
    document.getElementById("dxc-text-codEquipamento").value = ""
    document.getElementById("dxc-show-badUseOptions").style.display = "block"
    document.getElementById("dxc-input-serial").focus()
}



function opt04() {
    document.getElementById("dxc-show-badUseOptions").style.display = "none"
    document.getElementById("dxc-text-codEquipamento").value = "APROVAÇÃO ORÇAMENTO"
    anotacoes = `#Nãocobertopelagarantia - Aguardando aprovação do orçamento.

Enviado orçamento para o email do usuário, aguardando aprovação.`

    //CAMPO ANOTAÇÕES
    document.getElementById("dxc-text-anotacaoes-badUse").value = anotacoes
}









