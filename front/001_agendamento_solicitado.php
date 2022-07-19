<?php 
    include("header.php");
?>


<script src="../js/001_agendamento_solicitado.js"></script>

<!-- Inicio do container central -->
<div>
    <section>
        <div class="dxc-card-left">
            <aside>
                <div>

                    <label class="dxc-label2" for="">USUÁRIO SOLICITOU AGENDAMENTO:</label><br>
                    <br><br>


                    <label class="dxc-label" for="">Agendado para:</label>
                    <input class="dxc-input-date" id="dxc-input-date" type="date">

                    <label class="dxc-label">Horário entre:</label>
                    <input class="dxc-input-hora" id="dxc-input-hora-inicio" onblur="setHoraFinal()" value="00:00"
                        type="time" min="00:00" max="23:00" required>
                    <label class="dxc-label">e</label>
                    <input class="dxc-input-hora" id="dxc-input-hora-final" value="00:00" type="text"
                        placeholder="00:00" disabled>

                    <br><br>


                    <br><br>
                    <input class="dxc-input-text" id="dxc-input-userName" type="text" placeholder="Nome do usuário">

                    <br><br>

                    <input class="dxc-input-text" id="numChamado" type="text" placeholder="Numero do chamado">

                    <br><br>

                    <!-- DIV BOTÃO -->
                    <div>
                        <div class="dxc-poisition-right">
                            <button class="btnGerar" class="btnGerar-info"
                                onclick="dxcFunctionAgendamento()">GERAR</button>
                        </div>

                    </div>

                </div>
            </aside>
        </div>
        <div class="dxc-card-right">
            <aside>
                <div>

                    <div class="div-texto2 ">
                        <label class="dxc-label3"> Padronização campo anotações:</label>
                        <label class="copyButton" onclick="copiarTextoAgendamentoAnotacoes()">Copiar</label>
                        <textarea class="texto2" name="" id="dxc-text-anotacaoes" cols="30" rows="10"></textarea>
                    </div>

                    <div class="div-texto1"><br>
                        <label class="dxc-label3">Código Equipamento:</label>
                        <label class="copyButton" onclick="copiarTextocodEquipamento()">Copiar</label>
                        <textarea class="texto1" name="" id="dxc-text-codEquipamento" cols="30" rows="10"></textarea>
                    </div>


                    <div class="div-texto3"><br>
                        <label class="dxc-label3"> Texto Assunto do E-mail:</label>
                        <label class="copyButton" onclick="copiarTextoAssuntoEmail()">Copiar</label>
                        <textarea class="texto3" name="" id="dxc-text-assuntoEmail" cols="30" rows="10"></textarea>
                    </div>

                    <div class="div-texto4"><br>
                        <label class="dxc-label3"> E-mail padrão:</label>
                        <label class="copyButton" onclick="copiarTextoEmailPadrao()">Copiar</label>
                        <textarea class="texto4" name="" id="dxc-textarea-emailPadrao" cols="30" rows="10"></textarea>
                    </div>


                </div>
            </aside>
        </div>
    </section>
</div>




<!-- Inicio do footer -->
<?php 
    include("footer.php");
?>