exports.hairStyles = function(req, res){
    var context = {
        royalF: [
            {name: "Heart-Braid Hair (new)", image: "heartbraidhair1"},
            {name: "Dr. Jang Hair", image: "drjanghair1"},
            {name: "Cutesy Hair (f)", image: "cutesyhair2"},
            {name: "Daisy Bun", image: "daisybun1"},
            {name: "Shiny Ribbon Hair", image: "shinyribbonhair1"},
            {name: "Lilac Hair", image: "lilachair1"}
        ],
        royalM: [
            {name: "K-Pop Hair (new)", image: "kpophair1"},
            {name: "Naricain Hair", image: "naricainhair1"},
            {name: "Tropical Hair", image: "tropicalhair1"},
            {name: "Cutesy Hair (m)", image: "cutesyhair1"},
            {name: "Bisk Hair", image: "biskhair1"},
            {name: "Rover Hair", image: "roverhair1"}
        ],
        henesysFVIP: [
            {name: "Angelica", image: "angelica1"},
            {name: "Aran Hair (f)", image: "aranhair1"},
            {name: "Chantelle", image: "chantelle1"},
            {name: "Crazy Medusa", image: "crazymedusa1"},
            {name: "Fourtail Braids", image: "fourtailbraids1"},
            {name: "Frizzle Dizzle", image: "frizzledizzle1"},
            {name: "Full Bangs", image: "fullbangs1"}
        ],
        henesysFREG: [
            {name: "Evan Hair (f)", image: "evanhair1"},
            {name: "Rainbow", image: "rainbow1"},
            {name: "Stella", image: "stella1"}
        ],
        henesysMVIP: [
            {name: "Aran Cut", image: "arancut1"},
            {name: "Catalyst", image: "catalyst1"},
            {name: "Shaggy Wax", image: "shaggywax1"},
            {name: "Topknot", image: "topknot1"},
            {name: "Wind", image: "wind1"},
            {name: "Gaga Hair", image: "gagahair1"},
            {name: "The Coco", image: "thecoco1"}
        ],
        henesysMREG: [
            {name: "Evan Hair (m)", image: "evanhair2"},
            {name: "The Mo Rawk", image: "morawk1"}
        ],
        kerningFVIP: [
            {name: "Aran Hair (f)", image: "aranhair1"},
            {name: "Bridget", image: "bridget1"},
            {name: "Gardener", image: "gardener1"},
            {name: "Pei Pei", image: "peipei1"},
            {name: "Penelope", image: "penelope1"},
            {name: "Ravishing Raven", image: "ravishingraven1"},
            {name: "Shaggy Dog", image: "shaggydog1"}
        ],
        kerningFREG: [
            {name: "Curly Stream", image: "curlystream1"},
            {name: "Super Diva", image: "superdiva1"}
        ],
        kerningMVIP: [
            {name: "Antagonist", image: "antagonist1"},
            {name: "Aran Cut", image: "arancut1"},
            {name: "Corn Row", image: "cornrow1"},
            {name: "Dragon Tail", image: "dragontail1"},
            {name: "Rockstar", image: "rockstar1"},
            {name: "Short Top Tail", image: "shorttoptail1"},
            {name: "Male Runway Hair", image: "runwayhair1"}
        ],
        kerningMREG: [
            {name: "Dual Blade Hair", image: "dualbladehair1"},
            {name: "Hontas", image: "hontas1"},
            {name: "Lucky Charms", image: "luckycharms1"}
        ],
        nlcFVIP: [
            {name: "Eye Skimming Bang", image: "eyeskimmingbang1"},
            {name: "Fluffy Dolly", image: "fluffydolly1"},
            {name: "Low Cut Bob", image: "lowcutbob1"},
            {name: "Messy Pigtails", image: "messypigtails1"},
            {name: "Model's Ambition", image: "modelsambition1"},
            {name: "Roxy", image: "roxy1"},
            {name: "Sunflower Power", image: "sunflowerpower1"}
        ],
        nlcFREG: [
            {name: "Demolishing Diva", image: "demolishingdiva1"},
            {name: "Evan Hair (f)", image: "evanhair1"},
            {name: "Maiden's Weave", image: "maidensweave1"},
            {name: "Streaky Siren", image: "streakysiren1"}
        ],
        nlcMVIP: [
            {name: "Afro (big)", image: "afro1"},
            {name: "Hector Hair", image: "hector1"},
            {name: "Messy Spike", image: "messyspike1"},
            {name: "Roving Rockstar", image: "rovingrockstar1"},
            {name: "Spiky Shag", image: "spikyshag1"},
            {name: "The Coco", image: "thecoco1"},
            {name: "Unbalanced", image: "unbalanced1"}
        ],
        nlcMREG: [
            {name: "Alex", image: "alex1"},
            {name: "Evan Hair (m)", image: "evanhair2"},
            {name: "Fury", image: "fury1"},
            {name: "Tribal Buzz", image: "tribalbuzz1"}
        ],
        orbisFVIP: [
            {name: "Bow Hair", image: "bowhair1"},
            {name: "Caspia", image: "caspia1"},
            {name: "Monica", image: "monica1"},
            {name: "Princessa", image: "princessa1"},
            {name: "Rose", image: "rose1"},
            {name: "Honeybun", image: "honeybun1"},
            {name: "Top Tied Bun", image: "toptiedbun1"}
        ],
        orbisFREG: [
            {name: "Dashing Damsel", image: "dashingdamsel1"},
            {name: "Lilin Hair", image: "lilinhair1"},
            {name: "Princess Warrior", image: "princesswarrior1"},
            {name: "Short Twin Tails", image: "shorttwintails1"}
        ],
        orbisMVIP: [
            {name: "Clean-Cut Short Hair", image: "cleancutshorthair1"},
            {name: "Foil Perm", image: "foilperm1"},
            {name: "Messy Spike", image: "messyspike1"},
            {name: "Metrosexual", image: "metrosexual1"},
            {name: "Mohecan Shaggy Do", image: "mohecanshaggydo1"},
            {name: "Spiky Shag", image: "spikyshag1"},
            {name: "Tristan", image: "tristan1"}
        ],
        orbisMREG: [
            {name: "Baldie", image: "baldie1"},
            {name: "Neon Cactus", image: "neoncactus1"},
            {name: "Receding Hair", image: "recedinghair1"},
            {name: "Updo", image: "updo1"}
        ],
        ludiFVIP: [
            {name: "Apple Hair", image: "applehair1"},
            {name: "Ayu", image: "ayu1"},
            {name: "Candy Heart", image: "candyheart1"},
            {name: "Eye Skimming Bang", image: "eyeskimmingbang1"},
            {name: "Runaway Hair", image: "runawayhair1"},
            {name: "Lovely Ladyhawk", image: "lovelyladyhawk1"},
            {name: "Naomi", image: "naomi1"},
            {name: "Pigtails", image: "pigtails1"}
        ],
        ludiFREG: [
            {name: "Bohemian Hair", image: "bohemianhair1"},
            {name: "Jean", image: "jean1"},
            {name: "Rastafarai", image: "rastafarai1"},
            {name: "Sonara Wave", image: "sonarawave1"},
            {name: "Tall Bun", image: "tallbun1"}
        ],
        ludiMVIP: [
            {name: "Afro (big)", image: "afro1"},
            {name: "Bowl Cut", image: "bowlcut1"},
            {name: "Fuzz", image: "fuzz1"},
            {name: "Hector Hair", image: "hector1"},
            {name: "Julian Hair", image: "julianhair1"},
            {name: "Tentacle Hair", image: "tentaclehair1"},
            {name: "Trip Scratch", image: "tripscratch1"},
            {name: "Urban Dragon", image: "urbandragon1"}
        ],
        ludiMREG: [
            {name: "Bubba Goatee", image: "bubbagoatee1"},
            {name: "Groovy Do", image: "groovydo1"},
            {name: "Hip-Hop Cut", image: "hiphopcut1"},
            {name: "Rise n Shine", image: "risenshine1"},
            {name: "Robot", image: "robot1"},
            {name: "The Mo Rawk", image: "morawk1"}
        ],
        mulungFVIP: [
            {name: "Chantelle", image: "chantelle1"},
            {name: "Cutey Doll", image: "cuteydoll1"},
            {name: "Housewife", image: "housewife1"},
            {name: "Lady Mariko", image: "ladymariko1"},
            {name: "Lori", image: "lori1"},
            {name: "Ming Ming", image: "mingming1"},
            {name: "Pei Pei", image: "peipei1"},
            {name: "Tighty Bun", image: "tightybun1"}
        ],
        mulungFREG: [
            {name: "Demolishing Diva", image: "demolishingdiva1"},
            {name: "Onna's Honor", image: "onnashonor1"},
            {name: "Perfect Stranger", image: "perfectstranger"},
            {name: "Short Twin Tails", image: "shorttwintails1"},
            {name: "Spunky Do", image: "spunkydo1"}
        ],
        mulungMVIP: [
            {name: "Buddha Fire", image: "buddhafire1"},
            {name: "Cozy Amber", image: "cozyamber1"},
            {name: "Dreadlocks", image: "dreadlocks1"},
            {name: "Gruff & Tough", image: "gruffntough1"},
            {name: "Monkey", image: "monkey1"},
            {name: "Puffy Afro", image: "puffyafro1"},
            {name: "Shaggy Dragon", image: "shaggydragon1"},
            {name: "Urban Dragon", image: "urbandragon1"}
        ],
        mulungMREG: [
            {name: "Alex", image: "alex1"},
            {name: "Exotica", image: "exotica1"},
            {name: "KongFu Braids", image: "kongfubraids1"},
            {name: "Rising Rocker", image: "risingrocker1"},
            {name: "The Curl", image: "thecurl1"}
        ],
        edelFVIP: [
            {name: "Carla", image: "carla1"},
            {name: "Cecelia Twist", image: "ceceliatwist1"},
            {name: "Daisy Do", image: "daisydo1"},
            {name: "Jolie", image: "jolie1"},
            {name: "Lori", image: "lori1"},
            {name: "Minnie", image: "minnie1"},
            {name: "Rose", image: "rose1"},
            {name: "Roxy", image: "roxy1"},
            {name: "Sunflower Power", image: "sunflowerpower1"},
            {name: "Wild Hunter Hair", image: "wildhunterhair1"},
            {name: "Zessica", image: "zessica1"}
        ],
        edelMVIP: [
            {name: "Astro", image: "astro1"},
            {name: "Babby Cut", image: "babbycut1"},
            {name: "Battle Mage Hair", image: "battlemagehair1"},
            {name: "Bowling Ball", image: "bowlingball1"},
            {name: "Cabana Boy", image: "cabanaboy1"},
            {name: "Grand Lionman", image: "grandlionman1"},
            {name: "Rockstar", image: "rockstar1"},
            {name: "Roving Rockstar", image: "rovingrockstar1"},
            {name: "Shaggy Dragon", image: "shaggydragon1"},
            {name: "Slick Dean", image: "slickdean1"},
            {name: "Tornade Hair", image: "tornadehair1"}
        ],
        ariantFVIP: [
            {name: "Boyish", image: "boyish1"},
            {name: "Bridget", image: "bridget1"},
            {name: "Celeb", image: "celeb1"},
            {name: "Desert Flower", image: "desertflower1"},
            {name: "Edgy", image: "edgy1"},
            {name: "Lana", image: "lana1"},
            {name: "Penelope", image: "penelope1"},
            {name: "Rae", image: "rae1"},
            {name: "Tighty Bun", image: "tightybun1"}
        ],
        ariantFREG: [
            {name: "Curly Stream", image: "curlystream1"},
            {name: "Dashing Damsel", image: "dashingdamsel1"},
            {name: "Oh So Windy", image: "ohsowindy1"},
            {name: "Palm Tree Hair", image: "palmtreehair1"}
        ],
        ariantMVIP: [
            {name: "Afro (small)", image: "afrosmall1"},
            {name: "Cabana Boy", image: "cabanaboy1"},
            {name: "Dreadlocks", image: "dreadlocks1"},
            {name: "Kravitz Locks", image: "kravitzlocks1"},
            {name: "Line Scratch", image: "linescratch1"},
            {name: "Mane", image: "mane1"},
            {name: "Matinee Idol", image: "matineeidol1"},
            {name: "Natural", image: "natural1"},
            {name: "Tornade Hair", image: "tornadehair1"}
        ],
        ariantMREG: [
            {name: "Dreamcatcher", image: "dreamcatcher1"},
            {name: "Hobo", image: "hobo1"},
            {name: "Bald Head", image: "baldhead1"}
        ],
        showaFVIP: [
            {name: "Candy Heart", image: "candyheart1"},
            {name: "Dambi", image: "dambi1"},
            {name: "Fourtail Braids", image: "fourtailbraids1"},
            {name: "Lady Mariko", image: "ladymariko1"},
            {name: "Mary", image: "mary1"},
            {name: "Polly", image: "polly1"},
            {name: "Princessa", image: "princessa1"},
            {name: "Sammy", image: "sammy1"},
            {name: "Short Shaggy Hair", image: "shortshaggyhair1"},
            {name: "Top Tied Bun", image: "toptiedbun1"}
        ],
        showaFREG: [
            {name: "Jean", image: "jean1"},
            {name: "Onna's Honor", image: "onnashonor1"},
            {name: "Paula", image: "paula1"},
            {name: "Princess Warrior", image: "princesswarrior1"},
            {name: "Streaky Siren", image: "streakysiren1"}
        ],
        showaMVIP: [
            {name: "Buzz", image: "buzz1"},
            {name: "Clean-Cut Short Hair", image: "cleancutshorthair1"},
            {name: "Dragon Tail", image: "dragontail1"},
            {name: "Gruff & Tough", image: "gruffntough1"},
            {name: "Matinee Idol", image: "matineeidol1"},
            {name: "Metrosexual", image: "metrosexual1"},
            {name: "Mohecan Shaggy Do", image: "mohecanshaggydo1"},
            {name: "Puffy Fro", image: "puffyafro1"},
            {name: "Short Top Tail", image: "shorttoptail1"},
            {name: "Tristan", image: "tristan1"}
        ],
        showaMREG: [
            {name: "Dreamcatcher", image: "dreamcatcher1"},
            {name: "Lion Hair", image: "lionhair1"},
            {name: "Spiky Tail", image: "spikytail1"}
        ]
    };
    context.title = "MapleNow - Hairstyles";
    res.render('hair', context);
}
