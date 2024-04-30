# discord slash bot
 um bot para discord em node.js que usa slash commands "/". Ele ainda está em desenvolvimento e pode apresentar erros até sua versão realese.  

## COMO RODAR O BOT?

Siga essas instruções para poder rodar o bot sem problemas:

1. **Instalar as dependências do projeto:**

    ```bash
    npm install
    ```

2. **Iniciar o bot:**

    ```bash
    npm start
    ```

lembre-se de mudar o token do bot em **config.js**!

```node
    module.exports = {
    //////////////////////////
    token: "seu token", //COLOQUE O TOKEN DO SEU BOT
    botStatus: "Simsimi", //ESCREVA O STATUS DO BOT (NESSE EXEMPLO FICA "Jogando Simsimi")
    //////////////////////////
} 
