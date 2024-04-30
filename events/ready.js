const config = require("../config.js");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");

module.exports = async (client) => {
console.log(`${client.user.tag} Está Online!`)

client.user.setActivity(config.botStatus)

const rest = new REST({ version: "10" }).setToken(config.token);
(async () => {
try {
await rest.put(Routes.applicationCommands(client.user.id), {
body: await client.commands,
});
console.log("Comandos do aplicativo [/] carregados com sucesso.");
} catch(e) {
console.log("Falha ao carregar comandos do aplicativo [/]." + e);
}
})();

}
