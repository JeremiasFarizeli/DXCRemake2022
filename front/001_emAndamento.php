<?php 
    include("header.php");
?>


<script src="../js/001_emAndamento.js"></script>

<!-- Inicio do container central -->
<div>
    <section>
        <div class="dxc-card-left">
            <aside>
                <div>

                    <label class="dxc-label2" for="">ATUALIZAR CHAMADOS NO INICIO DO DIA:</label><br>

                    
                    <br><br><br>
                    <div>
                        <textarea class="texto2" cols="30"
                            rows="10">Texto padrão para toda vez que assumir um incident</textarea>
                    </div>
                

                    <br><br><br><br><br><br>

                    <div>
                        <textarea class="texto2" cols="30"
                            rows="10">Texto padrão para toda vez que iniciar o atendimento ao incident</textarea>
                    </div>

                </div>
            </aside>
        </div>
        <div class="dxc-card-right ">
            <aside>
                <div>
                    <br><br><br><br>
                    <div class="div-texto2 ">
                        <label class="dxc-label3"> Padronização campo anotações:</label>
                        <label class="copyButton" onclick="copiarTextoFila()">Copiar</label>
                        <textarea class="texto2" name="" id="dxc-text-anotacaoes-fila" cols="30"
                            rows="10">#Fila

Chamado na fila aguardando início de atendimento.</textarea>
                    </div>

                    <br><br><br><br><br><br>

                    <div class="div-texto2 ">
                        <label class="dxc-label3"> Padronização campo anotações:</label>
                        <label class="copyButton" onclick="copiarTextoAtendimento()">Copiar</label>
                        <textarea class="texto2" name="" id="dxc-text-anotacaoes-atendimento" cols="30"
                            rows="10">#Atendimento

Chamado em atendimento.</textarea>
                    </div>




                </div>
            </aside>
        </div>
    </section>
</div>


<?php 
    include("footer.php");
?>