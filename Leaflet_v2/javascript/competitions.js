import competitions from "./competitionsdata.js";



competitions.map((competition) => {

  const leagueObjects = `
    <div class="competitions">
      <h2>${competition.name}</h2>
      <img class="img__competition" src=${competition.imgLogo}>
      <p> ${competition.information}</p>
      <p> ${competition.format}</p>
      <p> ${competition.tier} tier of Argentine Football</p>
      <p> ${competition.numOfTeams} teams in the competition</p>
      <img class="" src=${competition.teams}>
      <a href=${competition.highlights}>Highlights</a>
      <a href=${competition.website}>Offical Website for League</a>
      <div class="">${competition.video}</div>
      <iframe 
        width="560" 
        height="315" 
        src=${competition.video}
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
    `;
      
      const element = document.getElementById("competition__popup");
      element.insertAdjacentHTML("beforeend", leagueObjects);
      // console.log("MAP");
      console.log(competition)
    });
    
    
  


    