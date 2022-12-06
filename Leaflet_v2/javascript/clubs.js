import footballClubs from "./footballclubdata.js";

// populate the webpage with clubs

// footballClubs.map((club) => {

//   const popupTemplate = `
//   <div class="popup">
//   <h2>${club.clubName}</h2>
//   <img class="img__popup" src=${club.badgeImageUrl}>
//   <p>Location: ${club.location} </p>
//   <p>Formed In: ${club.formedIn}</p>
//   <p>Stadium Name: ${club.stadiumName}</p>
//   <p>Capacity: ${club.stadiumCapacity}</p>
//   <p>${club.history}</p>
//   </div>
//   `;
//   const element = document.getElementById("club__popup");
//   element.insertAdjacentHTML("beforeend", popupTemplate);  
//   console.log("MAP");
// });


// Create the container
// create the option element
// set option content (innerHTML)
// append the option to the datalist


console.log(`ARRAY:  ${footballClubs.length}`);
const arrayLength = footballClubs.length;

const container = document.getElementById('footBallClubSelector');
const dataList = document.createElement('datalist');
dataList.setAttribute('id', 'clubList');

footballClubs.map( (club) => {
  const dataListOptions = document.createElement('option');
  dataList.appendChild(dataListOptions);
  dataListOptions.innerHTML = club.clubName;
  //Set Attributes
  dataListOptions.setAttribute('value', club.clubName);
  // console.log(dataList)
});
container.appendChild(dataList);

function generateTemplate(footballClub){

  const popupTemplate = `
  <div class="clubs__popupdiv">
    <h2>${footballClub.clubName}</h2>
    <img class="clubs__imglogo" src=${footballClub.badgeImageUrl}>
    <p>Location: ${footballClub.location} </p>
    <p>Formed In: ${footballClub.formedIn}</p>
    <img class="clubs__imgkit" src=${footballClub.kit}>
    <p>Stadium Name: ${footballClub.stadiumName}</p>
    <p>Capacity: ${footballClub.stadiumCapacity}</p>
    <p class="clubs__popuphistory">${footballClub.history}</p>
  </div>`;

  return popupTemplate;
}


const template2 = generateTemplate(footballClubs[getRandomIntBetween(0, arrayLength)]);
const element = document.getElementById("clubs__popup");
element.innerHTML =  template2;  
// console.log(clubFound);

const searchBtn = document.getElementById('searchClubsBtn');
searchBtn.addEventListener('click', (event) => {
  const listChoice = document.getElementById('clubListChoice');
  console.log(listChoice.value);
  
  
  const clubFound = footballClubs.find( club => 
    club.clubName === listChoice.value);
    console.log(clubFound);
    
    const template = generateTemplate(clubFound);

    listChoice.value = "";

    const element = document.getElementById("clubs__popup");
    element.innerHTML =  template;  
    console.log(clubFound);
    
  })
  




  console.log(getRandomIntBetween(0, arrayLength));

  function getRandomIntBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


// generate template
// get a club found.  On load use first club in array.

// const dataList = "";
// footballClubs.map( (club) => {
//   const option = `<option value="${club.clubName}">`;
//   // parentList.insertAdjacentElement("beforeend", option);
//   console.log(option)
// });

  
//   // console.log(popupTemplate)
// const ele = document.getElementById('test');
// ele.innerHTML = "Club 1";
// // other stuff
// ele.innerHTML = "Club  2";
// ele.innerHTML = "Club  3";


