'use strict';

const EventEmitter = require('events');
var fs = require('fs');
var Xray = require('x-ray');
var _ = require('lodash');
var async = require('async');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
var x = Xray();

//diretorio de onde vai salvar os dados
var outputfile = 'lib/data/dotabuffdb.json';
//dados dotabuff
var dotabuffurl = {
	getheros: 'https://pt.dotabuff.com/heroes/',
	items: 'https://pt.dotabuff.com/heroes/hero_items/',
	enemies: 'https://pt.dotabuff.com/heroes/match_up_anti/',
	teammates: 'https://pt.dotabuff.com/heroes/match_up_comb/'
};

var heroesName = []; //variavel nome dos hero
var heroesDB = [];	 //variavel dados dos hero
var taskCount = 0;	 //contador

// get all hero name
var url = dotabuffurl.getheros;
console.log('Solicitando dados dos heros...');
x(url, '.hero-grid .hero', [{
	heroi: '.name',
}])(function(err, obj) {
	if (err) {
		console.error(err);
	} else {
		//adicionando os nomes na variavel heroes
		for (var i = 0; i < obj.length; i++) {
			obj[i].heroi = obj[i].heroi.toLowerCase();
			obj[i].heroi = obj[i].heroi.replace(' ', '-');
			heroesName.push(obj[i]);
		}

		//adicionando dados dos heros 
		for (var i = 0; i < heroesName.length; i++) {
			//trocando o nome do NP
			if (heroesName[i].heroi == "nature\'s-prophet") {
				heroesName[i].heroi = "natures-prophet";
			}
			//trocando o nome do KOTL
			if (heroesName[i].heroi == "keeper-of the light") {
				heroesName[i].heroi = "keeper-of-the-light";
			}
			//trocando o nome do QOP
			if (heroesName[i].heroi == "queen-of pain") {
				heroesName[i].heroi = "queen-of-pain";
			}

			//dados hero
			getBestCounterPick(heroesName[i].heroi);
		}

		//getBestCounterPick('abaddon');
	}
	 // console.log(heroesName);
});


var getBestCounterPick = function(heroname) {
	var url = dotabuffurl.getheros + heroname;
	console.log('Solicitando dados ' + heroname + ' counter picks...');
	x(url, {
		heroi: '.header-content-avatar div:nth-child(1) img@alt', 	// nome hero
		img: '.header-content-avatar div:nth-child(1) img@src',		// img hero
		bestversus: x('section:nth-child(7) table tbody tr', [{		// nome dos melhores hero 
			name: 'td:nth-child(2)',
			advantage: 'td:nth-child(3)',
			winrate: 'td:nth-child(4)',
			matches: 'td:nth-child(5)'
		}]),
		worstversus: x('section:nth-child(8) table tbody tr', [{	// nome dos melhores hero 
			name: 'td:nth-child(2)',
			advantage: 'td:nth-child(3)',
			winrate: 'td:nth-child(4)',
			matches: 'td:nth-child(5)'
		}])
	})(function(err, obj) {
		if (err) {
			console.error(err);
		} else {
			//pega só os 10 counter heros
			/*for (var i = 0; i < 10; i++) {			
				obj.worstversus[i].advantage = parseFloat(obj.worstversus[i].advantage);
				obj.worstversus[i].winrate = parseFloat(obj.worstversus[i].winrate);
				obj.worstversus[i].matches = parseInt(obj.worstversus[i].matches.replace(/,/g, ''));			
			}*/
			//adicionando dados na variavel
			heroesDB.push(obj);
			//console.log(heroesDB);
			myEmitter.emit('done');
			
		}

		
	})

};

//salvando dados no arquivo JSON
myEmitter.on('done', () => {
	taskCount++;
	process.stdout.write('\rReceived data: ' + taskCount + ' / 113');
	if (taskCount === 113) { // 111 * 9 + 2
		console.log('');
		fs.writeFile(outputfile, JSON.stringify(heroesDB), function(err) {
			if (err) {
				console.error(err);
			} else {
				console.log('Data exported to ' + outputfile);
			}
		});
	}
});

