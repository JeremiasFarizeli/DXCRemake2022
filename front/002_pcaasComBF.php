<?php 
    include("header.php");
?>


<script src="../js/002_pcaasComBF.js"></script>

<!-- Inicio do container central -->
<div>
    <section>
        <div class="dxc-card-left">
            <aside>
                <div>

                    <label class="dxc-label2" for="">PcaaS em garantia COM B&F:</label><br>

                    <br><br>
                    <br><br>

                    <div>
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




                    <br><br><br><br><br><br>

                    <div>
                        <textarea class="texto2" cols="30"
                            rows="10">PcaaS em Garantia - Situação de falha física onde foi necessário instalação de equipamento de emprestimo.</textarea>
                    </div>

                </div>
            </aside>
        </div>
        <div class="dxc-card-right ">
            <aside>
                <div>
                    <br><br>
                    <div style="width: 300px;"><br>
                        <label class="dxc-label3">Código Equipamento:</label>
                        <label class="copyButton" onclick="copiarTextocodEquipamento()">Copiar</label>
                        <textarea class="texto1" name="" id="dxc-text-codEquipamento" cols="30" rows="10"></textarea>
                    </div>
                    <br><br>



                    <div class="div-texto2 ">
                        <label class="dxc-label3"> Padronização campo anotações:</label>
                        <label class="copyButton" onclick="copiarTextoAgendamentoAnotacoes()">Copiar</label>
                        <textarea class="texto2" name="" id="dxc-text-anotacaoes-pcaasComBF" cols="30"
                            rows="10"></textarea>
                    </div>




                </div>
            </aside>
        </div>
    </section>
</div>


<?php 
    include("footer.php");
?>