

<?php 
    include("header.php");
?>


<script src="../js/scriptAguardandoRetirada.js"></script>

        <!-- Inicio do container central -->
        <div>
            <section>
                <div class="dxc-card-left">
                    <aside>
                        <div>

                            <label class="dxc-label2" for="">EQUIPAMENTO AGUARDANDO RETIRADA:</label><br>

                            <br><br>
                            <br><br>

                            <div>
                                
      
                                    <div class="dxc-poisition-right">
                                        <button class="btnGerar" class="btnGerar-info"
                                            onclick="dxcFunctionAguardandoRetirada()">GERAR</button>
                                    </div> 
                     
                                

                            </div>
                            
            


                            <br><br><br><br><br><br>
                            
                            <div>
                                <textarea class="texto2" cols="30" rows="10">Feita a manutenção e usuário já ciente que deve retirar o equipamento.</textarea>
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
                                <label class="copyButton" onclick="copiarTexto()">Copiar</label>
                                <textarea class="texto1" name="" id="dxc-text-codEquipamento" cols="30"
                                    rows="10"></textarea>
                            </div>
                            <br><br>


                            
                            <div class="div-texto2 ">
                                <label class="dxc-label3"> Padronização campo anotações:</label>
                                <label class="copyButton"
                                    onclick="copiarTextoAgendamentoAnotacoes()">Copiar</label>
                                <textarea class="texto2" name="" id="dxc-text-anotacaoes-aguardandoRetirada" cols="30" rows="10"></textarea>
                            </div>




                        </div>
                    </aside>
                </div>
            </section>
        </div>


<?php 
    include("footer.php");
?>