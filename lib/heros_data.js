var Dota2DB = require('./data/data.json');

module.exports = {
//metodo get dados hero
  GetDadosHero : function(namehero){
    var heroInfo = namehero.toLowerCase();
    var heroAltNames = [];
    var heroes = [];

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
                        altNames: altNames
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
                    return "DEUCERTO";
                } 
         
                
            }

    return "Hero não foi encontrado!";                                         
                                                                        
  },

 calculate: function () {

    var advantages = Array.apply (null, new Array (heroes.length))
                       .map (Number.prototype.valueOf, 0.0);

    for (var h in this.lineup) {

      var hid = this.lineup[h];

      if (hid == -1)
        continue;

      for (var i = 0; i < heroes.length; ++i) {
        if (_.isUndefined (win_rates[hid][i]) || _.isNull (win_rates[hid][i]))
          continue;
        advantages[i] += parseFloat (win_rates[hid][i][0]);
      }

    }

    return advantages;

  },

  print : function( data ){
    // print out the data
    console.log( data );
  }
};