import { getWalkers } from "./database.js";

export const CityList = () => {
  const walkers = getWalkers();
  // Assuming that each city should be listed once.
  const cities = [...new Set(walkers.map((walker) => walker.city))];
  let citiesHTML = "<ul>";
  for (const city of cities) {
    citiesHTML += `<li>${city}</li>`;
  }
  citiesHTML += "</ul>";
  return citiesHTML;
};
