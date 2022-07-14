

<?php 
    include("header.php");
?>


<script src="../js/scriptnaoencontrado.js"></script>



        <!-- Inicio do container central -->
        <div>
            <section>
                <div class="dxc-card-left">
                    <aside>
                        <div>

                            <label class="dxc-label2" for="">USUÁRIO NÃO ENCONTRADO:</label><br>

                            <label class="dxc-label" for="">Agendado para:</label>
                            <input class="dxc-input-date" id="dxc-input-date" type="date">

                            <label class="dxc-label">Hora inicial:</label>
                            <input class="dxc-input-hora" id="dxc-input-hora-inicio" type="text" placeholder="00h"
                                name="dxc-input-hora">

                            <label class="dxc-label">Hora final:</label>
                            <input class="dxc-input-hora" id="dxc-input-hora-final" type="text" placeholder="00h">


                            <select class="dxc-select-tentativas" id="dxc-select-tentativas"
                                onchange="dxcSelectTentativas()">
                                <option value="1ª"> * Selecione Tentativa * </option>
                                <option value="1ª">1ª Tentativa</option>
                                <option value="2ª">2ª Tentativa</option>
                                <option value="3ª">3ª Tentativa</option>
                            </select>

                            <br><br>

                            <label class="dxc-label" for="">Ramal: </label>
                            <input class="dxc-input-text-phones" id="dxc-input-text-ramal" type="text"
                                placeholder="(area) Numero" min="9" max="11"> <br>

                            <label class="dxc-label" for="">Celular: </label>
                            <input class="dxc-input-text-phones" id="dxc-input-text-celular" type="text"
                                placeholder="(area) Numero" min="9" max="11">

                            <br><br>
                            <input class="dxc-input-text" id="dxc-input-userName" type="text"
                                placeholder="Nome do usuário">
                            <input class="dxc-input-text" id="dxc-input-userEmail" type="text"
                                placeholder="E-mail do usuário">
                            <input class="dxc-input-text" id="numChamado" type="text" placeholder="Numero do chamado">

                            <!-- DIV BOTÃO -->
                            <div>
                                <div class="dxc-poisition-right">
                                    <button class="btnGerar" class="btnGerar-info"
                                        onclick="dxcFunctionUserNotFound()">GERAR</button>
                                </div>

                            </div>

                        </div>
                    </aside>
                </div>
                <div class="dxc-card-right ">
                    <aside>
                        <div>

                            <div class="div-texto2 ">
                                <label class="dxc-label3"> Padronização campo anotações:</label>
                                <label class="copyButton"
                                    onclick="copiarTextoUserNaoEncontradoAnotacoes()">Copiar</label>
                                <textarea class="texto2" name="" id="dxc-text-anotacaoes" cols="30"
                                    rows="10"></textarea>
                            </div>

                            <div class="div-texto1"><br>
                                <label class="dxc-label3">Código Equipamento:</label>
                                <label class="copyButton" onclick="copiarTextoUserNaocodEquipamento()">Copiar</label>
                                <textarea class="texto1" name="" id="dxc-text-codEquipamento" cols="30"
                                    rows="10"></textarea>
                            </div>


                            <div class="div-texto3"><br>
                                <label class="dxc-label3"> Texto Assunto do E-mail:</label>
                                <label class="copyButton" onclick="copiarTextoAssuntoEmail()">Copiar</label>
                                <textarea class="texto3" name="" id="dxc-text-assuntoEmail" cols="30"
                                    rows="10"></textarea>
                            </div>

                            <div class="div-texto4"><br>
                                <label class="dxc-label3"> E-mail padrão:</label>
                                <label class="copyButton" onclick="copiarTextoEmailPadrao()">Copiar</label>
                                <textarea class="texto4" name="" id="dxc-textarea-emailPadrao" cols="30"
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