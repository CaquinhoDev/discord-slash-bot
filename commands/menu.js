const fs = require('fs');
const path = require('path');


module.exports = {
    name: "menu",
    description: "Mostra os comandos disponíveis.",
    options: [],
    run: async (client, interaction) => {
    
    interaction.reply("Olá, nesse momento tenho apenas 4 comandos.\n\n/ping mostra o meu tempo de resposta e quanto tempo estou online.\n\n/ready comando teste para saber se os comandos de '/' estão funcionando perfeitamente\n\n/simi O comando Simi permite que você interaja com o SimSimi, um chatbot inteligente capaz de responder às suas mensagens com muita zoeira e diversão\n\n//calcular O comando calcular é literalmente uma calculadora muito útil em momentos específicos. Quando precisar, meu bot estará aqui para te ajudar com calculos\n\n/criador mostra quem me criou.")
      
    },
    };
    