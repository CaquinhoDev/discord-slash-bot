const axios = require('axios');
const FormData = require('form-data');

module.exports = {
    name: "simi",
    description: "Conversar com SimSimi.",
    options: [
        {
            name: "mensagem",
            description: "Mensagem que vai mandar para o SimSimi.",
            type: 3,
            required: true
        }
    ],
    run: async (client, interaction) => {
        const content = interaction.options.getString('mensagem');
        if (!content) {
            return interaction.reply({ content: 'Por favor coloque uma mensagem para funcionar o SimSimi', ephemeral: true });
        }

        let data = new FormData();
        data.append('lc', 'pt');
        data.append('key', '');
        data.append('text', content);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api.simsimi.vn/v1/simtalk',
            headers: {
                ...data.getHeaders()
            },
            data: data
        };

        // Make a request to SimSimi
        try {
            const response = await axios.request(config)
            if (response.status === 200 && response.data.status == '200') {
                interaction.reply({ content: response.data.message, ephemeral: false });
            } else {
                interaction.reply({ content: 'Desculpe, ocorreu um erro com a resposta do Simsimi.', ephemeral: true });
            }
        } catch (error) {
            console.error('Erro no Simsimi:', error);
            interaction.reply({ content: 'Desculpe, ocorreu um erro com a resposta do Simsimi, caso você seja meu desenvolvedor verifique o terminal.', ephemeral: true });
        }
    }
};
