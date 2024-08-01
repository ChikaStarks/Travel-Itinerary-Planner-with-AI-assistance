import { renderHeader } from './shared/header.js';
import * as map from './modules/map.js';

renderHeader();

//this didn't work
// document.addEventListener('DOMContentLoaded', () => {
// const itineraryLinks = document.querySelectorAll(".itinerary-detail-link");

// for (let i = 0 ; i < itineraryLinks.length ; i++) {
//     itineraryLinks[i].addEventListener("click", async function(event) {
//     event.preventDefault(); 
//     const id = new URLSearchParams(window.location.search).get('id');
//         const newId = this.getAttribute('href').split('id=')[1];
//     console.log('Clicked itinerary link with ID:', id);
//     await displayItineraryInfo(id);
//     });
// }
// });


// this worked, but not displaying the correct itinerary info
const id = new URLSearchParams(window.location.search).get('id');
console.log('Clicked itinerary link with ID:', id);
await displayItineraryInfo(id);

// const urlParams = new URLSearchParams(this.getAttribute('href')); // Get the href of the clicked link
//   const id = urlParams.get('id'); // Extract the id
//   const place = urlParams.get('$place'); 
// await displayItineraryInfo(id, place);




async function displayItineraryInfo(id, place){
  let response = await fetch(`/api/locations`);
  let itinerary = await response.json();  
  console.log(itinerary);

  const itineraryHtml = `
          <h1>${itinerary.place}</h1>
          <img src="${itinerary.img}" alt="${itinerary.place}">
          <p>${itinerary.details}</p>
          <p><strong>Duration:</strong> ${itinerary.duration}</p>
          <h2>Cities:</h2>
          <p>${itinerary.city.join(', ')}</p>
  `;

  document.querySelector('.itinerary-details').innerHTML = itineraryHtml;
  }

console.log("Itinerary page loaded");






// async function displayItineraryInfo(id){
//   let response = await fetch(`/api/itinerary/${id}`);
//   let itinerary = await response.json();  
//   console.log(itinerary);

//   const itineraryHtml = `
//           <h1>${itinerary.place}</h1>
//           <img src="${itinerary.img}" alt="${itinerary.place}">
//           <p>${itinerary.details}</p>
//           <p><strong>Duration:</strong> ${itinerary.duration}</p>
//           <h2>Cities:</h2>
//           <p>${itinerary.city.join(', ')}</p>
//   `;
  
//   document.querySelector('.itinerary-details').innerHTML = itineraryHtml;
//   }

// console.log("Itinerary page loaded");




