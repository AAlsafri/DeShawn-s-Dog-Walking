import { getWalkers, getCities } from "./database.js";

document.addEventListener("click", (clickEvent) => {
  const whatWasClickedOn = clickEvent.target;

  if (whatWasClickedOn.dataset.type === "walker") {
    const walkerId = whatWasClickedOn.dataset.id;
    let walkerCity = "";
    const cities = getCities();
    for (const city of cities) {
      if (parseInt(walkerId) === city.id) {
        walkerCity = city.name;
      }
    }
    //const city = cities.find(
    //(city) => city.id === parseInt(whatWasClickedOn.dataset.cityId)
    //);
    window.alert(`This walker works in ${walkerCity}`);
  }
});

export const Walkers = () => {
  const walkers = getWalkers();
  let walkersHTML = "<ul>";
  for (const walker of walkers) {
    walkersHTML += `<li data-id="${walker.id}"
                    data-city="${walker.cityId}"
                    data-type="walker"
                    >${walker.name}
                    </li>`;
  }

  walkersHTML += "</ul>";
  return walkersHTML;
};
