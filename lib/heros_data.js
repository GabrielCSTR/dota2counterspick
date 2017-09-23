var DotaBUFFDB = require('./data/dotabuffdb.json');
var HeroesAltName = require('./data/heroes_add.json');
var HeroesName = require('./data/heroes.json');

var _ = require('underscore');

var heroAltNames = [];
var heroes = [];
var heroname = [];
var heroesCounterPick = [];

module.exports = {
//metodo get dados hero
  
    getDataHero: function(namehero) {
        //nome do hero informado
        var heroInfo = namehero.toLowerCase();
        //dados dos hero: nome, altname, function
        var namesLookup = HeroesAltName;

        //pegando nome dos heros e setando valores do heroid,nome e nomes alternativos
        for (var i = 0; i < HeroesName.length; i++) { 

            //tirando caracteres do nomes                                             
            var HeroiNOME = HeroesName[i].localized_name.replace(/[-]/g,' ').replace(/[']/g,'');
            //setando valores na variavel heroes
            heroes[i] = {
                heroIndex: i,
                name: HeroiNOME.toLowerCase(),
                altNames: namesLookup[i].alt_names,
                //img: 'http://www.dotabuff.com' + heroes_bg[i],
                //winrate: parseFloat(heroes_wr[i]),
                //enemyMatchups: win_rates[i],
                //friendMatchups: friend_win_rates[i]
            }

            //adicionando na variavel os nomes alternativos dos heros  
            heroes[i].altNames.forEach(function(value){
                heroAltNames[i] = value;                            
            });
              
        };

        var winrate = [{}];
        var heroAdvantage = [{}];

        for (var i = 0; i < heroes.length; i++){
                        
            //verificando se o nome informado é valido
            if(heroes[i].name === heroInfo)
            {   
                //console.log(heroes[i].name + " NOME REAL")

                //retornando 10 heros counter pick
                heroesCounterPick = this.getDadoshero(heroes[i].name);

                for (var a = 0; a < heroesCounterPick.length; a++){

                    heroAdvantage[a] = Math.max(parseFloat(heroesCounterPick[a].advantage));
                    winrate[a] = parseFloat(heroesCounterPick[a].winrate);

                    //console.log(winrate);
                }

               /* var arrayWinrate=[];

                for(a in winrate){
                    arrayWinrate.push([a,winrate[a]])
                }
                arrayWinrate.sort(function(a,b){return a[1] - b[1]});
                arrayWinrate.reverse();

                console.log(arrayWinrate);
                */

                

                return "TOP 10 HERO COUNTERS " + namehero.toUpperCase() +": \nHero: "
                + heroesCounterPick[0].name+ ", advantage: " + heroesCounterPick[0].advantage + ", winrate: " + heroesCounterPick[0].winrate +"\nHero: "
                + heroesCounterPick[1].name+ ", advantage: " + heroesCounterPick[1].advantage + ", winrate: " + heroesCounterPick[1].winrate +"\nHero: " 
                + heroesCounterPick[2].name+ ", advantage: " + heroesCounterPick[2].advantage + ", winrate: " + heroesCounterPick[2].winrate +"\nHero: "
                + heroesCounterPick[3].name+ ", advantage: " + heroesCounterPick[3].advantage + ", winrate: " + heroesCounterPick[3].winrate +"\nHero: "
                + heroesCounterPick[4].name+ ", advantage: " + heroesCounterPick[4].advantage + ", winrate: " + heroesCounterPick[4].winrate +"\nHero: "
                + heroesCounterPick[5].name+ ", advantage: " + heroesCounterPick[5].advantage + ", winrate: " + heroesCounterPick[5].winrate +"\nHero: " 
                + heroesCounterPick[6].name+ ", advantage: " + heroesCounterPick[6].advantage + ", winrate: " + heroesCounterPick[6].winrate +"\nHero: " 
                + heroesCounterPick[7].name+ ", advantage: " + heroesCounterPick[7].advantage + ", winrate: " + heroesCounterPick[7].winrate +"\nHero: " 
                + heroesCounterPick[8].name+ ", advantage: " + heroesCounterPick[8].advantage + ", winrate: " + heroesCounterPick[8].winrate +"\nHero: " 
                + heroesCounterPick[9].name+ ", advantage: " + heroesCounterPick[9].advantage + ", winrate: " + heroesCounterPick[9].winrate +"" ;     
                
            }
            /*else if(heroAltNames[i] === heroInfo)
            {
                //console.log(heroAltNames + " NOME ALTERNATIVO")
                 //retornando 10 heros counter pick
                var NomeHERO;

                for (var a = 0; a < heroes.length; a++){

                    if (heroes[a].altNames[0] == heroInfo) {

                        NomeHERO = heroes[a].name;

                    }
                    else if(heroes[a].altNames[1] == heroInfo)
                    {
                        NomeHERO = heroes[a].name;
                    }
                    else if(heroes[a].altNames[2] == heroInfo)
                    {
                        NomeHERO = heroes[a].name;
                    }

                    console.log(heroes);
                }


                console.log(NomeHERO);
                heroesCounterPick = this.getDadosheroAlt(heroAltNames[i]);
                

                return "HERO COUNTERS: \n" 
                "Hero: "+ heroesCounterPick[0].name+ ", " 
                "Hero: "+ heroesCounterPick[1].name +", " 
                "Hero: "+ heroesCounterPick[2].name+ ", "
                "Hero: "+ heroesCounterPick[3].name+ ", "
                "Hero: "+ heroesCounterPick[4].name+ ", "
                "Hero: "+ heroesCounterPick[5].name+ ", "
                "Hero: "+ heroesCounterPick[6].name+ ", "
                "Hero: "+ heroesCounterPick[7].name+ ", "
                "Hero: "+ heroesCounterPick[8].name+ ", "
                "Hero: "+ heroesCounterPick[9].name+ ", ";    
            } */
         
                
        }   
   
        return "Hero não foi encontrado!";   
        
                   
    },

    getDadoshero: function (heroname) {
        
        //deixando nomes dos heros minusculo e tirando os caracteres
        var nameHero = JSON.parse(JSON.stringify(DotaBUFFDB, function(a, b) {
          return typeof b === "string" ? b.replace(/[-]/g,' ').replace(/[']/g,'').toLowerCase() : b
        }));

        for (var i = 0; i < DotaBUFFDB.length; i++) {

            if(nameHero[i].heroi == heroname)
            {
                //retona os 10 heros counter pick do hero informado
                return DotaBUFFDB[i].worstversus;             
            }

        };
  
    },

    getDadosheroAlt: function (heroname) {
        
        //deixando nomes dos heros minusculo e tirando os caracteres
        var nameHero = JSON.parse(JSON.stringify(DotaBUFFDB, function(a, b) {
          return typeof b === "string" ? b.replace(/[-]/g,' ').replace(/[']/g,'').toLowerCase() : b
        }));

        for (var i = 0; i < DotaBUFFDB.length; i++) {

            if(nameHero[i].heroi == heroname)
            {

                //retona os 10 heros counter pick do hero informado
                return DotaBUFFDB[i].worstversus;             
            }

        };
  
    },



    

  
};

