// clubName, badgeImageURL, coordinates, formedIn, stadiumName, stadiumCapacity, location, history  

const footballClubs = [
  {
    id: 1,
    clubName: "Club Atlético River Plate",
    badgeImageUrl: "./img/River_plate_logo_2022.svg.png",
    coordinates: [-34.5453 ,-58.4485],
    formedIn: "1901",
    stadiumName: "Estadio Monumental",
    stadiumCapacity: "72,054",
    location: "Buenos Aires",
    history:
    ` 
    According with the club's official version, River Plate was founded on 25 May 1901, close to the La Boca neighborhood (later the home of fierce rivals Boca Juniors) 
    The institution was formed after the merger of two clubs, 'Santa Rosa' and 'La Rosales', with Leopoldo Bard being elected as its first president.
    The name was chosen because of an incident during the construction of Buenos Aires Port: one of the members had seen how the workers of Dique nº 3 left their duties for a while to play a football match.
    The boxes they were working with just said 'The River Plate' (the name the English gave to the Río de la Plata) and that inscription was taken to name the new club.River Plate affiliated to the Argentine Football Association in 1905, 
    debuting in the third division against Facultad de Medicina. On 13 December 1908, the team was promoted to first division after beating Racing Club 2–1. 
    However, the match was declared null due to River supporters jumping onto the field to celebrate with the players, so a new match had to be played. River again won, this time 7–0, to achieve promotion. 
    In 1914 River won its first domestic championship, the Copa de Competencia Jockey Club and its first international title, the Copa de Competencia Chevallier Boutell. 
    The nickname Los Millonarios came after the acquisition of winger Carlos Peucelle in 1931 for $10,000 and Bernabé Ferreyra for $35,000 (Large sum of money for the period) in 1932.
    In the following years, River Plate consolidated its place as one of the most popular teams of Argentina, and the 20th century brought much success. The club's record of 28 official tournaments saw them dubbed El Campeón del Siglo (The Champions of the Century).
    `
  },
  {
    id: 2,
    clubName: "Boca Juniors",
    badgeImageUrl: "./img/Boca_Juniors_logo18.svg.png",
    coordinates: [-34.6356, -58.3655],
    formedIn: "1905",
    stadiumName: "La Bombonera",
    stadiumCapacity: "54,000",
    location: "Buenos Aires",
    history: 
    `
    On 3 April 1905, a group of Greek and Italian boys (more specifically from Genoa) met in order to find a club. The house where the meeting was arranged was Esteban Baglietto's and 
    the other four people who attended were Alfredo Scarpatti, Santiago Sana and brothers Ioannis (Juan) and Theodoros (Teodoro) Farengas from Chios and Konstantinos Karoulias from Samos. 
    Other important founders members include Arturo Penney, Marcelino Vergara, Luis Cerezo, Adolfo Taggio, Giovanelli, Donato Abbatángelo, Bertolini.In 1913, Boca promoted to Primera División after some previous failed attempts. 
    This was possible when the Argentine Association decided to increase the number of teams in the league from 6 to 15.[22]In 1925, Boca made its first trip to Europe to play in Spain, Germany and France. 
    The squad played a total of 19 games, winning 15 of them. For that reason Boca was declared "Campeón de Honor" (Champion of Honour) by the Association.During successive years, Boca consolidated as one of the most popular teams of Argentina, with a huge number of fans not only in the country but worldwide. 
    The club is one of the most successful teams in Argentine football, having won 47 domestic titles (34 league titles and 13 national cups). At international level, Boca Juniors have won 22 titles, with 18 competitions organised by CONMEBOL and four by the Argentine and Uruguayan Associations together.
    `
  },
  {
    id: 3,
    clubName: "Racing Club de Avellaneda",
    badgeImageUrl: "./img/Escudo_de_Racing_Club_(2014).svg.png",
    coordinates: [-34.667556, -58.368583],
    formedIn: "1903",
    stadiumName: "Estadio Presidente Juan Domingo Perón",
    stadiumCapacity: "61,000",
    location: "Avellaneda",
    history: 
    `
    The origins of the club can be traced to the end of the 19th century, when a group of Buenos Aires Great Southern Railway employees asked for permission to play football in a field belonging to the company. 
    As the request was approved, they started to play their first matches there, mostly against teams formed by British immigrants. In 1898, they founded a club, "Argentinos Excelsior Club", which lasted three years until in 1901, 
    three new clubs were established "Sud América Fútbol Club de Barracas al Sur", "American Club" and "Argentinos Unidos", with Barracas al Sur the most notable of them. Nevertheless, the club was soon disbanded, establishing "Colorados Unidos" on 16 March 1902. 
    On 25 March 1903, both clubs met at Mercado de Hacienda with the purpose of merging again. The club took its name from a French auto racing magazine owned by Germán Vidaillac (a founding partner of French ancestry). 
    The suggestion was well received and the name "Racing Club" was immediately approved. Racing was the first football team integrally formed by criollo people.The first jersey worn by the emerging club was white, until 25 July 1904, 
    when it was decided a yellow and black vertical striped jersey would be used. Nevertheless, the recently adopted uniform only lasted a week due to its similarity to Uruguayan club CURCC, being replaced by a design proposed by president Luis Carbone. 
    The jersey had four squares, two light blue and two pink. This light blue and pink design would be worn until 1908, once again replaced by a design with three horizontal bars (two blue and one white). Finally, Racing adopted the light blue and white colors in 1910, in commemoration of the May Revolution's 100th anniversary that same year.
    `
  },
  {
    id: 4,
    clubName: "Club Atlético Independiente",
    badgeImageUrl: "./img/Escudo_del_Club_Atlético_Independiente.svg.png",
    coordinates: [-34.67026, -58.3709],
    formedIn: "1905",
    stadiumName: "Estadio Libertadores de América",
    stadiumCapacity: "48,069",
    location: "Avellaneda",
    history: 
    `
    Independiente was founded on 4 August 1904. A group of employees from a shoes store located in Buenos Aires city founded a football club called Maipú FC. The mostly young employees were only allowed to watch the games; 
    they could not play for the team. As a result, at a meeting in a bar located in front of the club, they chose to form a new club. The name chosen was "Independiente" to mark their independence from Maipú FC.
    Rosendo Degiorgi was appointed interim president. Degiorgi's family offered the use of a small room in their home to serve as the first club headquarters. It was established the Sunday 1 January 1905 as the official foundation date. 
    Arístides Langone was elected first president of the institution, and it was proposed by him to adopt white with details in blue as the club's colors, inspired by team St. Andrew's, the first champions of football in Argentina winners of 1891 season.
    Independiente played the first game on his history on Sunday 15 January 1905, against Atlanta, in the "bohemios" field, losing 1–0. The next game was played on 22 January 1905 against Maipú Banfield F.C., which ended in a 0–0 draw. 
    The club won the first game in its history with a resounding 11–0 win against Albion on 7 May 1905. Independiente then got affiliated to The Argentine Football Association, and was allowed to play in the second and third divisions. The first "Avellaneda derby" was played on 9 June 1907. Independiente beat Racing 3–2.
    That same year Independiente moved from Buenos Aires to its new field located in Avellaneda city, which was built in Manuel Ocantos street. On 10 May 1908, the team played for the first time wearing the red jersey, in a match against Banfield that Independiente won 9–2.
    The adoption of the red color is subject to controversy; the most recognized version is the one by decision of president Arístides Langone, who became surprised watching English team Nottingham Forest in a tour winning by a trashing 6–0 against Alumni AC, the strongest Argentine club on that era, so he decided to adopt the Forest's colors. 
    In 1909, the Independiente F.C. won its first trophy; the 1909 Copa Bullrich, a domestic cup for second tier teams. Goalkeeper José Buruca Laforia was one of the first star players on Independiente.
    `
  },
  {
    id: 5,
    clubName: "San Lorenzo de Almagro",
    badgeImageUrl: "./img/San_lorenzo_almagro_logo.svg.png",
    coordinates: [-34.6521, -58.4401],
    formedIn: "1908",
    stadiumName: "Estadio Pedro Bidegain",
    stadiumCapacity: "47,964",
    location: "Buenos Aires",
    history: 
    `
    The roots of the institution are a team formed by a group of children that played football in the corner of México and Treinta y Tres Orientales streets of Buenos Aires. Due to increasing traffic in the city, playing football in the streets became a risky activity for the boys. 
    Lorenzo Massa, the Catholic priest of the neighbourhood's church, saw how a tram almost knocked down one of the boys while they were playing in the streets. As a way to prevent more accidents, he offered the boys to play in the church's backyard, under the condition they go to mass on Sundays.
    On 1 April 1908, an assembly was held in the Almagro district of Buenos Aires with the purpose of establishing a club. During the meeting, several names were proposed. The first option was "Los Forzosos de Almagro" ("The Strongmen of Almagro", the name used by the boys for their street football squad), which did not sound good to Father Massa (who was present). 
    The other proposal was to name the club "San Lorenzo" as an homage to Massa, but he declined to be so honoured. Nevertheless, the name was finally accepted by the priest, explaining that the name would not honour himself but both Lawrence of Rome ("San Lorenzo" in Spanish) and the Battle of San Lorenzo, one of the most significative combats for the Independence of Argentina. 
    Another founding member, Federico Monti, suggested to add the name of the neighbourhood, Almagro where most of the members lived, which was accepted by the assembly.Due to the team not having its own a stadium, San Lorenzo began to play its home games in a field of the Club Martínez, placed in the nearby town of the same name. The squad played its first match on 26 April 1914. 
    At the end of the season, San Lorenzo had to play a final match against Excursionistas to declare a champion. San Lorenzo won the series (the results were 0–0 and 5–0). This title allowed San Lorenzo to enter the playoffs in for promotion to the Argentine Primera División, which was finally obtained after beating Club Honor y Patria by 3–0. `
  },
  {
    id: 6,
    clubName: "Club Atlético Vélez Sarsfield",
    badgeImageUrl: "./img/1200px-Escudo_del_Club_Atlético_Vélez_Sarsfield.svg.png",
    coordinates: [-34.635375, -58.520711],
    formedIn: "1910",
    stadiumName: "José Amalfitani Stadium",
    stadiumCapacity: "49,540",
    location: "Buenos Aires",
    history: 
    `
    Vélez foundation dates back to the last days of 1909, when rain interrupted an informal football game played near the Vélez Sarsfield railway station of the Buenos Aires Western Railway, which served the barrio of Vélez Sársfield, named after jurist Dalmacio Vélez Sarsfield. (Vélez Sarsfield station is in Floresta barrio and was renamed Floresta station in 1944.) 
    Three of the young men whose game got interrupted, Julio Guglielmone, Martín Portillo and Nicolás Marín Moreno, sheltered in the station and discussed the possibility of founding a football club to practice the sport more seriously. The club was officially founded on 1 January 1910, in Marín Moreno's house. 
    The founders decided to call the new club Club Atlético Argentinos de Vélez Sarsfield (in English: Argentines of Vélez Sarsfield Athletic Club), and appointed Luis Barredo as their first chairman. 
    They also decided to form two teams (one for the Argentine third division and the other for the fourth) and chose to sport white shirts, that were easy to obtain for everyone. In 1912, however, the directive board decided to change the uniform to navy blue shirts and white shorts. 
    Vélez Sarsfield first home ground was a piece of land located between the streets of Ensenada, Provincias Unidas (currently Juan Bautista Alberdi), Mariano Acosta and Convención (currently José Bonifacio). This block is in Floresta barrio, where it meets Vélez Sársfield and Parque Avellaneda barrios.
    `
  },
  {
    id: 7,
    clubName: "Club Atlético Tigre",
    badgeImageUrl: "./img/Escudo_del_Club_Atlético_Tigre_-_2019.svg.png",
    coordinates: [-34.4498, -58.5424],
    formedIn: "1902",
    stadiumName: "Estadio José Dellagiovanna",
    stadiumCapacity: "26,282",
    location: "Victoria, Buenos Aires",
    history:
    `
    On 3 August 1902, a group of twelve young men led by José Dellagiovanna, met at his house in Partido de las Conchas (former name of Tigre Partido) with the purpose of establishing a sports club. The name given to the recently formed institution was "Club Atlético Juventud del Tigre", with Dellagiovanna elected as its first president. 
    They played their first football match vs C.A. Las Conchas, won by Juventud del Tigre 3–1. The club wore a blue shirt with red collar, black short and socks.In 1911, the team registered to the Argentine Football Association to be able to compete in official tournaments. By those times, the institution changed its name to "Club Atlético de Tigre". 
    When dissident Federación Argentina de Football was established in 1912 after the first schism in Argentine football, Tigre affiliated to it. The team began to wear a striped blue and red shirt.The first title won by the club came in 1912, when Tigre was crowned champion of División Intermedia (the second level by then), 
    earning promotion to Primera División after beating Argentinos de Vélez Sarsfield 4–2 in the final held at Estadio G.E.B.A.Tigre debuted in Primera División, the top division of Argentine football, on 1 May 1913 against Porteño; the match concluded in a 0–0 draw. The team played its home matches on a field located on Rocha street, near Reconquista River in Rincón de Milberg. 
    Its first field was inaugurated on 2 December 1913. When a new schism came in 1919, Tigre registered to dissident Asociación Amateurs de Football, which lasted until 1927, when both leagues, AAmF and AFA joined.
    `
  },
  {
    id: 8,
    clubName: "Club Atlético Banfield",
    badgeImageUrl: "./img/Escudo_de_Banfield.png",
    coordinates: [-34.7508, -58.3880],
    formedIn: "1896",
    stadiumName: "Estadio Florencio Sola",
    stadiumCapacity: "34,901",
    location: "Banfield, Buenos Aires",
    history: 
    `
    In the second half of the 1880s, many British families settled in the village of Banfield,[2] located 14 miles south of Buenos Aires. These families, with their English-style houses and Victorian social dynamics, gave the suburbs a distinctly British profile. 
    The history of the club began on 21 January 1896, when a group of professionals and English merchants residing in Banfield decided to found a club which they named after the village, which had been named after the railway station, established in 1873, which in turn was named after Edward Banfield, the first manager of the Buenos Aires Great Southern Railway. 
    Heading the group of founders were Daniel Kingsland and George Burton, vice president and first. Kingsland was an exporter of cattle in Britain and an accountant while Burton was a Cambridge University graduate.The pitch was a field for grazing located two blocks north of the railway station, next to the tracks on the east side. 
    With Kingsland as president, cricket was the major sport, leaving football relegated to the background, which explains the poor performances of the club in football championships from 1897 to 1898, where the team finished in last place even suffering some of the largest defeats ever such as a 0–10 at the hands of defunct Flores AC
    `
  },
  {
    id: 9,
    clubName: "Argentinos Juniors",
    badgeImageUrl: "./img/Escudo_de_la_Asociación_Atlética_Argentinos_Juniors.svg.png",
    coordinates: [-34.6061, -58.4728],
    formedIn: "1904",
    stadiumName: "Estadio Diego Armando Maradona",
    stadiumCapacity: "26,000",
    location: "Buenos Aires",
    history: 
    `
    The club was founded in the Villa Crespo neighbourhood of Buenos Aires on 14 August 1904, by a group of anarchist boys that were part of club "Mártires de Chicago" (chosen in homage to the eight anarchists imprisoned or hanged after the 1886 Haymarket Riot in Chicago).[4] Leandro Ravera Bianchi was named president of the recently created club.
    The club immediately adopted the red and white colors as an homage to deputy Alfredo Palacios, the first congressman elected from the Socialist Party in Argentina. The club affiliated itself with the Liga Central de Football, a minor league in which small clubs and companies took part of. 
    The first match played by Argentinos Juniors was against Club La Prensa, which Argentinos Juniors lost by a catastrophic scoreline of 12–1. Nevertheless, the squad would be crowned champion at the end of the season. Argentinos Juniors played its home matches in the field located on Gaona Avenue and Añasco Street.After the club was evicted, 
    Argentinos Juniors played at several fields, first renting one in Villa Ballester, returning to their neighborhood of origin in 1907. After a brief stint in Villa Urquiza, the club returned to Caballito, later moving to Fraga and Estomba streets in Villa Ortúzar. In 1909, Argentinos gained affiliation with the Argentine Football Association, 
    but in 1912 the club was involved in the first schism in Argentine football when Argentinos joined the breakaway "Federación Argentina de Football" (FAF). During those years, the club re-adopted its green and white colors as there were teams in the league using red jerseys.
    `
  },
  {
    id: 10,
    clubName: "Arsenal de Sarandí",
    badgeImageUrl: "./img/Arsenal_Sarandí_logo.svg.png",
    coordinates: [-34.6783811, -58.3406089],
    formedIn: "1957",
    stadiumName: "Estadio Julio Humberto Grondona",
    stadiumCapacity: "18,500",
    location: "Sarandí, Buenos Aires",
    history: 
    `
    The club was founded in January 1957 by brothers Héctor and Julio Humberto Grondona, inspired by the English club Arsenal. Not only does it share its name with the eponymous Gunners of North London, the stories of the naming of the two clubs are very similar – both had military arsenals nearby. 
    The team's shirt colour is light blue with a diagonal red band (similar to the shirt used by River Plate). The colours were chosen as a combination of the two older clubs in Avellaneda – Racing (light blue) and Independiente (red).
    `
  },
  {
    id: 11,
    clubName: "Barracas Central",
    badgeImageUrl: "./img/Barracas_Central_logo.svg.png",
    coordinates: [-34.6475, -58.3969],
    formedIn: "1904",
    stadiumName: "Estadio Claudio Chiqui Tapia",
    stadiumCapacity: "4400",
    location: "Buenos Aires",
    history: 
    `
    Felipe Cámpora, a truck driver, founded Club Atlético Barracas Central on 5 April 1904 under the name "Barracas Central del Sud". Cámpora carried out the project and became the first president of the entity. 
    During the early years of the club's foundation, the founders would each contribute 75¢ cents until 1906 where a monthly fee was paid. In 1911 Barracas joined the Argentine Football Association under the name "Villa Soldati" and began participating in the Argentine football intermediate division.
    `
  },
  {
    id: 12,
    clubName: "Club Atlético Huracán",
    badgeImageUrl: "./img/Club_huracan_logo.png",
    coordinates: [-34.6429, -58.3969],
    formedIn: "1908",
    stadiumName: "Estadio Tomás Adolfo Ducó",
    stadiumCapacity: "48,314",
    location: "Buenos Aires",
    history: 
    `
    On 25 May 1903, a group of boys from Nueva Pompeya, Buenos Aires, founded a football club under the name Los Chiquitos de Pompeya. In 1907 the name was changed to Verde esperanza y no pierde. 
    On 1 November 1908, a meeting was organised, and therefore the club was named "Club Atlético Huracán", according to club's certificates, signed by José Laguna as the first president of the institution. 
    In that meeting the white color with a balloon emblem on the chest, was also established as club's jersey.[1] This was established as the official foundation of Huracán. 
    Likewise, the balloon emblem was a homage to Argentine aviation-pioneer Jorge Newbery's, which had been brought from France and first piloted by Newbery in 1909. The club asked Newbery for permission to use the balloon, 
    which Newbery replied saying "I gave my most complete approval to the request, hoping that the team will honor the balloon that crossed three countries (Argentina, Uruguay and Brazil) in a unique trip". 
    When Huracán reached the first division, the managers sent a letter to Jorge Newbery that said: "Huracán has kept its promise, promoting three divisions, as your balloon crossed three republiques before, so your wish was accomplished". 
    In 1910, Jorge Newbery was named "protector member" of the club. That same year Huracán played in the Liga 43, where 43 clubs from second and fourth divisions took part of the championship. Huracán played its first matches in a field located in Cachi and Traful streets. 
    It was Jorge Newbery who got the lands on Arena street. Newbery also negotiated the affiliation of the club to Argentine Football Association. In 1912 Huracán debuted in the third division, which only allowed under-18 players to participate.
    `
  },
  {
    id: 13,
    clubName: "Defensa y Justicia",
    badgeImageUrl: "./img/1920px-Escudo_del_Club_Social_y_Deportivo_Defensa_y_Justicia.svg.png",
    coordinates: [-34.8215, -58.2858],
    formedIn: "1935",
    stadiumName: "Estadio Norberto 'Tito' Tomaghello",
    stadiumCapacity: "10,500",
    location: "Florencio Varela, Buenos Aires",
    history: 
    `
    The institution was founded on 20 March 1935 by a group of friends who wanted to form a local team. There are no sources explaining how the name was given to the club. 
    Presided by Norberto Tomaghello, Defensa y Justicia affiliated to Argentine Football Association, built its stadium, which was opened in occasion of a friendly match against Boca Juniors reserve team in December 1977.
    The club's original colors were blue with white collars and cuffs, which were changed to yellow with green details. These were the colors of the bus line "El Halcón", a company that belonged to the club president at the time. 
    This company used its buses to bring the fans to away games, and thus received the nickname "Los Halcones de Varela". Even though the club was founded as early as 1935, Defensa y Justicia did not play in official tournaments until 1978, when the team debuted in Primera D, defeating Cañuelas 2–1.
    `
  },
  {
    id: 14,
    clubName: "Club Atlético Platense",
    badgeImageUrl: "./img/Escudo_del_Club_Altético_Platense.svg.png",
    coordinates: [-34.5402, -58.4816],
    formedIn: "1905",
    stadiumName: "Estadio Ciudad de Vicente López    ",
    stadiumCapacity: "31,000",
    location: "Florida, Buenos Aires",
    history: 
    `
    Founded on 25 May 1905, Platense played in the second division from 1956 to 1964, and from 1972 to 1976, when the team finally won its first title, the Primera B championship that allowed Platense to play in the Primera División. 
    The club achieved cult status in the late 1970s as they repeatedly staved off relegation through a series of "last-day miracles" (relegating other teams as Temperley after defeating them in decisive matches played to keep a place in the first division. 
    Platense survived at the top level of Argentine football until finally succumbing to relegation in 1999.
    `
  },
  {
    id: 15,
    clubName: "Club Atlético Lanús",
    badgeImageUrl: "./img/Club_lanus_logo.svg.png",
    coordinates: [-34.717667, -58.383806],
    formedIn: "1915",
    stadiumName: "Estadio Ciudad de Lanús Néstor Díaz Pérez",
    stadiumCapacity: "47,027",
    location: "Lanús, Buenos Aires",
    history: 
    `
    In 1854 Anacarsis Lanús arrived from France and acquired the lands where he would later establish the city of Lanús, one of the biggest suburbs of Greater Buenos Aires. Two institutions were named "Lanús" by that time. 
    One of them was Lanús Athletic Club, which took part of the 1897 Argentine Primera División championship although the club then abandoned the tournament. 
    The other club was Lanús United (predecessor of current Club Atlético Lanús) which participated in the Copa de Competencia, organised by dissident Federación Argentina de Football in 1913 and 1914.On 3 January 1915, 
    a new club was established from the merging of two institutions, Lanús United (that was in a desperate financial situation) and Club El Progreso. Miguel Usaray was designed as president, the first in the history of the club. 
    In an assemble held on 27 January 1915, the name "Club Atlético Lanús" was officially established.
    `
  },
  {
    id: 16,
    clubName: "Estudiantes de La Plata",
    badgeImageUrl: "./img/1024px-Escudo_de_Estudiantes_de_La_Plata.svg.png",
    coordinates: [-34.9118, -57.9390],
    formedIn: "1905",
    stadiumName: "Estadio Jorge Luis Hirschi    ",
    stadiumCapacity: "32,230",
    location: "La Plata",
    history: 
    `
    In 1905, a group of football players and fans in the city of La Plata decided to break away from Gimnasia y Esgrima, the major club in the city, since Gimnasia's management neglected football after the closure of their field on 13th and 71st streets.
    Thus, on August 4, 1905, in the shoestore "New York" on 7th Street, between 57 and 58 of the city of La Plata, the club was founded under the name "Club Atlético Estudiantes". 
    Its first president, Miguel Gutiérrez, was elected on the very same night, when the club charter was drafted by card-carrying member #1, Alfredo Lartigue. 
    Since its inception, the organization primarily was dedicated to football, but over the years the club expanded and incorporated basketball, handball, field hockey, tennis, swimming and golf, among others.In those days, teams like Lomas A.C., Quilmes, Belgrano A.C., Estudiantil Porteño, San Isidro and Argentino de Quilmes, 
    among others, faced each other in successive tournaments organized by the Argentine Football Association with Alumni (graduates of the Buenos Aires English High School) being one of the most successful.
    On 28 February 1906 Estudiantes adopted a jersey design of striped red and white, in honor of Alumni, that had won ten championships between 1900 and 1911. However, during the early years, Estudiantes had to use a red shirt with a white stripe in the chest, because league authorities decided the uniform was too similar to Alumni's.
    `
  },
  {
    id: 17,
    clubName: "Club de Gimnasia y Esgrima La Plata",
    badgeImageUrl: "./img/Gimnasia_Esgrima_LP_logo.svg.png",
    coordinates: [-34.9110, -57.9324],
    formedIn: "1887",
    stadiumName: "Estadio Juan Carmelo Zerillo",
    stadiumCapacity: "24,500",
    location: "La Plata",
    history: 
    `
    The "Club de Gimnasia y Esgrima La Plata" was founded on 3 June 1887 as a civil association, and thus is the oldest surviving football club still participating in the Argentine league. The club also claims to be the oldest football club in the Americas, 
    despite other football clubs, such as Peruvian Lima Cricket F.C., having older foundation dates. Its foundation came barely five years after the creation of the City of La Plata in 1882.
    The first sports offered to its members were, as its Spanish name indicates, gymnastics and fencing. Clubs supporting these sports were common among the upper classes at the end of the 19th century (cf. the prior foundation of Gimnasia y Esgrima de Buenos Aires in 1880). 
    Later on, other disciplines were added, including track and field, football, basketball and rugby. The institution changed name a few times: from April to December 1897 it was called a "Club de Esgrima" (in English, "Fencing Club") because fencing was the only activity practised at that moment. 
    On 17 December 1897 it returned to its original name: "Club de Gimnasia y Esgrima" ("Gymnastics and Fencing Club"). From July 1952 to 30 September 1955, the club was named "Club de Gimnasia y Esgrima de Eva Perón" ("Gymnastics and Fencing Club of Eva Perón"), 
    because the city of La Plata itself had been renamed "Eva Perón" in 1952, after Eva Perón's death. The city returned to its previous name during the government of the "Liberating Revolution", and so did the club. However, 
    it remained unduly identified legally as "Club de Gimnasia y Esgrima de La Plata" ("Gymnastics and Fencing Club of La Plata"), a mistake that was corrected on 7 August 1964 after the new statute was approved.
    `
  },
  {
    id: 18,
    clubName: "Club Atlético Aldosivi",
    badgeImageUrl: "./img/Aldosivi_logo.svg.png",
    coordinates: [-38.0180, -57.5823],
    formedIn: "1913",
    stadiumName: "Estadio José María Minella",
    stadiumCapacity: "35,354",
    location: "Mar del Plata",
    history: 
    `
    The club was established on was founded on March 29, 1913, when a group of employees of the company that was building the port of Mar del Plata by then, met at El Recreo coffee house to establish a club where they could play the sport they loved.
    The club's name comes from the first two letters of the last name of engineers and owners of the company commissioned to build the port: Allard, Doulfus, Sillard, and Wiriott (the "w" was changed to a "v" because there was no "W" available to telegraph the official announcement).
    The first colors were taken from the French flag (blue, white and red), worn by the team during its first years of existence. Some time later, a local store donated the green and yellow jerseys in vertical stripes to the club. It became Aldosivi definitive colors, worn to present days.
    `
  },
  {
    id: 19,
    clubName: "Atlético Tucumán",
    badgeImageUrl: "./img/Logo_del_Club_Atlético_Tucumán_-_2017.svg.png",
    coordinates: [-26.8126, -65.1998],
    formedIn: "1902",
    stadiumName: "Estadio Monumental José Fierro",
    stadiumCapacity: "35,200",
    location: "San Miguel de Tucumán",
    history: 
    `
    The club was founded in 1902, which makes Atlético the oldest football club from the province of Tucumán. 
    Atlético has played nine seasons in the Primera Division: eight seasons between 1973 and 1981, and a single season in 1984. The team's best ever performance in Primera División was in 1979, when they reached the semi-finals of the Torneo Nacional.
    `
  },
  {
    id: 20,
    clubName: "Central Córdoba de Santiago del Estero",
    badgeImageUrl: "./img/Escudo_del_Club_Central_Córdoba_de_Santiago_del_Estero.svg.png",
    coordinates: [-27.793833, -64.264222],
    formedIn: "1919",
    stadiumName: "Estadio Alfredo Terrera",
    stadiumCapacity: "15,000",
    location: "Santiago del Estero",
    history: 
    `
    The club was founded by a group of railway workers and named after the Córdoba Central Railway in a similar manner to the other Central Córdoba club based in Rosario.
    `
  },
  {
    id: 21,
    clubName: "Club Atlético Colón",
    badgeImageUrl: "./img/Escudo_Colon_Con_Estrella.png",
    coordinates: [-31.6626, -60.7254],
    formedIn: "1905",
    stadiumName: "Estadio Brigadier General Estanislao López",
    stadiumCapacity: "40,000",
    location: "Santa Fe",
    history:
    `
    The club was founded on 5 May 1905, as "Colón Foot-ball Club" by a group of friends that were enthusiastic about football. It was named after Cristóbal Colón (Christopher Columbus), whose biography was being studied by one of the boys at the time
    The stadium is nicknamed El Cementerio de los Elefantes (Elephant Graveyard).
    `
  },
  {
    id: 22,
    clubName: "Godoy Cruz Antonio Tomba",
    badgeImageUrl: "./img/GCAT.png",
    coordinates: [-32.8897, -68.8801],
    formedIn: "1921",
    stadiumName: "Estadio Feliciano Gambarte",
    stadiumCapacity: "15,000",
    location: "Godoy Cruz, Mendoza",
    history: 
    `
    Godoy Cruz was born as an institution in 1921. It all started when a group of friends, gathered in the "Victoria Bar" (located opposite the departmental square at that time), decided to found a club, taking advantage of the boom at the time . 
    Thus was born on 1 June 1921, the Club Sportivo Godoy Cruz with the novice presidency of Don Romero Garay. The club was officially founded on 21 June 1921 under the name "Sportivo Godoy Cruz", and changed to its current name on 25 April 1930 after the fusion with "Deportivo Bodega Antonio Tomba". 
    In 1959, Godoy Cruz' stadium, the [Estadio Feliciano Gambarte], was constructed. The stadium is nicknamed La Bodega (Spanish for "wine cellar").
    `
  },
  {
    id: 23,
    clubName: "Newell's Old Boys",
    badgeImageUrl: "./img/1920px-Escudo_del_Club_Atlético_Newell's_Old_Boys_de_Rosario.svg.png",
    coordinates: [-32.9560, -60.6616],
    formedIn: "1903",
    stadiumName: "Estadio Marcelo Bielsa",
    stadiumCapacity: "42,000",
    location: "Rosario",
    history: 
    `
    Club Atlético Newell's Old Boys was established on 3 November 1903. Claudio Newell was one of the founding members. Newell called teachers, pupils and alumni of the school his father had established to sign the act of foundation of the club. 
    The name chosen paid tribute to Isaac Newell's life. The first president was Víctor Heitz. The name "old boys" refers to former pupils of a school. In fact, the players of the first football team were graduates of the school Isaac Newell had established, the Colegio Comercial Anglicano Argentino. 
    The colours of the club were taken from the Colegio Comercial Anglicano Argentino emblem (designed by Isaac Newell himself) that were red and black inspired in the colours of the English and German flags respectively. 
    Newell's Old Boys is often referred to as "leprosos" ("lepers"). The club got its nickname, the lepers, after playing in a charity match for a leprosy clinic in the 1920s.[5]
    `
  },
  {
    id: 24,
    clubName: "Club Atlético Patronato",
    badgeImageUrl: "./img/C.A._Patronato_ESCUDO_OFICIAL.svg.png",
    coordinates: [-31.7430, -60.5080],
    formedIn: "1914",
    stadiumName: "Estadio Presbítero Bartolomé Grella",
    stadiumCapacity: "22,000",
    location: "Paraná",
    history: 
    `
    The Club Atlético Patronato de la Juventud Católica was founded on February 1, 1914 by Father Bartolomé Grella,6 who considered it an effective tool to bring the children of the neighborhood closer to catechism. The club's first field was located on Andrés Pazos street, in what is now the Círculo Católico de Obreros. 
    In 1921, Patronato acquired the land located on Andrés Pazos and Misiones streets. During that decade Patronato stands out in Paraná soccer, where the undefeated campaigns of 1921, 1922, 1923, 1924 and 1927 can be highlighted.

    `
  },
  {
    id: 25,
    clubName: "Rosario Central",
    badgeImageUrl: "./img/Rosario_Central_logo.svg.png",
    coordinates: [-32.9140, -60.6742],
    formedIn: "1889",
    stadiumName: "Estadio Gigante de Arroyito",
    stadiumCapacity: "41,654",
    location: "Rosario",
    history: 
    `
    By the end of the 1880s, a group of workers of British–owned company Central Argentine Railway used to play a kind of football game in fields located near Alberdi Avenue in Rosario. In the Christmas eve of 1889 they met at a bar with the purpose of establishing a club. 
    British English citizen Thomas Mutton suggested the name "Central Argentine Railway Athletic Club", which was approved. British Scottish Colin Calder was chosen as first president of the new club. At the beginning, only CAR employees were admitted as members. 
    The first field was located on a railway's land while a disused wagon served as club's headquarters. The first recorded game was played in 1890 when CARAC played a friendly match v the crew of a British ship's crew, which ended 1–1. A second match between both teams finished with CARAC winning 2–1.
    `
  },
  {
    id: 26,
    clubName: "Club Atlético Sarmiento",
    badgeImageUrl: "./img/Escudo_del_Club_Atlético_Sarmiento_de_Junín.svg.png",
    coordinates: [-34.584757, -60.929409],
    formedIn: "1911",
    stadiumName: "Estadio Eva Perón",
    stadiumCapacity: "22,000",
    location: "Junín",
    history: 
    `
    The club arose from the idea of ​​a group of enthusiasts who founded the Sarmiento Football Club. Just 22 years later, on January 27, 1933, the Assembly approved the change of name and the name of Sarmiento Football Club was replaced by the one that would last over time: 
    Club Atlético Sarmiento. Before entering professionalism, he had a very good participation in amateur football. In 1917 the first official league championship was organized, the first champion being precisely Club Atlético Sarmiento.
    `
  },
  {
    id: 27,
    clubName: "Talleres de Córdoba",
    badgeImageUrl: "./img/Escudo_Talleres_2015.svg.png",
    coordinates: [-31.3689, -64.2461],
    formedIn: "1913",
    stadiumName: "Estadio Mario Alberto Kempes",
    stadiumCapacity: "57,000",
    location: "Córdoba",
    history: 
    `
    The club was founded in 1913 as "Atlético Talleres Central Córdoba" by workers of the Córdoba Central Railway, with support from the company. Apart from Atlético Talleres, one of the clubs affiliated to "Federación Cordobesa de Fútbol" (Córdoba Football Federation) was Olimpo, formed by young players participating in second and third divisions.
    After Olimpo beat Atlético Talleres in a friendly match, the club executives encouraged the merger of both clubs with the aim of adding Olimpo players to their team. In 1914, the merger was fulfilled keeping the name "Talleres Central Córdoba". In 1914 Talleres joined the Córdoba local league.Under this name, Talleres Central Córdoba won the 1915 and 1916 championships. The following year the club was forced to change its name after some incidents in a match that caused player Horacio Salvatelli to be arrested. When some days later Talleres did not allow its players to a local combined, the body expelled the club from the league. Nevertheless, Talleres would rejoined the league in 1918 under the condition to change its name so the club was registered as "Club Atlético Talleres", also winning the championship that same year. Apart from its name, Talleres had to modify the date of foundation (to 12 October 1913) to register as a legal entity.
    `
  },
  {
    id: 28,
    clubName: "Unión de Santa Fe",
    badgeImageUrl: "./img/Escudo_del_Club_Atlético_Unión.svg.png",
    coordinates: [-31.6319, -60.7157],
    formedIn: "1907",
    stadiumName: "Estadio 15 de Abril",
    stadiumCapacity: "28,000",
    location: "Santa Fe",
    history: 
    `
    On April 13, 1907, a group of friends who had left the Santa Fe Football Club were looking for a new club. After concluding that no club would house them all together, on April 15, 1907, a group of 14 friends and associates led by Belisario Osuna who had decided to move away from Santa Fe just two days ago met at the Baragiola family home, located on Catamarca street, between San Martín and San Jerónimo (today Eva Perón 2652). The goal was to create a new institution, based on the bonds of friendship and camaraderie that united that enthusiastic group of youngsters, and thus Club United was born.
    In 1966, the squad was promoted to the Segunda División Argentina for the first time. Unión's supporters are called "unionistas", "tatengues", while the squad is usually nicknamed "El Tate". The colours of the club consist of red and white vertical stripes.
    `
  },
]

export default footballClubs;




// Aleternative Data structure
// const stadiums = [
//   "club1" : {
//     badgeImageUrl: "",
//     coordinates: "",
//     formedIn: "",
//     stadiumName: " ",
//     stadiumCapacity: "",
//     location: "Buenos Aires"
//   }
// ]





