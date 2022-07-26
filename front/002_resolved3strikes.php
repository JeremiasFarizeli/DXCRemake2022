<?php 
    include("header.php");
?>


<script src="../js/002_resolved3strikes.js"></script>



<!-- Inicio do container central -->
<div>
    <section>
        <div class="dxc-card-left">
            <aside>
                <div>

                    <label class="dxc-label2" for="">ENCERRAR APÓS 3STRIKES:</label><br>
                    <br><br>

                    <input class="dxc-input-text" id="dxc-input-userName" type="text" placeholder="Nome do usuário">

                    <div>

                        <input style="width: 300px;" class="dxc-input-text" id="numChamado" type="text"
                            placeholder="Numero do chamado">

                        <div class="dxc-poisition-right">
                            <button class="btnGerar" class="btnGerar-info"
                                onclick="dxcFunctionEncerrar3strikes()">GERAR</button>
                        </div>


                    </div>

                    <br><br><br><br>


                    <div>
                        <textarea class="texto4" cols="30" rows="10">Os contatos via Teams e e-mails só podem ser enviados em dias úteis, dentro do horário de expediente. 

Exemplificando:
1ª tentativa de contato - Dia 08/02
2ª tentativa de contato - Dia 09/02
3ª tentativa de contato - Dia 10/02
Finalização – Dia 11/02
</textarea>
                    </div>



                </div>
            </aside>
        </div>
        <div class="dxc-card-right ">
            <aside>
                <div>


                    <div class="div-texto3"><br>
                        <label class="dxc-label3"> Texto Assunto do E-mail:</label>
                        <label class="copyButton" onclick="copiarTextoAssuntoEmail()">Copiar</label>
                        <textarea class="texto3" name="" id="dxc-text-assuntoEmail-Encerrar3strikes" cols="30"
                            rows="10"></textarea>
                    </div>

                    <div class="div-texto4"><br>
                        <label class="dxc-label3"> E-mail padrão e Informação de Resolução:</label>
                        <label class="copyButton" onclick="copiarTextoEmailPadrao()">Copiar</label>
                        <textarea class="texto4" name="" id="dxc-textarea-emailPadrao-Encerrar3strikes" cols="30"
                            rows="10"></textarea>
                    </div>


                </div>
            </aside>
        </div>
    </section>
</div> <!-- Fim do container central -->




<?php 
    include("footer.php");
?>