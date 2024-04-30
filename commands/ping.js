module.exports = {
    name: "ping",
    description: "Veja o tempo de atividade e o tempo de resposta do bot.",
    options: [],
    run: async (client, interaction) => {
        const uptime = formatUptime(client.uptime);
        const pingTime = Date.now() - interaction.createdTimestamp;
        interaction.reply(`Pong!🏓\nTempo online: ${uptime}\nVelocidade da resposta: ${pingTime}ms`);
    },
};

function formatUptime(uptime) {
    const days = Math.floor(uptime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((uptime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((uptime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((uptime % (1000 * 60)) / 1000);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
