const routes = [

  {
    id:1, name:'Stubaier Höhenweg', region:'Stubaier Alpen, Tirol, Oostenrijk',
    tagline:'Klassieke lus langs het Stubaier massief',
    character:'Hoogalpieen', landscape:'Bossen · weiden · gletsjerkammen',
    heroImg:'https://commons.wikimedia.org/wiki/Special:FilePath/Etappe_zwischen_N%C3%BCrnberger_H%C3%BCtte_und_Bremer_H%C3%BCtte.jpg?width=1400',
    cardImg:'https://commons.wikimedia.org/wiki/Special:FilePath/Etappe_zwischen_N%C3%BCrnberger_H%C3%BCtte_und_Bremer_H%C3%BCtte.jpg?width=600',
    difficulty:'4/6', vanUtrecht:'920 km', totaalKm:'66 km', totaalStijging:'9.400 m',
    transport:'Utrecht – Neustift im Stubaital · 920 km', driveTime:'09:45 uur', startEnd:'Neustift ↔ Ranalt',
    days:[
      { day:1, challenge:false,
        title:'Neustift → Starkenburger Hütte',
        from:'Neustift im Stubaital (1.000m)', to:'Starkenburger Hütte (2.237m)',
        toShort:'Starkenburger Hütte', toAlt:'2.237m',
        distance:'~11 km', elevation:'+1.250m / -50m', time:'5–6 uur',
        terrain:'Dennenbossen en brede alpenweiden',
        desc:'Via het Pinnistal klim je door weelderige dennenbossen en bloemrijke alpenweiden omhoog. Het landschap opent zich geleidelijk: eerst beschutte, groene paden, daarna rotsige hellingen met een steeds wijdser panorama over het Stubaital. Een ideale opwarmdag voor de tocht.',
        img:'https://commons.wikimedia.org/wiki/Special:FilePath/Starkenburger_H%C3%BCtte_(29632834490).jpg?width=700',
        imgCaption:'Starkenburger Hütte: eindpunt van dag 1 boven de Pinnistal'},
      { day:2, challenge:true,
        title:'Starkenburger Hütte → Innsbrucker Hütte',
        from:'Starkenburger Hütte (2.237m)', to:'Innsbrucker Hütte (2.369m)',
        toShort:'Innsbrucker Hütte', toAlt:'2.369m',
        distance:'~20 km', elevation:'+1.600m / -1.450m', time:'9–10 uur',
        terrain:'Geëxponeerde traverse · steile klinrotsen · kettingpassages',
        desc:'De zwaarste dag van de tocht. Via de hogere variant over het Kreuzjoch (2.474m) en Seejöchl traverseer je langs steile rotsen met secties tot 35–40% stijging. Vaste ketens bij de zwaarste passages. Afgewisseld met rustige hoogalpiene grashellingen en spectaculaire vergezichten. Vroeg vertrekken is sterk aanbevolen.',
        img:'https://commons.wikimedia.org/wiki/Special:FilePath/Blick_vom_Hohen_Burgstall.jpg?width=700',
        imgCaption:'Panorama vanaf het Hohen Burgstall op de Stubaier Höhenweg'},
      { day:3, challenge:false,
        title:'Innsbrucker Hütte → Dresdner Hütte',
        from:'Innsbrucker Hütte (2.369m)', to:'Dresdner Hütte (2.302m)',
        toShort:'Dresdner Hütte', toAlt:'2.302m',
        distance:'~13 km', elevation:'+800m / -850m', time:'6–7 uur',
        terrain:'Rotsige passages · groene gletsjerdalen',
        desc:'Wisselend terrein: korte rotspassages afgewisseld met groene gletsjerdalen. Uitzicht op de Zuckerhütl en het indrukwekkende Stubaier gletsjermassief. De Dresdner Hütte ligt pal bij het gletsjerskigebied en biedt goede faciliteiten na een uitdagende etappe.',
        img:'https://commons.wikimedia.org/wiki/Special:FilePath/Blick_Richtung_Sulzenau_H%C3%BCtte.jpg?width=700',
        imgCaption:'Uitzicht richting de Sulzenau Hütte en het gletsjermassief'},
      { day:4, challenge:false,
        title:'Dresdner Hütte → Nürnberger Hütte',
        from:'Dresdner Hütte (2.302m)', to:'Nürnberger Hütte (2.280m)',
        toShort:'Nürnberger Hütte', toAlt:'2.280m',
        distance:'~14 km', elevation:'+1.050m / -1.000m', time:'7–8 uur',
        terrain:'Woeste rotsformaties · hoge pastrap · gletsjerresten',
        desc:'Via het Niederl (2.628m), het hoogste punt van de gehele tocht. Woeste rotsformaties en gletsjerresten omgeven je op dit spectaculaire punt. Goed gemarkeerd maar vraagt flink doorzetten. Aankomst bij de rustig gelegen Nürnberger Hütte in een indrukwekkend bergcirque.',
        img:'https://commons.wikimedia.org/wiki/Special:FilePath/Blick_zur_N%C3%BCrnberger_H%C3%BCtte.jpg?width=700',
        imgCaption:'Zicht op de Nürnberger Hütte aan het einde van de Niederl-afdaling'},
      { day:5, challenge:false,
        title:'Nürnberger Hütte → Ranalt',
        from:'Nürnberger Hütte (2.280m)', to:'Ranalt (1.000m)',
        toShort:'Ranalt', toAlt:'1.000m',
        distance:'~8 km', elevation:'+50m / -1.280m', time:'~4 uur',
        terrain:'Watervallen · groen dal · bosrijke afdaling',
        desc:'De beloonde afdaling via het schilderachtige Langental. Spectaculaire watervallen vergezellen je naar beneden. Het landschap wordt snel groener en weelderiger. Langs beekjes en door bossen keer je terug naar Ranalt — een rustige, bevredigende afsluiting. Bus terug naar Neustift.',
        img:'https://commons.wikimedia.org/wiki/Special:FilePath/Wasserfall_oberhalb_Sulzenaualm.jpg?width=700',
        imgCaption:'Watervallen in het dal bij de afdaling naar Ranalt'},
    ]
  },

  {
    id:2, name:'Schladminger Tauern Höhenweg', region:'Niedere Tauern, Steiermark, Oostenrijk',
    tagline:'Bergmeren en stille hoogvlakten in de Tauern',
    character:'Groen · bergmeren · rustiger', landscape:'Lariksbossen · meren · rotsige kammen',
    heroImg:'https://commons.wikimedia.org/wiki/Special:FilePath/Giglachseen_-_panoramio_-_Tobias_Luksch.jpg?width=1400',
    cardImg:'https://commons.wikimedia.org/wiki/Special:FilePath/Giglachseen_-_panoramio_-_Tobias_Luksch.jpg?width=600',
    difficulty:'4/6', vanUtrecht:'1010 km', totaalKm:'69 km', totaalStijging:'8.750 m',
    transport:'Utrecht – Schladming · 1010 km', driveTime:'10:20 uur', startEnd:'Schladming ↔ Schladming',
    days:[
      { day:1, challenge:false,
        title:'Schladming → Preintalerhütte',
        from:'Schladming (745m)', to:'Preintalerhütte (1.656m)',
        toShort:'Preintalerhütte', toAlt:'1.656m',
        distance:'~10 km', elevation:'+950m / -40m', time:'5–6 uur',
        terrain:'Lariksbossen · beekjes · bloemrijke alpenweiden',
        desc:'Een fraaie, geleidelijke start door gemengde lariksbossen met kabbelende beekjes als begeleiding. Bloemrijke alpenweiden kondigen de hoogte aan. Het sfeervolle Schladminger landschap omgeeft je terwijl je klimt naar de gastvrije Preintalerhütte.',
        img:'https://commons.wikimedia.org/wiki/Special:FilePath/Giglachseen_-_panoramio.jpg?width=700',
        imgCaption:'Lariksbossen en alpenweiden bij de opstap vanuit Schladming'},
      { day:2, challenge:true,
        title:'Preintalerhütte → Arthur-von-Schmid-Haus',
        from:'Preintalerhütte (1.656m)', to:'Arthur-von-Schmid-Haus (2.252m)',
        toShort:'Arthur-von-Schmid-Haus', toAlt:'2.252m',
        distance:'~19 km', elevation:'+1.600m / -1.000m', time:'9–10 uur',
        terrain:'Topsectie Hochgolling · bergmeren Giglachseen · rotsige traverse',
        desc:'Via de Hochgolling (2.863m), de hoogste top van de Schladminger Tauern. Steile flanken tot 40% stijging leiden naar de top, gevolgd door een spectaculaire traverse langs de heldere Giglachseen — beeldschone alpiene meren als beloning voor de klim. De meest gevarieerde dag van de route.',
        img:'https://commons.wikimedia.org/wiki/Special:FilePath/Giglachseen_-_panoramio.jpg?width=700',
        imgCaption:'Kristalheldere Giglachseen na de Hochgolling-traverse'},
      { day:3, challenge:false,
        title:'Arthur-von-Schmid-Haus → Keinprechthütte',
        from:'Arthur-von-Schmid-Haus (2.252m)', to:'Keinprechthütte (1.872m)',
        toShort:'Keinprechthütte', toAlt:'1.872m',
        distance:'~17 km', elevation:'+900m / -1.150m', time:'8–9 uur',
        terrain:'Uitgebreide kamtraverse · rotsige toppen · grasrijke dalen',
        desc:'Een langere traverse via de hogere kamvariant, met meerdere rotsige toppen die je passeert voor een echte Tauernbeleving. Weidsrijke vergezichten wisselen af met steile afdal-secties. De langste afdaling van de tocht voert door afwisselend grasrijke en rotsige dalen — het landschapskarakter van de Schladminger Tauern op zijn best.',
        img:'https://commons.wikimedia.org/wiki/Special:FilePath/2018-07-14_Pleschnitzzinken_Hochwildstelle.jpg?width=700',
        imgCaption:'Rotsige kamtraverse in de Schladminger Tauern'},
      { day:4, challenge:false,
        title:'Keinprechthütte → Ignaz-Mattis-Hütte',
        from:'Keinprechthütte (1.872m)', to:'Ignaz-Mattis-Hütte (1.986m)',
        toShort:'Ignaz-Mattis-Hütte', toAlt:'1.986m',
        distance:'~14 km', elevation:'+950m / -800m', time:'7–8 uur',
        terrain:'Bergmeren · hoge grensrug · Tauernkammen',
        desc:'Via de hogere grensrugvariant met extra klimwerk en schitterend uitzicht op meerdere bergmeren. De traverse langs het Seewigsee-dal wordt voorafgegaan door een stevige klim over een hoge rug. Meer hoogtemeters dan op eerste gezicht lijkt — een dag die je het dal in laat rollen met tevreden benen.',
        img:'https://commons.wikimedia.org/wiki/Special:FilePath/Gamskarlspitze_-_Rosskogel_-_Oberh%C3%BCttensee.jpg?width=700',
        imgCaption:'Bergmeer Oberhüttensee langs de hoge grensrugvariant'},
      { day:5, challenge:false,
        title:'Ignaz-Mattis-Hütte → Schladming',
        from:'Ignaz-Mattis-Hütte (1.986m)', to:'Schladming (745m)',
        toShort:'Schladming', toAlt:'745m',
        distance:'~9 km', elevation:'+50m / -1.300m', time:'~4 uur',
        terrain:'Alpenweiden · lariksbossen · Ennstal',
        desc:'Afdaling via brede alpenweiden en sfeervolle lariksbossen terug naar het startpunt. Uitzicht over het Ennstal maakt de cirkel rond. Een tevreden, ontspannen terugkeer naar Schladming — een welverdiend terras wacht.',
        img:'https://commons.wikimedia.org/wiki/Special:FilePath/Gamskarlspitze_-_Rosskogel_-_Oberh%C3%BCttensee.jpg?width=700',
        imgCaption:'Afdaling via brede alpenweiden en lariksbossen naar Schladming'},
    ]
  },

  {
    id:3, name:'Alta Via 1 – Dolomieten', region:'Dolomieten, Zuid-Tirol, Italië',
    tagline:'De klassiekste huttentocht van de Dolomieten',
    character:'Spectaculair · UNESCO', landscape:'Bergmeer · Fanes · Cinque Torri · Croda da Lago',
    heroImg:'https://commons.wikimedia.org/wiki/Special:FilePath/Lago_di_Braies_in_agosto_02.JPG?width=1400',
    cardImg:'https://commons.wikimedia.org/wiki/Special:FilePath/Lago_di_Braies_in_agosto_02.JPG?width=600',
    difficulty:'4/6', vanUtrecht:'1027 km', totaalKm:'72 km', totaalStijging:'9.700 m',
    transport:'Utrecht – Lago di Braies · 1027 km', driveTime:'11:30 uur',
    startEnd:'Lago di Braies → Cortina d\u0027Ampezzo',
    days:[
      { day:1, challenge:false,
        title:'Lago di Braies → Rifugio Seekofel',
        from:'Lago di Braies (1.496m)', to:'Rifugio Seekofel / Biella (2.327m)',
        toShort:'Rifugio Seekofel', toAlt:'2.327m',
        distance:'~14 km', elevation:'+1.250m / -400m', time:'6–7 uur',
        terrain:'Smaragdgroen bergmeer · kalksteenklim · eerste Dolomietenviews',
        desc:'Begin bij het iconische smaragdgroene Lago di Braies — het mooiste bergmeer van Italië. Via het Limojoch klim je door rotsige kalksteenformaties omhoog naar het eerste rifugio, met de eerste spectaculaire doorkijkjes op de UNESCO-Dolomieten.',
        img:'https://commons.wikimedia.org/wiki/Special:FilePath/Pragser_wildsee.JPG?width=700',
        imgCaption:'Lago di Braies (Pragser Wildsee) — het magische startpunt van de Alta Via 1'},
      { day:2, challenge:false,
        title:'Rifugio Seekofel → Rifugio Lagazuoi via Fanes',
        from:'Rifugio Seekofel (2.327m)', to:'Rifugio Lagazuoi (2.752m)',
        toShort:'Rifugio Lagazuoi', toAlt:'2.752m',
        distance:'~18 km', elevation:'+1.100m / -850m', time:'7–8 uur',
        terrain:'Fanes-plateau · alpenweiden · meertjes · hoge bergpas',
        desc:'Via het sprookjesachtige Fanes-plateau — een uitgestrekte hoogvlakte met bloemrijke weiden, kristalheldere meertjes en de mythische Fanes-folklore. Eindigt bij het spectaculaire Rifugio Lagazuoi, hoog boven het Falzaregopas met panoramisch uitzicht op alle Dolomietengroepen.',
        img:'https://commons.wikimedia.org/wiki/Special:FilePath/Blick_von_der_Fanesh%C3%BCtte.JPG?width=700',
        imgCaption:'Uitzicht vanaf de Faneshütte over het magische Fanes-plateau'},
      { day:3, challenge:true,
        title:'⚡ Rifugio Lagazuoi → Rifugio Nuvolau (UITDAGINGSDAG)',
        from:'Rifugio Lagazuoi (2.752m)', to:'Rifugio Nuvolau (2.575m)',
        toShort:'Rifugio Nuvolau', toAlt:'2.575m',
        distance:'~17 km', elevation:'+1.500m / -1.700m', time:'9–10 uur',
        terrain:'Cinque Torri · Ra Gusela · geëxponeerde traverse · steile klim tot 35–40%',
        desc:'De zwaarste en meest iconische dag van de Alta Via 1. Afdaling naar de vallei, klim naar de beroemde Cinque Torri (2.361m), ruige traverse via Ra Gusela met geëxponeerde passages en eindklim naar de Rifugio Nuvolau — een van de meest spectaculair gelegen berghütten van de Alpen, met 360° panorama.',
        img:'https://commons.wikimedia.org/wiki/Special:FilePath/5torri_illuminate_dal_rifugio_Nuvolau.jpg?width=700',
        imgCaption:'De Cinque Torri — hart van de meest dramatische dag op de Alta Via 1'},
      { day:4, challenge:false,
        title:'Rifugio Nuvolau → Rifugio Croda da Lago via Mondeval',
        from:'Rifugio Nuvolau (2.575m)', to:'Rifugio Croda da Lago (2.046m)',
        toShort:'Rifugio Croda da Lago', toAlt:'2.046m',
        distance:'~14 km', elevation:'+700m / -1.200m', time:'7–8 uur',
        terrain:'Sella de Mondeval · Passo di Giau · zuidelijke Dolomieten · Lago Federa',
        desc:'Via de Sella de Mondeval en het indrukwekkende Passo di Giau door een weids Dolomietenlandschap. Een alternatieve variant langs het prachtige Lago Federa voegt extra landschapspracht toe. De zuidelijkere wereld van de Dolomieten is groener en stiller — een mooie tegenhanger van de vorige dag.',
        img:'https://commons.wikimedia.org/wiki/Special:FilePath/Lago_Federa_e_Becco_di_Mezzod%C3%AC.jpg?width=700',
        imgCaption:'Lago Federa met de Croda da Lago — het bergmeer op de afdaling naar Rifugio Croda da Lago'},
      { day:5, challenge:false,
        title:'Rifugio Croda da Lago → Cortina d\u0027Ampezzo (kort)',
        from:'Rifugio Croda da Lago (2.046m)', to:"Cortina d'Ampezzo (1.211m)",
        toShort:"Cortina d'Ampezzo", toAlt:'1.211m',
        distance:'~9 km', elevation:'+100m / -900m', time:'~4 uur',
        terrain:'Alpenweiden · bosrijke afdaling · mondain bergdorp',
        desc:'Een ontspannen afdaling door weelderige alpenweiden en dennenbossen naar het elegante skiresort Cortina d\u0027Ampezzo. Het perfecte einde: een terrasje in het hart van de Dolomieten. Bus terug naar Dobbiaco, dan de trein naar huis.',
        img:'https://commons.wikimedia.org/wiki/Special:FilePath/Cortina_d%27Ampezzo_Italy_-_panoramio.jpg?width=700',
        imgCaption:"Cortina d'Ampezzo in het hart van de Dolomieten — het elegante eindpunt van de Alta Via 1"},
    ]
  },

  {
    id:4, name:'Berner Oberland Höhenweg', region:'Berner Alpen, Berner Oberland, Zwitserland',
    tagline:'Eiger, Mönch en Jungfrau in één traversa',
    character:'UNESCO · Panoramisch · Rotsige pasovergangen', landscape:'Bachalpsee · Lauterbrunnen-watervalvallei · Sefinenfurke · Blüemlisalphütte · Oeschinensee',
    heroImg:'https://commons.wikimedia.org/wiki/Special:FilePath/Bachalpsee_mit_Schreckhorn.jpg?width=1400',
    cardImg:'https://commons.wikimedia.org/wiki/Special:FilePath/Bachalpsee_mit_Schreckhorn.jpg?width=600',
    difficulty:'4/6', vanUtrecht:'870 km', totaalKm:'70 km', totaalStijging:'9.500 m',
    transport:'Utrecht – Grindelwald · 870 km', driveTime:'09:00 uur',
    startEnd:'Grindelwald → Kandersteg',
    days:[
      { day:1, challenge:false,
        title:'Grindelwald First → Bachalpsee → Wengen',
        from:'Grindelwald First (2.167m)', to:'Wengen (1.274m)',
        toShort:'Wengen', toAlt:'1.274m',
        distance:'~20 km', elevation:'+500m / -1.400m', time:'7–8 uur',
        terrain:'Bachalpsee bergmeer · Eiger-Mönch-Jungfrau panorama · rustieke paden · autovrij bergdorp',
        desc:'Begin met de gondel naar Grindelwald First (2.167m) en wandel naar het schitterende Bachalpsee, met spiegelreflecties van Schreckhorn en Finsteraarhorn. Via de Grosse Scheidegg daalt de route af naar het sprookjesachtige Wengen — het autovrije bergdorp met een van de indrukwekkendste panorama\u0027s op het Eiger-Mönch-Jungfrau massief.',
        img:'https://commons.wikimedia.org/wiki/Special:FilePath/Bachalpsee_-_panoramio.jpg?width=700',
        imgCaption:'Het magische Bachalpsee met reflectie van Schreckhorn en Finsteraarhorn'},
      { day:2, challenge:false,
        title:'Wengen → Lauterbrunnen → Mürren',
        from:'Wengen (1.274m)', to:'Mürren (1.638m)',
        toShort:'Mürren', toAlt:'1.638m',
        distance:'~15 km', elevation:'+800m / -450m', time:'6–7 uur',
        terrain:'Staubbachfall · 72 watervallen · Tolkien-inspiratie · autovrij hoogdorp',
        desc:'Afdaling naar het spectaculaire Lauterbrunnen — het dal van de 72 watervallen dat Tolkien inspireerde voor zijn elvenwereld. De Staubbachfall (300m) dendert naast het pad. Via de Grütschalp-veerdienst bereik je het wagenvrije Mürren, hoog boven het dal met uitzicht op de driehoek Eiger-Mönch-Jungfrau.',
        img:'https://commons.wikimedia.org/wiki/Special:FilePath/Grosshorn_from_Lauterbrunnen.JPG?width=700',
        imgCaption:'Uitzicht op de kalksteenpieken vanuit het Lauterbrunnen-dal'},
      { day:3, challenge:true,
        title:'⚡ Mürren → Griesalp via Sefinenfurke (UITDAGINGSDAG)',
        from:'Mürren (1.638m)', to:'Griesalp (1.408m)',
        toShort:'Griesalp', toAlt:'1.408m',
        distance:'~15 km', elevation:'+1.450m / -1.700m', time:'9–10 uur',
        terrain:'Sefinenfurke (2.612m) · T5 klauterpassages · steilste dag · Kiental',
        desc:'De meest uitdagende dag van de traversa. De Sefinenfurke (2.612m) is een steil, geëxponeerd rotspad — officieel T5 waarbij handen en voeten nodig zijn. Na de adembenemende pas volgt een spectaculaire afdaling over de Bütlasse-kalkstenen naar het rustige Griesalp in het Kiental, één van de stilste dalen van Zwitserland.',
        img:'https://commons.wikimedia.org/wiki/Special:FilePath/Bachalpsee_-_panoramio.jpg?width=700',
        imgCaption:'Geëxponeerde kalksteenwereld op de Sefinenfurke-traverse'},
      { day:4, challenge:false,
        title:'Griesalp → Blüemlisalphütte SAC (2.840m)',
        from:'Griesalp (1.408m)', to:'Blüemlisalphütte (2.840m)',
        toShort:'Blüemlisalphütte', toAlt:'2.840m',
        distance:'~8 km', elevation:'+1.450m / -20m', time:'5–6 uur',
        terrain:'Steilste dag · SAC-berghut · gletsjerpanorama · Blüemlisalp-massief',
        desc:'De kortste maar steilste dag: 8 km met 1.450m hoogteverschil omhoog. De route doorkruist het Blüemlisalp-massief naar de indrukwekkende SAC-berghut op 2.840m — met spectaculair uitzicht op de Blüemlisalp-gletsjer. Een van de meest dramatisch gelegen berghutten van de hele Berner Alpen.',
        img:'https://commons.wikimedia.org/wiki/Special:FilePath/Sunrise_at_Bl%C3%BCmlisalph%C3%BCtte.jpg?width=700',
        imgCaption:'Zonsopgang bij de Blüemlisalphütte op 2.840m boven het Kanderdal'},
      { day:5, challenge:false,
        title:'Blüemlisalphütte → Hohtürli → Oeschinensee → Kandersteg',
        from:'Blüemlisalphütte (2.840m)', to:'Kandersteg (1.176m)',
        toShort:'Kandersteg', toAlt:'1.176m',
        distance:'~12 km', elevation:'+50m / -1.700m', time:'4–5 uur',
        terrain:'Hohtürli (2.778m) · UNESCO Oeschinensee · turquoise bergmeer · alpiene afdaling',
        desc:'Via het Hohtürli (2.778m) daalt de route spectaculair af naar het legendarische Oeschinensee — een turquoise bergmeer omringd door 1.600m hoge kalksteenwanden, onderdeel van het UNESCO Jungfrau-Aletsch Werelderfgoed. Nog een uur door bloemenrijke weides brengt je naar Kandersteg voor de trein terug.',
        img:'https://commons.wikimedia.org/wiki/Special:FilePath/1578-Oeschinensee.jpg?width=700',
        imgCaption:'Het legendarische Oeschinensee boven Kandersteg — turquoise bergmeer omringd door 1.600m hoge kalksteenwanden (UNESCO)'},
    ]
  },

  {
    id:5, name:'Julische Alpen – Triglav', region:'Julische Alpen, Triglav NP, Slovenië',
    tagline:'Beklim het nationaal symbool van Slovenië',
    character:'Avontuurlijk · Kalksteenkarst · Sloveens nationaal symbool', landscape:'Vršič-pas · Triglav-noordwand · Zevenmerenvallei · Komna-plateau · Bohinjmeer',
    heroImg:'https://commons.wikimedia.org/wiki/Special:FilePath/Aljazev_stolp_na_Triglavu.jpg?width=1400',
    cardImg:'https://commons.wikimedia.org/wiki/Special:FilePath/Aljazev_stolp_na_Triglavu.jpg?width=600',
    difficulty:'4/6', vanUtrecht:'1135 km', totaalKm:'70 km', totaalStijging:'6.650 m',
    transport:'Utrecht – Kranjska Gora · 1135 km', driveTime:'11:53 uur',
    startEnd:'Kranjska Gora → Bohinj',
    days:[
      { day:1, challenge:false,
        title:'Kranjska Gora → Vršič-pas → Pogačnikov dom',
        from:'Kranjska Gora (810m)', to:'Pogačnikov dom (2.051m)',
        toShort:'Pogačnikov dom', toAlt:'2.051m',
        distance:'~16 km', elevation:'+1.250m / -50m', time:'6–7 uur',
        terrain:'Vršič-pas (1.611m) · 50 haarspeldbochten · Russische Kapel (1917) · kalksteenpanorama',
        desc:'Vanuit het skiresort Kranjska Gora stijg je op naar de Vršič (1.611m), de hoogste asfaltweg van Slovenië met 50 haarspeldbochten. Langs de iconische Russische Kapel uit 1917, gebouwd door Russische krijgsgevangenen, leid de route omhoog langs kalksteenpieken naar Pogačnikov dom — met de eerste indrukwekkende blikken op het Triglav-massief.',
        img:'https://commons.wikimedia.org/wiki/Special:FilePath/Prelaz_Vr%C5%A1i%C4%8D.JPG?width=700',
        imgCaption:'De Vršič-bergpas — hoogste asfaltweg van Slovenië met panoramisch uitzicht'},
      { day:2, challenge:true,
        title:'⚡ Pogačnikov dom → Triglav (2.864m) → Dom Planika (UITDAGINGSDAG)',
        from:'Pogačnikov dom (2.051m)', to:'Dom Planika (2.401m)',
        toShort:'Dom Planika', toAlt:'2.401m',
        distance:'~12 km', elevation:'+900m / -650m', time:'8–9 uur',
        terrain:'Triglav (2.864m) · Aljažev stolp · vaste kettingen · hoogste top van Slovenië',
        desc:'De meest iconische dag: beklimming van de Triglav (2.864m), het nationaal symbool van Slovenië. Via de standaardroute met vaste kettingen en ijzeren pinnen — geen via ferrata vereist. De Aljažev stolp — een ijzeren cilinder uit 1895 — markeert de top. Elk jaar beklimmen duizenden Slovenen hun nationale berg als levensdoel.',
        img:'https://commons.wikimedia.org/wiki/Special:FilePath/Aljazev_stolp_na_Triglavu.jpg?width=700',
        imgCaption:'De Aljažev stolp op de top van Triglav (2.864m) — het dak van Slovenië'},
      { day:3, challenge:false,
        title:'Dom Planika → Zevenmerenvallei → Koča pri Triglavskih jezerih',
        from:'Dom Planika (2.401m)', to:'Koča pri Triglavskih jezerih (1.685m)',
        toShort:'Koča pri Triglavskih jezerih', toAlt:'1.685m',
        distance:'~15 km', elevation:'+200m / -950m', time:'6–7 uur',
        terrain:'Zevenmerenvallei · Triglav-meren · kalksteenkarst · ongerepte bergwereld',
        desc:'Afdaling door een van de mooiste alpine valleien van Slovenië: de Triglavska jezera (Zevenmerenvallei), een sprookjesachtig karstlandschap met zeven bergmeren op verschillende hoogten. De koča aan het Double Lake is het hart van dit stille, ongerepte gebied — een schitterend contrast na de Triglav-beklimming.',
        img:'https://commons.wikimedia.org/wiki/Special:FilePath/Triglavska_jezera_2009_09_1.JPG?width=700',
        imgCaption:'De Zevenmerenvallei (Triglavska jezera) — zeven bergmeren in een karstparadijs'},
      { day:4, challenge:false,
        title:'Koča pri jezera → Komna-plateau → Dom na Komni',
        from:'Koča pri Triglavskih jezerih (1.685m)', to:'Dom na Komni (1.520m)',
        toShort:'Dom na Komni', toAlt:'1.520m',
        distance:'~18 km', elevation:'+700m / -900m', time:'7–8 uur',
        terrain:'Komna-karststeppe · 27 km² hoogplateau · dwergdennen · lariksbossen',
        desc:'Via het uitgestrekte Komna-plateau — een majestueus karstlandschap van 27 km² op 1.300–1.750m hoogte, bedekt met dwergdennen en lariksbossen. Het plateau geeft unieke panorama\u0027s over de Juliaanse Alpen en het Bohinjdal. Een dag van stille, ruige bergnatuur richting het verdiende Dom na Komni.',
        img:'https://commons.wikimedia.org/wiki/Special:FilePath/Dom_na_Komni.JPG?width=700',
        imgCaption:'Dom na Komni — het berghotel op het majestueuze Komna-karstplateau boven het Bohinjdal'},
      { day:5, challenge:false,
        title:'Dom na Komni → Bohinj (kort)',
        from:'Dom na Komni (1.520m)', to:'Bohinj (525m)',
        toShort:'Bohinj', toAlt:'525m',
        distance:'~9 km', elevation:'+50m / -1.000m', time:'~4 uur',
        terrain:'Bohinjmeer · Savica-waterval · grootste meer van Slovenië · alpiene bossen',
        desc:'Afdaling door weelderige alpenweiden en bossen naar het schitterende Bohinjmeer — het grootste natuurlijke meer van Slovenië, in het hart van het Triglav Nationaal Park. Optioneel: de imposante Savica-waterval bezoeken. Bus terug naar Ljubljana, dan de vlucht of trein naar huis.',
        img:'https://commons.wikimedia.org/wiki/Special:FilePath/Bohinj-jezero-Naklova_glava.JPG?width=700',
        imgCaption:'Het Bohinjmeer — het schilderachtige eindpunt van de Triglav-traversa'},
    ]
  },

  {
    id:6, name:'Tour du Queyras', region:'Queyras, Hautes-Alpes, Frankrijk',
    tagline:'Turquoise meren en het hoogste Alpendorp',
    character:'Zonnig · Kleurrijke geologie · Mediterraans-Alpien', landscape:'Lac Sainte-Anne · Saint-Véran · Col Vieux · Guil-kloven · Château-Queyras',
    heroImg:'https://commons.wikimedia.org/wiki/Special:FilePath/Lac_Sainte-Anne.jpg?width=1400',
    cardImg:'https://commons.wikimedia.org/wiki/Special:FilePath/Lac_Sainte-Anne.jpg?width=600',
    difficulty:'4/6', vanUtrecht:'1178 km', totaalKm:'75 km', totaalStijging:'6.100 m',
    transport:'Utrecht – Guillestre · 1178 km', driveTime:'13:30 uur', startEnd:'Guillestre ↔ Guillestre',
    days:[
      { day:1, challenge:false,
        title:'Guillestre → Ceillac',
        from:'Guillestre (1.000m)', to:'Ceillac (1.640m)',
        toShort:'Ceillac', toAlt:'1.640m',
        distance:'~15 km', elevation:'+850m / -200m', time:'5–6 uur',
        terrain:'Mélézet-dal · lariksbossen · Queyras-kalksteenpieken · dorpskerk',
        desc:'Een vriendelijke openingsdag door het weelderige Mélézet-dal, waar lariksbossen en bloemenrijke alpenweiden de toon zetten. Langzaam stijg je naar Ceillac (1.640m), een pittoresk bergdorp met een romaanse kerk en eerste uitzichten op het kleurrijke Queyras-massief — een ideale introductie tot dit verrassende stuk van de Franse Alpen.',
        img:'https://commons.wikimedia.org/wiki/Special:FilePath/Le_village_de_Ceillac_en_ao%C3%BBt_2008.jpg?width=700',
        imgCaption:'Ceillac (1.640m) — eerste halte in het zonnige Queyras-park'},
      { day:2, challenge:true,
        title:'⚡ Ceillac → Refuge de la Blanche via Lac Sainte-Anne (UITDAGINGSDAG)',
        from:'Ceillac (1.640m)', to:'Refuge de la Blanche (2.490m)',
        toShort:'Refuge de la Blanche', toAlt:'2.490m',
        distance:'~13 km', elevation:'+1.050m / -200m', time:'8–9 uur',
        terrain:'Lac Sainte-Anne (2.415m) · middeleeuwse kapel · hoge alpiene grasvlakten · steil',
        desc:'De dag waar de Queyras zijn troef uitspeelt: het Lac Sainte-Anne op 2.415m, een intens turquoise bergmeer met een middeleeuwse kapel op de oever — een van de meest fotogenieke plekken van de Franse Alpen. De klim is steil maar constant lonend, met vergezichten die bij elke bocht groter worden. Aankomst bij het hoog gelegen Refuge de la Blanche.',
        img:'https://commons.wikimedia.org/wiki/Special:FilePath/Lac_Sainte-Anne.jpg?width=700',
        imgCaption:'Lac Sainte-Anne (2.415m) met middeleeuwse kapel — het hoogtepunt van de Queyras-tocht'},
      { day:3, challenge:false,
        title:'Refuge de la Blanche → Refuge Agnel via Col Vieux',
        from:'Refuge de la Blanche (2.490m)', to:'Refuge Agnel (2.600m)',
        toShort:'Refuge Agnel', toAlt:'2.600m',
        distance:'~14 km', elevation:'+650m / -550m', time:'6–7 uur',
        terrain:'Col Vieux (2.806m) · Frans-Italiaanse grens · kleurrijke gesteenten · hoog plateau',
        desc:'Via het Col Vieux (2.806m), het hoogste punt van de tocht, met een spectaculair panorama over de Italiaanse Alpen en de Col Agnel. De Queyras toont hier zijn meest bijzondere karakter: gesteenten in rood, groen en zwart — een geologisch spektakel dat zelfs de meest doorgewinterde wandelaar verrast. Aankomst bij het indrukwekkend hoog gelegen Refuge Agnel.',
        img:'https://commons.wikimedia.org/wiki/Special:FilePath/D205_route_Col_Agnel.JPG?width=700',
        imgCaption:'Uitzicht vanuit het Col Agnel-gebied op de Frans-Italiaanse grens'},
      { day:4, challenge:false,
        title:'Refuge Agnel → Saint-Véran → Abriès',
        from:'Refuge Agnel (2.600m)', to:'Abriès (1.540m)',
        toShort:'Abriès', toAlt:'1.540m',
        distance:'~18 km', elevation:'+300m / -1.350m', time:'7–8 uur',
        terrain:'Saint-Véran (2.042m) · hoogste dorp van Europa · zonnige hellingen · Guil-vallei',
        desc:'De dag passeert Saint-Véran (2.042m), officieel het hoogste bewoonde dorp van Europa. Zondoorschenen houten chalets, middeleeuwse zonnewijzers op elke gevel en een barokke kerk — een levend museum op alpiene hoogte. Daarna een lange, beloonde afdaling langs zonnige lariksbossen naar de Guil-vallei in het vriendelijke Abriès.',
        img:'https://commons.wikimedia.org/wiki/Special:FilePath/St_V%C3%A9ran_-_entr%C3%A9e.JPG?width=700',
        imgCaption:'Saint-Véran (2.042m) — het hoogste bewoonde dorp van Europa'},
      { day:5, challenge:false,
        title:'Abriès → Château-Queyras → Guillestre (kort)',
        from:'Abriès (1.540m)', to:'Guillestre (1.000m)',
        toShort:'Guillestre', toAlt:'1.000m',
        distance:'~15 km', elevation:'+200m / -750m', time:'4–5 uur',
        terrain:'Guil-kloven · Château-Queyras (13e eeuw) · Combe du Queyras · terug naar start',
        desc:'Een waardige afsluiting: langs de spectaculaire Guil-kloven naar het middeleeuwse Château-Queyras, een 13e-eeuws fort op een rotspilaars hoog boven de rivier. Via de Combe du Queyras keer je terug naar Guillestre — met de voldoening van een volledige rondtour door een van de meest onontdekte en zonnige hoeken van de Franse Alpen.',
        img:'https://commons.wikimedia.org/wiki/Special:FilePath/Ch%C3%A2teau-Queyras_1.JPG?width=700',
        imgCaption:'Château-Queyras — middeleeuws fort op een rots boven de Guil-kloven'},
    ]
  }
];

const VOTES_KEY = 'huttentocht_votes';
const USERNAME_KEY = 'huttentocht_username';
const APP_CONFIG = window.APP_CONFIG || {};
const REMOTE_VOTING = APP_CONFIG.remoteVoting || {};
const REMOTE_ENABLED = Boolean(REMOTE_VOTING.enabled && REMOTE_VOTING.firebaseDatabaseUrl);
const REMOTE_DB_URL = (REMOTE_VOTING.firebaseDatabaseUrl || '').replace(/\/+$/, '');
const VOTE_SYNC_MS = Number(REMOTE_VOTING.pollIntervalMs) > 0
  ? Number(REMOTE_VOTING.pollIntervalMs)
  : 10000;
const MAX_VOTES_PER_USER = 2;

let votesCache = [];
let isRefreshingVotes = false;

function getVotesFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem(VOTES_KEY) || '[]');
  } catch (e) {
    return [];
  }
}

function saveVotesToLocalStorage(votes) {
  localStorage.setItem(VOTES_KEY, JSON.stringify(votes));
}

function normalizeVotes(votes) {
  if (!Array.isArray(votes)) return [];
  const uniqueByUserRoute = new Map();
  votes.forEach(v => {
    if (!v || typeof v !== 'object') return;
    const name = String(v.name || '').trim();
    const routeId = Number(v.routeId);
    if (!name || !Number.isFinite(routeId)) return;
    uniqueByUserRoute.set(`${name.toLowerCase()}|${routeId}`, {
      name,
      routeId,
      ts: Number(v.ts) || Date.now(),
    });
  });

  // Enforce max votes per user while keeping most recent votes.
  const grouped = new Map();
  uniqueByUserRoute.forEach(v => {
    const key = v.name.toLowerCase();
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key).push(v);
  });

  const normalized = [];
  grouped.forEach(userVotes => {
    userVotes
      .sort((a, b) => b.ts - a.ts)
      .slice(0, MAX_VOTES_PER_USER)
      .forEach(v => normalized.push(v));
  });

  return normalized;
}

function getVotes() {
  return votesCache;
}

function voteKeyFromName(name) {
  return String(name || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 64) || 'anonymous';
}

function voteKey(name, routeId) {
  return `${voteKeyFromName(name)}-${routeId}`;
}

async function remoteRequest(method, path, body) {
  const options = {
    method,
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',
  };
  if (body !== undefined) options.body = JSON.stringify(body);
  const res = await fetch(path, options);
  if (!res.ok) throw new Error(`Remote vote request failed (${res.status})`);
  if (res.status === 204) return null;
  return res.json();
}

async function loadVotes() {
  if (!REMOTE_ENABLED) {
    votesCache = normalizeVotes(getVotesFromLocalStorage());
    return votesCache;
  }

  const data = await remoteRequest('GET', `${REMOTE_DB_URL}/votes.json`);
  votesCache = normalizeVotes(data ? Object.values(data) : []);
  return votesCache;
}

async function remoteSetVote(vote) {
  const key = voteKey(vote.name, vote.routeId);
  await remoteRequest('PUT', `${REMOTE_DB_URL}/votes/${key}.json`, vote);
}

async function remoteDeleteVote(name, routeId) {
  const key = voteKey(name, routeId);
  const legacyKey = voteKeyFromName(name);
  await Promise.all([
    remoteRequest('DELETE', `${REMOTE_DB_URL}/votes/${key}.json`),
    remoteRequest('DELETE', `${REMOTE_DB_URL}/votes/${legacyKey}.json`),
  ]);
}

function getUsername() {
  return localStorage.getItem(USERNAME_KEY) || '';
}

function saveUsername(name) {
  localStorage.setItem(USERNAME_KEY, name.trim());
}

function getVotesByUser(name) {
  if (!name) return [];
  return getVotes().filter(v => v.name.toLowerCase() === name.toLowerCase());
}

/* ═══════════════ IMAGE BASE ═══ */
const IMG = 'https://images.unsplash.com/';
const imgUrl = src => src && src.startsWith('http') ? src : IMG + src;
const FALLBACK_IMG = 'https://images.unsplash.com/photo-1464822759023-fed107efd72a?auto=format&fit=crop&q=80';

function bindImageFallbacks(root = document) {
  const applyFallback = (img) => {
    if (img.dataset.fallbackApplied === '1') return;
    img.dataset.fallbackApplied = '1';
    const width = img.classList.contains('route-card-img') ? 900 : 1600;
    img.src = `${FALLBACK_IMG}&w=${width}`;
  };

  root.querySelectorAll('img').forEach(img => {
    if (img.dataset.fallbackBound === '1') return;
    img.dataset.fallbackBound = '1';

    img.addEventListener('error', () => applyFallback(img));

    // If the image already failed before the handler was attached, recover immediately.
    if (img.complete && img.naturalWidth === 0) applyFallback(img);
  });
}



/* ═══════════════ STATE ═══ */
let currentRoute = null;
let currentDay   = 1;
let pendingVoteRouteId = null;

function getUserVotedRouteIds() {
  const name = getUsername();
  if (!name) return [];
  return getVotesByUser(name).map(v => v.routeId);
}

async function castOrToggleVote(routeId) {
  const name = getUsername();
  if (!name) { pendingVoteRouteId = routeId; openNameModal(false); return; }

  try {
    const userVotes = getVotesByUser(name);
    const existingOnRoute = userVotes.find(v => v.routeId === routeId);

    if (REMOTE_ENABLED) {
      if (existingOnRoute) {
        await remoteDeleteVote(name, routeId);
      } else {
        if (userVotes.length >= MAX_VOTES_PER_USER) {
          alert(`Je mag maximaal ${MAX_VOTES_PER_USER} stemmen uitbrengen.`);
          return;
        }
        await remoteSetVote({ name, routeId, ts: Date.now() });
      }
      await loadVotes();
    } else {
      let votes = [...getVotes()];
      if (existingOnRoute) {
        votes = votes.filter(v => !(v.name.toLowerCase() === name.toLowerCase() && v.routeId === routeId));
      } else {
        if (userVotes.length >= MAX_VOTES_PER_USER) {
          alert(`Je mag maximaal ${MAX_VOTES_PER_USER} stemmen uitbrengen.`);
          return;
        }
        votes.push({ name, routeId, ts: Date.now() });
      }
      votesCache = normalizeVotes(votes);
      saveVotesToLocalStorage(votesCache);
    }

    updateVoteUI();
  } catch (err) {
    console.error(err);
    alert('Stem opslaan mislukt. Probeer het opnieuw.');
    if (REMOTE_ENABLED) {
      try {
        await loadVotes();
        updateVoteUI();
      } catch (_) {
        // no-op
      }
    }
  }
}

async function refreshVotesAndUI() {
  if (!REMOTE_ENABLED || isRefreshingVotes) return;
  isRefreshingVotes = true;
  try {
    await loadVotes();
    updateVoteUI();
  } catch (err) {
    console.error(err);
  } finally {
    isRefreshingVotes = false;
  }
}

/* ═══════════════ NAME MODAL ═══ */
function openNameModal(isRename) {
  const modal = document.getElementById('vote-modal');
  const input = document.getElementById('modal-name-input');
  const title = document.getElementById('modal-title');
  const sub   = document.getElementById('modal-sub');
  const btn   = document.getElementById('modal-confirm-btn');
  if (isRename) {
    title.textContent = 'Naam wijzigen';
    sub.textContent   = 'Pas je naam aan. Je stemmen blijven bewaard.';
    btn.textContent   = 'Opslaan';
    input.value       = getUsername();
  } else {
    title.textContent = 'Jouw naam';
    sub.textContent   = 'Vul je naam in zodat de groep ziet wie op welke route stemt.';
    btn.textContent   = 'Stem!';
    input.value       = getUsername();
  }
  modal.classList.add('open');
  setTimeout(() => input.focus(), 100);
  input.onkeydown = e => { if (e.key === 'Enter') void modalConfirm(); };
}

function closeModal(clearPending = true) {
  document.getElementById('vote-modal').classList.remove('open');
  if (clearPending) pendingVoteRouteId = null;
}

async function modalConfirm() {
  const name = document.getElementById('modal-name-input').value.trim();
  if (!name) { document.getElementById('modal-name-input').focus(); return; }

  const oldName = getUsername();
  const queuedRouteId = pendingVoteRouteId;

  try {
    if (queuedRouteId === null && oldName && oldName !== name) {
      if (REMOTE_ENABLED) {
        const existingVotes = getVotesByUser(oldName);
        if (existingVotes.length > 0) {
          await Promise.all(existingVotes.map(v => remoteDeleteVote(oldName, v.routeId)));
          await Promise.all(existingVotes.map(v => remoteSetVote({ ...v, name, ts: Date.now() })));
          await loadVotes();
        }
      } else {
        const votes = getVotes().map(v => (
          v.name.toLowerCase() === oldName.toLowerCase()
            ? { ...v, name, ts: Date.now() }
            : v
        ));
        votesCache = normalizeVotes(votes);
        saveVotesToLocalStorage(votesCache);
      }
    }

    saveUsername(name);
    closeModal(false);

    if (queuedRouteId !== null) {
      const rid = queuedRouteId;
      pendingVoteRouteId = null;
      await castOrToggleVote(rid);
    } else {
      pendingVoteRouteId = null;
      updateVoteUI();
    }
  } catch (err) {
    console.error(err);
    alert('Naam opslaan mislukt. Probeer het opnieuw.');
    pendingVoteRouteId = null;
  }
}

/* ═══════════════ UPDATE VOTE UI ═══ */
function updateVoteUI() {
  const votes    = getVotes();
  const username = getUsername();
  const myVotes  = new Set(getUserVotedRouteIds());

  // Nav name label
  const nameLabel = document.getElementById('nav-name-label');
  if (nameLabel) nameLabel.textContent = username || 'Stel naam in';

  // Update each card
  routes.forEach(r => {
    const isMine = myVotes.has(r.id);

    const badge = document.getElementById(`voted-badge-${r.id}`);
    const btn   = document.getElementById(`vote-btn-${r.id}`);
    if (badge) badge.className = 'route-card-voted-badge' + (isMine ? ' show' : '');
    if (btn) {
      btn.className = 'vote-btn' + (isMine ? ' voted' : '');
      btn.innerHTML = isMine
        ? '<i class="fas fa-check"></i> Gestemd'
        : '<i class="fas fa-thumbs-up"></i> Stem';
    }
  });

  // Vote results
  const total = votes.length;
  document.getElementById('total-votes-badge').textContent =
    total === 0 ? 'Nog geen stemmen' : total === 1 ? '1 stem' : `${total} stemmen`;

  const maxVotes = Math.max(...routes.map(r => votes.filter(v=>v.routeId===r.id).length), 1);

  const barsEl = document.getElementById('vote-bars');
  barsEl.innerHTML = routes.map(r => {
    const rv = votes.filter(v => v.routeId === r.id);
    const count = rv.length;
    const pct = total > 0 ? Math.round(count / total * 100) : 0;
    const isLeading = count > 0 && count === maxVotes && total > 0;
    const pills = rv.map(v => {
      const isMe = username && v.name.toLowerCase() === username.toLowerCase();
      return `<span class="voter-pill${isMe?' mine':''}">
        ${isMe?'<i class="fas fa-user" style="font-size:.65rem"></i>':''} ${v.name}
      </span>`;
    }).join('');
    return `
      <div class="vote-bar-item">
        <div class="vote-bar-meta">
          <span class="vote-bar-name">${r.id}. ${r.name}</span>
          <span class="vote-bar-count">${count} ${count===1?'stem':'stemmen'}${total>0?' · '+pct+'%':''}</span>
        </div>
        <div class="vote-bar-track">
          <div class="vote-bar-fill${isLeading?' leading':''}" style="width:${total>0?pct:0}%"></div>
        </div>
        ${rv.length > 0 ? `<div class="voter-pills">${pills}</div>` : ''}
      </div>`;
  }).join('');
}

/* ═══════════════ RENDER HOME ═══ */
function renderHome() {
  const grid = document.getElementById('routes-grid');
  grid.innerHTML = '';
  routes.forEach((r, i) => {
    const card = document.createElement('article');
    card.className = 'route-card';
    card.style.transitionDelay = `${i * 0.1}s`;

    const challDay = r.days.find(d => d.challenge);
    const maxCharTags = challDay ? 2 : 3;
    card.innerHTML = `
      <div class="route-card-img-wrap">
        <img class="route-card-img" src="${imgUrl(r.cardImg)}" alt="${r.name}" loading="lazy">
        <div class="route-card-img-overlay"></div>
        <div class="route-card-num">${r.id}</div>
        <div class="route-card-voted-badge" id="voted-badge-${r.id}">
          <i class="fas fa-check"></i> Jouw stem
        </div>
      </div>
      <div class="route-card-body">
        <div class="route-card-region">${r.region}</div>
        <h3 class="route-card-name">${r.name}</h3>
        <p class="route-card-desc">${r.tagline}</p>
        <div class="route-card-tags">
          ${r.character.split(' · ').slice(0, maxCharTags).map(t=>`<span class="tag">${t}</span>`).join('')}
          ${challDay?`<span class="tag tag-challenge">⚡ Dag ${challDay.day}</span>`:''}
        </div>
        <div class="route-card-stats">
          <div class="card-stat"><span class="card-stat-val">${r.vanUtrecht}</span><span class="card-stat-key">Van Utrecht</span></div>
          <div class="card-stat"><span class="card-stat-val">${r.totaalKm}</span><span class="card-stat-key">Routelengte</span></div>
          <div class="card-stat"><span class="card-stat-val">${r.totaalStijging}</span><span class="card-stat-key">Hoogtemeters</span></div>
        </div>
        <div class="card-btn-row">
          <button class="route-card-btn" data-action="show-route" data-route-id="${r.id}">
            Verkennen <i class="fas fa-arrow-right"></i>
          </button>
          <button class="vote-btn" id="vote-btn-${r.id}" data-action="vote-route" data-route-id="${r.id}">
            <i class="fas fa-thumbs-up"></i> Stem
          </button>
        </div>
      </div>`;
    grid.appendChild(card);
    requestAnimationFrame(() => setTimeout(() => card.classList.add('visible'), 80 + i*100));
  });
  bindImageFallbacks(grid);
  updateVoteUI();
}

/* ═══════════════ SHOW ROUTE ═══ */
function showRoute(id) {
  currentRoute = routes.find(r => r.id === id);
  currentDay   = 1;
  document.getElementById('rh-img').src     = imgUrl(currentRoute.heroImg);
  document.getElementById('rh-region').textContent  = currentRoute.region;
  document.getElementById('rh-title').textContent   = currentRoute.name;
  document.getElementById('rh-tagline').textContent = currentRoute.tagline;

  document.getElementById('route-meta-strip').innerHTML = `
    <div class="meta-item"><i class="fas fa-map-marker-alt"></i>
      <div><div class="meta-item-label">Route</div><div class="meta-item-val">${currentRoute.startEnd}</div></div></div>
    <div class="meta-item"><i class="fas fa-mountain"></i>
      <div><div class="meta-item-label">Moeilijkheid</div><div class="meta-item-val">${currentRoute.difficulty}</div></div></div>
    <div class="meta-item"><i class="fas fa-car"></i>
      <div><div class="meta-item-label">Rijafstand</div><div class="meta-item-val">${currentRoute.transport}${currentRoute.driveTime ? ` · ${currentRoute.driveTime}` : ''}</div></div></div>
    <div class="meta-item"><i class="fas fa-bolt" style="color:#e74c3c"></i>
      <div><div class="meta-item-label">Uitdagingsdag</div>
      <div class="meta-item-val" style="color:#c0392b">Dag ${currentRoute.days.find(d=>d.challenge).day}</div></div></div>`;

  document.getElementById('day-nav').innerHTML = currentRoute.days.map(d =>
    `<button class="day-tab${d.day===1?' active':''}${d.challenge?' challenge-tab':''}"
      id="tab-${d.day}" data-action="switch-day" data-day="${d.day}">
      Dag ${d.day}${d.challenge?' <span class="bolt-tag">⚡</span>':''}
    </button>`).join('');

  document.getElementById('day-panels').innerHTML = currentRoute.days.map(d => `
    <div class="day-panel${d.day===1?' active':''}" id="panel-${d.day}">
      ${d.challenge?`<div class="challenge-badge"><i class="fas fa-bolt"></i> UITDAGINGSDAG · ≥1.500 m · secties 30–40%</div>`:''}
      <div class="day-header">
        <div class="day-number">${d.day}</div>
        <div class="day-title-block">
          <h2 class="day-title">${d.title}</h2>
          <div class="day-route-label">
            <i class="fas fa-circle-dot"></i> ${d.from}
            &ensp;<i class="fas fa-arrow-right"></i>&ensp;
            <i class="fas fa-flag-checkered"></i> ${d.to}
          </div>
        </div>
      </div>
      <div class="day-stats">
        <div class="stat-card${d.challenge?' challenge-stat':''}">
          <div class="stat-icon"><i class="fas fa-route"></i></div>
          <div class="stat-val">${d.distance}</div><div class="stat-key">Afstand</div>
        </div>
        <div class="stat-card${d.challenge?' challenge-stat':''}">
          <div class="stat-icon"><i class="fas fa-arrow-trend-up"></i></div>
          <div class="stat-val">${d.elevation}</div><div class="stat-key">Hoogtemeters</div>
        </div>
        <div class="stat-card${d.challenge?' challenge-stat':''}">
          <div class="stat-icon"><i class="fas fa-clock"></i></div>
          <div class="stat-val">${d.time}</div><div class="stat-key">Looptijd</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon"><i class="fas fa-tree"></i></div>
          <div class="stat-val" style="font-size:.8rem;font-weight:500;line-height:1.3">${d.terrain}</div>
          <div class="stat-key">Terrein</div>
        </div>
      </div>
      <div class="day-content-grid">
        <div>
          <div class="day-description"><p>${d.desc}</p></div>
          <div class="hut-highlight">
            <i class="fas fa-house-chimney-window"></i>
            <div>
              <div class="hut-highlight-label">Overnachting</div>
              <div class="hut-highlight-name">${d.toShort}</div>
              <div class="hut-highlight-alt">${d.toAlt}</div>
            </div>
          </div>
          <div class="terrain-strip"><i class="fas fa-panorama"></i><span><strong>Landschap:</strong> ${d.terrain}</span></div>
        </div>
        <div class="day-photo-wrap">
          <img src="${imgUrl(d.img)}" alt="${d.imgCaption}" loading="lazy">
          <div class="day-photo-caption">${d.imgCaption}</div>
        </div>
      </div>
    </div>`).join('');

  document.getElementById('home-view').classList.remove('active');
  document.getElementById('route-view').classList.add('active');
  document.getElementById('nav-back').style.display = 'flex';
  bindImageFallbacks(document.getElementById('route-view'));
  window.scrollTo(0,0);
  updateArrows();
}

/* ═══════════════ DAY SWITCHING ═══ */
function switchDay(n) {
  document.getElementById(`panel-${currentDay}`)?.classList.remove('active');
  document.getElementById(`tab-${currentDay}`)?.classList.remove('active');
  currentDay = n;
  document.getElementById(`panel-${n}`)?.classList.add('active');
  document.getElementById(`tab-${n}`)?.classList.add('active');
  document.getElementById(`tab-${n}`)?.scrollIntoView({block:'nearest',inline:'center',behavior:'smooth'});
  updateArrows();
}
function changeDay(d) { const n=currentDay+d; if(n>=1&&n<=currentRoute.days.length) switchDay(n); }
function updateArrows() {
  document.getElementById('btn-prev').disabled = currentDay===1;
  document.getElementById('btn-next').disabled = currentDay===currentRoute.days.length;
}

/* ═══════════════ SHOW HOME ═══ */
function showHome() {
  document.getElementById('route-view').classList.remove('active');
  document.getElementById('home-view').classList.add('active');
  document.getElementById('nav-back').style.display = 'none';
  currentRoute = null;
  window.scrollTo(0,0);
}

/* ═══════════════ SCROLL PROGRESS ═══ */
window.addEventListener('scroll', () => {
  const el = document.getElementById('progress-bar');
  const h  = document.body.scrollHeight - window.innerHeight;
  if (h > 0) el.style.width = (window.scrollY / h * 100) + '%';
});

/* ═══════════════ CLOSE MODAL ON OVERLAY CLICK ═══ */
document.getElementById('vote-modal').addEventListener('click', function(e){
  if (e.target === this) closeModal();
});

/* ═══════════════ UI EVENTS ═══ */
document.getElementById('nav-name-btn').addEventListener('click', () => openNameModal(true));
document.getElementById('nav-back').addEventListener('click', showHome);
document.getElementById('btn-prev').addEventListener('click', () => changeDay(-1));
document.getElementById('btn-next').addEventListener('click', () => changeDay(1));
document.getElementById('modal-cancel-btn').addEventListener('click', closeModal);
document.getElementById('modal-confirm-btn').addEventListener('click', () => { void modalConfirm(); });

document.getElementById('routes-grid').addEventListener('click', e => {
  const target = e.target.closest('[data-action][data-route-id]');
  if (!target) return;
  const routeId = Number(target.dataset.routeId);
  if (target.dataset.action === 'show-route') showRoute(routeId);
  if (target.dataset.action === 'vote-route') void castOrToggleVote(routeId);
});

document.getElementById('day-nav').addEventListener('click', e => {
  const tab = e.target.closest('[data-action="switch-day"][data-day]');
  if (!tab) return;
  switchDay(Number(tab.dataset.day));
});

/* ═══════════════ INIT ═══ */
async function init() {
  try {
    await loadVotes();
  } catch (err) {
    console.error(err);
    votesCache = normalizeVotes(getVotesFromLocalStorage());
  }

  renderHome();
  bindImageFallbacks(document);

  if (REMOTE_ENABLED) {
    window.setInterval(() => { void refreshVotesAndUI(); }, VOTE_SYNC_MS);
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) void refreshVotesAndUI();
    });
  }
}

void init();
