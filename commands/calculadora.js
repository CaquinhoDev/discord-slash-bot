const axios = require('axios');

module.exports = {
  name: "calcular",
  description: "Comando para realizar cálculos matemáticos.",
  options: [
    {
      name: 'expressao',
      description: 'Expressão matemática a ser calculada.',
      type: 3,  // Corrigido para o valor 3 que representa uma STRING
      required: true,
    },
  ],
  run: async (client, interaction) => {
    try {
      const expressao = interaction.options.getString('expressao');
      
      let resposta = { sucesso: true };
      let resultado;

      const requestBody = {
        expr: expressao
      };

      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      await axios.post(`https://api.mathjs.org/v4/`, requestBody, config)
        .then((res) => {
          resultado = res.data.result;
          if (resultado == "NaN" || resultado == "Infinity") {
            resposta = { sucesso: false, erro: 'Foi feita uma divisão por 0 ou algum outro cálculo inválido.' };
          } else {
            resultado = resultado.split(" ");
            resultado[0] = (resultado[0].includes("e")) ? prettyNum(resultado[0]) : resultado[0];
            resposta = { sucesso: true, resultado: resultado.join(" ") };
          }
        })
        .catch(() => {
          resposta = { sucesso: false, erro: 'Houve um erro no servidor de cálculo.' };
        });

      if (resposta.sucesso) {
        interaction.reply(`Expressão do usuário: ${expressao}\n resultado = ${resposta.resultado}`);
      } else {
        interaction.reply(`Erro ao realizar o cálculo: ${resposta.erro}`);
      }
    } catch (error) {
      console.error("Erro ao processar o comando 'calcular':", error);
      interaction.reply("Ocorreu um erro ao processar o comando 'calcular'.");
    }
  },
};
