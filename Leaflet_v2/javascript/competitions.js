  // primera división modal event listener
  
  // Get the modal
  let primeraDivisiónModal = document.getElementById("myprimera_división__modal");
  
  // Get the button that opens the modal
  let primeraDivisiónOpenButton = document.getElementsByClassName("competitions_openbutton");
  
  // Get the <button> element that closes the modal
  let primeraDivisiónCloseButton = document.getElementsByClassName("allcompsclosebutton__modal")[0];
  
  // When the user clicks the button, open the modal 
  primeraDivisiónOpenButton.onclick = function() {
    primeraDivisiónModal.style.display = "block";
  }
  
  // When the user clicks on <button> (x), close the modal
  primeraDivisiónCloseButton.onclick = function() {
    primeraDivisiónModal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target === primeraDivisiónModal) {
      primeraDivisiónModal.style.display = "none";
      console.log(`FIRED ${event.target}`);
    }
  }
  

// const rand = Math.random();
// let num = rand * 100;
// const rounded = Math.ceil(num);
// console.log(rounded);

// console.log(Math.ceil((Math.random() * 100 )))

//   const number = Math.ceil((Math.random() * 100 ))


  
 const modalsContainer = document.getElementsByClassName('allcomps__containermodal');
 const modalsOpenButton = document.getElementsByClassName('competitions_openbutton');
 const modalsCloseButton = document.getElementsByClassName('allcompsclosebutton__modal');

 modalsOpenButton[0].onclick = function() {
  modalsContainer[0].style.display = "block";
 }

 modalsCloseButton[0].onclick = function() {
  modalsContainer[0].style.display = "none";
 }

 modalsOpenButton[1].onclick = function() {
  modalsContainer[1].style.display = "block";
 }

 modalsCloseButton[1].onclick = function() {
  modalsContainer[1].style.display = "none";
 }

 modalsOpenButton[2].onclick = function() {
  modalsContainer[2].style.display = "block";
 }

 modalsCloseButton[2].onclick = function() {
  modalsContainer[2].style.display = "none";
 }

 modalsOpenButton[3].onclick = function() {
  modalsContainer[3].style.display = "block";
 }

 modalsCloseButton[3].onclick = function() {
  modalsContainer[3].style.display = "none";
 }

 modalsOpenButton[4].onclick = function() {
  modalsContainer[4].style.display = "block";
 }

 modalsCloseButton[4].onclick = function() {
  modalsContainer[4].style.display = "none";
 }

 modalsOpenButton[5].onclick = function() {
  modalsContainer[5].style.display = "block";
 }

 modalsCloseButton[5].onclick = function() {
  modalsContainer[5].style.display = "none";
 }

 modalsOpenButton[6].onclick = function() {
  modalsContainer[6].style.display = "block";
 }

 modalsCloseButton[6].onclick = function() {
  modalsContainer[6].style.display = "none";
 }


  window.onclick = function(event) {
   if (event.target.classList.contains('allcomps__containermodal')) {
    for (let clickOutside in modalsContainer) {
      if (typeof modalsContainer[clickOutside].style !== 'undefined') 
      modalsContainer[clickOutside].style.display = "none";
    }
   }
  }


    
  


    