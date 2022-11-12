import footballClubs from "./footballclubdata.js";

//   footballClubs.forEach(club => {
//   for (let clubs in club) {
//     `
//   <div class="popup">
//     <h2>${club.clubName}</h2>
//     <img class="img__popup" src=${club.badgeImageUrl}>
//     <p>Location: ${club.location} </p>
//     <p>Formed In: ${club.formedIn}</p>
//     <p>Stadium Name: ${club.stadiumName}</p>
//     <p>Capacity: ${club.stadiumCapacity}</p>
//     <p>${club.history}</p>
//   </div>
//   `;
//   }
// });

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

// const popupTemplate = `
//   <div class="popup">
//     <h2>${club.clubName}</h2>
//     <img class="img__popup" src=${club.badgeImageUrl}>
//     <p>Location: ${club.location} </p>
//     <p>Formed In: ${club.formedIn}</p>
//     <p>Stadium Name: ${club.stadiumName}</p>
//     <p>Capacity: ${club.stadiumCapacity}</p>
//     <p>${club.history}</p>
//   </div>`;


// Create the container
// create the option element
// set option content (innerHTML)
// append the option to the datalist

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


const searchBtn = document.getElementById('searchClubsBtn');
searchBtn.addEventListener('click', (event) => {
  const listChoice = document.getElementById('clubListChoice');
  console.log(listChoice.value);

  const clubFound = footballClubs.find( club => club.clubName === listChoice.value);
  console.log(clubFound);

  const popupTemplate = `
  <div class="popup">
    <h2>${clubFound.clubName}</h2>
    <img class="img__popup" src=${clubFound.badgeImageUrl}>
    <p>Location: ${clubFound.location} </p>
    <p>Formed In: ${clubFound.formedIn}</p>
    <p>Stadium Name: ${clubFound.stadiumName}</p>
    <p>Capacity: ${clubFound.stadiumCapacity}</p>
    <p>${clubFound.history}</p>
  </div>`;


  const element = document.getElementById("club__popup");
  element.innerHTML =  popupTemplate;  
  console.log(clubFound);

})


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


