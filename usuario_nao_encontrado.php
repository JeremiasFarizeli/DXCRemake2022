<?php 
    include("cabecalho.php");
?>






<div id="dados"> <!-- Conteudo DADOS-->

    <!-- **************** Inicio option select ********************-->
    <div class="divbotoes">


        <div class="right">
            <input id="botaoGerar" onclick="userNotFound(); userIndisponivelpage();" type="button" value="GERAR"
                class="btnGerar" class="btnGerar-info">
        </div> <!-- fim div right -->

    </div>





    <div id="userNotFound" class="userNotFound">
        <br><br>
        <h3>DADOS / STATUS</h3> <br>

        Agendamento para dia: <input id="dataAgendamentoUserNotFound" type="date" pattern="dd/MM/yyyy" /> <br><br>
        Hora inicial: <input id="hora1" type="text" style="width:42px" placeholder="00:00">
        Hora final: <input id="hora2" type="text" style="width:42px" placeholder="00:00">
        <br><br>

        Tentativas:
        <select name="tentativasUserNotFound" onchange="selectSiteEscolhido()" id="tentativasUserNotFound">
            <option value="0"> ** Selecione ** </option>
            <option value="1º">1º Tentativa</option>
            <option value="2º">2º Tentativa</option>
            <option value="3º">3º Tentativa</option>
        </select>

        <br><br>

        Ramal: <input id="telUserNotFound" type="tel" placeholder="(area) Numero" min="9" max="11">
        Celular: <input id="celUserNotFound" type="tel" placeholder="(area) Numero" min="9" max="11"><br><br>

        Email: <input id="EmailUserNotFound" type="text" placeholder="Email do usuário">

        <br><br><br>

        <h3>DADOS / Email</h3> <br>

        Usuário: <input id="UserNotFoundUser" type="text" style="width:80%" placeholder="Nome do usuário ..."> <br><br>
        REQ: <input id="REQUserNotFound" type="text" style="width:80%" placeholder="REQ000...">

    </div>







    <!---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- **************** Inicio PAGINA  *****************************************************************************************************************************************-->
    <!---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->








    <div id="dadosDireita">
        <!-- inicio Conteudo tipificacao -->

        <div id="userNotFound2">

            <strong> TEXTO PARA CHAMADO: </strong>
            <div id="textoChamadoUserNotFound" class="tipificacaoRecomendada">
            </div>

            <br>

            <strong>CAMPO ASSUNTO DO EMAIL / TIPO PENDING</strong>
            <div id="userNotFoundTextoEmail" class="TextoEmail">
            </div>

            <br>
            <br>

            <strong>TEXTO CORPO DO EMAIL</strong>
            <div class="textoEncerramento" id="userNotFoundTexto" name="userNotFoundTexto">
            </div>
        </div>
    </div> <!-- fim Conteudo tipificacao -->




    <!----------------------------------------------------------------------------------------------------------------->







<?php 
    include("rodape.php");
?>