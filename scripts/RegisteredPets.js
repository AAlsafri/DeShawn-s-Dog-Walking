import { getPets, getWalkers } from "./database.js";

document.addEventListener("click", (clickEvent) => {
  const clickTarget = clickEvent.target;

  const walkerId = clickTarget.dataset.walkerforeignkey;

  const allWalkers = getWalkers();
  for (const walker of allWalkers) {
    if (walker.id === parseInt(walkerId)) {
      window.alert(`This pet is being walked by ${walker.name}`);
    }
  }
});

export const RegisteredPets = () => {
  const pets = getPets();
  let petsHTML = "<ul>";

  for (const pet of pets) {
    petsHTML += `<li data-walkerForeignKey="${pet.walkerId}">${pet.name}</li>`;
  }

  petsHTML += "</ul>";
  return petsHTML;
};
