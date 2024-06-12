import { getPets } from "./database.js";

export const RegisteredPets = () => {
  const pets = getPets();
  console.log("Pets data:", pets); // Debugging statement
  let petsHTML = "<ul>";

  for (const pet of pets) {
    petsHTML += `<li data-walkerForeignKey="${pet.walkerId}>${pet.name}</li>`;
  }

  petsHTML += "</ul>";
  return petsHTML;
};
