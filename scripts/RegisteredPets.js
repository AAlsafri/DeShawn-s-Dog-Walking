import { getPets } from "./database.js";

export const RegisteredPets = () => {
  const pets = getPets();
  console.log("Pets data:", pets); // Debugging statement
  let petsHTML = "<ul>";

  for (const pet of pets) {
    petsHTML += `<li>${pet.name}</li>`;
  }

  petsHTML += "</ul>";
  return petsHTML;
};
