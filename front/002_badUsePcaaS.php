<?php 
    include("header.php");
?>

<script src="../js/002_badUsePcaaS.js"></script>


<!-- Inicio do container central -->
<div>
    <section>
        <div class="dxc-card-left">
            <aside>
                <div>

                    <label class="dxc-label2" for="">PROBLEMAS DE BAD USE:</label><br>

                    <br><br>
                    <label class="dxc-label" for="">Escolha:</label>
                    <select id="dxc-select-badUse" onchange="dxcFunctionBadUse()">
                        <option value="0"> ****  Escolha  **** </option>
                        <option value="1ª">Bad Use - Aguardando gerar orçamento</option>
                        <option value="2ª">Bad Use - em manutenção Sem B&F</option>
                        <option value="3ª">Bad Use - em manutenção Com B&F</option>
                        <option value="4ª">Bad Use - Aguardando aprovação de orçamento</option>
                    </select>

                    <br><br><br><br>
                    <div id="dxc-show-badUseOptions" style="Display:none">
                        <label class="dxc-label2" for="">Dados do equipamento de emprestimo:</label><br>
                        <div>
                            <div class="dxc-poisition-right">
                                <button class="btnGerar" class="btnGerar-info" onclick="dxcFunction()">GERAR</button>
                            </div>

                            <label class="dxc-label" for="">Serial:</label>
                            <input id="dxc-input-serial" type="text">
                        </div>
                        <div>
                            <label class="dxc-label" for="">E-tag:</label>
                            <input id="dxc-input-etag" type="text">
                        </div>

                    </div>



                </div>
            </aside>
        </div>
        <div class="dxc-card-right ">
            <aside>
                <div>

                    <div class="div-texto1"><br>
                        <label class="dxc-label3">Código Equipamento:</label>
                        <label class="copyButton" onclick="copiarCodEquipamento()">Copiar</label>
                        <textarea class="texto1" name="" id="dxc-text-codEquipamento" cols="30" rows="10"></textarea>
                    </div>
                    <br><br><br>

                    <div class="div-texto3 ">
                        <label class="dxc-label3"> Padronização campo anotações:</label>
                        <label class="copyButton" onclick="copiarTextoUserNaoEncontradoAnotacoes()">Copiar</label>
                        <textarea name="" id="dxc-text-anotacaoes-badUse" cols="30" rows="10"></textarea>
                    </div>




                </div>
            </aside>
        </div>
    </section>
</div> <!-- Fim do container central -->






<?php 
    include("footer.php");
?>