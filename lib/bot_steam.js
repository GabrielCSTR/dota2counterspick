const SteamUser = require('steam-user');
const client = new SteamUser();
//var sleep = require('sleep');

//dados heros
const hero_dados = require('./heros_data');

//config
global.config = require("../config");

//pegando dados de login do bot
const logOnOptions = {
	accountName: global.config.steam_user,
	password: global.config.steam_pass
	//se o bot tiver steam secret
	//twoFactorCode: SteamTotp.generateAuthCode('your_steam_shared_secret')
};



//pegando dados do usuario steam
client.logOn(logOnOptions);

//fezendo conexao com a steam
client.on('loggedOn', () => {

	console.log("Bot conectado ID: " + client.steamID.getSteam3RenderedID());

	//modificando nome do bot e colocando status do bot ONLINE
	client.setPersona(SteamUser.Steam.EPersonaState.Online, global.config.steam_name);

	/*
	LISTA DE COMANDOS STATUS PLAYER
	"Offline": 0,
	"Online": 1,
	"Busy": 2,
	"Away": 3,
	"Snooze": 4,
	"LookingToTrade": 5,
	"LookingToPlay": 6,
	"Max": 7,

	// Value-to-name mapping for convenience
	"0": "Offline",
	"1": "Online",
	"2": "Busy",
	"3": "Away",
	"4": "Snooze",
	"5": "LookingToTrade",
	"6": "LookingToPlay",
	"7": "Max",
	*/
	
	//status do bot jogando DOTA 2
	client.gamesPlayed(570);
});

//error na conexao com a steam
client.on('error', function(e) {
	// Some error occurred during logon
	console.log(e);
});

//Verificando pedidos de add e mandando msg de boas vindas!
client.on('friendRelationship', (steamid, relationship) => {

	/*
	Listas de status de amigos

	None = 0,
	Blocked = 1,
	PendingInvitee = 2,
	RequestRecipient = 2, (alias of PendingInvitee)
    Friend = 3,
	RequestInitiator = 4,
	PendingInviter = 4, (alias of RequestInitiator)
	Ignored = 5,
	IgnoredFriend = 6,
	SuggestedFriend = 7
	*/

	//verificando se o status atual é invite pendete
	if (relationship === 2) {
        client.addFriend(steamid);
        client.chatMessage(steamid, 'Olá eu sou um bot da GC e estou aqui para le mostra os counter pick dos heros Dota2!\nDúvidas digite: !help');
        console.log("Novo usuario adicionado: " + steamid);
    }

});

// When we get a message, send back a response and log to console
client.on("friendMessage", function(steamID, message) {
		console.log("Friend message from " + steamID+ ": " + message);

		//separando a mesg recebida
		var messageSteamCharacter = message.split(' ');

		//verificando se existe mas de 3 palavras ex: !dota counters viper
		if(messageSteamCharacter.length  >= 3)
		{
			//string 0 msg tem q ser !dota
			if (messageSteamCharacter[0] == "!dota") {
				//string 1 msg tem q ser Counters
				if (messageSteamCharacter[1] == "counters") {
					
					//string 2 msg com o nome do hero
					if (messageSteamCharacter[2]) {

						client.chatMessage(steamID, hero_dados.GetDadosHero(messageSteamCharacter[2]));

						console.log(messageSteamCharacter[2]);

					}
									
				}
				else {

					client.chatMessage(steamID, "Comando invalido. Por favor siga o exemplo.\nex: !dota counters viper");
					console.log("Send message from " + steamID+ ": Commando invalido!");
				}
				
			}
			else {
				client.chatMessage(steamID, "Comando invalido. Por favor siga o exemplo.\nex: !dota counters viper");
				console.log("Send message from " + steamID+ ": Commando invalido!");
			}
		}
		else if (messageSteamCharacter[0] == "!contato")
		{
			client.chatMessage(steamID, "Contato:\ngabrielcarlos91@hotmail.com");
		}
		else if (messageSteamCharacter[0] == "!sobre")
		{
			client.chatMessage(steamID, "Bot Gamer Core League\nè um bot feito para mostrar os counter picks do hero informado. Todos os dados são retirados do DOTABUFF.\nVERSAO: 1.2\nULTIMO UPDATE: 09/2017\nGC@2017");
		}
		else if(messageSteamCharacter[0] == "!help")
		{
			client.chatMessage(steamID, "Lista de comandos:\n*1 -> !dota counter + 'nome hero' -> ex: !dota counter viper\n*2 -> !contato\n*3 -> !sobre");
		}
		else
		{
			client.chatMessage(steamID, "Comando invalido. Por favor siga o exemplo.\nex: !dota counters viper");
			console.log("Send message from " + steamID+ ": Commando invalido!");
		}
});