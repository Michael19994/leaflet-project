// id, name, imgLogo, information, format, tier, numOfTeams, video, highlights, website

const competitions = [ 
  {
    id: 1,
    name: "Argentine Primera División",
    imgLogo: "./img/Logo_de_la_Liga_Profesional_de_Fútbol_de_Argentina.svg.png",
    information: 
    `
    The Primera División is a professional football league in Argentina, organised by the Argentine Football Association (AFA). 
    The Primera División is the country's premier football division and is the top division of the Argentine football league system. 
    It operates on a system of promotion and relegation with the Primera Nacional (Second Division), with the teams placed lowest at the end of the season being relegated.
    With the first championship held in 1891, Argentina became the first country outside the United Kingdom (where the Football League had debuted in 1888, and the Scottish and Irish Football Leagues in 1890) 
    to establish a football league. In the early years, only teams from Buenos Aires, Greater Buenos Aires, La Plata and Rosario were affiliated to the national association. Teams from other cities would join in later years.
    `,
    format: 
    `
    The 2022 season was contested by 28 teams, including the 26 teams from the previous season (so there were no relegations during in 2021) plus the two teams promoted from Primera Nacional. The season ran from June to October 2022, prior to the 2022 FIFA World Cup in Qatar.
    Participating teams played each other in a round-robin system totaling 27 rounds. The team with most points at the end of the season crowned champion. Unlike the previous two seasons, the 2021 championship brought back the relegation system, after it had been suspended due to the COVID-19 pandemic.
    Relegation is based on an averaging system. At the end of the season, the three teams with the worst three-year averages are relegated, while the winner and runner-up of Primera Nacional championship are promoted to Primera. 
    `,
    tier: "1st",
    numOfTeams: "28",
    teams: "./img/clubspremiera.png",
    video: `https://www.youtube.com/embed/Uq3oytllTxw`,
    highlights: "https://www.youtube.com/c/LigaProfesional/videos",
    website: "https://www.ligaprofesional.ar/" 
  },
  {
    id: 2,
    name: "Primera Nacional",
    imgLogo: "./img/Primera_Nacional_Logo.svg.png",
    information: 
    `
    Primera Nacional is the second division of the Argentine football league system. It is played by teams from all over the country. Clubs from Buenos Aires surroundings, as well as some from Santa Fe Province, are promoted from or relegated to the Primera B Metropolitana ("Metropolitan B Division") while for teams from the other provinces the Torneo Federal A ("Federal A Tournament") is the next level down. 
    In Argentine football, Nacional B is the second-highest league, and from it, the three best teams are automatically promoted to Primera División.
    It was created in 1986 to integrate unaffiliated clubs into the Argentine football structure, which until then had only participated in Nacional championships of Argentina's First Division tournament. It brought together teams from the old Primera B (until then, the second division) and regional leagues from several Argentine provinces.
    After the 1985–86 season, the Primera B Nacional became the second hierarchical league in Argentina's professional football, after the Primera División, and it is above the Torneo Federal A and the Primera B Metropolitana, the last one started to act as a third division for the teams directly affiliated to AFA.
    Beginning in the 2019–20 season, the name was changed dropping the B to simply be known as Primera Nacional.
    `,
    format: 
    `
    Thirty-seven teams play each other once for a total of thirty-six rounds. The top-placed team will be the champion and will also earn promotion to the Primera División. 
    The teams placed from 2nd to 13th place will compete in the "Torneo Reducido" for the second promotion berth after the regular season ends, with the team placed 2nd entering in the third round, the team placed 3rd entering in the second round and the teams placed 4th to 13th entering in the first round.
    Teams ending in positions 2 to 13 will play the Torneo Reducido for the second and last promotion berth to Primera División, in which teams will be seeded in each round according to their final placement in the first stage of the tournament. The first two rounds were played over a single leg, at the stadium of the higher-seeded team. 
    The semi-finals and finals will be played over two legs, with the higher-seeded team hosting the second leg. In all rounds, the higher-seeded team will advance in case of a tie.
    `,
    tier: "2nd",
    numOfTeams: "37",
    teams: "./img/clubsnacional.png",
    video: "https://www.youtube.com/embed/1taeCp24aFk",
    highlights: "https://www.youtube.com/c/tycsportsplay",
    website: "https://www.afa.com.ar/es/pages/estadisticas-primera-b-nacional" 
  },
  {
    id: 3,
    name: "Primera B Metropolitana",
    imgLogo: "./img/Primera_B_Nacional_logo.png",
    information: 
    `
    Primera B Metropolitana is one of two professional leagues that form the third level of the Argentine football league system. The division is made up of 17 clubs mainly from the city of Buenos Aires and its metropolitan area, Greater Buenos Aires.
    Originally created as the second division, it became the third level after a restructuring of the system in 1985 that ended with the creation of Primera B Nacional, set as the second division since then.
    The other league at level three is the Torneo Federal A, where teams from regional leagues take part.
    `,
    format: 
    `
    Primera B Metropolitana is currently organized so, during the course of a season, each club plays the others twice (a double round robin system), once at their home stadium and once at that of their opponents.
    The team that gets the most points at the end of the season is recognized as the Primera B champion and is automatically promoted to Primera B Nacional. The teams that hold the second to fifth positions have the chance to enter the Torneo Reducido (small tournament) whose winner will be promoted.
    The teams with the 2 lowest aggregate points total in Primera B Metropolitana are relegated to Primera C Metropolitana.
    `,
    tier: "3rd",
    numOfTeams: "17",
    teams: "./img/premirabclubs.png",
    video: "https://www.youtube.com/embed/ozcq04vFzWc",
    highlights: "https://www.youtube.com/c/tycsportsplay/videos",
    website: "https://www.afa.com.ar/es/pages/estadisticas-primera-b" 
  },
  {
    id: 4,
    name: "Torneo Federal A",
    imgLogo: "./img/TorneoFederalA.png",
    information: 
    `
    The Torneo Federal A (in English "Federal A Tournament") is one of the two professional leagues that form the regionalised third level of the Argentine football league system, along with Primera B Metropolitana. The competition was established in 2014 as a result of a change in the structure of the league system, replacing Torneo Argentino A.
    Federal A is organised by "Consejo Federal", a division of the Argentine Football Association. Clubs in Federal A have indirect membership in AFA unlike clubs in Primera B, which have direct membership. All teams with indirect membership are from outside the city of Buenos Aires (playing in regional leagues) and its metropolitan area (Greater Buenos Aires), while most of the direct members are from the aforementioned area.
    `,
    format: 
    `
    The 34 teams were split into two zones of 17 teams, where they will play against the other teams in their group twice: once at home and once away. The top eight teams from each zone qualified for the final stages.
    The final stages was played between the 16 teams that qualified from the first stage. They were seeded in the final stages according to their results in the first stage, with the best eight seeded 1–8, and the worst eight teams seeded 9–16. The teams played four rounds and the winner was declared champion and automatically promoted to the Primera Nacional.
    After the first stage, the two bottom teams of each zone were relegated to the Torneo Regional Federal Amateur, giving a total of four teams relegated.
    Teams ending in positions 1 to 8 will play the final stages for the second and last promotion berth to Primera Nacional, in which teams will be seeded in each round according to their final placement in the first stage of the tournament. 
    In all rounds, the teams were seeded according to their performance and placements in the previous stage of the competition and paired against a rival according to their seed: Team 1 vs. Team 16, Team 2 vs. Team 15 and so on, playing a single match on local ground, except the final that will be played in neutral ground. In all rounds, in case of tie, penalties will decide the winner.[
    `,
    tier: "3rd",
    numOfTeams: "34",
    teams: "./img/torneoAclubs.png",
    video: "https://www.youtube.com/embed/QS1DF8uhAfY",
    highlights: "https://www.youtube.com/user/TVPublicaArgentina/streams",
    website: "https://www.afa.com.ar/es/pages/federal-a" 
  },
  {
    id: 5,
    name: "Primera C Metropolitana",
    imgLogo: "./img/premeraCMetropolitana.jpg",
    information: 
    `
    The Primera C Metropolitana is one of the two professional leagues that form the fourth level of the Argentine football league system. Primera C Metropolitana is made up of 20 clubs mainly from the city of Buenos Aires and its metropolitan area (Greater Buenos Aires).
    The other league at level four is the Torneo Federal B, where teams from regional leagues take part.
    `,
    format: 
    `
    Primera C is currently organised into two league tournaments, the Apertura (opening) and the Clausura (closing). Each team plays every other team once in the Apertura, and then once again at the reverse venue in the Clausura.
    The winners of the two league titles are recognised as champions. However, the overall championship is decided with an end of season playoff. The overall champion is promoted to Primera B Metropolitana. The teams finishing 2nd to 8th enter a playoff series to determine which team will play in a promotion/relegation playoff against the 2nd lowest finishing team from Primera B Metropolitana.
    The team that finishes with the worst aggregate points total is automatically relegated to Primera D. The team with the 2nd worst aggregate points total plays a promotion/relegation playoff with the winner of the Primera D playoff series. And the winner then competes in Primera C Metropolitana the following season.
    `,
    tier: "4th",
    numOfTeams: "20",
    teams: "./img/primeraClubs.png",
    video: "https://www.youtube.com/embed/oOLNpXUFYzU",
    highlights: "https://www.youtube.com/c/canaldeportv/videos",
    website: "https://www.afa.com.ar/es/pages/estadisticas-primera-c" 
  },
  {
    id: 6,
    name: "Torneo Regional Federal Amateur / Torneo Federal B",
    imgLogo: "./img/argentina-torneo-regional-federal-amateur.webp",
    information: 
    `
    The Torneo Regional Federal Amateur is one of the two professional leagues that form the regionalised fourth level of the Argentine football league system, along with Primera C Metropolitana. The competition was established in 2018 as a result of a change in the structure of the league system, replacing Torneo Federal B.
    Federal Amateur is organised by "Consejo Federal", a division of the Argentine Football Association. Clubs in Federal B have indirect membership in AFA unlike clubs in Primera C, which have direct membership. 
    All teams with indirect membership are from outside the city of Buenos Aires (playing in regional leagues) and its metropolitan area (Greater Buenos Aires), while most of the direct members are from the aforementioned area.
    `,
    format: 
    `
    The contest consists of four rounds. The first, second and third make up the qualifying stage, which is carried out by the system of all against all. For their competition, the teams are divided into eight geographically determined zones.
    The zones are Norte, Litoral Norte, Centro, Litoral Sur, Pampeana Norte, Cuyo, Pampeana Sur, Patagónica Norte and Patagónica Sur.
    The winners of each of them face each other in the final stage or round paired according to a predetermined scheme, two games, and the four winners obtain promotion to Torneo Federal A.

    `,
    tier: "4th",
    numOfTeams: "283 for 2022 season but Varies between seasons",
    teams: "./img/ToneroFederalRegionsclubs.png",
    video: "https://www.youtube.com/embed/zeYF-xKJZQg",
    highlights: "https://www.youtube.com/channel/UCqiZRiF6K-FXEYtuhtw2NnA/streams",
    website: "https://www.afa.com.ar/es/" 
  },
  {
    id: 7,
    name: "Primera D Metropolitana",
    imgLogo: "./img/primera_division_D.png",
    information: 
    `
    The Primera D is one of two leagues that form the fifth division of the Argentine football league system. Made up of 11 clubs from Buenos Aires Province, the league is the only one that remains amateur. The other league at level five is the Torneo Federal C, where teams from regional leagues take part.
    Since the restructuring of the league system in 1986, the division became the fifth category of Argentine football (lower than Primera División, Primera B Nacional, Primera B Metropolitana and Primera C).
    `,
    format: 
    `
    The winners of Primera D gain automatic promotion to Primera C. The club finishing in 2nd to 9th place behind enter a playoff series; the winner of which faces the club finishing second bottom in Primera C in a promotion/relegation playoff.
    The team that finishes bottom of Primera D Metropolitana faces relegation. However, because Primera D Metropolitana is the lowest league in the Argentine football system relegation this means that the relegated team will not participate in the league system the following season.
    `,
    tier: "5th",
    numOfTeams: "11",
    teams: "./img/premiraDclubs.png",
    video: "https://www.youtube.com/embed/04Cgd2JuL3w",
    highlights: "https://www.youtube.com/channel/UCsSaH-pctrqodHS7EXsHKHA/streams",
    website: "https://www.afa.com.ar/es/pages/estadisticas-primera-d" 
  },
]

export default competitions;