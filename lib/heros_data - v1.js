var Dota2DB = require('./data/data.json');
var HeroesDB = require('./data/heroes.json');
var HeroesADD = require('./data/heroes_add.json');
var HeroesGC = require('./data/heroes_dotamax.json');
var _ = require('underscore');

var heroAltNames = [];
heroes = [];
heroes = HeroesDB;

module.exports = {
//metodo get dados hero
  GetDadosHero : function(namehero){
        var heroInfo = namehero.toLowerCase();

            var namesLookup = [
                {
                    name: 'Abaddon',
                    altNames: [
                        'Lord of Avernus'
                    ]
                },
                {
                    name: 'abyssal_underlord',
                    altNames: [
                        'underlord',
                        'pit lord'
                    ]
                },
                {
                    name: 'Alchemist',
                    altNames: [
                        'Razzil Darkbrew'
                    ]
                },
                {
                    name: 'Ancient Apparition',
                    altNames: [
                        'Kaldr',
                        'aa',
                        'ancient_apparition'
                    ]
                },
                {
                    name: 'Anti-Mage',
                    altNames: [
                        'Magina',
                        'am'
                    ]
                },
                {
                    name: 'Arc Warden',
                    altNames: [
                        'Zet',
                        'aw',
                        'arc_warden'
                    ]
                },
                {
                    name: 'Axe',
                    altNames: [
                        'Mogul Khan'
                    ]
                },
                {
                    name: 'Bane',
                    altNames: [
                        'Atropos'
                    ]
                },
                {
                    name: 'Batrider',
                    altNames: [
                        'Jinzakk',
                        'br'
                    ]
                },
                {
                    name: 'Beastmaster',
                    altNames: [
                        'Rexxar',
                        'bm'
                    ]
                },
                {
                    name: 'Bloodseeker',
                    altNames: [
                        'Strygwyr',
                        'bs'
                    ]
                },
                {
                    name: 'Bounty Hunter',
                    altNames: [
                        'Gondar',
                        'bh',
                        'bounty_hunter'
                    ]
                },
                {
                    name: 'Brewmaster',
                    altNames: [
                        'Pandaren',
                        'Mangix',
                        'bm'
                    ]
                },
                {
                    name: 'Bristleback',
                    altNames: [
                        'Rigwarl',
                        'bb'
                    ]
                },
                {
                    name: 'Broodmother',
                    altNames: [
                        'Black Archnia',
                        'bm'
                    ]
                },
                {
                    name: 'Centaur Warrunner',
                    altNames: [
                        'Bradwarden',
                        'cw'
                    ]
                },
                {
                    name: 'Chaos Knight',
                    altNames: [
                        'Nessaj',
                        'ck',
                        'chaos_knight'
                    ]
                },
                {
                    name: 'Chen',
                    altNames: [
                        'Holy Knight'
                    ]
                },
                {
                    name: 'Clinkz',
                    altNames: [
                        'Bone Fletcher'
                    ]
                },
                {
                    name: 'Clockwerk',
                    altNames: [
                        'Rattletrap',
                        'cw'
                    ]
                },
                {
                    name: 'Crystal Maiden',
                    altNames: [
                        'Rylai Crestfall',
                        'cm',
                        'crystal_maiden'
                    ]
                },
                {
                    name: 'Dark Seer',
                    altNames: [
                        'Ishkafel',
                        'ds',
                        'dark_seer'
                    ]
                },
                {
                    name: 'Dazzle',
                    altNames: [
                        'Shadow Priest'
                    ]
                },
                {
                    name: 'Death Prophet',
                    altNames: [
                        'Krobelus',
                        'dp',
                        'death_prophet'
                    ]
                },
                {
                    name: 'Disruptor',
                    altNames: [
                        'Thrall'
                    ]
                },
                {
                    name: 'Doom',
                    altNames: [
                        'Lucifer',
                        'doom_bringer'
                    ]
                },
                {
                    name: 'Dragon Knight',
                    altNames: [
                        'Davion',
                        'dk',
                        'dragon_knight'
                    ]
                },
                {
                    name: 'Drow Ranger',
                    altNames: [
                        'Travex',
                        'dr',
                        'drow_ranger'
                    ]
                },
                {
                    name: 'Earth Spirit',
                    altNames: [
                        'Kaolin',
                        'es',
                        'earth_spirit'
                    ]
                },
                {
                    name: 'Earthshaker',
                    altNames: [
                        'Raigor Stonehoof',
                        'es'
                    ]
                },
                {
                    name: 'Elder Titan',
                    altNames: [
                        'Tauren Chieftan',
                        'Cairne Bloodhoof',
                        'et',
                        'elder_titan'
                    ]
                },
                {
                    name: 'Ember Spirit',
                    altNames: [
                        'Xin',
                        'es',
                        'ember_spirit'
                    ]
                },
                {
                    name: 'Enchantress',
                    altNames: [
                        'Aiushtha',
                    ]
                },
                {
                    name: 'Enigma',
                    altNames: [
                        'Darchrow'
                    ]
                },
                {
                    name: 'Faceless Void',
                    altNames: [
                        'Darkterror',
                        'fv',
                        'faceless_void'
                    ]
                },
                {
                    name: 'Gyrocopter',
                    altNames: [
                        'Aurel Vlaicu',
                        'gc'
                    ]
                },
                {
                    name: 'Huskar',
                    altNames: [
                        'Sacred Warrior'
                    ]
                },
                {
                    name: 'Invoker',
                    altNames: [
                        'Kael'
                    ]
                },
                {
                    name: 'Io',
                    altNames: [
                        'Guardian Wisp',
                        'wisp'
                    ]
                },
                {
                    name: 'Jakiro',
                    altNames: [
                        'Twin Head Dragon'
                    ]
                },
                {
                    name: 'Juggernaut',
                    altNames: [
                        'Yurnero'
                    ]
                },
                {
                    name: 'Keeper of the Light',
                    altNames: [
                        'Ezalor',
                        'kotl',
                        'keeper_of_the_light'
                    ]
                },
                {
                    name: 'Kunkka',
                    altNames: [
                        'Admiral'
                    ]
                },
                {
                    name: 'Legion Commander',
                    altNames: [
                        'Tresdin',
                        'lc',
                        'legion_commander'
                    ]
                },
                {
                    name: 'Leshrac',
                    altNames: [
                        'Tormented Soul'
                    ]
                },
                {
                    name: 'Lich',
                    altNames: [
                        'Kelthuzad'
                    ]
                },
                {
                    name: 'Lifestealer',
                    altNames: [
                        'Naix',
                        'ls',
                        'life_stealer'
                    ]
                },
                {
                    name: 'Lina',
                    altNames: [
                        'Slayer'
                    ]
                },
                {
                    name: 'Lion',
                    altNames: [
                        'Demon Witch'
                    ]
                },
                {
                    name: 'Lone Druid',
                    altNames: [
                        'Syllabear',
                        'ld',
                        'lone_druid'
                    ]
                },
                {
                    name: 'Luna',
                    altNames: [
                        'Moon Rider'
                    ]
                },
                {
                    name: 'Lycan',
                    altNames: [
                        'Banehallow'
                    ]
                },
                {
                    name: 'Magnus',
                    altNames: [
                    ]
                },
                {
                    name: 'Medusa',
                    altNames: [
                        'Gorgon'
                    ]
                },
                {
                    name: 'Meepo',
                    altNames: [
                        'Geomancer'
                    ]
                },
                {
                    name: 'Mirana',
                    altNames: [
                        'Priestess of the Moon'
                    ]
                },
                {
                    name: 'Morphling',
                    altNames: [
                    ]
                },
                {
                    name: 'Monjey King',
                    altNames: [
                        'monkey_king',
                        'mk',
                        'macaco'
                    ]
                },
                {
                    name: 'Naga Siren',
                    altNames: [
                        'Slithice',
                        'ns',
                        'naga_siren'
                    ]
                },
                {
                    name: 'Natures Prophet',
                    altNames: [
                        'Furion',
                        'np'
                    ]
                },
                {
                    name: 'Necrophos',
                    altNames: [
                        'Rotundjere'
                    ]
                },
                {
                    name: 'Night Stalker',
                    altNames: [
                        'Balanar',
                        'ns',
                        'night_stalker'
                    ]
                },
                {
                    name: 'Nyx Assassin',
                    altNames: [
                        'Nerubian',
                        'Anubarak',
                        'na',
                        'nyx_assassin'
                    ]
                },
                {
                    name: 'Ogre Magi',
                    altNames: [
                        'Aggron Stonebreaker',
                        'om',
                        'ogre_magi'
                    ]
                },
                {
                    name: 'Omniknight',
                    altNames: [
                        'Purist Thunderwrath',
                        'ok'
                    ]
                },
                {
                    name: 'Oracle',
                    altNames: [
                        'Nerif'
                    ]
                },
                {
                    name: 'Outworld Devourer',
                    altNames: [
                        'Obsidian Destroyer',
                        'Harbinger',
                        'od'
                    ]
                },
                {
                    name: 'Phantom Assassin',
                    altNames: [
                        'Mortred',
                        'pa',
                        'phantom_assassin'
                    ]
                },
                {
                    name: 'Phantom Lancer',
                    altNames: [
                        'Azwraith',
                        'pl',
                        'phantom_lancer'
                    ]
                },
                {
                    name: 'Phoenix',
                    altNames: [
                        'Icarus'
                    ]
                },
                {
                    name: 'Puck',
                    altNames: [
                        'Faerie Dragon'
                    ]
                },
                {
                    name: 'Pudge',
                    altNames: [
                        'Butcher'
                    ]
                },
                {
                    name: 'Pugna',
                    altNames: [
                        'Oblivion'
                    ]
                },
                {
                    name: 'Queen of Pain',
                    altNames: [
                        'Akasha',
                        'qop'
                    ]
                },
                {
                    name: 'Razor',
                    altNames: [
                        'Lightning Revenant'
                    ]
                },
                {
                    name: 'Riki',
                    altNames: [
                        'Stealth Assassin'
                    ]
                },
                {
                    name: 'Rubick',
                    altNames: [
                        'Grand Magus'
                    ]
                },
                {
                    name: 'Sand King',
                    altNames: [
                        'Crixalis',
                        'sk',
                        'sand_king'
                    ]
                },
                {
                    name: 'Shadow Demon',
                    altNames: [
                        'Eredar',
                        'sd',
                        'shadow_demon'
                    ]
                },
                {
                    name: 'Shadow Fiend',
                    altNames: [
                        'Nevermore',
                        'sf'
                    ]
                },
                {
                    name: 'Shadow Shaman',
                    altNames: [
                        'Rhasta',
                        'ss',
                        'shadow_shaman'
                    ]
                },
                {
                    name: 'Silencer',
                    altNames: [
                        'Nortrom'
                    ]
                },
                {
                    name: 'Skywrath Mage',
                    altNames: [
                        'Dragonus',
                        'sm',
                        'skywrath_mage'
                    ]
                },
                {
                    name: 'Slardar',
                    altNames: [
                        'Slithereen Guard'
                    ]
                },
                {
                    name: 'Slark',
                    altNames: [
                        'Murloc Nightcrawler'
                    ]
                },
                {
                    name: 'Sniper',
                    altNames: [
                        'Dwarven',
                        'Kardel Sharpeye'
                    ]
                },
                {
                    name: 'Spectre',
                    altNames: [
                        'Mercurial'
                    ]
                },
                {
                    name: 'Spirit Breaker',
                    altNames: [
                        'Barathrum',
                        'sb',
                        'spirit_breaker'
                    ]
                },
                {
                    name: 'Storm Spirit',
                    altNames: [
                        'Raijin Thunderkeg',
                        'ss',
                        'storm_spirit'
                    ]
                },
                {
                    name: 'Sven',
                    altNames: [
                        'Rogue Knight'
                    ]
                },
                {
                    name: 'Techies',
                    altNames: [
                        'Goblin',
                        'Squee Spleen and Spoon'
                    ]
                },
                {
                    name: 'Templar Assassin',
                    altNames: [
                        'Lanaya',
                        'ta',
                        'templar_assassin'
                    ]
                },
                {
                    name: 'Terrorblade',
                    altNames: [
                        'Soul Keeper',
                        'tb'
                    ]
                },
                {
                    name: 'Tidehunter',
                    altNames: [
                        'Leviathan',
                        'th'
                    ]
                },
                {
                    name: 'Timbersaw',
                    altNames: [
                        'Goblin Shredder',
                        'Rizzrak',
                        'ts'
                    ]
                },
                {
                    name: 'Tinker',
                    altNames: [
                        'Boush'
                    ]
                },
                {
                    name: 'Tiny',
                    altNames: [
                        'Stone Giant'
                    ]
                },
                {
                    name: 'Treant Protector',
                    altNames: [
                        'Rooftrellen',
                        'tp'
                    ]
                },
                {
                    name: 'Troll Warlord',
                    altNames: [
                        'Jahrakal',
                        'tw',
                        'troll_warlord'
                    ]
                },
                {
                    name: 'Tusk',
                    altNames: [
                        'Ymir'
                    ]
                },
                {
                    name: 'Undying',
                    altNames: [
                        'Dirge'
                    ]
                },
                {
                    name: 'Ursa',
                    altNames: [
                        'Ulfsaar'
                    ]
                },
                {
                    name: 'Vengeful Spirit',
                    altNames: [
                        'Shendelzare Silkwood',
                        'vs'
                    ]
                },
                {
                    name: 'Venomancer',
                    altNames: [
                        'Lesale Deathbringer'
                    ]
                },
                {
                    name: 'Viper',
                    altNames: [
                        'Netherdrake'
                    ]
                },
                {
                    name: 'Visage',
                    altNames: [
                        'Necrolic'
                    ]
                },
                {
                    name: 'Warlock',
                    altNames: [
                        'Demnok Lannik'
                    ]
                },
                {
                    name: 'Weaver',
                    altNames: [
                        'Nerubian',
                        'Anubseran'
                    ]
                },
                {
                    name: 'Windranger',
                    altNames: [
                        'Alleria',
                        'wr'
                    ]
                },
                {
                    name: 'Winter Wyvern',
                    altNames: [
                        'Auroth',
                        'ww',
                        'winter_wyvern'
                    ]
                },
                {
                    name: 'Witch Doctor',
                    altNames: [
                        'Voljin',
                        'wd',
                        'witch_doctor'
                    ]
                },
                {
                    name: 'Wraith King',
                    altNames: [
                        'Skeleton',
                        'Leoric',
                        'wk',
                        'skeleton_king'
                    ]
                },
                {
                    name: 'Zeus',
                    altNames: [
                        'Lord of Olympus'
                    ]
                }
            ];

            //pegando nome dos heros e setando valores do heroid,nome e nomes alternativos
            for (var i = 0; i < namesLookup.length; i++) {                             
                    
                for (var u = 0; u < namesLookup.length; u++) {
                     var altNames = [];
                    if (heroes[u] = namesLookup[u].name) {
                        altNames = namesLookup[u].altNames;
                    }

                    heroes[u] = {
                        heroIndex: u,
                        name: heroes[u].toLowerCase(),
                        altNames: altNames,
                        //img: 'http://www.dotabuff.com' + heroes_bg[i],
                        //winrate: parseFloat(heroes_wr[i]),
                        //enemyMatchups: win_rates[i],
                        //friendMatchups: friend_win_rates[i]
                    }

                    //console.log(heroes[u].altNames);

                }

                //adicionando na variavel os nomes alternativos dos heros  
                heroes[i].altNames.forEach(function(value){
                    heroAltNames[i] = value;
                               
                    //console.log(heroAltNames[i].name); 

                });
                
               
            };

            for (var i = 0; i < heroes.length; i++)
            {
                //console.log(heroAltNames[i])
                        
                //verificando se o nome informado é valido
                if(heroes[i].name == heroInfo || heroAltNames[i] == heroInfo)
                {   
                    console.log(Dota2DB[i].name)                
                    return "EM DESENVOLVIMENTO...";
                } 
         
                
            }

    return "Hero não foi encontrado!";                                         
                                                                        
  },

 calcMatchups: function (enemiesSelected) {
        var HeroesDB2 = [];
        HeroesDB2 = HeroesDB;   //db nomes heros
        var heroesAdd = HeroesADD; //db heros altnames e tipo
        var heroesDotamax = HeroesGC; //db dados heros

        //setando valores dos heros

        //name: 'arc_warden',
        //id: 113,
        //localized_name: 'Arc Warden',
        //alt_names: [ 'Zet', 'aw' ],
        //primary_attr: 2,
        //support: false,
        //mid: false,
        //carry: true,
        //jungle: false,
        //tank: false 

        for (var i = 0; i < heroesAdd.length; i++) {

            var lookupName = 'npc_dota_hero_' + heroesAdd[i].name;
            var heroToModify = _.find(HeroesDB2, {name: lookupName});
            heroToModify.name = heroesAdd[i].name;
            heroToModify.alt_names = heroesAdd[i].alt_names;
            heroToModify.primary_attr = heroesAdd[i].primary_attr;

            //verificando se o hero é suporte
            if (heroesAdd[i].support) {
                heroToModify.support = heroesAdd[i].support;
            } else {
                heroToModify.support = false;
            }
            //verificando se o hero é mid
            if (heroesAdd[i].mid) {
                heroToModify.mid = heroesAdd[i].mid;
            } else {
                heroToModify.mid = false;
            }
            //verificando se o hero é hc
            if (heroesAdd[i].carry) {
                heroToModify.carry = heroesAdd[i].carry;
            } else {
                heroToModify.carry = false;
            }
            //verificando se o hero é jungle
            if (heroesAdd[i].jungle) {
                heroToModify.jungle = heroesAdd[i].jungle;
            } else {
                heroToModify.jungle = false;
            }
            //verificando se o hero é tank
            if (heroesAdd[i].tank) {
                heroToModify.tank = heroesAdd[i].tank;
            } else {
                heroToModify.tank = false;
            }

            //console.log(heroToModify);
        }

        for (var i = 0; i < HeroesDB2.length; i++) {

            HeroesDB2[i].image = 'http://cdn.dota2.com/apps/dota2/images/heroes/' + HeroesDB2[i].name + '_sb.png';
            HeroesDB2[i].imageLarge = 'http://cdn.dota2.com/apps/dota2/images/heroes/' + HeroesDB2[i].name + '_lg.png';
            HeroesDB2[i].imageVert = 'http://cdn.dota2.com/apps/dota2/images/heroes/' + HeroesDB2[i].name + '_vert.jpg';
            HeroesDB2[i].link = 'http://dota2.gamepedia.com/' + HeroesDB2[i].localized_name;

            var heroDotamax = _.find(heroesDotamax, {'name': HeroesDB2[i].name});
            
            heroDotamax.items_all.sort(function(a, b) {
                return b.matches - a.matches;
            });
            heroDotamax.items_high.sort(function(a, b) {
                return b.matches - a.matches;
            });
            heroDotamax.items_pro.sort(function(a, b) {
                return b.matches - a.matches;
            });

            HeroesDB2[i].zh = heroDotamax.zh;
            HeroesDB2[i].winrate_all = heroDotamax.winrate_all;
            HeroesDB2[i].winrate_high = heroDotamax.winrate_high;
            HeroesDB2[i].winrate_pro = heroDotamax.winrate_pro;
            HeroesDB2[i].matches_all = heroDotamax.matches_all;
            HeroesDB2[i].matches_high = heroDotamax.matches_high;
            HeroesDB2[i].matches_pro = heroDotamax.matches_pro;
            HeroesDB2[i].gpm_all = heroDotamax.gpm_all;
            HeroesDB2[i].gpm_high = heroDotamax.gpm_high;
            HeroesDB2[i].gpm_pro = heroDotamax.gpm_pro;
            HeroesDB2[i].xpm_all = heroDotamax.xpm_all;
            HeroesDB2[i].xpm_high = heroDotamax.xpm_high;
            HeroesDB2[i].xpm_pro = heroDotamax.xpm_pro;
            HeroesDB2[i].enemies_all = heroDotamax.enemies_all;
            HeroesDB2[i].enemies_high = heroDotamax.enemies_high;
            HeroesDB2[i].enemies_pro = heroDotamax.enemies_pro;
            HeroesDB2[i].teammates_all = heroDotamax.teammates_all;
            HeroesDB2[i].teammates_high = heroDotamax.teammates_high;
            HeroesDB2[i].teammates_pro = heroDotamax.teammates_pro;
            HeroesDB2[i].items_all = heroDotamax.items_all;
            HeroesDB2[i].items_high = heroDotamax.items_high;
            HeroesDB2[i].items_pro = heroDotamax.items_pro;




        }

        //console.log(HeroesDB2[10]);

        this.calcMatchupsDOTA(HeroesDB2[0]);
        

    
    return 10;

  },

  calcMatchupsDOTA : function( data ){
    matchups = [];
    coreMatchups = [];
    supportMatchups = [];
    midMatchups = [];
    enemiesSelected = [];
    enemiesSelected = data;
    //adicionando novos valores heros: winrate, herotyp
    for (var i = 0; i < heroes.length; i++) {
        matchups[i] = {heroIndex: i, name: heroes[i].name, advantage: 0, winrate: 0, class: '', heroType: ''};
    }

    //Adicinando dados hero informado
    //pegando valor de 1 hero informado
    for (var i = 0; i < 1; i++) {
        //verificando se o hero é carry
        var multiplier = 1;
        if (enemiesSelected.carry) {
            multiplier = 1.5;
        }
        for (var j = 0; j < enemiesSelected.enemies_all.length; j++) {
            //verificando winrad dos inimigos encima do hero informado
            if (enemiesSelected.enemies_all[j]) {
                var matchup = _.find(matchups, {name: enemiesSelected.enemies_all[j].name})
                matchup.advantage += -(parseFloat(enemiesSelected.enemies_all[j].advantage)) * multiplier;
                matchup.winrate += 100 - (((parseFloat(enemiesSelected.enemies_all[j].winrate) - 50) * multiplier) + 50);
            }
        }
        for (var j = 0; j < enemiesSelected.enemies_high.length; j++) {
            if (enemiesSelected.enemies_high[j]) {
                var matchup = _.find(matchups, {name: enemiesSelected.enemies_high[j].name})
                matchup.advantage += -(parseFloat(enemiesSelected.enemies_high[j].advantage)) * multiplier;
                matchup.winrate += 100 - (((parseFloat(enemiesSelected.enemies_high[j].winrate) - 50) * multiplier) + 50);
            }
        }

    }

    // Average advantages and winrates
    for (var i = 0; i < matchups.length; i++) {

        // Add bootstrap list-item styling (blue = great, green = good, yellow = possible bad, red = bad)
        if (matchups[i].winrate > 55) {
            matchups[i].class = 'list-group-item-success';
        }
        if ((matchups[i].advantage > 2 && matchups[i].winrate > 55) ||
            (matchups[i].advantage > 1 && matchups[i].winrate > 60) ||
            (matchups[i].advantage > 0 && matchups[i].winrate > 65)) {
            matchups[i].class = 'list-group-item-info';
        }
        if (matchups[i].advantage < 0 || matchups[i].winrate < 50) {
            matchups[i].class = 'list-group-item-warning';
        }
        if (matchups[i].advantage < 0 && matchups[i].winrate < 50) {
            matchups[i].class = 'list-group-item-danger';
        }
        var heroData = heroes[matchups[i].heroIndex];
        if (heroData.carry) {
            matchups[i].heroType += 'C';
        }
        if (heroData.jungle) {
            matchups[i].heroType += 'J';
        }
        if (heroData.tank) {
            matchups[i].heroType += 'T';
        }
    }
    // Sort using both advantage and winrate
    matchups.sort(function(a, b) {
        if (b.winrate > 50 && a.winrate < 50) {
            return 1;
        }
        else if (b.winrate < 50 && a.winrate > 50) {
                return -1;
        }
        else {
            return (b.advantage + (b.winrate - 50)) - (a.advantage + (a.winrate - 50));
        }
    });
    // Create core, mid, & support matchup lists
    for (var i = 0; i < matchups.length; i++) {
        if (heroes[matchups[i].heroIndex].mid) {
            midMatchups.push(matchups[i]);
        } else if (heroes[matchups[i].heroIndex].support) {
            supportMatchups.push(matchups[i]);
        } else {
            coreMatchups.push(matchups[i]);
        }
    }

    for (var j = 0; j < enemiesSelected.enemies_all.length; j++) {
        if (enemiesSelected.enemies_all[j].winrate > 55) {
            var counterpick = enemiesSelected.enemies_all[j];
            //console.log(counterpick);
        }
    }
    // print out the data
    console.log( heroData );
  }
};