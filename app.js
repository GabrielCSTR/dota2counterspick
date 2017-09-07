const SteamUser = require('steam-user');
const client = new SteamUser();
//var sleep = require('sleep');

const logOnOptions = {
	accountName: 'DR34MH1GH',
	password: 'xaga94hawe'
	//se o bot tiver steam secret
	//twoFactorCode: SteamTotp.generateAuthCode('your_steam_shared_secret')
};

//pegando dados do usuario steam
client.logOn(logOnOptions);

//fezendo conexao com a steam
client.on('loggedOn', () => {

	console.log("Logged into Steam as " + client.steamID.getSteam3RenderedID());

	//nome do bot
	client.setPersona(SteamUser.Steam.EPersonaState.Online, 'GCDEV');

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

	//status do bot online
	client.setPersona(SteamUser.Steam.EPersonaState.Online);
	//status do game  
	client.gamesPlayed(["Gamer Core League", 440]);
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
        client.chatMessage(steamid, 'Olá NIPS! Eu sou um bot e pelo meus calculos eu vejo que você é noob!');
    }

});
/*
client.on('friendsList', function () {
        console.log('Number of friends to send a message to: ' + Object.keys(client.myFriends).length);
        var count = 0;
        for (var key in client.myFriends) {
            if (client.myFriends.hasOwnProperty(key)) {
                count++;
                //Comment out line 43 if you want to risk it... Current delay is 2 seconds between each message.
                //sleep.sleep(2);
                console.log('Sending Message Number: ' + count);
                client.chatMessage(key, "message");

            }
		}
});
*/
// When we get a message, send back a response and log to console
client.on("friendMessage", function(steamID, message) {
		console.log("Friend message from " + steamID+ ": " + message);
		if (message == "Ping") {
			client.chatMessage(steamID, "Pong");
			console.log("Send back: Pong");
		} else {
			client.chatMessage(steamID, "Send back the standard reply");
			console.log("Send back the standard reply");
		}
});
