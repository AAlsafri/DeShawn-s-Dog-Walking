import { getCities, getPets, getWalkers } from "./database.js";

// Get copy of state for use in this module
const pets = getPets();
const walkers = getWalkers();
const cities = getCities();

// Function whose responsible to find the walker assigned to a pet
const findPetWalker = (pet, allWalkers) => {
  let petWalker = null;

  for (const walker of allWalkers) {
    if (walker.id === pet.walkerId) {
      petWalker = walker;
    }
  }
  return petWalker;
};

export const Assignments = () => {
  let assignmentHTML = "<ul>";

  for (const currentPet of pets) {
    const currentPetWalker = findPetWalker(currentPet, walkers);
    const city = cities.find((city) => city.id === currentPetWalker.cityId);
    assignmentHTML += `
      <li>
        ${currentPet.name} is being walked by
        ${currentPetWalker.name} in ${city.name}
      </li>
    `;
  }

  assignmentHTML += "</ul>";
  return assignmentHTML;
};
