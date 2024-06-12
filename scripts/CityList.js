import { getWalkers, getCities } from "./database.js";

document.addEventListener("click", (clickEvent) => {
  const cityTarget = clickEvent.target;

  if (cityTarget.dataset.type === "city") {
    const walkers = getWalkers();
    let cities = cityTarget.dataset.id;
    let cityWalker = "";
    for (const walker of walkers) {
      if (parseInt(cities) === walker.cityId) {
        cityWalker = walker.name;
      }
    }
    window.alert(`${cityWalker} is servicing this city`);
  }
});

export const CityList = () => {
  const walkers = getWalkers();
  const cities = getCities();

  let citiesHTML = "<ul>";

  for (const city of cities) {
    citiesHTML += `<li data-id="${city.id}" data-type="city" data-walkerid="${walkers.id}">${city.name}</li>`;
  }
  citiesHTML += "</ul>";
  return citiesHTML;
};
