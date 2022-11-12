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
    clubName: "	Club Atlético Boca Juniors",
    badgeImageUrl: "./img/Boca_Juniors_logo18.svg.png",
    coordinates: [-34.6356, -58.3655],
    formedIn: "1905",
    stadiumName: "Estadio La Bombonera",
    stadiumCapacity: "54,000",
    location: "La Boca, Buenos Aires",
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
    location: "Avellaneda, Buenos Aires",
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
    location: "Avellaneda, Buenos Aires",
    history: 
    `
    Independiente was founded on 4 August 1904. A group of employees from a shoes store located in Buenos Aires city founded a football club called Maipú FC. The mostly young employees were only allowed to watch the games; 
    they could not play for the team. As a result, at a meeting in a bar located in front of the club, they chose to form a new club. The name chosen was "Independiente" to mark their independence from Maipú FC.
    Rosendo Degiorgi was appointed interim president. Degiorgi's family offered the use of a small room in their home to serve as the first club headquarters. It was established the Sunday 1 January 1905 as the official foundation date. 
    Arístides Langone was elected first president of the institution, and it was proposed by him to adopt white with details in blue as the club's colors, inspired by team St. Andrew's, the first champions of football in Argentina winners of 1891 season.
    Independiente played the first game on his history on Sunday 15 January 1905, against Atlanta, in the "bohemios" field, losing 1-0. The next game was played on 22 January 1905 against Maipú Banfield F.C., which ended in a 0–0 draw. 
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
    location: "Boedo, Buenos Aires",
    history: 
    `
    The roots of the institution are a team formed by a group of children that played football in the corner of México and Treinta y Tres Orientales streets of Buenos Aires. Due to increasing traffic in the city, playing football in the streets became a risky activity for the boys. 
    Lorenzo Massa, the Catholic priest of the neighbourhood's church, saw how a tram almost knocked down one of the boys while they were playing in the streets. As a way to prevent more accidents, he offered the boys to play in the church's backyard, under the condition they go to mass on Sundays.
    On 1 April 1908, an assembly was held in the Almagro district of Buenos Aires with the purpose of establishing a club. During the meeting, several names were proposed. The first option was "Los Forzosos de Almagro" ("The Strongmen of Almagro", the name used by the boys for their street football squad), which did not sound good to Father Massa (who was present). 
    The other proposal was to name the club "San Lorenzo" as an homage to Massa, but he declined to be so honoured. Nevertheless, the name was finally accepted by the priest, explaining that the name would not honour himself but both Lawrence of Rome ("San Lorenzo" in Spanish) and the Battle of San Lorenzo, one of the most significative combats for the Independence of Argentina. 
    Another founding member, Federico Monti, suggested to add the name of the neighbourhood, Almagro where most of the members lived, which was accepted by the assembly.Due to the team not having its own a stadium, San Lorenzo began to play its home games in a field of the Club Martínez, placed in the nearby town of the same name. The squad played its first match on 26 April 1914. 
    At the end of the season, San Lorenzo had to play a final match against Excursionistas to declare a champion. San Lorenzo won the series (the results were 0-0 and 5-0). This title allowed San Lorenzo to enter the playoffs in for promotion to the Argentine Primera División, which was finally obtained after beating Club Honor y Patria by 3–0. `
  },
  {
    id: 6,
    clubName: "Club Atlético Vélez Sarsfield",
    badgeImageUrl: "./img/1200px-Escudo_del_Club_Atlético_Vélez_Sarsfield.svg.png",
    coordinates: [-34.635375, -58.520711],
    formedIn: "1910",
    stadiumName: "José Amalfitani Stadium",
    stadiumCapacity: "49,540",
    location: "Liniers, Buenos Aires",
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
    location: "La Paternal, Buenos Aires",
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
    location: "Barracas, Buenos Aires",
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
    location: "Parque Patricios, Buenos Aires",
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
  {
    id: 29,
    clubName: "Club Agropecuario Argentino",
    badgeImageUrl: "./img/Agropec_escudo.png",
    coordinates: [-35.629767, -61.376947],
    formedIn: "2011",
    stadiumName: "Ofelia Rosenzuaig",
    stadiumCapacity: "8,000",
    location: "Carlos Casares, Buenos Aires",
    history: 
    `
    Agropecuario was founded by Bernardo Grobocopatel, a local entrepreneur related to soybean cultivation, who is also owner and president of the club.
    `
  },
  {
    id: 30,
    clubName: "All Boys",
    badgeImageUrl: "./img/Escudo_del_Club_Atlético_All_Boys.svg.png",
    coordinates: [-34.6169, -58.49770],
    formedIn: "1913",
    stadiumName: "Estadio Islas Malvinas",
    stadiumCapacity: "12,148",
    location: "Floresta, Buenos Aires",
    history: 
    `
    On 15 March 1913, the club was founded by a group of friends. The name "All Boys" reflected the youthfulness of its founders, and followed the Argentine tradition of naming football clubs in English, such as Newell's Old Boys, Boca Juniors, River Plate and Racing Club had done before.
    `
  },
  {
    id: 31,
    clubName: "Club Almagro",
    badgeImageUrl: "./img/1920px-Escudo_del_Club_Almagro.svg.png",
    coordinates: [-34.614167, -58.535],
    formedIn: "1911",
    stadiumName: "Estadio Almagro",
    stadiumCapacity: "19,000",
    location: "José Ingenieros, Buenos Aires",
    history: 
    `
    Almagro was founded on January 6, 1911, in the Almagro neighbourhood of Buenos Aires. 
    The club still has its sports facilities there for its members, but the football stadium (with a capacity of 19,000) is located in José Ingenieros, in the Tres de Febrero Partido of Greater Buenos Aires.In 1919 there was a new splitting in Argentine football, 
    so both leagues were played at the same time: official Asociación Argentina de Football (with one of Almagro predecessors, Columbian, as one of its teams) and dissident "Asociación Amateurs de Football". During that season, Columbian was going through a severe economic crisis, disputing its last game v. Boca Juniors in the 6th fixture. Some executives of recently promoted Club Almagro, leadered by Miguel de Zárate made Columbial a merger proposal, which was accepted.
    `
  },
  {
    id: 32,
    clubName: "Club Almirante Brown",
    badgeImageUrl: "./img/1280px-Escudo_del_Club_Almirante_Brown.svg.png",
    coordinates: [-34.694981, -58.586814],
    formedIn: "1912",
    stadiumName: "Estadio Fragata Presidente Sarmiento",
    stadiumCapacity: "25,000",
    location: "San Justo, Buenos Aires",
    history: 
    `
    The club was founded on 1 July 1912 as "Club Atlético Almirante Brown". The first uniform kit acquired by the club were the striped black and yellow worn by Uruguayan CURCC (predecessor of current club Peñarol), that were the only available in stores. 
    On 21 March 1915 the club changed its name to "Almirante Brown Athletic Club" and one year later it affiliated to Amateur Football Association where the team took part of Tercera de Ascenso, the last division of Argentine football league system. 
    It only lasted one season so the club would be inactive since 1919.In 1921, four dissident members of neighbor club Huracán de San Justo met with some former members of old club Almirante Brown with the purpose of reestablishing the institution. It was finally set up on 17 January 1922 as "Centro Atlético Almirante Brown", being named Segundo Boragno as president of the club. He managed Almirante Brown until his death in June 1930.
    `
  },
  {
    id: 33,
    clubName: "Club Atlético Alvarado",
    badgeImageUrl: "./img/1920px-Escudo_del_Club_Alvarado_(Mar_del_Plata)_-_BSAS.svg.png",
    coordinates: [-38.017944, -57.583333],
    formedIn: "1928",
    stadiumName: "Estadio José María Minella",
    stadiumCapacity: "35,354",
    location: "Mar del Plata",
    history: 
    `
    It was founded on June 21, 1928 by a group of young men who used to get together at the "Ponte Alvarado" winch and warehouse. The first board of directors was made up of Francisco Coloráu (President), Pedro Blasche (secretary) and Damián Álvarez (treasurer).
    `
  },
  {
    id: 34,
    clubName: "Club Atlético Atlanta",
    badgeImageUrl: "./img/C.a._atlanta.png",
    coordinates: [-34.594972, -58.449261],
    formedIn: "1904",
    stadiumName: "Estadio Don León Kolbovski",
    stadiumCapacity: "14,000",
    location: "Villa Crespo, Buenos Aires",
    history: 
    `
    The club was founded on 12 October 1904 in Buenos Aires, Argentina. One source says that the team got its name from an earthquake that had struck Atlanta, Georgia[2] in the United States at the time the founders got together to inaugurate the club. 
    Another version about its foundation states that the name "Atlanta" was taken from a navy ship that had arrived in the port of Buenos Aires when Manuel Quintana was proclaimed as President of Argentina. Elias Sanz was named as the club's first president.
    The club's colors, yellow and blue, where chosen from the awnings that decorated the neighborhood's stores in those years.[2] Atlanta's first home field was in Juan B. Alberdi y Escalada Avenue of the Villa Luro neighborhood,[3] but the club would move repeatedly. 
    This constant movement is the reason why the club was nicknamed Los Bohemios, the Bohemians, which has remained the nickname for the club and its supporters.
    `
  },
  {
    id: 35,
    clubName: "Atlético de Rafaela",
    badgeImageUrl: "./img/Logotipo_Oficial_y_Escudo_del_Club_Atlético_de_Rafaela.svg.png",
    coordinates: [-31.250833, -61.481389],
    formedIn: "1907",
    stadiumName: "Estadio Nuevo Monumental",
    stadiumCapacity: "20,660",
    location: "Rafaela",
    history: 
    `
    Under the name "Club Atlético Argentino de Rafaela", the club was founded in the city of Rafaela, Santa Fe Province in 1907. In 1915 the name was changed to "Club Atlético de Rafaela". The Monumental de Barrio Alberdi concrete stadium was erected in 1951.
    `
  },
  {
    id: 36,
    clubName: "Club Atlético Belgrano",
    badgeImageUrl: "./img/Escudo_del_Club_Atlético_Belgrano.svg.png",
    coordinates: [-31.4035, -64.206272],
    formedIn: "1905",
    stadiumName: "El Gigante de Alberdi",
    stadiumCapacity: "30,000",
    location: "Cordoba",
    history: 
    `
    Belgrano was founded on 19 March 1905 in Barrio Alberdi. It was named in commemoration of the Argentine historical figure Manuel Belgrano, and its colours were taken from the flag of Argentina, created by Belgrano himself. Arturo Orgaz was named as the first president.
    The club settled on a land given by Ramón Moreno. Belgrano started to play friendly matches against neighboring clubs. One of them was vs. an homonymous club and the winner earned the right to keep the name. 
    As Belgrano de Alberdi won the match 2–1, they could retain their name. In 1913 Belgrano was one of the founding members of "Nueva Federación Cordobesa de Fútbol", predecessor to "Liga Cordobesa". One year later, the team played the first "Clásico cordobés" vs. Talleres, a match held on 17 May and suspended after the players of Belgrano abandoned the field in protest at a goal scored by Talleres forward José Lascano.
    `
  },
  {
    id: 37,
    clubName: "Club Atlético Brown de Adrogué",
    badgeImageUrl: "./img/Escudo_Club_Atlético_Brown_(Adrogué).png",
    coordinates: [-34.8075, -58.380000],
    formedIn: "1945",
    stadiumName: "Estadio Lorenzo Arandilla",
    stadiumCapacity: "4,500",
    location: "Adrogué, Greater Buenos Aires",
    history: 
    `
    The club was formed in 1945 as a multidisciplinary sports club. Brown, which has never played in Primera División, reached its highest league position in the 1999–00 season, finishing in 1st place in Primera B Metropolitana tournament, but could not promote to Primera B Nacional, being defeated in the play-off semi-final.
    `
  },
  {
    id: 38,
    clubName: "Chacarita Juniors",
    badgeImageUrl: "./img/1920px-Escudo_del_Club_Atlético_Chacarita_Juniors.svg.png",
    coordinates: [-34.567389, -58.528167],
    formedIn: "1906",
    stadiumName: "Estadio de Chacarita Juniors",
    stadiumCapacity: "19,000",
    location: "Villa Maipú, Greater Buenos Aires",
    history: 
    `
    The club was founded on 1 May 1906, in an anarchist Library on the boundary between the Villa Crespo and Chacarita neighbourhoods. After a short period of institutional crisis, the club was re-opened in 1919.
    The football squad promoted to Primera División in 1924, and continued playing at the top level after football became professional in 1931.
    In 1940 Chacarita was relegated to the second division, but it lasted only one season. The team then moved to the General San Martín Partido in Greater Buenos Aires, next to the autonomous city of Buenos Aires.
    `
  },
  {
    id: 39,
    clubName: "Chaco For Ever",
    badgeImageUrl: "./img/Chaco_For_Ever-ARG.png",
    coordinates: [-27.4698, -58.967],
    formedIn: "1913",
    stadiumName: "Estadio Juan Alberto García",
    stadiumCapacity: "23,000",
    location: "Resistencia",
    history: 
    `
    Chaco For Ever was founded in 1913. The use of an English phrase was common to clubs in Argentina at the turn of the 20th century but the term ‘Chaco For Ever’ is unique. It is thought that the club founder felt that such a name would guarantee a prosperous future and, in short, make it a club ‘forever’.
    The colours the club chose to wear as their identity represented the local economy at the time: white for cotton and black for coal.
    `
  },
  {
    id: 40,
    clubName: "Defensores de Belgrano",
    badgeImageUrl: "./img/Defensores_belgrano_logo.png",
    coordinates: [-34.5412, -58.4618],
    formedIn: "1906",
    stadiumName: "Estadio Juan Pasquale",
    stadiumCapacity: "9,000",
    location: "Núñez, Buenos Aires",
    history: 
    `
    Defensores de Belgrano was founded on 25 May 1906 by a group of young people who wanted to participate in the football leagues of Buenos Aires. In 1914, Defensores de Belgrano won the División Intermedia champion, therefore promoted to Primera División, the top division. The squad debuted in Primera in 1915, being relegated to the second division at the end of that season.
    `
  },
  {
    id: 41,
    clubName: "Deportivo Madryn",
    badgeImageUrl: "./img/1920px-Escudo_del_Club_Social_y_Deportivo_Madryn.svg.png",
    coordinates: [-42.747003, -65.042859],
    formedIn: "1924",
    stadiumName: "Estadio Abel Sastre",
    stadiumCapacity: "8000",
    location: "Puerto Madryn",
    history: 
    `
    The origin of Deportivo Madryn dates back to 1916, when a group of young enthusiasts founded the Madryn Football Club. The denomination honored the name of the town and in turn the English roots of the owners of the railway, the main economic support of the commune. The colors chosen for the badge were red and black. 
    The old settlers say that the Madryn Football Club was the first team in the area to play an international match, facing the crew of the ship El Kaiser,2 a native of Germany, and whose remains give the Kaiser Beach its name, although it is It is likely that it is nothing more than a legend, since said boat could have arrived at the town several years before and already without a German crew. Madryn FC worked for 8 years and planted the roots of the current Club Deportivo Madryn. On May 7, 1924,34 with the aim of reorganizing the club, the members met in an assembly. After several minutes of debate, it was decided to refound the entity and start a new process. Act number 1 was signed and the new entity was thus founded. During the assembly, Rafael Cosentino was elected the first president with a total of 16 votes. In this same assembly the name of Club Atlético Madryn replaced that of Madryn Football Club and some time later it took its current name.

    `
  },
  {
    id: 42,
    clubName: "Deportivo Maipú",
    badgeImageUrl: "./img/Escudo_del_Club_Deportivo_Maipu.svg.png",
    coordinates: [-32.9837, -68.792778],
    formedIn: "1927",
    stadiumName: "Estadio Omar Higinio Sperdutti",
    stadiumCapacity: "8000",
    location: "Maipú, Mendoza",
    history: 
    `
    It was officially founded on December 16, 1927, although it had been in operation for a year. Previously there were two clubs in the city: Sportivo Maipú (founded in 1912) and Pedal Club Maipú (more dedicated to cycling), which were the predecessors. 
    `
  },
  {
    id: 43,
    clubName: "Deportivo Morón",
    badgeImageUrl: "./img/Dep_moron_logo16.png",
    coordinates: [-34.662222, -58.631667],
    formedIn: "1947",
    stadiumName: "Estadio Nuevo Francisco",
    stadiumCapacity: "32,000",
    location: "Morón, Buenos Aires",
    history: 
    `
    The club was founded on June 20, 1947, under the name "Club Sportivo Morón" ("Deportivo Manuel Belgrano" had been one of the names initially proposed) after a meeting held at "Bar de Volpi". One of its founding members, Filiberto Ferrante, was elected as the first president of the institution. Four years later the club joined the AFA registering to play in Primera D Metropolitana, the last division of the Argentine football league system
    `
  },
  {
    id: 44,
    clubName: "Deportivo Riestra",
    badgeImageUrl: "./img/Escudo_del_Club_Deportivo_Riestra.svg.png",
    coordinates: [-34.653333, -58.443611],
    formedIn: "1931",
    stadiumName: "Estadio Guillermo Laza",
    stadiumCapacity: "3,000",
    location: "Buenos Aires",
    history: 
    `
    The origins of Deportivo Riestra trace back to 1929, when a group of youths from Nueva Pompeya formed a football team to compete in local tournaments. They became known as "the Riestra ones", due to the name of the avenue where they used to gather, right next to a milk store. On February 22, 1931 they formally founded the club, and they rented a place as headquarters later that year. 
    `
  },
  {
    id: 45,
    clubName: "Estudiantes de Buenos Aires",
    badgeImageUrl: "./img/Estudiantes_BA_escudo.png",
    coordinates: [-34.606056, -58.55675],
    formedIn: "1898",
    stadiumName: "16.740",
    stadiumCapacity: "16.740",
    location: "Caseros, Buenos Aires",
    history: 
    `
    By 1897 football in Argentina was practised almost exclusively by English people that lived in Buenos Aires. Three of those immigrants, called Hansen, McHardy and Fitz Simons, encouraged a group of Argentine young people to join them in order to form a team. 
    The club was officially founded on August 15, 1898, and the name was taken from the High School they attended: Colegion Nacional Sur.The young native players soon learned from the English men, who taught them the basics of playing football. By 1899 the name had been changed to Estudiantes, which was easier to pronounce by team's followers from the standgrounds. 
    `
  },
  {
    id: 46,
    clubName: "Estudiantes de Río Cuarto",
    badgeImageUrl: "./img/1920px-Escudo_Asociacion_Atlética_Estudiantes_de_Río_Cuarto.svg.png",
    coordinates: [-33.1153, -64.3478],
    formedIn: "",
    stadiumName: "Estadio Ciudad de Río Cuarto Antonio Candini",
    stadiumCapacity: "15,000",
    location: "Río Cuarto",
    history: 
    `
    On July 1, 1912, National College No. 1 was inaugurated in Río Cuarto, in which its students formed the Bernardino Rivadavia Student Center and Library, dedicated to the dissemination of cultural and sports activities. Juan Francisco Remedi was the first President of the Center, and therefore of the Student Athletic Association. The Center was founded on September 21, 1912. 
    `
  },
  {
    id: 47,
    clubName: "Ferro Carril Oeste",
    badgeImageUrl: "./img/Escudo-oficial-fco.png",
    coordinates: [-34.6185, -58.4476],
    formedIn: "1904",
    stadiumName: "Estadio Arquitecto Ricardo Etcheverry",
    stadiumCapacity: "24,442",
    location: "Caballito, Buenos Aires",
    history: 
    `
    Always located in Caballito, the club was founded as "Club Atlético del Ferrocarril Oeste de Buenos Aires" on 28 July 1904, by a hundred employees of the Buenos Aires Western Railway (then Ferrocarril Domingo Faustino Sarmiento). 
    The club was approved and supported by railway managers, so Ferro soon incorporated lands to build its headquarters and sports installations. In 1905 the club built its own stadium, Estadio Arquitecto Ricardo Etcheverry, financed by its main founding member, David Simpson. Ferro affiliated to the Argentine Football Association to register a team to play in the third division. 
    `
  },
  {
    id: 48,
    clubName: "CSD Flandria",
    badgeImageUrl: "./img/Flandria_logo.png",
    coordinates: [-34.587275, -59.182136],
    formedIn: "1941",
    stadiumName: "Estadio Carlos V",
    stadiumCapacity: "5,000",
    location: "Jáuregui, Buenos Aires",
    history: 
    `
    The club originated at the factory Algodonera Flandria (Cotton Flanders), located in Jauregui. In his factory, Don Julio Steverlynck created a lot of job opportunities for the European immigrants in the area. Those immigrants were the people that started to play football to spend their free time. They formed a team and played their first match against Jauregui Juniors. 
    `
  },
  {
    id: 49,
    clubName: "Gimnasia y Esgrima de Jujuy",
    badgeImageUrl: "./img/Escudo_del_Club_Gimnasia_y_Esgrima_Jujuy.svg.png",
    coordinates: [-24.198611, -65.290833],
    formedIn: "1931",
    stadiumName: "Estadio 23 de Agosto",
    stadiumCapacity: "23,000",
    location: "San Salvador de Jujuy",
    history: 
    `
    The club was founded on 18 March 1931. The first president of Gimnasia and one of the major drivers for the club's foundation was Thomas Yufra, who was president on three occasions. The current president is Fernando Yécora, who succeeded Horacio Raúl Ulloa after 20 years as head of the institution. 
    `
  },
  {
    id: 50,
    clubName: "Gimnasia y Esgrima de Mendoza",
    badgeImageUrl: "./img/Escudo_Club_Gimnasia_y_Esgrima_Mendoza.svg.png",
    coordinates: [-32.88425, -68.863556],
    formedIn: "1908",
    stadiumName: "Estadio Víctor Antonio Legrotaglie",
    stadiumCapacity: "11,500",
    location: "Mendoza",
    history: 
    `
    The club was founded in 1890 as "Club de Esgrima" (Fencing Club) with Dr. Carlos Ponce as its first president. In 1893 a group of members came up with new ideas, proposing to encourage the practice of other sports, mainly basque pelota. Therefore, the club was renamed "Club de Pelota". In 1894 the club leaders acquired a land in Mendoza.
    `
  },
  {
    id: 51,
    clubName: "Club Atlético Güemes",
    badgeImageUrl: "./img/CA_Guemes_logo.png",
    coordinates: [-27.793333, -64.276667],
    formedIn: "1932",
    stadiumName: "Estadio Arturo Miranda",
    stadiumCapacity: "2,000",
    location: "Santiago del Estero",
    history: 
    `
    Founded on 12 October 1932 as an honour to military leader Martín Miguel de Güemes,[1] the club mainly played in regional competitions. In 1986, after winning the previous year's Torneo Regional, they featured in the 1986 Liguilla Pre-Libertadores, being knocked out by Ferro Carril Oeste in the qualifying rounds.
    `
  },
  {
    id: 52,
    clubName: "Guillermo Brown de Puerto Madryn",
    badgeImageUrl: "./img/1280px-Escudo_de_Guillermo_Brown.svg.png",
    coordinates: [-42.778022, -65.038394],
    formedIn: "1945",
    stadiumName: "Estadio Raúl Conti",
    stadiumCapacity: "12,500",
    location: "Puerto Madryn",
    history: 
    `
    The club was born in 1945, when on January 14, José Ramón Furnillo led a group of people who wanted to create a sports club in the city of Puerto Madryn. As José Furnillo was deputy prefect of the Argentine Navy and a great admirer of Admiral Guillermo Brown, he decided to take his name for the new institution.
    `
  },
  {
    id: 53,
    clubName: "Independiente Rivadavia",
    badgeImageUrl: "./img/Escudo_del_Club_Independiente_Rivadavia.svg.png",
    coordinates: [-32.890786, -68.862777],
    formedIn: "1913",
    stadiumName: "Estadio Bautista Gargantini",
    stadiumCapacity: "24,000",
    location: "Mendoza",
    history: 
    `
    The predecessor institutions had their origin in 1902 as "Club Belgrano" and then in 1908 as "Club Atlético Belgrano". Due to the fact that said club was constantly sanctioned by the Mendoza Football Federation, which was in force at that time, it was decided on January 24, 1913 to officially found a new entity with the name of "Club Atlético Independiente", 
    a date that It is considered today, but it is on January 4, 1919, when it merged with the "Club Sportivo Rivadavia", that the institution bears the name with which it is currently known, that is, as "Club Sportivo Independiente Rivadavia"
    `
  },
  {
    id: 54,
    clubName: "Instituto Atlético Central Córdoba",
    badgeImageUrl: "./img/Instituto_Atlético_Central_Córdoba_logo.svg.png",
    coordinates: [-31.3837, -64.1803],
    formedIn: "1918",
    stadiumName: "Estadio Presidente Perón",
    stadiumCapacity: "26,535",
    location: "Córdoba",
    history: 
    `
    As many other football clubs in Argentina, Instituto was founded by railway workers. The club was initially established in 1918 as Instituto Ferrocarril Central Córdoba. With the re-organization of the administration of the club 6 years later, due to the number of members in the Alta Córdoba neighbourhood, the name was changed to the current Instituto Atlético Central Córdoba.
    `
  },
  {
    id: 55,
    clubName: "Club Atlético Mitre de Santiago del Estero",
    badgeImageUrl: "./img/Mitre_escudo.png",
    coordinates: [-27.79287, -64.25004],
    formedIn: "1907",
    stadiumName: "Estadio Doctores José y Antonio Castiglione",
    stadiumCapacity: "10,500",
    location: "Santiago del Estero",
    history: 
    `
    The club was founded on April 2, 1907 by Francisco Igounet, his daughter and his father-in-law. After a friendly football match between "Mendoza" and "Mitre" with the second team being the winner, the club was established naming it "Club Atlético Mitre" honoring former president of Argentina who had died a few years before. 
    The institution choose the yellow and black colors inspired on Uruguayan club CURCC (today Peñarol)
    `
  },
  {
    id: 56,
    clubName: "Club Atlético Nueva Chicago",
    badgeImageUrl: "./img/Escudo_del_Club_Atlético_Nueva_Chicago.svg.png",
    coordinates: [-34.667919, -58.4996],
    formedIn: "1911",
    stadiumName: "Estadio Nueva Chicago",
    stadiumCapacity: "28,500",
    location: "Mataderos, Buenos Aires",
    history: 
    `
    On 1 July 1911, a group of young people aged 15 to 30 met in a public park (more specifically on the wooden bridge located in the corner of Tellier and Francisco Bilbao streets) to form a football team. The name chosen was "Los Unidos de Nueva Chicago",
    naming Pedro San Martín as president, along with Felipe Maglio as vice-president. The club's activities started on an empty lot located behind a slaughterhouse.There were many proposals to define the team colours. Some wished to adopt the colours from Alumni, red and white; others suggested to use Racing Club colors, light blue and white. During their discussion, a truck loaded with bundles which had green and black colours went pass the Campana (today Crovara) Avenue. Those colours were immediately adopted as club colours.
    `
  },
  {
    id: 57,
    clubName: "Quilmes Atlético Club",
    badgeImageUrl: "./img/1920px-Escudo_de_Quilmes_Atlético_Club.svg.png",
    coordinates: [-34.741778, -58.251889],
    formedIn: "1887",
    stadiumName: "Estadio Centenario Ciudad de Quilmes",
    stadiumCapacity: "30,200",
    location: "Quilmes, Buenos Aires",
    history: 
    `
    The origins of the club can be found at the "Quilmes and Polo Club", an institution founded by British immigrants about 1880. In 1887 the club changed its name to "Quilmes Rovers Athletic Club" with a football team formed entirely by British people. That team took part in the second edition of Argentine Primera División championship held in 1893.
    On 5 November 1897, promoting an initiative by Presbyterian preacher Reverend Joseph T Stevenson, the Quilmes Cricket Club was founded. The club changed its name to Quilmes Athletic Club in 1901, the year that Quilmes registered to Argentine Association Football League.
    By the time that Quilmes was founded, the only club existing in Quilmes was the Quilmes Lawn Tennis Club. During its first years, Quilmes did not admitted non-British members. 
    The club represented to the huge British community that worked at Buenos Aires Great Southern Railway. At the beginning of its existence, the main sport practised at Quilmes was cricket, and club's colours were crimson and blue.
    In March 1898 Quilmes Cricket Club added football as sport. In 1901 the club also changed its colours, adopting the England national football team's, white shirt with blue collar and shorts. 
    By the first years of 20th century the club began to admit Argentine members, following the example of the other institution of the city, Argentino de Quilmes, which had been founded as a reaction to British rules for memberships.
    `
  },
  {
    id: 58,
    clubName: "Sacachispas Fútbol Club",
    badgeImageUrl: "./img/Logo_del_Sacachispas_Fútbol_Club.svg.png",
    coordinates: [-34.66460535, -58.451832636632],
    formedIn: "1948",
    stadiumName: "Estadio Roberto Larrosa",
    stadiumCapacity: "4,000",
    location: "Villa Soldati, Buenos Aires",
    history: 
    `
    In 1948, Roberto González and Aldo Vázquez, neighbors of Nueva Pompeya at the south of Buenos Aires, decided to form a football team to play the Evita championships. 
    Vázquez played at River Plate lower divisions and contacted former player Carlos Peucelle (who was the coordinator by then) with the objective of River Plate allowed some of its players to play for the recently formed team. 
    The name "Sacachispas" was taken from the fictitious squad that starred in Pelota de Trapo, a movie that had been a huge success in Argentina. 
    Sacachispas reached the Evita championship final at Estadio Monumental, with president Juan Perón and his wife Eva Duarte (who had given her name to the tournament) attending the match. After Perón noted that Sacachispas did not have a field, he made the arrangements to get a land where the club could build a stadium.
    `
  },
  {
    id: 59,
    clubName: "San Martín de San Juan",
    badgeImageUrl: "./img/Atlético_San_Martín.png",
    coordinates: [-31.519847, -68.530289],
    formedIn: "1907",
    stadiumName: "Estadio Ingeniero Hilario Sánchez",
    stadiumCapacity: "17,000",
    location: "San Juan",
    history: 
    `
    Gabriel Zandon Founded on September 27, 1907, on the corner of May 25 and Gral. Acha, in the hairdresser of Don Octavio Alcota Siglo XX, by a group of young members of the Atlético de la Juventud club (today Atlético de la Youth Alliance). 
    A group of young enthusiasts and soccer lovers met with one goal: to create Club Atlético San Martín. Made up of the Ormeño Brothers, Lubergildo Coll and Matias Cuello, among others, who belonged to the group of residents north of 25 de Mayo Street (in a burlesque tone nicknamed "los negritos"). 
    After a discussion on a 15th birthday with those who lived in the central area of ​​the city, who called themselves ¨Los Pitucones¨, they made the decision to leave the club and form their own. 
    They baptized the club with the name of San Martín, in honor of one of the most important heroes of South America, and they chose the colors black and green; the first because they were "the little blacks" and the second because it is the color of hope. The club always kept the green and black colors on its shield and shirt. 
    The foundation act was made in the hairdresser of Don Octavio Alcota who was elected as the first honorary president; the first owner of the club was Don Amador Navarro.
    `
  },
  {
    id: 60,
    clubName: "San Martín de Tucumán",
    badgeImageUrl: "./img/San_martin_tucuman.png",
    coordinates: [-26.836281, -65.229606],
    formedIn: "1909",
    stadiumName: "Estadio La Ciudadela",
    stadiumCapacity: "30,250",
    location: "San Miguel de Tucumán",
    history: 
    `
    Club Atlético San Martín was founded by 14 young people from the south of San Miguel de Tucumán, in the most populous area of ​​the city. The founding act was signed on November 2, 1909. Since then it has always been the protagonist of the tournaments of the Tucuman Football Federation (the first champion in 1919) and tournaments organized by AFA.
    `
  },
  {
    id: 61,
    clubName: "Club Atlético San Telmo",
    badgeImageUrl: "./img/Club_santelmo_logo.png",
    coordinates: [-34.6439, -58.3528],
    formedIn: "1904",
    stadiumName: "Estadio Osvaldo Baletto",
    stadiumCapacity: "2,000",
    location: "San Telmo, Buenos Aires",
    history: 
    `
    The club was founded as "San Telmo Football Club" on March 5, 1904,[2] by Francisco Pantarotto who would be also its first president. The first headquarters were located on Paseo Colón Avenue of Buenos Aires. San Telmo had several venues located in Puerto Madero until the club built its first stadium on Juan de Garay street in San Telmo district where the club took its name from. 
    The first jerseys were blue and white. In the first official match of the club, the rain made the colour blue to fade until it covered the white part of the jerseys in a light-blue tone. From then on, the club adopted the blue and light blue as its official colors.
    `
  },
  {
    id: 62,
    clubName: "Club y Biblioteca Ramón Santamarina",
    badgeImageUrl: "./img/Escudo_del_Club_Santa_Marina_de_Tandil.svg.png",
    coordinates: [-37.3335, -59.143333],
    formedIn: "1913",
    stadiumName: "Estadio Municipal General San Martín",
    stadiumCapacity: "8,762",
    location: "Tandil",
    history: 
    `
    The club was born under the name of Club Atlético Independencia at the initiative of a group of young people from the neighborhood called "de la Estación", who decided to organize the practice of soccer under the same jersey.
    The colors were taken in homage to the "Carbon Train", so they decided to adopt those of Peñarol from Uruguay (nicknamed club, precisely, coal): black and yellow with sticks. The shield they adopted after this has the abbreviation "CyBRS" (Ramón Santamarina Club and Library). 
    It is distributed in the five black and yellow stripes that are included within a large "S". To them, the Olympic symbols (the five rings and the torch) are added, exemplifying the sporting spirit of the club that the founding charter declares.
    `
  },
  {
    id: 63,
    clubName: "Club Atlético Temperley",
    badgeImageUrl: "./img/Club-Atlético-Temperley.png",
    coordinates: [-34.782286, -58.399508],
    formedIn: "1912",
    stadiumName: "Estadio Alfredo Beranger",
    stadiumCapacity: "13,000",
    location: "Temperley, Buenos Aires",
    history: 
    `
    The predecessor of Temperley was the Club de Foot-ball Centenario established in 1910 to commemorate the 100th anniversary of the Revolución de Mayo. 
    But the official establishment of the club was on 4 November 1912 during a meeting held at Club Arias. The first field of Centenario was in Villa Turdera, Buenos Aires. The first jersey was red with green collar. 
    In 1917 Temperley affiliated to the Argentine Football Association, the same year that the club decided to adopt the light-blue colors for the jersey, which would be Temperley's distinctive color to date.
    `
  },
  {
    id: 64,
    clubName: "CSyD Tristán Suárez",
    badgeImageUrl: "./img/CSyD_Tristán_Suárez.png",
    coordinates: [-34.890647, -58.563264],
    formedIn: "1929",
    stadiumName: "Estadio 20 de Octubre",
    stadiumCapacity: "15,000",
    location: "Tristán Suárez, Buenos Aires",
    history: 
    `
    The club was founded on 8 August 1929 under the name "Sportivo Tristán Suárez", and began to participate in the football tournaments of Esteban Echeverría and Cañuelas cities from 1931 to 1963, when Tristán Suárez affiliated to Argentine Football Association to participate in the Primera D division.
    `
  },
  {
    id: 65,
    clubName: "Villa Dálmine",
    badgeImageUrl: "./img/Escudo_Villa_Dálmine.png",
    coordinates: [-34.161389, -58.9775],
    formedIn: "1957",
    stadiumName: "Estadio El Coliseo de Mitre y Puccini",
    stadiumCapacity: "12,000",
    location: "Campana",
    history: 
    `
    At the end of the 1950s the "Dálmine SAFTA" factory, sited in the city of Campana, Buenos Aires Province, founded a social club with the purpose to allow its employees to practise sports. The club was named "Villa Dálmine", establishing its first location on Chiclana street of that city. 
    The color adopted for the club was violet, therefore the club and its fans have been familiarly called "El Viola" (an expression derived from the word "violeta" in Spanish) since then.
    `
  },
  {
    id: 66,
    clubName: "Club Atlético y Social Defensores de Belgrano de Villa Ramallo",
    badgeImageUrl: "./img/Defensores_de_Belgrano-ARG.png",
    coordinates: [-33.496103, -60.070010],
    formedIn: "1946",
    stadiumName: "Estadio Salomón Boeseldín",
    stadiumCapacity: "3000",
    location: "Ramallo Partido",
    history: 
    `
    It was founded on 1 April 1946,5 with Miguel Petruzzi as the club's first president. The club's official name comes from a school and a square that were named Belgrano.
    Initially they wore the colours of Vélez Sarsfield, but in 1950, they wore maroon at the suggestion of Pete González in homage to Club Atlético Lanús, and adopted the current crest.
    The team's crest is maroon and white. It has the club's initials at the top in white and an elephant in the centre, signifying "strength and might, according to the club's founders".
    `
  },
  {
    id: 67,
    clubName: "Club Atlético Douglas Haig",
    badgeImageUrl: "./img/Douglas_Haig_de_Pergamino.png",
    coordinates: [-33.871928, -60.561475],
    formedIn: "1918",
    stadiumName: "Estadio Miguel Morales",
    stadiumCapacity: "16,000",
    location: "Pergamino",
    history: 
    `
    In November 1918 a group of British workers on the Argentinian Central Railroad set up a football team to take part in the local soccer championship. 
    This required the consent and support of the Chief of the railway, Mr. Ronald Leslie, who, as a condition, requested that the new club name itself in honour of Sir Douglas Haig, the Commander-in-Chief of the British Armies in Western Europe, who had just led them to victory in World War I. Club Atlético Douglas Haig was thereby founded on 18 November 1918
    `
  },
  {
    id: 68,
    clubName: "Club Atlético Sarmiento de Resistencia",
    badgeImageUrl: "./img/Sarmiento_(Resistencia).png",
    coordinates: [-27.443611, -59.010833],
    formedIn: "1910",
    stadiumName: "Estadio Centenario",
    stadiumCapacity: "25,000",
    location: "Resistencia",
    history: 
    `
    The history of Club Atlético Sarmiento began in 1910, when a group of students and teachers from Escuela Normal Sarmiento (a school in the City of Resistencia, located at the time at the intersection of "Córdoba" and "López y Planes"), they decided to create a sports center that captures the attention of the resistance youth, at the same time as landing football in the incipient city. 
    In the country, the ball had already begun to roll and without going any further, Club Atlético Libertad, which was founded on March 10, 1909, emerged as the first club in the region.
    `
  },
  {
    id: 69,
    clubName: "Club Atlético Racing de Córdoba",
    badgeImageUrl: "./img/Escudo_del_Club_Racing_de_Córdoba.svg.png",
    coordinates: [-31.3895, -64.14326],
    formedIn: "1924",
    stadiumName: "Estadio Miguel Sancho",
    stadiumCapacity: "15,000",
    location: "",
    history: 
    `
    On Sunday, December 14, 1924, Club Atlético Racing de Córdoba was founded in Barrio Inglés (later known as Barrio Pueyrredon). The foundation was carried out in a room at 900 Suipacha Street by a group of young soccer fans.
    The objective of the foundation was to play officially with other teams in the city.
    The first measure taken by the youth group was to create a provisional board of directors, which was headed by Rodolfo Aguirre, considered the club's first president.
    `
  },
  {
    id: 70,
    clubName: "Club Sportivo Belgrano (San Francisco)",
    badgeImageUrl: "./img/Escudo_del_Club_Sportivo_Belgrano_de_San_Francisco.svg.png",
    coordinates: [-31.418705, -62.079312],
    formedIn: "1914",
    stadiumName: "Estadio Oscar C.Boero",
    stadiumCapacity: "9200",
    location: "San Francisco",
    history: 
    `
    On 15 April 1914, a group of young people decided to establish a social club in the city of San Francisco, Córdoba. The name was chosen as a tribute to Manuel Belgrano, the creator of the flag of Argentina.
    `
  },
  {
    id: 71,
    clubName: "Club Atlético Boca Unidos",
    badgeImageUrl: "./img/Escudo_del_Club_Atlético_Boca_Unidos.svg.png",
    coordinates: [-27.493388, -58.781601],
    formedIn: "1927",
    stadiumName: "Estadio Leoncio Benítez",
    stadiumCapacity: "17,500",
    location: "Corrientes",
    history: 
    `
    t was founded on July 27, 1927 by a group of young people from the Camba Cuá neighborhood of Corrientes, with the intention of participating in amateur regional soccer tournaments.
    `
  },
  {
    id: 72,
    clubName: "Club Gimnasia y Esgrima (Concepción del Uruguay)",
    badgeImageUrl: "./img/ESCUDOORIGINALGIMNASIA.png",
    coordinates: [-32.473011, -58.227498],
    formedIn: "1917",
    stadiumName: "Estadio Manuel y Ramón Núñez",
    stadiumCapacity: "9000",
    location: "Concepción del Uruguay",
    history: 
    `
    On February 3, 1917, eight young men agreed to found a new club in Concepción del Uruguay. After the appointments, the list of partners was opened, in which 50 Uruguayans put their signatures. 
    On March 1, the General Assembly and the Approval of Statutes were held. That day, it was decided that the new institution would be called Gimnasia y Esgrima Foot-Ball Club, and that its colors would be light blue and white.
    `
  },
  {
    id: 73,
    clubName: "Club Atlético Paraná",
    badgeImageUrl: "./img/Atletico_parana_logo.png",
    coordinates: [-31.747595, -60.515297],
    formedIn: "1907",
    stadiumName: "Estadio Pedro Mutio",
    stadiumCapacity: "6000",
    location: "Paraná",
    history: 
    `
    Its classic historical rival is Club Atlético Belgrano, since they are the oldest clubs in the city of Paraná, but for several decades it has also had a great rivalry with Club Atlético Patronato de la Juventud Católica, a dispute called Clásico Paranáense, which It is considered a modern classic.
    `
  },
  {
    id: 74,
    clubName: "Club Defensores de Pronunciamiento",
    badgeImageUrl: "./img/Escudo_Defensores_de_Pronunciamiento.png",
    coordinates: [-32.343772, -58.450542],
    formedIn: "1972",
    stadiumName: "Estadio Delio Cardozo",
    stadiumCapacity: "2000",
    location: "Pronunciamiento",
    history: 
    `
    Its foundation was conceived by the union of the clubs Juventud (he wore a blue shirt) and San José (he used a red one), representatives of the Entre Ríos city of Pronunciamiento. 
    The stadium in which they play the matches as a local is called Delio Cardozo in homage to the institution's all-time top scorer.
    `
  },
  {
    id: 75,
    clubName: "Club Deportivo Juventud Unida de Gualeguaychú",
    badgeImageUrl: "./img/Juventud_unida_(G).png",
    coordinates: [-33.007635, -58.528101],
    formedIn: "1907",
    stadiumName: "Estadio De Los Eucaliptos",
    stadiumCapacity: "10,000",
    location: "Gualeguaychú",
    history: 
    `
    It is one of the historic clubs in the province of Entre Ríos and, although the institution stands out for its unique range of disciplines in the city, including basketball, tennis, roller hockey and bowls, its Its main activity is soccer, where it competes in the Federal Amateur Regional Tournament.
    `
  },
  {
    id: 76,
    clubName: "Club Sportivo General San Martín",
    badgeImageUrl: "./img/58993.png",
    coordinates: [-26.174839, -58.182938],
    formedIn: "1941",
    stadiumName: "Estadio 17 De Octubre",
    stadiumCapacity: "3000",
    location: "Formosa",
    history: 
    `
    It was founded on April 8, 1941. Originally, and due to the location of the property where it was founded, the team was called Chacra 25 in honor of the neighborhood in which it was founded. 
    This name was replaced by that of the greatest Argentine hero, on the same date that the centenary of his death was commemorated: August 17, 1950.
    Its first field had a design similar to that of Club Atlético Chacarita Juniors (black sticks, red and white), to later change it for the current jacket that imitates the design of the La Plata Gymnastics and Fencing Club outfit (White with a blue central stripe).
    `
  },
  {
    id: 77,
    clubName: "Club Mutual Crucero del Norte",
    badgeImageUrl: "./img/Escudo_del_Club_Mutual_Crucero_del_Norte.svg.png",
    coordinates: [-27.498611, -55.85222],
    formedIn: "2003",
    stadiumName: "Estadio Comandante Andrés Guacurarí",
    stadiumCapacity: "15,000",
    location: "Garupá",
    history: 
    `
    The Crucero del Norte Club was born as an idea when employees of the Crucero del Norte company and the Koropeski family followed the alternatives of the indoor soccer team that had won numerous local, regional and national tournaments, with outstanding participation in South American tournaments. 
    Given the repercussion that this enthusiastic training was taking, company directors together with a group of collaborators, began to give shape to this idea, that of a Club of its own, where the family of the employees have their space for leisure, recreation and of course play sports. It was then that a piece of land was chosen and the idea of ​​founding a club began to materialize, in the year 2000.
    `
  },
  {
    id: 78,
    clubName: "Centro Juventud Antoniana",
    badgeImageUrl: "./img/Escudo_Oficial_Centro_Juventud_Antoniana.svg.png",
    coordinates: [-24.797736, -65.407453],
    formedIn: "1916",
    stadiumName: "Estadio Padre Ernesto Martearena",
    stadiumCapacity: "20,408",
    location: "Salta",
    history: 
    `
    The missionary activity of the Franciscan Brothers of Propaganda Fide continued with evangelization, as they had done since their arrival in Salta in 1856.
    It was the Franciscans who, in November 1915, encouraged Enrique Gaggini, guardian of the convent of San Francisco, to present a project to Bishop Gregorio Romero: 
    a center for recreation and activities for young people of both sexes, as a complement to the work of evangelization they were doing, but mainly as a more effective way of helping them occupy their time in a correct way for their training and for the good of society.
    Bishop Romero gave his consent on November 29, 1915, and seven days later the Foundation Act of the Antoniana Youth Center officially arrived from Rome, written in Latin and with a mandatory character. All that remained was to bring together all those who felt compelled to found the Center. 
    The day came on the night of January 12, 1916. That meeting was chaired by Engineer José Alfonso Peralta, supported by young athletes, and together with the Franciscans
    `
  },
  {
    id: 79,
    clubName: "Club Atlético Central Norte de Salta",
    badgeImageUrl: "./img/Central_Norte_de_Salta.png",
    coordinates: [-24.7793, -65.42135],
    formedIn: "1921",
    stadiumName: "Estadio Doctor Luis Güemes",
    stadiumCapacity: "6500",
    location: "Salta",
    history: 
    `
    On March 9, 1921; a group of athletes, employees of the Argentine North Central Railway; met at the house of Don Pedro Pastore, to promote the founding of Club Atlético Central Norte.
    Central was an exclusive railway club, and with soccer as one of the most practiced sports. It was one of the founders of the Salteña de Fútbol League, and was runner-up in its first edition.
    `
  },
  {
    id: 80,
    clubName: "Club de Gimnasia y Tiro",
    badgeImageUrl: "./img/Gimnasio_y_tiro_de_salta.png",
    coordinates: [-24.783333, -65.403889],
    formedIn: "1902",
    stadiumName: "Estadio El Gigante del Norte",
    stadiumCapacity: "24,300",
    location: "Salta",
    history: 
    `
    he idea of ​​forming a club materialized on November 29, 1902, led by a group of enthusiastic followers of Don José Eustaquio Alderete, gathered at the Gran Hotel, located on España and Zuviría streets. More than 100 people gathered at the Hotel bar to form the Club Atlético Salteño. 
    A provisional board of directors was quickly formed, proclaiming Francisco Alsina president.
    `
  },
  {
    id: 81,
    clubName: "Sportivo Atlético Club Las Parejas",
    badgeImageUrl: "./img/Sportivo_lasparejas_2021.png",
    coordinates: [-32.676195, -61.518962],
    formedIn: "1922",
    stadiumName: "Estadio 4 de Septiembre",
    stadiumCapacity: "5000",
    location: "Las Parejas",
    history: 
    `
    It was founded on March 18, 1922. Its first leaders were Juan Torassa as President, Ricardo Grunauer as Secretary, and José Beltramo, Carlos Curioni and Eliseo Risso Patrón as substitutes.
    `
  },
  {
    id: 82,
    clubName: "Club Atlético Unión de Sunchales",
    badgeImageUrl: "./img/Escudo_del_Club_Atlético_Unión_de_Sunchales.svg.png",
    coordinates: [-30.936982, -61.561944],
    formedIn: "1948",
    stadiumName: "Estadio de la Avenida",
    stadiumCapacity: "5000",
    location: "Sunchales",
    history: 
    `
    Union began in the Rafaelina Football League just one year after its foundation, and in just one year it achieved the championship of the "North Zone" of the first division. In the following twenty years he failed to become champion.
    `
  },
  {
    id: 83,
    clubName: "Círculo Deportivo de Comandante Nicanor Otamendi",
    badgeImageUrl: "./img/Circulo_deportivo.png",
    coordinates: [-38.112888, -57.842329],
    formedIn: "1921",
    stadiumName: "Estadio Guillermo Trama",
    stadiumCapacity: "300",
    location: "Comandante Nicanor Otamendi",
    history: 
    `
    It was founded on December 23, 1921 as Círculo Sportivo. In 1948, by government decree, it changed to its current name. It maintains a rival with Club Atlético Kimberley, Club Atlético Alvarado and Club Atlético Juventud Unida (Comandante Nicanor Otamendi).
    `
  },
  {
    id: 84,
    clubName: "Club Atlético Sansinena Social y Deportivo de General Cerri",
    badgeImageUrl: "./img/CSSD.png",
    coordinates: [-38.718092, -62.402372],
    formedIn: "1914",
    stadiumName: "Estadio Luis Molina",
    stadiumCapacity: "4000",
    location: "General Daniel Cerri",
    history: 
    `
    In 1914 the population of "Cuatreros" needed a club or institution to recreate and practice soccer: it was so on June 12, 1914 (108 years) in the vicinity of the Aguará station a group of friends who practiced said sport among laundry employees Soulas and the refrigeration company Sansinena.
    The construction of the sports field and a simple building consisting of a meeting room and changing rooms began, thus giving life to the first institution of the town. 
    Shortly after the activities began, players from Lavadero Soulas and Compañía Sansinena were measured (despite the prohibition of the then manager of the refrigeration company).
    `
  },
  {
    id: 85,
    clubName: "Club Atlético Liniers",
    badgeImageUrl: "./img/CAL_Escudo.png",
    coordinates: [-38.702986, -62.267499],
    formedIn: "1908",
    stadiumName: "Estadio Dr. Alejandro Pérez",
    stadiumCapacity: "12,000",
    location: "Bahía Blanca",
    history: 
    `
    The Liniers Club was founded on October 8, 1908 by athletes. Arturo Turra proposed that the new institution be called Football Club Liniers in homage to the hero of the defense of Buenos Aires. This motion is voted unanimously and the name of the new sports institution is thus determined.
    Jesús Fungueriño proposes the colors black and white for the shirt as homage to the Club Atlético Estudiantes de Buenos Aires, already traditional in the Argentine soccer environment, which is also accepted after a short discussion.
    `
  },
  {
    id: 86,
    clubName: "Club Villa Mitre",
    badgeImageUrl: "./img/1920px-Escudo_Villa_Mitre.svg.png",
    coordinates: [-38.737874, -62.238693],
    formedIn: "1924",
    stadiumName: "Estadio El Fortín",
    stadiumCapacity: "7000",
    location: "Bahía Blanca",
    history: 
    `
    In 1922, a group of enthusiasts founded the club Marcelo T. de Alvear. They played football with a red, white and black shirt (similar to Chacarita's shirt). His first field was propriety of the Colegio Salesiano San Gabriel. The Reverend Tito Graziani gave the field with the condition that the players entered into church all Sundays. 
    But one day they found that the field located between Catón (Agustín de Arrieta), 14 de Julio, Rivadavia and 12 de Octubre (Alberdi) streets was closed because the youth had not attended church and the Father decided to punish them, forcing the dissolution of the team.
    On August 14, 1924, the boys turned to reunite, forming the Club Villa Mitre. These 37 young people were the founding members in the steering committee meeting, where Vicente Otero was established as the first president of the institution.
    `
  },
  {
    id: 87,
    clubName: "Club Olimpo",
    badgeImageUrl: "./img/Escudo_Oficial_Olimpo.png",
    coordinates: [-38.726944, -62.275833],
    formedIn: "1910",
    stadiumName: "Estadio Roberto Natalio Carminatti",
    stadiumCapacity: "18,000",
    location: "Bahía Blanca",
    history: 
    `On October 15, 1910, a group of citizens from Bahía Blanca met with the aim of forming a club dedicated to sports, especially soccer. The event took place in a modest house on the first street of Sarmiento, which was later to be transformed into the current headquarters of the club.
    In the first place, it was decided by a vote of 11 to 2 that the name be Olympus, in reference to the homonymous mount that Greek mythology indicates as the cradle and abode of the Gods.
    hus, other proposals such as Libertad and River Plate were left on the way. Finally, it was Avellanal who proposed the yellow and black colors since, born in Uruguay, he was a supporter of Club Atlético Peñarol.
    `
  },
  {
    id: 88,
    clubName: "Club Atlético Social y Deportivo Camioneros",
    badgeImageUrl: "./img/14024658.png",
    coordinates: [-34.753776, -58.490443],
    formedIn: "2009",
    stadiumName: "Hugo Moyano",
    stadiumCapacity: "5000",
    location: "Partido de Esteban Echeverría, Buenos Aires",
    history: 
    `
    During 2004 and after several years of planning, the Truck Drivers' Union organized an exclusive championship for affiliated companies with the condition that whose members were workers also members; to be disputed in their properties in Garín, Florencio Varela, General Rodríguez and Namuncurá.
    Fulfilling its soccer objectives, trying to expand the range of sports and take advantage of its property, on August 26, 2009 the "Club Atlético, Social y Deportivo Camioneros" would be founded.
    `
  },
  {
    id: 89,
    clubName: "Club Ciudad de Bolívar",
    badgeImageUrl: "./img/Club_Ciudad_Bolivar_logo.png",
    coordinates: [-36.223072, -61.122088],
    formedIn: "2002",
    stadiumName: "Estadio República de Venezuela",
    stadiumCapacity: "3500",
    location: "San Carlos de Bolívar",
    history: 
    `
    The club was founded on October 23, 2002, subsequent to that year's FIVB Men's World Championship held in Argentina. The club's foundation was initiative of TV host and entrepreneur Marcelo Tinelli (who was born in San Carlos de Bolívar). 
    Tinelli called former national team captain Daniel Castellani to the project, which conceived the club as a youth player recruiter and former. The colors chosen were the light blue and white, as a tribute to the city of Bolívar's football team that wore those colors.
    `
  },
  {
    id: 90,
    clubName: "Club Atlético Independiente de Chivilcoy",
    badgeImageUrl: "./img/EscudoOficialIndependienteChivilcoy.png",
    coordinates: [-34.912882, -60.016605],
    formedIn: "1930",
    stadiumName: "Estadio Raúl Orlando Lungarzo",
    stadiumCapacity: "4000",
    location: "Chivilcoy",
    history: 
    `
    On April 5, 1930, in the area of ​​the populous neighborhood of Plaza Moreno, a group of enthusiastic and enterprising boys, supporters of the Club Atlético Independiente, from Avellaneda, laid the founding foundations of the Club Atlético Independiente, from the city of Chivilcoy. 
    he first directive commission was chaired by Francisco Umbriano. Some time later, in 1936, mainly as a result of serious and serious economic problems, which could not be resolved satisfactorily, the entity was dissolved, and four years later, on September 19, 1940, it was reorganized again, 
    under the presidency of Don Pedro De Vicenzi. Subsequently, it established its headquarters in the geographical area of ​​Plaza Belgrano, in a building located at the intersection of Gral. Pinto and Coronel Brandsen streets. The aforementioned building was acquired in 1962.
    `
  },
  {
    id: 91,
    clubName: "Club Deportivo Argentino de Monte Maíz",
    badgeImageUrl: "./img/CDA.png",
    coordinates: [-33.207883, -62.587863],
    formedIn: "1925",
    stadiumName: "Estadio Modesto Marrone",
    stadiumCapacity: "3500",
    location: "Monte Maíz",
    history: 
    `
    Founded on November 18, 1925 in the town of Monte Maíz, province of Córdoba, by a group of leaders and athletes split from Club Atlético Lambert, who agreed on the need to create a new institution for the town. Its first president was Ramón Pereyra Domínguez.
    `
  },
  {
    id: 92,
    clubName: "Club Ferro Carril Oeste de General Pico",
    badgeImageUrl: "./img/Club_Ferro_Carril_Oeste_General_Pico.png",
    coordinates: [-35.668136, -63.763992],
    formedIn: "1934",
    stadiumName: "Estadio El Coloso del Barrio Talleres",
    stadiumCapacity: "17,000",
    location: "General Pico",
    history: 
    `
    Ferro was founded on June 24, 1934 by a group of parents from school 111 to create a sports space for the city's athletes. Promoted by Professor Guillermo Coppo, it was founded under the name "Club Sportivo Costanero".
    After less than a month, it merged with the "Club Talleres", thus giving rise to the "Club Atlético Ferro Carril Oeste", in honor of the branch of the train (Ramal General Pico-Telén) that passed through the city.
    `
  },
  {
    id: 93,
    clubName: "Club Atlético Huracán Las Heras",
    badgeImageUrl: "./img/Logo_Huracán_Las_Heras.webp",
    coordinates: [-32.845470, -68.826358],
    formedIn: "1939",
    stadiumName: "Estadio General San Martín",
    stadiumCapacity: "10,000",
    location: "",
    history: 
    `
    Club Atlético Huracán Las Heras arrives through several mergers, until December 24, 1939, it reaches its current name. On July 12, 1920, "Sportivo Benjamín Matienzo" was founded, wearing a colorful red and green vertical striped shirt. At the beginning of December 1925, the "Club Sportivo Juan Gregorio Las Heras" was founded, wearing the colors white and green on its vertically striped shirt.
    In 1929 "Benjamín Matienzo" and "Sportivo Canillitas" decided to merge, renaming themselves "Matienzo Sport Club" and due to this merger, Canillitas would disappear as a club.
    Two new clubs would join the Mendocina Soccer League. On December 26, 1930 "Sportivo Domingo Bombal" was founded and on June 6, 1932 "Deportivo Olascoaga". In turn, 3 entities from the department of Las Heras merged (Club Honor y Patria, Sportivo Juan Gregorio Las Heras and Deportivo Sarmiento) to make way for "Unión Sport Club Las Heras" which would wear the colors black, red and white on its shirt. vertical stripes.
    In 1934 the clubs "Matienzo Sport Club" and "Deportivo Olascoaga" were merged and renamed "Club Deportivo Huracán" wearing the current colors that identify the Lasherino Globe, white shirt with red collar and cuffs and a balloon on the side of the heart. 
    In 1937 the "Club Deportivo Huracán" merges with "Sportivo Domingo Bombal" and is renamed "Deportivo Huracán Bombal" keeping the colors of the Globito.
    And finally, on December 24, 1939, after several meetings, "Deportivo Huracán Bombal" and "Unión Sport Club Las Heras" reached an agreement before a large and enthusiastic assembly and the merger between Huracán and Las Heras was formalized, giving way thus to Club Atlético Huracán Las Heras.
    `
  },
  {
    id: 94,
    clubName: "Club Cipolletti",
    badgeImageUrl: "./img/Club_Cipolletti_logo.svg.png",
    coordinates: [-38.936561, -68.003970],
    formedIn: "1926",
    stadiumName: "Estadio La Visera de Cemento",
    stadiumCapacity: "15000",
    location: "Cipolletti",
    history: 
    `
    In 1912 the club was known by the name of Cipolletti Athletic Club. From its inception the club wore the same colors as today (black and white). On October 26, 1926, the Cipolletti Club was founded and in 1927 its emblem was created.
    `
  },
  {
    id: 95,
    clubName: "Club Social y Deportivo Sol de Mayo",
    badgeImageUrl: "./img/Club_Sol_de_Mayo.png",
    coordinates: [-40.818083, -62.976786],
    formedIn: "1920",
    stadiumName: "Estadio Albiceleste",
    stadiumCapacity: "5000",
    location: "Viedma",
    history: 
    `
    The Sol de Mayo Club was founded on August 2, 1920 by former students of the San Francisco de Sales school in the city of Viedma. Those former students who founded the institution were Próspero Entraigas, Miguel Urrutia, Severo La Canale, Manuel Linares, Víctor Ubicaín, Primo Guidi, Francisco Mondillo and the priest Pedro Telmo Ortiz.
    The club depended on the alumni center of its old school until March 24, 1924, when it disassociated itself to develop independently.
    In 1935 the club bought (thanks to the collaboration of the partners) a piece of land located on Avenida Costanera, to build its own field. The place was ready to be used in 1939. The sports field also allowed basketball practice to begin.
    `
  },
  {
    id: 96,
    clubName: "Club Sportivo Peñarol",
    badgeImageUrl: "./img/Club_Sportivo_Peñarol.png",
    coordinates: [-31.506862, -68.524565],
    formedIn: "1918",
    stadiumName: "Estadio Ramón Pablo Rojas",
    stadiumCapacity: "9000",
    location: "Chimbas",
    history: 
    `
    The club was founded on November 24, 1918 in the Plaza de la Concepción, located in the capital of San Juan. The club took its name from Peñarol from Uruguay and took on the colors of Club Atletico Chacarita juniors from Buenos Aires (the colors red, white and black) but in the first order of shirts, from Buenos Aires they sent the clothing with the colors red, white and blue (instead of black) by equivocation.
    `
  },
  {
    id: 97,
    clubName: "Club Sportivo Desamparados",
    badgeImageUrl: "./img/1200px-Escudo_del_Club_Desamparados_de_San_Juan.svg.png",
    coordinates: [-31.5274, -68.563],
    formedIn: "1919",
    stadiumName: "Estadio El Serpentario",
    stadiumCapacity: "18,000",
    location: "San Juan",
    history: 
    `
    Sportivo Desamparados club did not have a stable headquarters, in fact the members of the team met in different locations, until in 1926 it was They moved to some land occupied by the School of Fruit Growing and Enology of San Juan.
    They remained in this location until 1938, the year in which the government of San Juan decided to grant them a vacant lot, however after the 1944 earthquake they had to return it so that the families affected by the catastrophe could settle there, and the site was renamed Ameghino Emergency Neighborhood.
    In view of what had happened, the team looked for a new place and settled on land belonging to the National Council for National Reconstruction. In 1960, the local government signed a property deed in which it finally ceded the land to Sportivo Desamparados definitively.
    `
  },
  {
    id: 98,
    clubName: "Club Sportivo Estudiantes",
    badgeImageUrl: "./img/Escudo_de_Club_Sportivo_Estudiantes_2017.png",
    coordinates: [-33.287212, -66.340921],
    formedIn: "1920",
    stadiumName: "Estadio Héctor Odicino-Pedro Benoza",
    stadiumCapacity: "12,500",
    location: "San Luis",
    history: 
    `
    The club was established at the initiative of a group of students of Escuela Normal Juan Pringles, on June 20, 1920. After commemorating the anniversary of Manuel Belgrano's death, they met to form a club, being Carlos Pino elected as president. 
    The club was named "Sportivo Estudiantes" ("students" in Spanish), adopting the green and white colors that represented hope and purity respectively.
    The Government of San Luis donated the club a land on Constitución street of the city. In August 1920 the "Unión Puntana de Football" (current Liga Sanluiseña) was established, being Estudiantes the first champion ever. The format was a single round-robin tournament, with all the games played at "Cancha del Internado" (located in the Infantry Regiment of the city).
    `
  },
  {
    id: 99,
    clubName: "Club Atlético Juventud Unida Universitario",
    badgeImageUrl: "./img/Escudo_del_Club_Juventud_de_Unida_San_Luis.svg.png",
    coordinates: [-33.298827, -66.314839],
    formedIn: "1920",
    stadiumName: "Estadio Mario Sebastián Diez",
    stadiumCapacity: "10,000",
    location: "San Luis",
    history: 
    `
    Founded in 1920, "el juve" would only win its first title in the San Luis Soccer League in 1946 and repeat the title in 1969. However, after that title it would qualify for the second edition of the Copa Argentina, being eliminated in the first phase against Atlanta.
    `
  },
  {
    id: 100,
    clubName: "Club Atlético Acassuso",
    badgeImageUrl: "./img/Club_acassuso_logo.png",
    coordinates: [-34.481656, -58.583108],
    formedIn: "1922",
    stadiumName: "Estadio La Quema",
    stadiumCapacity: "800",
    location: "San Isidro, Buenos Aires",
    history: 
    `
    The club was established as "Villa Acassuso Football Club" on September 7, 1922, by a group of football enthusiasts from Villa Acassuso in San Isidro Partido. At the end of 1923 the team began to participate in the third division of Asociación Amateurs de Football (a dissident league formed in 1919), winning the title and promoting to the upper division that same year.
    In 1923 the club also built its first field because of a donation by Don Ernesto de las Carreras. The field was located on Márquez Avenue and Haedo in San Isidro and was inaugurated on November 4. Two years later the club changed its name to "Club Atlético Acassuso". The name also honored Domingo de Acassuso, founder of San Isidro partido.
    `
  },
  {
    id: 101,
    clubName: "Argentino de Quilmes",
    badgeImageUrl: "./img/Argentino_de_quilmes.png",
    coordinates: [-34.7155, -58.249],
    formedIn: "",
    stadiumName: "Estadio de Argentino de Quilmes",
    stadiumCapacity: "5000",
    location: "Quilmes, Buenos Aires",
    history: 
    `
    The club was founded on 1 December 1899 by a group of students of Colegio Nacional de Buenos Aires, as a reaction against British hegemony in Quilmes Atlético Club, which did not permit Argentine natives to play.
    Unlike Quilmes AC, which honored visiting players with the traditional tea, the recently founded club Argentino de Quilmes offered "mate", a traditional infusion drink very popular in Argentina. That originated the nickname which Argentino would be known for.

    `
  },
  {
    id: 102,
    clubName: "Cañuelas Fútbol Club",
    badgeImageUrl: "./img/Escudo_del_Cañuelas_Fútbol_Club.svg.png",
    coordinates: [-35.049629, -58.746805],
    formedIn: "1911",
    stadiumName: "Estadio Jorge Alfredo Arín",
    stadiumCapacity: "1500",
    location: "Cañuelas",
    history: 
    `
    El clásico rival de Cañuelas es Tristán Suárez. También rivaliza con San Martin de Burzaco, Argentino de Quilmes y Berazategui.
    `
  },
  {
    id: 103,
    clubName: "Club Comunicaciones",
    badgeImageUrl: "./img/Comunicaciones_badge.png",
    coordinates: [-34.593722, -58.488528],
    formedIn: "1931",
    stadiumName: "Estadio Alfredo Ramos",
    stadiumCapacity: "3500",
    location: "Agronomía, Buenos Aires",
    history: 
    `
    The club was founded for a group of employees of the Argentine Post office company. The name chosen was Club Atlético Correos y Telégrafos, referring to the name of the State mail company they worked for. In 1953 the club changed to its current name.
    `
  },
  {
    id: 215,
    clubName: "Club Atlético Colegiales",
    badgeImageUrl: "img/Colegiales_arg_logo.png",
    coordinates: [-34.538155, -58.525501],
    formedIn: "1908",
    stadiumName: "Estadio Libertarios Unidos",
    stadiumCapacity: "8500",
    location: "Florida Oeste, Buenos Aires",
    history: 
    `
    The club was founded on 1 April 1908, in Buenos Aires by a group of anarchists who discussed fighting for better conditions for the working class. That was the reason that originated its first name, "Club Atlético Libertarios Unidos", naming José Garrone as its first president. The colors adopted were red with a horizontal black stripe paying tribute to their anarchist ideology.
    Libertarios Unidos' first field was placed just beside the Defensores de Belgrano stadium, in the corner of Blandengues and Manzanares streets of Buenos Aires. Libertarios Unidos was soon forced to change its name, because the government had prohibited any anarchist expression (some sources state that it was the Police Chief Ramón Falcón himself who obliged them to change the name). So the club was renamed as Sportivo del Norte in 1919.
    Sportivo del Norte obtained the promotion to Primera B in 1919 and one year later the team was playing its first match in Primera División, where it finished 8th.[1] In 1924 Sportivo had to leave its field in Blandengues and Manzanares, moving to Colegiales district. The club soon renamed honoring its new home, changing not only its name to "Club Atlético Colegiales" (in 1925) but its uniform colors, which became blue, red and gold. They have remained the club colors up to present days.
    `
  },
  {
    id: 104,
    clubName: "Club Atlético Defensores Unidos de Zárate",
    badgeImageUrl: "./img/Defensores_unidos_logo.png",
    coordinates: [-34.104583, -59.017728],
    formedIn: "1914",
    stadiumName: "Estadio Mario Losinno",
    stadiumCapacity: "7000",
    location: "Zárate",
    history: 
    `
    The institution was born on July 14, 1914 after a group of members of the Paraná Club, due to differences with directors of said entity, separated and founded another social and sports entity with the name of Defensores de Paraná, being its first president Juan Ferrari.
    A year after the founding, the designation Unidos de Zárate was added. Later he would join the Federation of the North and began to participate in the soccer championship, being the founder of the Zarateña League in 1927.
    CADU's classic rival is Villa Dálmine from the neighboring city of Campana. Currently, both his classic rival
    `
  },
  {
    id: 105,
    clubName: "Club Deportivo Armenio",
    badgeImageUrl: "./img/Dep_armenio_logo.png",
    coordinates: [-34.376295, -58.730308],
    formedIn: "1962",
    stadiumName: "Estadio Armenia",
    stadiumCapacity: "8000",
    location: "Ingeniero Maschwitz, Buenos Aires",
    history: 
    `
    The club was founded in 1962 under the name Club Armenio de Fútbol by the Armenian community in Argentina. It changed its name in 1968, and was affiliated to the Argentine Football Association two years later. The original colours were black and white, but first changed to green and white stripes and then again to red and white. Nowadays, home uniform is red, orange and blue, inspired by the flag of Armenia.
    `
  },
  {
    id: 106,
    clubName: "Club Social y Deportivo Merlo",
    badgeImageUrl: "./img/Escudo_del_Club_Deportivo_Merlo.svg.png",
    coordinates: [-34.680408, -58.732975],
    formedIn: "1954",
    stadiumName: "Estadio José Manuel Moreno",
    stadiumCapacity: "7500",
    location: "Merlo, Buenos Aires",
    history: 
    `
    The club was founded on October 8, 1954, as "9 de Julio". Two years later the team debuted at Primera D (then named "Aficionados") of Argentine Football Association. In 1968 the name changed to "Deportivo Merlo" which has remained to date. One year later the institution acquired the land where its stadium was built.
    In 1977 and 1978 the team was managed by former star José María Moreno, nicknamed "El Charro". Moreno died on August 1978 and the stadium was named in his honour. The nickname Charros also extended to the squad and fans. Popular Looney Tunes animated character Yosemite Sam (which resembled a Mexican charro) was also adopted as the mascot of the team.
    `
  },
  {
    id: 107,
    clubName: "Club Sportivo Dock Sud",
    badgeImageUrl: "./img/Escudo_del_Club_Deportivo_Merlo.svg.png",
    coordinates: [-34.658120, -58.344795],
    formedIn: "1916",
    stadiumName: "Estadio de los Inmigrantes",
    stadiumCapacity: "9500",
    location: "Dock Sud, Buenos Aires",
    history: 
    `
    The club had a double foundation. The first: Club Atlético Dock Sud was founded in 1913, with players away from Club San Martín Juniors, whose jersey colors were light blue and white and the field was located on land located on the west side of Usina CATE. However, the following year it was disbanded. Some of the players continued to meet and formed the soccer team called "Follow me if you can", which, given the good results, decided to form a club.
    Thus, on September 1, 1916, the Club Sportivo Dock Sud was founded and the first shirt was blue and light blue with vertical sticks, which, unable to obtain these colors, used one with green and red stripes. The following year, it changed to the definitive blue and gold in vertical stripes, which continues to this day. 
    Dock Sud's classic rival is San Telmo.
    `
  },
  {
    id: 108,
    clubName: "Club Atlético Fénix",
    badgeImageUrl: "./img/Club_Fenix_logo.png",
    coordinates: [-34.596940, -58.825881],
    formedIn: "1948",
    stadiumName: "En Construcción",
    stadiumCapacity: "10,000",
    location: "Buenos Aires",
    history: 
    `
    The club was established on 25 April 1948 by a group of boys met at the bar owned by Guillermo García in Palermo district of Buenos Aires. The boys played football competing in local leagues and decided to found their own club, named "Club Atlético, Social y Deportivo Fénix".
    The name was chosen because the bar where the boys used to meet had been destroyed by fire in 1947. Despite the accident, the bar reopened soon later, being compared to the phoenix, "arising from the ashes of its predecessor". "Fénix" is the Spanish translation for "phoenix".
    In 1955 the club rented a land in the Colegiales neighborhood, where Fénix built its first headquarters and venue. One year later the club changed its name to current "Club Atlético Fénix".
    `
  },
  {
    id: 109,
    clubName: "Club Atlético Ituzaingó",
    badgeImageUrl: "./img/Club_ituzaingo_logo.png",
    coordinates: [-34.665636, -58.663978],
    formedIn: "1912",
    stadiumName: "Estadio Carlos Alberto Sacaan",
    stadiumCapacity: "5500",
    location: "Ituzaingó, Buenos Aires",
    history: 
    `
    It was founded on April 1, 1912 on the basis of preliminary meetings in the house of Adolfo Luis Testa and in the Bagnacerdri' bar in Las Heras de Zufriategui, in the center of the then town of Ituzaingó (which in 1964 took the rank of city). 
    The antecedents begin in 1911: with the arrival of the Buenos Aires Student Club plus the influence of the Western Railway and its great labor movement in the area, the framework was ideal for the development of the practice of soccer by the young people of the town who practiced in the grounds of the San Judas Tadeo Parish and on the field of the Roberts de Ituzaingó Neighborhood Union.
    in 1912 it was decided to create the club under the name of Social Ituzaingó, which would later be called Club Atlético Ituzaingó. The colors adopted were green - taken from the branch of the Western Railway of Buenos Aires, whose station is located in the town, and white. For more than fifteen years, the club used a field located in the current February 20 square; while currently its stadium is located in Mariano Acosta and General Pacheco, Ituzaingó Sur.
    `
  },
  {
    id: 110,
    clubName: "Asociación Social y Deportiva San Gennaro Justo José de Urquiza",
    badgeImageUrl: "./img/JJUrquiza.png",
    coordinates: [-34.554393, -58.618777],
    formedIn: "1936",
    stadiumName: "Estadio Ramón Roque Martín",
    stadiumCapacity: "1500",
    location: "Caseros, Buenos Aires",
    history: 
    `
    J. J. Urquiza was born from the merger of three clubs: Club Social, Club Atlético Unión and Club Atlético Caseros. The name of the new entity was thought of in an Argentine hero and the decision fell on Justo José de Urquiza
    `
  },
  {
    id: 111,
    clubName: "Club Atlético Los Andes",
    badgeImageUrl: "./img/1920px-Escudo_del_Club_Atlético_Los_Andes.svg.png",
    coordinates: [-34.755278, -58.42],
    formedIn: "1917",
    stadiumName: "Estadio Eduardo Gallardón",
    stadiumCapacity: "36,542",
    location: "Lomas de Zamora, Buenos Aires",
    history: 
    `
    The club was founded by a group of young people in 1917, and its name was chosen to commemorate the first balloon flight across the Andes mountain, which had happened in 1916.
    The first colors of the shirt came from José Gogenola, the protagonist of the first matches against Racing Club de Avellaneda. The shirt was light blue with a wide horizontal white band. Other sources also refer that the team wore a yellow shirt with a balloon on the left side, which identified the first stamp of the Club.
    In 1921, the colors red and white with vertical stripes were adopted, thanks to which the team would be nicknamed "the one with a thousand stripes". This shirt was designed by Mr. Eduardo Gallardón, who in a report in Diario La Prensa in 1971 commented: "At the beginning of the century, Sportivo Barracas was the only club that had narrow, blue and white vertical bands in the colors of its shirt. 
    I liked them and when the time came to look for one for Los Andes, I imitated the characteristic but with red and white colors. Why red? Because Banfield, from the same area, already had green and Temperley had light blue... ".
    `
  },
  {
    id: 112,
    clubName: "Club Atlético San Miguel",
    badgeImageUrl: "./img/Escudo_C.A.S.M.png",
    coordinates: [-34.513635, -58.706384],
    formedIn: "1922",
    stadiumName: "Estadio Malvinas Argentinas",
    stadiumCapacity: "7,096",
    location: "San Miguel, Buenos Aires",
    history: 
    `
    The institution was established on 7 August 1922 as "Club Independiente San Miguel", while it was decided that the colors of the jersey would be green and white.
    In 1930 the club merged to Club Germinal of Villa Lynch, but the fusion was dissolved a year later and the club changed its name to current "Club Atlético San Miguel". Five years later the club acquired the land where headquarters are currently located.
    `
  },
  {
    id: 113,
    clubName: "Club Atlético Talleres de Remedios de Escalada",
    badgeImageUrl: "./img/Talleres_ba_logo.png",
    coordinates: [-34.721664, -58.404089],
    formedIn: "1906",
    stadiumName: "Estadio Pablo Comelli",
    stadiumCapacity: "16,000",
    location: "Remedios de Escalada, Buenos Aires",
    history: 
    `
    The club was founded on 1 June 1906 with the name "Talleres United Football Club", being formed by the joining of two teams, Los Talleres and General Paz. The selection of the name followed an Argentine tradition of giving football teams English names, such as Boca Juniors, River Plate, All Boys, Newell's Old Boys, Racing Club, Chacarita Juniors, Argentinos Juniors and Chaco For Ever, among others.
    In 1920 the club renamed "Talleres Football Club", and five years later it promoted to Primera División, the top division of Argentina. The club also acquired the land where its headquarters and sports field are now located. Some years after, the club would adopt the current name, "Club Atlético Talleres".
    Talleres merged with Club Atlético Lanús in 1934 to form a competitive team for the Primera División championship. The new club switched to "La Unión Talleres-Lanús" although the merger only lasted a year. Talleres played in Primera until 1938 when the team was relegated to the second division. Talleres has been playing in lower divisions and never returned to Primera since then.
    `
  },
  {
    id: 114,
    clubName: "UAI Urquiza",
    badgeImageUrl: "./img/Club_dep_uaiurquiza_crest.png",
    coordinates: [-34.595733, -58.525636],
    formedIn: "1950",
    stadiumName: "Estadio Monumental de Villa Lynch",
    stadiumCapacity: "1000",
    location: "Villa Lynch, Buenos Aires",
    history: 
    `
    The Club was founded as "Club Deportivo, Social y Cultural Ferrocarril Urquiza" by Carmelo Santoro on May 21, 1950. The first players and fans of the team were employees of the General Urquiza Railway who needed a ground to play football on Saturday afternoons. The club affiliated to the Argentine Football Association in 1970 and played its first season in the "Aficionados" division (the fourth level of Argentine football league system, later renamed "Primera D").
    `
  },
  {
    id: 115,
    clubName: "Club Atlético Villa San Carlos",
    badgeImageUrl: "./img/225px-Villa_sancarlos_logo.png",
    coordinates: [-34.873515, -57.862501],
    formedIn: "1925",
    stadiumName: "Estadio Genacio Sálice",
    stadiumCapacity: "4000",
    location: "Berisso",
    history: 
    `
    In 1916 the company "Bravo Barros" parceled out land in the city of Berisso and put it up for sale under the name "Villa San Carlos"; the real owners of these lands were Messrs. Marcelino and Rafael Herrera Vegas. A few years later, precisely in 1923, a group of boys who played ball in the vacant lots of Villa San Carlos formed a team that they called "Avanti Barrilete"
    `
  },
  {
    id: 116,
    clubName: "Club Atlético Talleres de Perico",
    badgeImageUrl: "./img/Club_Atletico_Talleres_de_Ciudad_Perico.svg.png",
    coordinates: [-24.381236, -65.112468],
    formedIn: "1944",
    stadiumName: "Estadio Doctor Plinio Zabala",
    stadiumCapacity: "6000",
    location: "",
    history: 
    `
    Talleres originated from an earlier club named Club Atlético Estación Perico, founded in 1932. The first news about a sporting institution dedicated to soccer practice in Perico Station came on August 26, 1932,when the provincial legislature passed a law requiring by a donation of $200 national currency for Club Atlético Perico Station. 
    The law was countersigned by the president of the HCD, and R. Pérez Bidondo Alisedo (secretary). In1942, there was a club in the village called Perico Racing Club, run by Mr. Leandro Vaca, a barber, and in collaboration with Don Filomeno Cáceres, an employee of the plant belonging to the Flia Lamas. After a year, the two friends parted ways, and Don Filomeno Cáceres founded a summer club called Club Workshops, which is the name chosen for having made for the first time in a garage owned by Don Napoleon of Moral (Cañemo store). Located on Calle San Martin, The Tucumana business started working on the possibility of making this summer club an institution with applicable statutes.
    `
  },
  {
    id: 117,
    clubName: "Asociación Cultural y Deportiva Altos Hornos Zapla",
    badgeImageUrl: "./img/Asociación_Cultural_y_Deportiva_Altos_Hornos_Zapla.png",
    coordinates: [-24.257226, -65.210149],
    formedIn: "1947",
    stadiumName: "Estadio Emilio Fabrizzi",
    stadiumCapacity: "20,000",
    location: "Palpalá",
    history: 
    `
    A group of young people who liked to play soccer and participate in the internal tournaments that were held in the former Altos Hornos Zapla military factory, led by Pastor Caro and Colonel Emilio Fabrizzi, founded on January 4, 1947 in one of the centers villages of Palpalá, the Club Defensores de Centro Forestal. The reason for the foundation was to officially compete in the Jujuy Football League tournaments.
    At the end of the 1950s, the creation of the Sports Complex was decreed, near the neighborhoods of 9 de Julio and Arit; it would have a soccer field, basketball, bowls, swimming pool, and other facilities for the recreation of the steel center workers.
    `
  },
  {
    id: 118,
    clubName: "Club Atlético Monterrico San Vicente",
    badgeImageUrl: "./img/1920px-Club_Monterrico_San_Vicente.png",
    coordinates: [-24.434824, -65.171157],
    formedIn: "1967",
    stadiumName: "Estadio Antonio Manuel Berruezo",
    stadiumCapacity: "12,000",
    location: "Monterrico",
    history: 
    `
    The club was founded on June 27, 1967 by a group of athletes under the name Club San Vicente.
    `
  },
  {
    id: 119,
    clubName: "Club Sociedad de Tiro y Gimnasia",
    badgeImageUrl: "./img/cropped.png.png",
    coordinates: [-24.226968, -64.867948],
    formedIn: "1914",
    stadiumName: "Estadio Fortín del Barrio Belgrano",
    stadiumCapacity: "5000",
    location: "San Pedro de Jujuy",
    history: 
    `
    Club Sociedad de Tiro y Gimnasia was founded on June 14, 1914. It is a multi-sport entity that has more than 10 sports disciplines. The club has 200 active members.
    `
  },
  {
    id: 120,
    clubName: "Club Deportivo Villa San Antonio",
    badgeImageUrl: "./img/Club_Deportivo_Villa_San_Antonio.png",
    coordinates: [-24.820889, -65.419189],
    formedIn: "1950",
    stadiumName: "Estadio Padre Ernesto Martearena",
    stadiumCapacity: "23,408",
    location: "Salta",
    history: 
    `
    Their classic rival is Club Atlético Miter from Villa Mitre, with whom they host "El Clásico de las Villas de Salta"
    `
  },
  {
    id: 121,
    clubName: "Club Atlético Almirante Brown de Lules",
    badgeImageUrl: "./img/Escudo_Almirante_Brown.png",
    coordinates: [-26.923689, -65.333716],
    formedIn: "1919",
    stadiumName: "Estadio Almirante Brown",
    stadiumCapacity: "10,000",
    location: "Lules",
    history: 
    `
    The club was founded on February 7, 1919, by a group of young people from that time who had practiced soccer and who decided to remain united in an institution, in this way they founded what is today the Almirante Brown Athletic Club. When looking for a name, they wanted to pay tribute to that intrepid sailor who defended the country in the most difficult moments.
    `
  },
  {
    id: 122,
    clubName: "Club Sportivo Guzmán",
    badgeImageUrl: "./img/Escudo_Club_Sportivo_Guzmán_Tucumán.svg.png",
    coordinates: [-26.818921, -65.187006],
    formedIn: "1921",
    stadiumName: "Estadio Humberto Rizza",
    stadiumCapacity: "12,000",
    location: "San Miguel de Tucumán",
    history: 
    `
    In March of the year 1917 the San Isidro club was founded. In 1921, on April 15, the same leaders and players founded the Sportivo July 9 club, from that year onwards the true obsession of that handful of men began to have a soccer field, initiating the efforts to achieve the same before Mr. Alfredo Guzmán, owner at that time of the mill that bore his name, today Concepción de la Banda del Río Salí and owner of the land that today has the stadium.
    `
  },
  {
    id: 123,
    clubName: "Club Sol de América de Formosa",
    badgeImageUrl: "./img/195f.png",
    coordinates: [-26.121798, -58.216786],
    formedIn: "1947",
    stadiumName: "Estadio de Sol de América",
    stadiumCapacity: "12,000",
    location: "Formosa",
    history: 
    `
    It was founded on January 5, 1947 by Gillermo Barreto, emulating the name of the Sol de América club of the Paraguayan First Division. He was only 26 years old when, in the company of distinguished residents of the Chacra, they decided to found this prestigious entity in the San Miguel neighborhood. Thanks to his hard work, he obtained the property located at Arenales 250, where the headquarters of Sol de America operated from 1949 to 1957, and with his own money he acquired the first set of jerseys for the soccer team.

    `
  },
  {
    id: 124,
    clubName: "Club Bartolomé Mitre",
    badgeImageUrl: "./img/Club_Bartolomé_Mitre.png",
    coordinates: [-27.382836, -55.917968],
    formedIn: "1926",
    stadiumName: "Estadio Ernesto Tito Cucchiaroni",
    stadiumCapacity: "8000",
    location: "Posadas",
    history: 
    `
    It was founded on October 7, 1926 under the name Miter Fútbol Club, but was changed in 1928 to Club Atlético Bartolomé Miter. Its classic rival is the Club Guaraní Antonio Franco with whom it disputes the Posadeño classic.

    `
  },
  {
    id: 125,
    clubName: "Club Deportivo Guaraní Antonio Franco",
    badgeImageUrl: "./img/Escudo_del_Club_Guarani_Antonio_Franco.svg.png",
    coordinates: [-27.356740, -55.895684],
    formedIn: "1932",
    stadiumName: "Estadio Clemente Fernández de Oliveira",
    stadiumCapacity: "12,000",
    location: "Posadas",
    history: 
    `
    On June 12, 1932, a group of young people from the Posadeño neighborhood of Villa Sarita, after the disappearance of the Sportivo Colombo club, at the suggestion of Antonio Franco, a Public Health nurse, met in his store located on Ivanowski and Ayacucho, the latter street currently called Ángel Acuña, and they decided to found a club.
    At the suggestion of Dr. Pablo Osvaldo Ruiz, director of Public Assistance, where Antonio Franco worked, the name Guaraní was adopted, in homage to the indigenous people of Misiones. 
    That day, then, the most popular sports club in the province of Misiones was born and obtained greater national significance. Years later, in homage to its first president, he was called Guaraní Antonio Franco.
    `
  },
  {
    id: 126,
    clubName: "Ferroviario Corrientes Fútbol Club",
    badgeImageUrl: "./img/Green_and_black_shield_(generic).png",
    coordinates: [-27.493590, -58.781673],
    formedIn: "1938",
    stadiumName: "Estadio Juan Carlos Vallejos",
    stadiumCapacity: "5000",
    location: "Corrientes",
    history: 
    `   
    On July 28, 1938, a group of employees of the Ferrocarril del Nordeste Argentino (FCNEA), gathered at the Corrientes City Station, in the Arazaty neighborhood (where the Corrientes head of the General Belgrano Bridge is currently located) decided to congregate in assembly to establish a new sports institution in the field of football in the city.
    In this way, the Club Atlético Sportivo Ferroviario was founded. After 32 minutes of assembly, those present finally defined the creation of their new institution, appointing the first directive commission. It was headed by Ramón Ferreyra as President, Alfredo Zosaya as Vice President and Juan Parodi as Secretary.
    `
  },
  {
    id: 127,
    clubName: "Club Atlético Huracán Corrientes",
    badgeImageUrl: "./img/Club_Atlético_Huracán_Corrientes.png",
    coordinates: [-27.483778, -58.829883],
    formedIn: "1918",
    stadiumName: "Estadio José Antonio Romero Feris",
    stadiumCapacity: "13,700",
    location: "Corrientes",
    history: 
    `
    It was founded on May 28, 1918, by a group of athletes who separated from the Sportivo Corrientes and Libertad clubs. Its first name was Foot-ball Club Huracán, in honor of the Parque Patricios team that was at the top of the table in those days.
    The clothing that he used in his beginnings was white, with bright reds, later he changed it for a light blue one, since most of its leaders were members of the Liberal Party, which was identified with that color. Later in 1932, it changed its name again and was renamed Club Atlético Huracán, adopting the azulgrana colors to its clothing. 
    Finally in 1986 it merged with Club Atlético Corrientes, acquiring its current name of Huracán Corrientes.
    `
  },
  {
    id: 128,
    clubName: "Club Atlético Defensores de Vilelas",
    badgeImageUrl: "./img/39430.png",
    coordinates: [-27.513296, -58.943469],
    formedIn: "1952 ",
    stadiumName: "Estadio Vilelas",
    stadiumCapacity: "1000",
    location: "Puerto Vilelas",
    history: 
    `
    The only local club surviving in the Chaqueña League. Its anniversary as a club is November 14, 1952, but its history began in 1945. National holidays were reasons for neighborhood soccer tournaments. The city had many factories (oil, tannin, lead, refrigerators, etc.) and each one assembled its equipment. Rivals from other towns used to come to these tournaments as guests. 
    This is how the idea of ​​putting together a team that represents the locals and without a doubt the name arose, they agreed that they had to defend the locality and the name was counted alone. The colors and direction of the canes were proposed by Carlos Winter, a Buenos Aires man who was a worker in the lead factory and a fan of Banfield in Buenos Aires.
    `
  },
  {
    id: 129,
    clubName: "Club Social y Deportivo Fontana",
    badgeImageUrl: "./img/Fontanach.gif",
    coordinates: [-27.418009, -59.035902],
    formedIn: "1940",
    stadiumName: "Estadio Club Social y Deportivo Fontana",
    stadiumCapacity: "3500",
    location: "Fontana",
    history: 
    `
    The beginnings of this club date back to the 1920s, initially it was called "Club Sportivo Fontana". The workers and employees of the tannin factory used to practice soccer there. The vast majority of the players were from the area and from nearby towns such as Río Arazá and Puerto Vicentini. The club participated in the local championship of the Chaco Football League with outstanding performances.
    `
  },
  {
    id: 130,
    clubName: "Club Atlético Resistencia Central",
    badgeImageUrl: "./img/Resistencia-Central.png",
    coordinates: [-27.465533, -59.003322],
    formedIn: "1918",
    stadiumName: "Estadio Eduardo Baltazar Colombo",
    stadiumCapacity: "1500",
    location: "Resistencia",
    history: 
    `
    It is one of the oldest clubs in the history of Resistencia. The club uniform dawns a White shirt with bright red details on the shoulders and sleeves, white shorts and red socks.
    `
  },
  {
    id: 131,
    clubName: "Club Atlético Villa Alvear",
    badgeImageUrl: "./img/Villa_Alvear.png",
    coordinates: [-27.458270, -59.009748],
    formedIn: "1941",
    stadiumName: "Estadio Eleuterio Coco Lucas",
    stadiumCapacity: "2000",
    location: "Resistencia",
    history: 
    `
    It was founded on January 23, 1941, closing the initiative of a group of sports enthusiasts who decided to institutionalize the activities they developed.
    `
  },
  {
    id: 132,
    clubName: "Club Atlético Estudiantes de Santiago del Estero",
    badgeImageUrl: "./img/Club-atletico-estudiantes-de-santiago-del-estero.svg.png",
    coordinates: [-27.773121, -64.286363],
    formedIn: "1913",
    stadiumName: "Estadio de Estudiantes de Huaico Hondo",
    stadiumCapacity: "2000",
    location: "Santiago del Estero",
    history: 
    `
    It was founded on April 1, 1913 to dedicate itself to its main activity, soccer. The sports institution is known by the nickname of Estuky.
    `
  },
  {
    id: 133,
    clubName: "Club Atlético Policial",
    badgeImageUrl: "./img/1920px-ClubAtleticoPolicialescudo-Catamarca.svg.png",
    coordinates: [-28.458823, -65.779344],
    formedIn: "1945",
    stadiumName: "Estadio Malvinas Argentinas",
    stadiumCapacity: "6500",
    location: "San Fernando del Valle de Catamarca",
    history: 
    `
    The Police Athletic Club is a sports entity that was founded on March 31, 1945, in San Fernando del Valle de Catamarca. The initiative to found the club was devised by several policemen. 
    They identified the team with the colors yellow and blue. In the 1960s, the club began to dispute a rivalry that became known as the "classic of the South" against to Vélez Sarsfield de Catamarca,
    although its classic historical rival is Estudiantes de La Tablada, a club from the same neighborhood with which it disputes the so-called La Tablada classic.
    `
  },
  {
    id: 134,
    clubName: "Club Atlético San Lorenzo de Alem",
    badgeImageUrl: "./img/Escudo_del_Club_Atlético_San_Lorenzo_de_Alem.svg.png",
    coordinates: [-28.4466, -65.7538],
    formedIn: "1936",
    stadiumName: "Estadio Bicentenario Ciudad de Catamarca",
    stadiumCapacity: "25,000",
    location: "San Fernando del Valle de Catamarca",
    history: 
    `
    Club Atlético San Lorenzo de Alem is a sports institution founded on May 20, 1936, in the province of Catamarca. The first president of the sports entity was Ramón Ibañes. Historically, the club plays the classic against Villa Cubas.
    `
  },
  {
    id: 135,
    clubName: "Club Sportivo Villa Cubas",
    badgeImageUrl: "./img/Villa_Cubas_(Catamarca).png",
    coordinates: [-28.445511, -65.753667],
    formedIn: "1932",
    stadiumName: "Estadio Bicentenario Ciudad de Catamarca",
    stadiumCapacity: "25,000",
    location: "San Fernando del Valle de Catamarca",
    history: 
    `
    Club Sportivo Villa Cubas is an entity founded on August 25, 1932 and refounded in 1940, when a group of young people from that time met first in the neighborhood square and later in the homes of Messrs. Carlos Colombre and José Vega, the latter appointed as the first president.
    The club adopted the colors red and white and a shield similar to Club Atlético San Martín (Tucumán) in honor.
    `
  },
  {
    id: 136,
    clubName: "Andino Sport Club",
    badgeImageUrl: "./img/1920px-Andino_Sportivo_Club.png",
    coordinates: [-29.403095, -66.827427],
    formedIn: "1946",
    stadiumName: "Estadio Polideportivo 20 de Agosto",
    stadiumCapacity: "6000",
    location: "La Rioja",
    history: 
    `
    It was the year 1940 when a group of officials and employees of the "Old" Hospital Presidente Plaza, came up with the idea of forming a soccer team, with the intention of participating in the championship organized by the Liga Riojana.
    At that time, doctors from Rosario arrived in La Rioja, many of them sympathizers of Newell's Old Boys, and for that reason they chose the colors red and black, the meetings were held at the home of Don Silvano Contreras.
    `
  },
  {
    id: 137,
    clubName: "Club Atlético Aeronáutico Biblioteca y Mutual Sarmiento",
    badgeImageUrl: "./img/1920px-Sarmiento_de_leones.png",
    coordinates: [-32.655772, -62.290966],
    formedIn: "1906",
    stadiumName: "Estadio La Calderita",
    stadiumCapacity: "3200",
    location: "Leones",
    history: 
    `
    The club's history began in 1906 with soccer, in a building on Italia and Colón streets, where people flocked to watch the first games of the amateur era. Black and white colors were adopted by force, due to the limited availability of fabrics at the time. 
    This was how a commission agent, who was commissioned to bring t-shirts; got the specimens of black and white canes.

    `
  },
  {
    id: 138,
    clubName: "Club Sportivo 9 de Julio de Río Tercero",
    badgeImageUrl: "./img/Sportivo_9_julio_logo.png",
    coordinates: [-32.171803, -64.099210],
    formedIn: "1927",
    stadiumName: "Estadio Aniceto Hortal",
    stadiumCapacity: "4000",
    location: "Río Tercero",
    history: 
    `
    A group of neighbors mainly from the northern part of the city, together with some former players from Club Atlético Río Tercero, launched the will to form a sports and social institution that would contain them. On August 11, 1927, a meeting was held in which the creation of the 9 de Julio Foot-Ball Club was made official. The Municipality consolidated the institution by provisionally granting it land so that they could locate the soccer field.

    `
  },
  {
    id: 139,
    clubName: "Club Sportivo y Biblioteca Atenas de Río Cuarto",
    badgeImageUrl: "./img/Club_Sportivo_y_Biblioteca_Atenas_de_Rio_Cuarto.svg.png",
    coordinates: [-33.117714, -64.351107],
    formedIn: "1916",
    stadiumName: "Estadio 9 de julio",
    stadiumCapacity: "7000",
    location: "Río Cuarto",
    history: 
    `
    Under the name of "Club Sportivo Atenas" the institution was founded on Sunday, July 9, 1916 in the city of Río Cuarto, province of Córdoba, Argentine Republic. It happened in the year of the Centennial of National dressage and on the same national day when the idea of ​​forming a club was born from a group of friends; the meeting place was in the Plaza General Julio Argentino Roca, the main promenade of the serene village
    The Clásico Riocuartense is what is usually called the Argentine soccer game that confronts the two most important clubs in Río Cuarto: Atenas and Estudiantes.
    `
  },
  {
    id: 140,
    clubName: "Club Atlético Las Palmas",
    badgeImageUrl: "./img/Las_Palmas.png",
    coordinates: [-31.405080, -64.238812],
    formedIn: "1933",
    stadiumName: "Estadio	Las Palmas",
    stadiumCapacity: "5000",
    location: "Córdoba",
    history: 
    `
    In 1925, an immigrant from the Spanish town of Las Palmas de Gran Canaria arrived in the western part of the city and established a nursery with that name, which would ultimately be the name that the neighborhood and the club founded at the end of the 20th century would take. year 1933. The first president was Laureano Moreno.
    The club's home kit consists of a blue and red shirt, shorts and socks, its design varying over the years. The away kit consists of a white shirt, shorts and socks with blue and red details. The shirt of the 2016-2017 edition was the only one that had a yellow shirt and shorts with red details and red socks in honor of UD Las Palmas from Spain.
    `
  },
  {
    id: 141,
    clubName: "Club Atlético Alumni de Villa María",
    badgeImageUrl: "./img/Escudo_del_Club_Alumni_de_Villa_Maria.svg.png",
    coordinates: [-32.409115, -63.248793],
    formedIn: "1934",
    stadiumName: "Estadio Plaza Manuel Anselmo Ocampo",
    stadiumCapacity: "7000",
    location: "Villa María",
    history: 
    `
    Club Atlético Alumni was born from the merger of two other clubs from Villa María: Club Blanco y Negro and Club Internacional, on April 4, 1934.
    At that time, the union of two clubs from the Villa Aurora neighborhood gave birth to the new neighborhood club, which later, over the years and with titles, would become the city club. The name chosen by the founders, Atlético Alumni, was in honor of the first glorious team that Argentine football had, the Alumni Athletic Club of the Brown brothers, who disappeared in 1911. 

    `
  },
  {
    id: 142,
    clubName: "Club Atlético General Paz Juniors",
    badgeImageUrl: "./img/1920px-General_Paz_Juniors_logo.svg.png",
    coordinates: [-31.421851, -64.168844],
    formedIn: "1914",
    stadiumName: "Estadio Carlos Lalo",
    stadiumCapacity: "15,000",
    location: "Córdoba",
    history: 
    `
    Córdoba Athletic, founded in 1878 by the English employees who laid the first railway network, had introduced football to this city along with rugby, cricket and golf. his was the first champion and he maintained his leading role until 1914, when he abandoned the practice of football due to the lack of sporting chivalry in his rivals.
    On Monday, April 27, 1914, a group of young people from Pueblo General Paz, close to Athletic, met at 291 Esquiú Street, in front of Alberdi Square. His goal was to found a club where football could continue to be played. Thus, General Paz Junior's was born. 
    Dr. Guillermo Astrada was appointed as 1st president, and quickly registered the entity to participate in the 1st Division Championship. Just two weeks later, on May 10, 1914, he made his official debut against Argentino Peñarol. In that game that Juniors won 3-2 at the Belgrano stadium.
    `
  },
  {
    id: 143,
    clubName: "Club Atlético Belgrano de Paraná",
    badgeImageUrl: "./img/Club_Atl._Belgrano_de_Paraná.png",
    coordinates: [-31.727062, -60.521186],
    formedIn: "1911",
    stadiumName: "Nuevo Estadio Mondonguero",
    stadiumCapacity: "4000",
    location: "Paraná",
    history: 
    `
    Club Atlético Belgrano was founded by a group of students from the Escuela Normal de Paraná in 1911,3 under the name of Yunta Brava. The origin of the club took place near the fresh produce fair on Salta and Nogoyá streets in Paraná, from where the nickname of mondongueros comes from, due to the usual meals before or after the matches.
    Its first president, Guillermo Malmierca, was the one who decided to change the name of the club in honor of hero Manuel Belgrano and adopt the colors of the flag that he designed.
    `
  },
  {
    id: 144,
    clubName: "Club Atlético Uruguay",
    badgeImageUrl: "./img/Atl_uruguay_logo.png",
    coordinates: [-32.465597, -58.234668],
    formedIn: "1904",
    stadiumName: "Estadio Simón Luciano Plazaola",
    stadiumCapacity: "8000",
    location: "Concepción del Uruguay",
    history: 
    `
    Its classic rival is the Club Gimnasia y Esgrima de Concepción del Uruguay since they are the important clubs in the city.
    `
  },
  {
    id: 145,
    clubName: "Club Deportivo Libertad",
    badgeImageUrl: "./img/Escudo_del_Club_Libertad_de_Sunchales.svg.png",
    coordinates: [-30.941249, -61.558010],
    formedIn: "1910",
    stadiumName: "Hogar de los Tigres",
    stadiumCapacity: "4000",
    location: "Sunchales",
    history: 
    `
    Libertad was founded on May 25, 19101 with the name of Club Foot-Ball Libertad.9 On December 29, 1916 it obtained its first own soccer field. In 1925 the club bought a series of land on which it built its first stadium, the same location where the current football stadium is located.
    In 1927 the club's first roofed stand was built in the stadium and on June 28 of 1932, after an extraordinary assembly, the statute was reformed and the name was changed to Club Deportivo Libertad. In 1933, he played in the first division of Argentine soccer at the club.
    `
  },
  {
    id: 146,
    clubName: "Club Sportivo Ben Hur",
    badgeImageUrl: "./img/Sp_benhur_escudo.png",
    coordinates: [-31.263412, -61.497301],
    formedIn: "1940",
    stadiumName: "Estadio Parque Barrio Ilolay",
    stadiumCapacity: "12,000",
    location: "Rafaela",
    history: 
    `
    It was the year 1940, when Ideolindo Garrapa and Salvador Pasini, two regular friends of the Bar La Gloria de Rafaela, began to outline the idea of forming a new public space, which would summon the youth of the town. Garrapa's idea at first was to organize an open dance, to promote social gatherings. 
    Instead, and in view of the absence of sports entities in the south of the city, Pasini proposed the creation of a sports club to mainly promote the practice of soccer in youth. 
    In this way, Pasini's idea was accompanied by Garrapa and the entire bar of friends from Bar La Gloria, who began to hold meetings in a house located at Garibaldi 478, belonging to the Pesce family. There finally, on June 17, 1940, those present approved Pasini's idea, giving rise to the new Club Sportivo.
    However, a name for the new institution had yet to be defined. In this aspect, the first name that was proposed was Sportivo Barracas, however, it did not have a foothold since they considered that it would not arouse interest in the inhabitants. 
    It was there that the figure of Rubén Primo emerged, who, prior to one of the club's training meetings, had attended a movie with a group of friends, where the 1925 film Ben-Hur was shown, which It was the story of a warrior from the times of the Roman Empire. 
    The figure of the protagonist of the film was enough inspiration for Primo to propose his name for the club. In this way and with the approval of those present, the entity became known as Club Sportivo Ben Hur.
    `
  },
  {
    id: 147,
    clubName: "Club Atlético 9 de Julio de Rafaela",
    badgeImageUrl: "./img/9_julio_rafaela_logo.png",
    coordinates: [-31.248098, -61.497672],
    formedIn: "1904",
    stadiumName: "Estadio Germán Solterman Rafaela",
    stadiumCapacity: "8000",
    location: "Rafaela",
    history: 
    `
    At the beginning of the 20th century, more precisely mid-1904, in the small but incipient town of Rafaela, three 12-year-olds (Eduardo Tello, Luis Gunzinger and Atilio Scarazzini) decided to found a club, motivated by their passion for soccer. 
    Said club received the name "Central Norte" for the simple reason of the geographical space they occupied. The first matches took place on different vacant lots in the area.
    `
  },
  {
    id: 148,
    clubName: "Club Atlético San Jorge",
    badgeImageUrl: "./img/1920px-Club_Atlético_San_Jorge_Mutual_y_Social.svg.png",
    coordinates: [-31.904640, -61.868067],
    formedIn: "1912",
    stadiumName: "Parque 23 de Junio",
    stadiumCapacity: "6000",
    location: "San Jorge",
    history: 
    `
    At its birth the club was called Club San Jorge Unido, since it was the result of the merger between two entities: Everton and For Ever, both exclusively dedicated to football back in 1912. About Everton it is known that its President was Mr. Zunino and about For Ever, which was chaired by Carlos Strassburger (first president of Club San Jorge).
    For Ever was identified, since 1911, by the color red and the book of minutes used by its Board of Directors is the same one that later continued to be used by Club San Jorge Unido. This club had a very short institutional life: it was founded on August 4, 1911 and ended on June 23, 1912. (10 months and days).
    The Club San Jorge Unido was born on June 23, 1912. The Assembly began at 9:15 p.m. and after several deliberations, the merger of Everton and For Ever was proclaimed. 35 partners were present and Carlos Strassburger was elected as the first president.
    To choose the name of the club they went to vote with these results: San Jorge Unido 14, Unión y Fuerza 11 and San Jorge 10 votes. Two years later the partners decided to change its name to the current Club Atlético San Jorge.
    `
  },
  {
    id: 149,
    clubName: "Club Atlético Gimnasia y Esgrima de Santa Fe",
    badgeImageUrl: "./img/Gye_sfe_logo.png",
    coordinates: [-31.618810, -60.711586],
    formedIn: "1941",
    stadiumName: "Estadio Gigante de Ciudadela",
    stadiumCapacity: "8000",
    location: "Santa Fe",
    history: 
    `
    The birth of Gimnasia de Ciudadela is closely linked to another historic club in the city of Santa Fe, the Gimnasia y Esgrima Club, today popularly known as Gimnasia y Esgrima de 4 de Enero. 
    Everything goes back to the year 1901, when the Gymnastics, Pelota and Fencing club was founded. The objective of this was, as its name indicated, the development and practice of physical exercises, Basque Pelota, and Fencing for weapons training.
    `
  },
  {
    id: 150,
    clubName: "Club Sportivo Bernardino Rivadavia",
    badgeImageUrl: "./img/Sportivo_Rivadavia.png",
    coordinates: [-33.762141, -61.973815],
    formedIn: "1932",
    stadiumName: "El Coloso de Calle Sarmiento",
    stadiumCapacity: "6000",
    location: "Venado Tuerto",
    history: 
    `
    On Wednesday, June 22, 1932, something new was being born in Venado Tuerto. A group of friends who got together to play soccer in the Rivadavia neighborhood of the city decided to give free rein to their desire to do things together and decided to found a sports club.
    `
  },
  {
    id: 151,
    clubName: "Sport Club Cañadense",
    badgeImageUrl: "./img/Sport_club_canadense.png",
    coordinates: [-32.810527, -61.398822],
    formedIn: "1913",
    stadiumName: "Estadio Florencio Varni",
    stadiumCapacity: "2500",
    location: "Cañada de Gómez",
    history: 
    `
    The Sport Club Cañadense was born on August 5, 1913 after the merger of the "San Martín" soccer club and "Ciclista Cañadense". After the start of activities, work began on a leased property located on Brown and Necochea streets between Maipú and Laprida. In its beginnings it was a soccer, cycling and running club, which were the most deeply rooted sports of the time, which is why on July 5, 1914 the works for each discipline were inaugurated.
    `
  },
  {
    id: 152,
    clubName: "Club Atlético Argentino de Mendoza",
    badgeImageUrl: "./img/Atletico_Argentino_de_Mendoza_LOGO.png",
    coordinates: [-32.881546, -68.812719],
    formedIn: "1924",
    stadiumName: "Estadio Mauricio Serra",
    stadiumCapacity: "9000",
    location: "Mendoza",
    history: 
    `
    Club Atlético Argentino was officially founded on January 10, 1924, under the name of Club José Néstor Lencinas in homage to the then governor and popular leader of Mendoza. This is because its founder was a Lencinist doctor, whose name was Enrique Aguilera. In 1934 it was decided to name the club as Nacional Fútbol Club. His property was located in Godoy Cruz.
    On March 24, 1940, it merged with the clubs of the Sixth Section Pacific and Vélez Sarsfield to give rise to the Nacional Vélez Sársfield Pacific until December 2, 1945, the day and year in which it was renamed Club Atlético Argentino.
    `
  },
  {
    id: 153,
    clubName: "Gutiérrez Sport Club",
    badgeImageUrl: "./img/Logo_Gutierrez_Sport_Club.svg.png",
    coordinates: [-32.966579, -68.781187],
    formedIn: "1923",
    stadiumName: "Estadio General Gutiérrez",
    stadiumCapacity: "6500",
    location: "General Gutiérrez, Mendoza",
    history: 
    `
    Gutiérrez Sport Club was founded on June 17, 1923, in the “José Albino Gutiérrez” school, at that first moment, the club was called “Centro Deportivo General Gutiérrez”. 
    Among the founders were the gentlemen: Emilio Palero Infante, school teacher and who had the initiative, seeing the need for a sports center, aimed at promoting physical culture and cementing national sentiment; Mr. Ángel Campoy Pelayo, who was elected in that first meeting as the first president of the club, was also present Mario Berzio, who would later be a player and director of the club.
    `
  },
  {
    id: 154,
    clubName: "Atlético Club San Martín de Mendoza",
    badgeImageUrl: "./img/1920px-Escudo_Atlético_Club_San_Martín_de_Mendoza.gif",
    coordinates: [-33.079311, -68.481682],
    formedIn: "1927",
    stadiumName: "Estadio Libertador General San Martín",
    stadiumCapacity: "8782",
    location: "San Martín, Mendoza",
    history: 
    `
    The club was founded on December 22, 1927 by the teacher and director Emilio Robustiano Menéndez together with his students from the “Juventud San Martín” school. Its legal status was obtained only in 1933. The first shirt was white, blue and black with vertical sticks, which changed to only white and red in tribute to the Alumni Athletic Club (multi-champion team of the amateur era of Argentine soccer).
    `
  },
  {
    id: 155,
    clubName: "Club Atlético Palmira",
    badgeImageUrl: "./img/Atlético_Palmira_logo.png",
    coordinates: [-33.054112, -68.554442],
    formedIn: "1912",
    stadiumName: "",
    stadiumCapacity: "5000",
    location: "Palmira, Mendoza",
    history: 
    `
    The club came about through a group of railway workers who spent their free time playing football and decided to found an amateur club. This club was born under the name of “Tracción Talleres”. 
    Its current court was part of a piece of land next to the train tracks. For this reason, it was impossible for the grass to grow normally since it gave off debris that contaminated the land, but a hard and dry bush called Jarilla did grow, hence the nickname Jarillero to the institution.
    `
  },
  {
    id: 156,
    clubName: "Sport Club Pacífico",
    badgeImageUrl: "./img/Logo_SC_Pacífico_de_General_Alvear.svg.png",
    coordinates: [-34.971643, -67.690001],
    formedIn: "1922",
    stadiumName: "Esatdio Gigante de cemento",
    stadiumCapacity: "10000",
    location: "General Alvear",
    history: 
    `
    Officially, the Sport Club Pacífico was created on September 24, 1922 and not on the 22nd of the same month, as it was previously known. The first original minute book of the club details that on that day, at 10:30 a.m. and at Don José Natella's house, those interested in adding a new sports institution, a "Club Sportivo", to the department, and that it would be the second soccer club after the foundation of the Andes Football Club in 1916, they met with the purpose of giving impetus to an entity that would fundamentally promote 3 sports: soccer, box and tennis. The official chronicle then reveals that Pacífico was born on September 24 and that the first board of directors was chaired by the host, José Natella. 
    In that first meeting, the founders of the club decided to appoint "Mr. Roberts" as honorary president of the entity, who was serving as Traffic Chief of Cuyo of the Pacific Railroad, a road branch directly linked to the new institution, since he gave his name, and in front of whose station the club was created.
    `
  },
  {
    id: 157,
    clubName: "Club Atlético Colón Junior",
    badgeImageUrl: "./img/Free-vector-club-atletico-colon-junior-de-colon_048254_club-atletico-colon-junior-de-colon.png",
    coordinates: [-31.519029, -68.549681],
    formedIn: "1925",
    stadiumName: "Estadio Dr. Jorge R. Barassi",
    stadiumCapacity: "10.000",
    location: "Desamparados, San Juan",
    history: 
    `
    The entity was founded on November 2, 1925 to bring together the employees of Bodega Graffigna in the city of Desamparados, San Juan. The colors were inspired by blue and yellow overalls that employees used at that time. In 1961 the club changed its name to Colón Junior and adopted completely white clothing; hence the nickname "Merengues", since its colors were similar to Real Madrid of Spain. In 1987 the entity added to the original white color, the colors blue and yellow as secondary colors and small details on the shirt.
    `
  },
  {
    id: 158,
    clubName: "Club Atlético de la Juventud Alianza",
    badgeImageUrl: "./img/Escudoalianza2022.png",
    coordinates: [-31.611886, -68.527502],
    formedIn: "1905",
    stadiumName: "Estadio del Centenario",
    stadiumCapacity: "15.000",
    location: "Santa Lucía, San Juan",
    history: 
    `
    Football in Argentina was established in the mid-nineteenth century, at the hands of English immigrants who came to settle in the country and in the region. In the case of San Juan, this wave would reach the forefront of the upper class of society. 
    In parallel, the middle and lower class would give life to this famous sport. In 1893 the "Argentine Association Football League" was created, giving rise to the dream of unifying football at the national level. In these years and at the beginning of the 20th century, in the province, rural workers, descendants of immigrants or from both parties, being this massive sector of society that began neighborhood tournaments between groups of people who gave color and passion to the fun for know who was the best of all.
    `
  },
  {
    id: 159,
    clubName: "Club Sportivo Juan Bautista Del Bono",
    badgeImageUrl: "./img/Del_Bono_OK.png",
    coordinates: [-31.540273, -68.568666],
    formedIn: "1926 ",
    stadiumName: "Estadio Juan Bautista del Bono",
    stadiumCapacity: "5000",
    location: "Rivadavia",
    history: 
    `
    Born under the sign of viticulture. The club was founded on January 28, 1926 and the forerunner of this life was Juan Bartolomé Del Bono, a well-known winemaker from the western part of the province. 
    This denomination was instituted as a tribute to the father of the founder, who was the one who agreed to the request of the workers of his wineries and decided to give them a piece of land where the winery field is now located. The first president of the club was Sergeant Segundo Romero.
    `
  },
  {
    id: 160,
    clubName: "Club Atlético Juventud (Pergamino)",
    badgeImageUrl: "./img/1920px-Juventud_de_Pergamino.svg.png",
    coordinates: [-33.903852, -60.600306],
    formedIn: "1946",
    stadiumName: "Estadio Carlos Raúl Grondona",
    stadiumCapacity: "8000",
    location: "Pergamino",
    history: 
    `
    Club Atlético Juventud is an Argentine football club from the city of Pergamino, in the province of Buenos Aires. It was founded on July 13, 1946. It is known by the nicknames Los Celestes and La Juve.
    `
  },
  {
    id: 161,
    clubName: "Club Defensores de Salto",
    badgeImageUrl: "./img/Club_Defensores_de_Salto.svg.png",
    coordinates: [-34.287976, -60.243655],
    formedIn: "1922",
    stadiumName: "Estadio Carlos Testa",
    stadiumCapacity: "7500",
    location: "Salto",
    history: 
    `
    
It was founded on August 5, 1922, in the town of Salto, province of Buenos Aires. The first president of the sports entity was Nicolás Ainora. Yellow and green are the colors that have always identified the club throughout its history.
    `
  },
  {
    id: 162,
    clubName: "Club Atlético El Linqueño",
    badgeImageUrl: "./img/Club_linqueno_logo.png",
    coordinates: [-34.855972, -61.543312],
    formedIn: "1915",
    stadiumName: "Estadio Leonardo Costa",
    stadiumCapacity: "6500",
    location: "Lincoln",
    history: 
    `
    Already in 1914 there was an attempt to form "El Linqueño Football Club". But they had to wait until 1915, more precisely on June 6, to form the "Club Atlético El Linqueño". The main idea was that the city be reflected in the name of the institution. 
    The founders, mostly young, decided that the institution that represented them would not wear the colors addicted to the power of the day, but on the contrary, it should wear national colors such as blue and white. 
    Most of these young people were characterized by being progressive, intelligent, visionary, rebellious, in short, they think differently in pursuit of a more developed Argentina.
    Initially, the practice of football was stated as the central reason for its foundation, but the ideas that mobilized these young people meant that libraries, theater, chess and checkers, among others, would arrive along with sports. 
    A few days after the foundation, a large space with gymnastic equipment and a ball court was rented.
    `
  },
  {
    id: 163,
    clubName: "Club Rivadavia",
    badgeImageUrl: "./img/Escudo_del_Club_Rivadavia_de_Lincoln.svg.png",
    coordinates: [-34.876050, -61.518813],
    formedIn: "1915",
    stadiumName: "stadio El Coliseo",
    stadiumCapacity: "7500",
    location: "Lincoln",
    history: 
    `
    In 1915 the club was founded under the motto Work, love and faith, and José Petrella was appointed as the first president. 
    He participated in the creation of the Western Football Association, in order to organize and direct the tournaments officially. The headquarters was in Bragado. The first championship was organized in 1929. Rivadavia was the only Lincoln club among the founders of this association.
    `
  },
  {
    id: 164,
    clubName: "Club Atlético All Boys de Santa Rosa",
    badgeImageUrl: "./img/All_Boys_LP.png",
    coordinates: [-36.611860, -64.280777],
    formedIn: "1923",
    stadiumName: "Estadio Dr.Ramón Turnes",
    stadiumCapacity: "8000",
    location: "Santa Rosa",
    history: 
    `
    The "National College Association" was dedicated to the practice of soccer and had three divisions. In the last of those divisions the youngest men of the establishment played and some who did not belong to the school. The captain of that team was Alberto Lucero.
    A meeting had been scheduled to take place at the Rómulo Sebastián Naón stadium (now disappeared and located in the current block limited by 9 de Julio, Av. Roca, Ayala and Centeno streets in the city of Santa Rosa) with Club Sport and Culture of Uriburu. 
    Lucero was summoned to the First Division, which had to play in General Acha, therefore, and in his capacity as Captain of the Third Division, the match of that division against Uriburu was suspended.
    `
  },
  {
    id: 165,
    clubName: "Bella Vista de Bahía Blanca",
    badgeImageUrl: "./img/Bella_Vista_de_Bahía_Blanca_logo.svg.png",
    coordinates: [-38.711867, -62.245497],
    formedIn: "1921",
    stadiumName: "Estadio Ignacio Nicolás",
    stadiumCapacity: "4000",
    location: "Bahía Blanca",
    history: 
    `
    The most notable player in its history is Alfio Basile, who served as director of the Argentine soccer team and led the team to two Copa América titles. It is also worth mentioning the debut in their ranks of striker Rodrigo Palacio, runner-up in the World Cup
    `
  },
  {
    id: 166,
    clubName: "Club Atlético Huracán de Ingeniero White",
    badgeImageUrl: "./img/Huracan_white_badge.png",
    coordinates: [-38.781968, -62.253812],
    formedIn: "1916",
    stadiumName: "",
    stadiumCapacity: "4200",
    location: "Bahía Blanca",
    history: 
    `
    The club was founded in the neighborhood named Boulevard Juan B. Justo on May 27, 1916. Ingeniero White is the name of the population near the port of Bahía Blanca. In this place, Huracán plays its derby with Puerto Comercial.
    The swollen is known as "La Fiel" (The Faithful); and his fans are known as "cangrejeros" for the populations of crabs which are numerous in the coast of Bahía Blanca.
    `
  },
  {
    id: 167,
    clubName: "Club Atlético Sporting",
    badgeImageUrl: "./img/Escudo_del_Club_Atlético_Sporting.png",
    coordinates: [-38.881389, -62.064444],
    formedIn: "1925",
    stadiumName: "Estadio Enrique Mendizábal",
    stadiumCapacity: "12,000",
    location: "Punta Alta",
    history: 
    `
    In 1924, there was a team known as "Barrio la Hilacha" or "July 9" and, on several occasions, they moved to nearby towns to play friendly matches. Historically, this group is recognized as the first representative team and founder of what would later become Club Sporting.
    On February 20, 1925, several of the members of that group of friends, who played for "Barrio la Hilacha", met in a box located on 330 July 9th Street that belonged to the Saralegui family. After debating for hours, they decided to create the statutes of the new club and call a general assembly to be held five days later.
    So it was that on the night of February 25 of the same year, 14 enthusiastic boys gathered in the Mendizábal family's fifth house located on 9 de Julio Street, Brown corner. Together they resolved to formally create a new sports entity.
    `
  },
  {
    id: 168,
    clubName: "Club Atlético Huracán (Tres Arroyos)",
    badgeImageUrl: "./img/14400.png",
    coordinates: [-38.381167, -60.2635],
    formedIn: "1923",
    stadiumName: "Estadio Roberto Lorenzo Bottino",
    stadiumCapacity: "10,000",
    location: "Tres Arroyos",
    history: 
    `
    On January 3, 1923, at the Sarmiento Public Library in the city of Tres Arroyos, a meeting was held of young people who had separated for different reasons from the Club Atlético Costa Sud of this same city and thus constituted a sports entity with the name of "Huracán", whose name and logo pay homage to its namesake from the city of Buenos Aires. 
    The founders of this institution were Radicals, hence its nickname "Peludos" in reference to Hipólito Yrigoyen.
    Club Atlético Huracán does not have a shield, but a badge that unequivocally identifies it. It is a replica of the Club Atlético Huracán de Parque Patricios, consisting of a red balloon on a white background and was used on its first white shirt. the insignia is surrounded by an inscription that reads "Club Atlético Huracán - Tres Arroyos".
    his insignia, designed by the Parque Patricios club, was inspired by the hot air balloon of the same name, piloted by the forerunner of Argentine aviation, engineer Jorge Newbery, who gained notoriety at the end of 1909 by making a journey considered a feat for the time, crossing three countries: Argentina, Uruguay and Brazil.
    Said insignia was adopted by innumerable homonymous institutions throughout the country, and even abroad, which were born inspired by the repercussion and the good campaigns that the Hurricane of Parque Patricios conquered at that time.
    The flag that identifies the club was created on June 13, 1923. The person in charge was Mr. Daniel Alonso, the same one that flies in the club facilities to this day, and is entrusted to the associates Hugo Cravacuore, Egidio Naveyra and Roberto Gaztanaga to draw up the first Statute.
    `
  },
  {
    id: 169,
    clubName: "Racing Athletic Club de Olavarría",
    badgeImageUrl: "./img/Escudo_del_Club_Racing_de_Olavarria_-_BSAS.svg.png",
    coordinates: [-36.882762, -60.317927],
    formedIn: "1916",
    stadiumName: "Estadio José Buglione Martinese",
    stadiumCapacity: "6000",
    location: "Olavarría",
    history: 
    `
    Racing's first jersey was green and black. Years later it was changed to a navy blue jacket with a white five-pointed star on the chest, and from 1921 the current white badge was adopted with a blue star on the chest and blue pants.
    `
  },
  {
    id: 170,
    clubName: "Club Atlético Estudiantes de Olavarría",
    badgeImageUrl: "./img/Estudiantes_olavarria_logo.png",
    coordinates: [-36.897156, -60.332816],
    formedIn: "1912",
    stadiumName: "Parque Carlos Guerrero",
    stadiumCapacity: "7500",
    location: "Olavarría",
    history: 
    `
    It was founded on April 12, 1912 by a group of students from the Normal School, created in 1910. The club is located just six blocks from the city's Main Square, on the banks of the Tapalqué stream.
    `
  },
  {
    id: 171,
    clubName: "Club Ferrocarril Roca de Las Flores",
    badgeImageUrl: "./img/Escudo_del_Club_Ferrocarril_Roca_Las_Flores.png",
    coordinates: [-36.026598, -59.094430],
    formedIn: "1903",
    stadiumName: "Estadio Viaducto Ferroviario",
    stadiumCapacity: "1500",
    location: "Las Flores",
    history: 
    `
    At the beginning of the 20th century, the expansion of the railway in the province of Buenos Aires was projected as the best way so that, among other aspects. The then considered town of Las Flores would have a direct and faster communication channel with the federal capital.
    Among other investments carried out in the railway field, the mayor of the Las Flores party, Dr. Domingo Harosteguy, ceded the land for the construction of the club and, on August 30, 1903, it was founded under the name of Club Social y Deportivo. of the railway. 
    The foundation was carried out by a group of workers from the former General Roca Railway. In this way, Ferro becomes the oldest club in the city. Years later, the name was changed to Club Social y Deportivo Ferrocarril Roca, which it currently has.
    `
  },
  {
    id: 172,
    clubName: "Club Atlético Kimberley",
    badgeImageUrl: "./img/Kimberley_mdp_logo.png",
    coordinates: [-38.015779, -57.599703],
    formedIn: "1921",
    stadiumName: "Estadio José Antonio Valle",
    stadiumCapacity: "",
    location: "Mar del Plata",
    history: 
    `
    Kimberley was founded on July 6, 1921, by a group of boys who lived near Independencia and Alvarado avenues: Villante, Sanders, Sobran, Aizpún, Actis, Longhi, the Albide brothers, and the Melonios, Fulco, González Lombas, Manetti, Tesoriero, García, Gamba and others who wanted to represent and be "a serious soccer team."
    Kimberley gained world fame during the 1978 FIFA World Cup when France had to wear Kimberley's jerseys for their match against Hungary in Mar del Plata, after both teams arrived with only their white change strips
    `
  },
  {
    id: 173,
    clubName: "Club Atlético Germinal",
    badgeImageUrl: "./img/Club_Atlético_Germinal.svg.png",
    coordinates: [-43.290370, -65.113773],
    formedIn: "1922",
    stadiumName: "Estadio El Fortín de Rawson",
    stadiumCapacity: "10,000",
    location: "Rawson",
    history: 
    `
    The Germinal Club emerged on September 3, 1922, when some members of the Asociación Sportiva Rawson separated from the rest.
    `
  },
  {
    id: 174,
    clubName: "Racing Club de Edumopi Trelew",
    badgeImageUrl: "./img/1920px-Racing_de_Trelew.png",
    coordinates: [-43.284326, -65.266237],
    formedIn: "1920",
    stadiumName: "Estadio Cayetano Castro",
    stadiumCapacity: "13,000",
    location: "Trelew",
    history: 
    `
    Racing was born in 1920, after the departure of several players from Trelew Athletic Club, who started the institution under the name of Nacional.
    This merger received the name of Nacional Racing Club.
    The National Racing Club had to change its name since in 1946, a provision of the Executive Branch prohibited the use of the word "National" in the names of private institutions or associations.
    This is how on October 22, 1946 the name of Racing Club de Trelew was made official, at the same time that its legal status was granted.
    `
  },
  {
    id: 175,
    clubName: "Comisión de Actividades Infantiles (C.A.I.)",
    badgeImageUrl: "./img/Cai_comodoro.png",
    coordinates: [-45.838453, -67.485317],
    formedIn: "1984",
    stadiumName: "Estadio Municipal de Comodoro Rivadavia",
    stadiumCapacity: "8500",
    location: "Comodoro Rivadavia",
    history: 
    `
    It begins in 1984 with the aim of promoting children's indoor soccer. His first match in Argentine official soccer was on January 13, 1994, debuting in the second category of Comodoro Rivadavia soccer against Oeste Juniors, being the authors of the goals Hugo Barrientos and Andrés Silvera.
    `
  },
  {
    id: 176,
    clubName: "Club Atlético Huracán de Comodoro Rivadavia",
    badgeImageUrl: "./img/club-atletico-huracan-de-comodoro-rivadavia-chubut-logo-4C4BDD5E99-seeklogo.com.png",
    coordinates: [-45.886218, -67.529177],
    formedIn: "1927",
    stadiumName: "Estadio César Muñoz",
    stadiumCapacity: "6500",
    location: "Comodoro Rivadavia",
    history: 
    `
    It was founded on December 22, 1927 in the city of Comodoro Rivadavia; Due to inconveniences, a nucleus of Gimnasia y Esgrima fans separated to form a new club. 
    Inspired by their namesake from Buenos Aires, they decide to call the new institution "Huracán", with the firm intention of beginning their activities with a mentality of winning and being great.
    `
  },
  {
    id: 177,
    clubName: "Jorge Newbery de Comodoro Rivadavia",
    badgeImageUrl: "./img/jorge-newbery-de-comodoro-barrabrava-net.png",
    coordinates: [-45.863959, -67.504344],
    formedIn: "1924",
    stadiumName: "Estadio Jorge Newbery",
    stadiumCapacity: "5000",
    location: "Comodoro Rivadavia",
    history: 
    `
    The Club Atlético Jorge Newbery was officially established on 19 April 1924 as "Nacional Foot-Ball Club". The club formed from the merge of two clubs from the city: Sportivo Rivadavia and Correos y Telégrafos. On 23 May 1934 the club was forced to change its name because of a decree promulgated by de facto President of Argentina Agustín Pedro Justo. That decree established the prohibition of using the word "National" in any entity or particular association.
    On 30 June 1934 an assembly was held to rename the institution. One of the proposals was "Argentinos del Sud" although the club finally chose the name "Jorge Newbery" as a tribute to the most important sportsman to date.
    `
  },
  {
    id: 178,
    clubName: "Deportivo Cruz del Sur de Bariloche",
    badgeImageUrl: "./img/25188.png",
    coordinates: [-41.139420, -71.289629],
    formedIn: "1988",
    stadiumName: "Estadio Municipal José Antonio Jalil",
    stadiumCapacity: "3000",
    location: "Bariloche",
    history: 
    `
    The club was founded in 1988 as a children's football school.
    `
  },
  {
    id: 179,
    clubName: "Club Social y Deportivo Patagones",
    badgeImageUrl: "./img/patagones.png",
    coordinates: [-40.810547, -62.981098],
    formedIn: "1989",
    stadiumName: "Estadio Tricolor",
    stadiumCapacity: "5000",
    location: "Carmen de Patagones",
    history: 
    `
    Club Social y Deportivo Patagones was founded on December 27, 1989. It was initially created with the merger of Club Atlético Emilio Miter and Atlético y Social El Ciclón, two sports entities from the city of Carmen de Patagones, Argentina.
    `
  },
  {
    id: 180,
    clubName: "Club Social y Deportivo General Roca",
    badgeImageUrl: "./img/Deproca_logo.png",
    coordinates: [-39.040451, -67.573538],
    formedIn: "1974",
    stadiumName: "Estadio Maiolino",
    stadiumCapacity: "8000",
    location: "General Roca",
    history: 
    `
    The club has played in the highest category of Argentine soccer on two occasions, qualifying to participate in the National Tournament of 19786 and 1982.
    `
  },
  {
    id: 181,
    clubName: "Asociación Deportiva Centenario",
    badgeImageUrl: "./img/Centenario-Neuquen.png",
    coordinates: [-38.839254, -68.133923],
    formedIn: "1977",
    stadiumName: "Estadio	Vicente Consoli",
    stadiumCapacity: "16,000",
    location: "Centenario",
    history: 
    `
    The club was founded on June 13, 1977 in the city of Centenario, Neuquén and has sections in other sports such as volleyball that plays in the Argentine Volleyball League, hockey, figure skating, bowls, newcom, taekwondo and basketball that plays in the Federal Basketball Tournament where they have been most successful. In the last season of the TFB, they qualified for the Round of 16, disputing the home run against Club Pergamino, Club Estudiantes de la Plata and All Boys de La Pampa. It is the club with the largest fans in the city.

    `
  },
  {
    id: 182,
    clubName: "Club Atlético Maronese",
    badgeImageUrl: "./img/22500.png",
    coordinates: [-38.929616, -68.112716],
    formedIn: "1996",
    stadiumName: "Ciudad De Neuquén",
    stadiumCapacity: "6000",
    location: "Neuquén",
    history: 
    `
    Club Atlético Maronese, better known as el dino, is a club from the city of Neuquén. Los dinos is one of the few teams that has an artificial grass and natural grass field in its facilities.
    `
  },
  {
    id: 183,
    clubName: "Club Social y Deportivo Alianza (Cutral Co)",
    badgeImageUrl: "./img/14028710.png",
    coordinates: [-38.93673, -69.22112],
    formedIn: "1979",
    stadiumName: "Estadio Alvaro Pedro Ducás",
    stadiumCapacity: "16,500",
    location: "Cutral Co",
    history: 
    ` 
    The club was born in mid-1979 after the merger of two local teams, Club Centro Cultural y Deportivo Cutral-Có and Juventud Unida, and after its creation began to play the LIFUNE tournaments.
    `
  },
  {
    id: 184,
    clubName: "Club Atlético Independiente de Neuquén",
    badgeImageUrl: "./img/IndependientedeNQN.png",
    coordinates: [-38.971991, -68.007321],
    formedIn: "1921",
    stadiumName: "Estadio La Chacra",
    stadiumCapacity: "5000",
    location: "Neuquén",
    history: 
    `
    It was founded on February 27, 1921 by the Italian pharmacist Ferruccio Verzegnassi, with the aim of creating an "independent" social club from Club Atlético Pacífico and Atletic Club Neuquén.
    `
  },
  {
    id: 185,
    clubName: "Asociación Atlético Boxing Club",
    badgeImageUrl: "./img/Logo_Boxing_Club.png",
    coordinates: [-51.62911, -69.22681],
    formedIn: "1920",
    stadiumName: "Estadio Ciudad del Centenario",
    stadiumCapacity: "1500",
    location: "Río Gallegos",
    history: 
    `
    The club was founded in 1920 by a group of neighbors. The name "Boxing Club" was suggested by the first deputy chairman of the club, Alfonso Martínez, a boxing fan.
    Boxing Club had an important social role in the city of Río Gallegos, being responsible for creating the first volunteer fire department of Patagonia in February 1926.
    `
  },
  {
    id: 186,
    clubName: "Argentino de Merlo",
    badgeImageUrl: "./img/Argentino_de_Merlo.png",
    coordinates: [-34.646087, -58.730976],
    formedIn: "1906",
    stadiumName: "Estadio del Argentino de Merlo",
    stadiumCapacity: "9000",
    location: "Merlo, Buenos Aires",
    history: 
    `
    The club was founded in 1906 by a group of young workers from Estación Merlo (Merlo Station) of the Buenos Aires Western Railway. Originally conceived as a football and rugby union team, the club had its own facilities where not only football but tennis and cricket were played.
    At the end of the 1920s, Argentino moved to a land where only tennis could be practised. Two years later the club built its football stadium although in 1920 the club moved again to Merlo, Buenos Aires, where its headquarters still remain. In 1933 Argentino signed the purchase of those lands where the current headquarters were built.
    `
  },
  {
    id: 187,
    clubName: "Club Atlético Atlas",
    badgeImageUrl: "./img/Club_atlas_arg_logo.png",
    coordinates: [-34.610274, -58.908473],
    formedIn: "1951",
    stadiumName: "Estadio Ricardo Puga,",
    stadiumCapacity: "2500",
    location: "General Rodríguez, Buenos Aires",
    history: 
    `
    The club was founded on 17 August 1951 by a group of sportsmen under the name "Club Social y Deportivo Atlas". The team, coached by Ricardo Puga, took part in the Evita children tournaments. In 1965 Atlas affiliated to Argentine Football Association and began to play in the then last division of Argentine football league system, the "Torneo de Aficionados" championship (current Primera D). In 1970 the club changed its name to "Club Atlético Atlas", moving that same year from Colegiales neighborhood in Buenos Aires to the suburb of General Rodríguez, where they had constructed its stadium.
    `
  },
  {
    id: 188,
    clubName: "Asociación Deportiva Berazategui",
    badgeImageUrl: "./img/Berazategui_Logo.png",
    coordinates: [-34.7587, -58.1971],
    formedIn: "1975",
    stadiumName: "Estadio Norman Lee",
    stadiumCapacity: "5500",
    location: "Berazategui, Buenos Aires",
    history: 
    `
    The club was founded on 18 September 1975 during a meeting held in Alfredo San Miguel's house in Berazategui. The club's first president was Giberto Martín. The orange colour that identifies the club was inspired by the Netherlands national football team which was a sensation during the 1974 FIFA World Cup. 
    In March 1976 the club affiliated to the Argentine Football Association (AFA), making its debut in Primera D that same year. In its first season playing official matches, Berazategui finished second to Defensores de Cambaceres (that would win the champion) and therefore promoted to the upper level division, the Primera C.
    The stadium receives the name of a former manager who worked for the Coca-Cola company (Reginald Lee S.A) and who contributed land for the construction of the first stadium that was located on land just behind the famous beverage company.
    `
  },
  {
    id: 189,
    clubName: "Club Atlético Central Córdoba de Rosario",
    badgeImageUrl: "./img/1920px-Central_Córdoba_Rosario_Escudo.svg.png",
    coordinates: [-32.970708, -60.636278],
    formedIn: "1906",
    stadiumName: "Estadio Gabino Sosa",
    stadiumCapacity: "17,000",
    location: "Rosario",
    history: 
    `
    The club was founded in 1906 by a group of railway workers and named after the Córdoba Central Railway that ran from Retiro railway station to Córdoba through Rosario. 
    The nickname "Charrúas" was born from a misspelling, when the journalist Alejandro Berrutti wrote an article in "La Nota" (a satirical newspaper printed in Rosario) where he wrongly named "Arturo Charrúa" to Arturo Charra, the manager who represented Central Córdoba in the Rosario Football League. This mistake has remained as the most popular nickname for Central Cordoba since then, such as the Club and players as its supporters too.
    `
  },
  {
    id: 190,
    clubName: "Club Atlético Claypole",
    badgeImageUrl: "./img/Claypole.png",
    coordinates: [-34.801793, -58.329095],
    formedIn: "1923",
    stadiumName: "Estadio Rodolfo Capocasa",
    stadiumCapacity: "3500",
    location: "Claypole, Buenos Aires",
    history: 
    `
    The club was founded on October 1, 1923. It is claimed that kit uniform was inspired by English side Sunderland even though Sunderland have worn a red and white kit since 1887.
    `
  },
  {
    id: 191,
    clubName: "Deportivo Español",
    badgeImageUrl: "./img/Logotipo_Oficial_y_Escudo_del_Club_Deportivo_Espanol.svg.png",
    coordinates: [-34.657922, -58.464539],
    formedIn: "1956",
    stadiumName: "Estadio Nueva España",
    stadiumCapacity: "32,500",
    location: "Parque Avellaneda, Buenos Aires",
    history: 
    `
    The club was founded in 1956 with the name "Club Deportivo Español" on October, 12. The date was chosen as its foundation date to commemorate the arrival of Christopher Columbus to the Americas. Club's first headquarters was in the bar "La Mezquita" of Buenos Aires, and after two years of being founded Deportivo Español had about 2,000 members, mostly of them were Spanish descendant living in Argentina.
    `
  },
  {
    id: 192,
    clubName: "Club El Porvenir",
    badgeImageUrl: "./img/Club_Elporvenir_logo.png",
    coordinates: [-34.693139, -58.386389],
    formedIn: "1915",
    stadiumName: "Estadio Gildo Francisco Ghersinich",
    stadiumCapacity: "14,000",
    location: "Gerli, Buenos Aires",
    history: 
    `
    The club was established on 12 September 1915 in Villa Porvenir, Avellaneda Partido, primarily as a Greco-Roman wrestling club. The football team debuted in official tournaments in 1918, playing its home games at the Club "Sígame Si Puede" ("Follow me if You can", in Spanish, current Sportivo Dock Sud).
    `
  },
  {
    id: 193,
    clubName: "Club Atlético Excursionistas",
    badgeImageUrl: "./img/Excursionistas_logo.png",
    coordinates: [-34.5589, -58.443],
    formedIn: "1910",
    stadiumName: "Estadio de Excursionistas",
    stadiumCapacity: "7200",
    location: "Belgrano, Buenos Aires",
    history: 
    `
    The club was founded in 1910 in the Belgrano neighborhood of Buenos Aires. The name "Excursionistas" (which could roughly be translated as "Voyagers" from Spanish to English) was chosen due to the founders' constant trips (voyages) to the Paraná River and Isla Maciel to compete in athletic tournaments. They initially named the club "Club Unión Excursionistas".
    The first jersey worn was green (for the color of grass) with a horizontal white stripe (white referred to the tablecloths used in the picnics they frequently had).
    `
  },
  {
    id: 194,
    clubName: "Club Atlético General Lamadrid",
    badgeImageUrl: "./img/Club_lamadrid_logo.png",
    coordinates: [-34.612526, -58.515137],
    formedIn: "1950",
    stadiumName: "Estadio Enrique Sexto",
    stadiumCapacity: "3,000",
    location: "Villa Devoto, Buenos Aires",
    history: 
    `
    This club was founded on May 11, 1950, by a group of people who decided to form a Board of Directors for the club, although the idea of ​​founding a club had been circulating since 1939. Since a few months before the foundation of the club, already friendly matches were played every weekend and on holidays with clubs in the area, the neighborhood classic being the neighboring Kimberley Athletic Club.
    On Saturday 21 March 2009, during a match facing Barracas Bolívar (now Sportivo Barracas), 18 Lamadrid players were sent off after they got into a violent confrontation with Barracas' supporters. The fight started when a group of youth players from Lamadrid (who were watching the match on their seats) began a discussion with some Barracas' fans. The discussion soon turn into a fight and the players from both teams jumped from field to the grandstand to take part on the fight as well.
    `
  },
  {
    id: 195,
    clubName: "Club Social y Cultural Deportivo Laferrere",
    badgeImageUrl: "./img/Laferrere.png",
    coordinates: [-34.752615, -58.592202],
    formedIn: "1956",
    stadiumName: "Estadio Ciudad de Laferrere",
    stadiumCapacity: "10,000",
    location: "La Matanza Partido, Buenos Aires",
    history: 
    `
    The residents of the area express their desire to form a soccer team. The group made up of, among others, José and Antonio Parisi, Roque Leoncini, Américo Vigas, Ismael Etcheverry, Javier Paniagua, Antonio Narciso, Alejandro Cruz, Francisco Biafora, Quico Robledo, Juan Carlos Enríquez, Hugo Valdez and "Nene" Ortiz agreement, but it remains to define the color of the shirt. Point of conflict, because each one wants the new club to adopt the colors of their favorite. To avoid friction, it is resolved that the older ones provide the solution.
    After several meetings without agreement, the decision is entrusted to chance and a draw is made, each contributing the name of their favorite institution. José Parisi (Independent) is the winner.
    Saved the problem of colors, they themselves have the funds to buy the shirts. Each one takes care of his own and as a sign of war wears it tied to his head for the challenge matches (they never play official tournaments).
    In 1956 they begin to play daily on the land that surrounds the streets where the field is located today. The team is “Independent”, because of the Avellaneda red and lengthens the coffee nights that Jacobo Neyman has in Magnasco and Rocha (today Rodney) germinating the idea of ​​intervening in the Laferrerista Neighborhood League. Later it would adopt its final colors green and white. To put the signature to so much intention, Deolegario Velasco is commissioned. There arises the need to formalize an institution with headquarters that guarantees their actions.
    After several debates in the butcher shop that Ismael Etcheverry has in Coronel Isleños and Santa Catalina (today Obligado) and others in the Manuel Valdez coal shop, on July 9, 1956, the CLUB SOCIAL Y CULTURAL SPORTIVO LAFERRERE was born.

    `
  },
  {
    id: 196,
    clubName: "Club Deportivo y Mutual Leandro N. Alem",
    badgeImageUrl: "./img/Leandro_N._Alem.png",
    coordinates: [-34.604487, -58.956847],
    formedIn: "1925",
    stadiumName: "Estadio de Leandro N. Alem",
    stadiumCapacity: "4000",
    location: "General Rodríguez, Buenos Aires",
    history: 
    `
    In the shoe workshop of the young Salvador Seminara, on May 10, 1925, a group of friends and fans of the manly sport met with the purpose of forming a soccer club. The aforementioned workshop, usually crowded with those who used to share some mates with the popular "torocho" and talk about the triumphant tour of Boca Juniors through Europe, occupied a small room on Avenida España, almost on the corner of Sarmiento, very close to the current number 300.

    `
  },
  {
    id: 197,
    clubName: "Club Social y Deportivo Liniers",
    badgeImageUrl: "./img/Club_liniers_logo.png",
    coordinates: [-34.704083, -58.552239],
    formedIn: "1931",
    stadiumName: "Estadio Juan Antonio Arias",
    stadiumCapacity: "5000",
    location: "La Matanza Partido, Buenos Aires",
    history: 
    `
    The club was founded on July 2, 1931,10 by a group of young people who called it Sarmiento. When they lost the field, they merged with Club Atlético Sportivo Liniers Sud. They played amateur soccer until 1941, when they joined the A.F.A. and began to collate the Third of Ascent tournament.
    `
  },
  {
    id: 198,
    clubName: "Club Luján",
    badgeImageUrl: "./img/Club_Luján_logo.svg.png",
    coordinates: [-34.587689, -59.123437],
    formedIn: "1936",
    stadiumName: "Estadio 1 de Abril",
    stadiumCapacity: "2000",
    location: "Luján, Buenos Aires",
    history: 
    `
    The club was originally named "River Plate" as a tribute to the famous Argentine team with the same name (wearing a similar uniform as well), but then it was obliged to change its name due to legal issues. Therefore, the team was renamed as "Club Luján", which has remained since (and its jersey still remains the same as River Plate). In 1954 Atilio Ferrari and Juan Pescio requested the affiliation to the Argentine Football Association in order to play in the Second Division league.
    Ferrari and Pescio represented the claim of the citizens from Luján, who had not major interest in their own football tournament, because they considered that league was not good enough. Because of that, fans preferred to move to Buenos Aires or to watch football matches on TV, which caused financial losses to the Luján former clubs.
    `
  },
  {
    id: 199,
    clubName: "Club Atlético Ferrocarril Midland",
    badgeImageUrl: "./img/Club_Atlético_Ferrocarril_Midland.png",
    coordinates: [-34.6898, -58.6869],
    formedIn: "1914",
    stadiumName: "Estadio Ciudad de Libertad",
    stadiumCapacity: "4000",
    location: "Libertad, Buenos Aires",
    history: 
    `
    The club was founded on June 28, 1914 by workers of the Buenos Aires Midland Railway with the objective to participate in some sports and other social activities. In 1929 the club was divided into two divisions: "Club Midland" and "Club Atlético Libertad", but they were reunited in 1933.
    `
  },
  {
    id: 200,
    clubName: "Club Atlético Puerto Nuevo",
    badgeImageUrl: "./img/PuertoNuevo.png",
    coordinates: [-34.194157, -58.947584],
    formedIn: "1939",
    stadiumName: "Estadio Rubén Carlos Vallejos",
    stadiumCapacity: "1000",
    location: "Campana",
    history: 
    `
    Their name was inspired by a film called Puerto nuevo, starring Pepe Arias. Its colours are inspired by Atlanta. Apart from football, Puerto Nuevo also hosts the practise of swimming, tennis and volleyball.
    `
  },
  {
    id: 201,
    clubName: "Real Pilar Fútbol Club",
    badgeImageUrl: "./img/CfRpil.png",
    coordinates: [-34.468507, -58.919720],
    formedIn: "2017",
    stadiumName: "Estadio Municipal de Pilar-Carlos Barraza",
    stadiumCapacity: "10,000",
    location: "Pilar, Buenos Aires",
    history: 
    `
    The club was established by entrepreneur César Mansilla, that had previously worked for Mauricio Macri, Chief of Government of Buenos Aires by those times. Mansilla was also a personal friend of Boca Juniors (and then Argentine Football Association –AFA vice-president) Daniel Angelici.
    `
  },
  {
    id: 202,
    clubName: "Club Social y Deportivo San Martín de Burzaco",
    badgeImageUrl: "./img/Escudo_Sanma.png",
    coordinates: [-34.820194, -58.401506],
    formedIn: "1936",
    stadiumName: "Estadio Francisco Boga",
    stadiumCapacity: "4000",
    location: "Burzaco, Buenos Aires",
    history: 
    `
    In the 1860s the Buenos Aires Great Southern Railway built 22 km (14 mi) a warehouse with a train station, which was named in honour of Francisco and Eugenio Burzaco, who donated the largest portion of lands for the construction and development of tracks and stations. The town of Burzaco gradually developed around it.
    The club was founded about 70 years later, and named "San Martín" as a tribute to José de San Martín, who liberated Argentina, Chile and Perú from the Spanish Empire.
    Since the beginning of the professional era of Argentine football in 1931, the club has never played in the top divisions.
    `
  },
  {
    id: 203,
    clubName: "Club Sportivo Italiano",
    badgeImageUrl: "./img/Sp_italiano_logo.png",
    coordinates: [-34.738056, -58.517222],
    formedIn: "1955",
    stadiumName: "Estadio República de Italia",
    stadiumCapacity: "8000",
    location: "Ciudad Evita, Buenos Aires",
    history: 
    `
    The club was founded on May 7, 1955, by Italian immigrants who lived in Florida neighbourhood (part of Vicente López Partido in the Greater Buenos Aires). The club was originally named "Associazione del Calcio Italiano in Argentina". 
    In 1978 the institution merged with Sociedad Italiana and changed its name to "Club Deportivo Italiano". The club's last name change occurred in 2000, when it became known under its current denomination "Club Sportivo Italiano".
    The team mainly appeared in the 2nd and third division of Argentine football, although in the 1986–87 played its only season in the Argentine top flight. Despite finishing bottom of the league and being relegated, this was its highest league finish ever.
    `
  },
  {
    id: 204,
    clubName: "Club Atlético Victoriano Arenas",
    badgeImageUrl: "./img/Victoriano_arenas_escudo.png",
    coordinates: [-34.659553, -58.397845],
    formedIn: "1928",
    stadiumName: "Estadio Saturnino Moure",
    stadiumCapacity: "1500",
    location: "Lanús, Buenos Aires",
    history: 
    `
    In 1998 an historical event happened at Victoriano Arenas stadium, when Florencia Romano became the first female referee being assigned to a professional men's football match.
    `
  },
  {
    id: 205,
    clubName: "Club Atlético Argentino de Rosario",
    badgeImageUrl: "./img/Argentinos_de_rosario.png",
    coordinates: [-32.907531, -60.683767],
    formedIn: "1912",
    stadiumName: "Estadio José Martín Olaeta",
    stadiumCapacity: "6800",
    location: "Rosario",
    history: 
    `
    On January 15, 1912, the Club Atlético de Mayo was founded. Later it was renamed Embarcadero Córdoba-Rosario, since its partners were employees at the Embarcadero created by the Central Railway of Córdoba, next to the CC3 branch of the Belgrano Railway. 
    With that name he acted for a few years in the Rosario Football Association. Later, the club was called Club Atlético Nacional, a name under which it competed in the 1933 Beccar Varela Cup, reaching the round of 16 where it was eliminated after falling 3-2 against Racing Club. Finally, it was known as Club Atlético Argentino, its current name.
    `
  },
  {
    id: 206,
    clubName: "Club Social y Deportivo Central Ballester",
    badgeImageUrl: "./img/Escudo-Central-.Ballester.png",
    coordinates: [-34.501404, -58.587855],
    formedIn: "1974",
    stadiumName: "Estadio Predio Cacique",
    stadiumCapacity: "1100",
    location: "Boulogne Sur Mer, Buenos Aires",
    history: 
    `
    The club was founded on October 26, 1974, by a group of fans who did not accept the closure of the club where they used to meet ("Club Atlético Central Argentino"). Not conceived as a continuity of the original, Central Ballester promoted to Primera C but soon returned to the lowest division of AFA affiliated football.
    Central Ballester's uniform colors and pattern are based on Rosario Central's kit, and its squad and supporters are nicknamed the same as the City of Rosario club (Canallas) as well.
    During the 1995 Torneo Apertura, the team clothes (including the jersey uniforms worn on field) were stolen from the club lockers. 
    Consequently Central Ballester began a desperate search for new equipment in order to assist to play the next fixture but the club had not enough money to buy new uniforms due to its debts (something common in lowest level of the Argentine football). The solution came from the club Rosario Central which donated its own uniforms with the badge and sponsors printed on jerseys. Central Ballester won the 1995 Apertura using the Rosario Central original jerseys for most of that tournament
    `
  },
  {
    id: 207,
    clubName: "Centro Social y Recreativo Español",
    badgeImageUrl: "./img/Escudo-Centro-Español.png",
    coordinates: [-34.665563, -58.663714],
    formedIn: "1934",
    stadiumName: "En Construcción. Hace de local en el Estadio Carlos Alberto Sacaan",
    stadiumCapacity: "5500",
    location: "Villa Sarmiento, Buenos Aires",
    history: 
    `
    It was founded on June 24, 1934 by a group of enthusiasts from the Spanish community, particularly residents of the Haedo area,16 including David González, Jesús García and Perfecto Martínez, with the aim of practicing sports, not only soccer, but different activities such as basketball, volleyball, paddle ball and fencing, among others.
    `
  },
  {
    id: 208,
    clubName: "Club Defensores de Cambaceres",
    badgeImageUrl: "./img/Cambacerees.png",
    coordinates: [-34.862768, -57.916671],
    formedIn: "1921",
    stadiumName: "Estadio 12 de octubre",
    stadiumCapacity: "3000",
    location: "Ensenada",
    history: 
    `
    The club was founded in 1921 with the name "Club Social y Deportivo Defensores de Cambaceres" (Defenders of Cambaceres Social and Sports Club), and the kit color (red) was chosen as an homage to Independiente, one of the most successful teams of Argentina. Cambaceres was not affiliated to the Argentine Football Association until 1957.
    `
  },
  {
    id: 209,
    clubName: "Club Deportivo y Social Juventud Unida de San Miguel",
    badgeImageUrl: "./img/Escudo-Juventud-Unida.png",
    coordinates: [-34.551321, -58.701986],
    formedIn: "1949",
    stadiumName: "Estadio Ciudad de San Miguel",
    stadiumCapacity: "3200",
    location: "San Miguel, Buenos Aires",
    history: 
    `
    The club was founded on 6 September 1949 by a group of young enthusiasts at a bar, they named it "Juventud Unida". After that, the club took part in several competitions in General Sarmiento, where they won many titles. In the 1950s Juventud Unida increased its number of members so the club added new sections such as basketball, boxing, volleyball, and bocce.
    `
  },
  {
    id: 210,
    clubName: "Club Atlético Lugano",
    badgeImageUrl: "./img/Escudolugano1.png",
    coordinates: [-34.703333, -58.513611],
    formedIn: "1915",
    stadiumName: "Estadio José María Moraños",
    stadiumCapacity: "2000",
    location: "Villa Lugano, Buenos Aires",
    history: 
    `
    The club was founded on 18 November 1915 by workers of French-owned railway company Compañía General de Ferrocarriles en la Provincia de Buenos Aires (then Ferrocarril General Manuel Belgrano). Its original name was "Club Compañía General Belgrano". The team earned its affiliation to Argentine Football Association in 1924 in order to compete in the intermediate category. in 1953 General Belgrano changed its name to "Club Atlético General Belgrano de Lugano".
    `
  },
  {
    id: 211,
    clubName: "Club Mercedes",
    badgeImageUrl: "./img/Club_mercedes_badge.png",
    coordinates: [-34.633130, -59.431167],
    formedIn: "1875",
    stadiumName: "Estadio Liga Mercedina",
    stadiumCapacity: "5000",
    location: "Mercedes",
    history: 
    `
    Club Mercedes was founded by Dr. Manuel Lanchenhein under the name "Club Social". It was the institution chosen by the traditional families of Mercedes, who used to attend the conferences, banquets and dances held by the club.
    In 1935, the Club Social merged with Club Deportivo, forming current "Club Mercedes.
    `
  },
  {
    id: 212,
    clubName: "Club Atlético Deportivo Paraguayo",
    badgeImageUrl: "./img/Lrg_Deportivo_Paraguayo.png",
    coordinates: [-34.739647, -58.63350],
    formedIn: "1961",
    stadiumName: "N/A",
    stadiumCapacity: "3000",
    location: "González Catán, Buenos Aires",
    history: 
    `
    Founded in 1961 by the Paraguayan community living in Buenos Aires
    `
  },
  {
    id: 213,
    clubName: "Club Sportivo Barracas",
    badgeImageUrl: "./img/Sportivo_Barracas.png",
    coordinates: [-34.651680, -58.380267],
    formedIn: "1913",
    stadiumName: "N/A",
    stadiumCapacity: "N/A",
    location: "Barracas, Buenos Aires",
    history: 
    `
    The club was founded on October 30, 1913, in its headquarters still located in the barrio of Barracas in Buenos Aires, as "Club Sportivo Barracas", after Riachuelo F.C. merged to it. 
    The club bought the Riachuelo F.C. facilities on Iriarte and Santa Elena streets to play football there. Riachuelo had played its only season in Primera División in 1913, being relegated to División Intermedia after finishing last. Sportivo Barracas took its place in the division.
    `
  },
  {
    id: 214,
    clubName: "Club Social y Deportivo Yupanqui",
    badgeImageUrl: "./img/Yupanqui_club_logo.png",
    coordinates: [-34.727724, -58.524207],
    formedIn: "1935",
    stadiumName: "Estadio Yupanqui",
    stadiumCapacity: "700",
    location: "Ciudad Evita, Buenos Aires",
    history: 
    `
    Yupanqui gained some notoriety in Argentina after a Coca-Cola television advertisement where it was referred to as the club with the least fans in Argentina.
    Before the Coca-Cola advertisement, the average number of fans that would show up to each game was between 5 and 7. After the advertisement, about 50 new club members joined. Even after the spike in recognition, the money they made was used for several projects such as restoring bathrooms, build a theater, a chess room, and the soccer team didn't receive any funding, even though they were solely responsible for all the recognition the club had received.
    `
  },
  {
    id: 216,
    clubName: "Andes Talleres Sport Club",
    badgeImageUrl: "./img/AndesTalleres.png",
    coordinates: [-32.908163, -68.839934],
    formedIn: "1933",
    stadiumName: "Estadio Ingelmo Nicolás Blázquez",
    stadiumCapacity: "11,000",
    location: "Mendoza",
    history: 
    `
    It was born from the merger of the Athletic Club Tracción and Talleres Pacífico (founded on February 1, 1932), the merger was carried out on January 1, 1933, in an assembly called for that purpose, and an anniversary date was established on September 9, 1932. We can say that 3 were the emblematic sports that throughout its history highlighted it at provincial, national and international level. These were football, basketball and roller hockey.
    Andes Talleres's classic rival is Godoy Cruz Antonio Tomba, a neighborhood classic that has not been played since 1993, thanks to the "Azulgrana" promotions and the "Tomba" football debacle.
    In addition, Andes Talleres has provincial classical rivalries with Leonardo Murialdo and Gutiérrez Sport Club.
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





