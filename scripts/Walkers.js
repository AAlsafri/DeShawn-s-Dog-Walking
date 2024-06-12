import { getWalkers } from "./database.js";

// const walkers = getWalkers();

// export const Walkers = () => {
//   let walkerHTML = "<ul>";

//   for (const walker of walkers) {
//     walkerHTML += `<li>${walker.name}</li>`;
//   }

//   return (walkerHTML += "</ul>");
// };
document.addEventListener("click", (clickEvent) => {
  const whatWasClickedOn = clickEvent.target;

  if (whatWasClickedOn.dataset.type === "walker") {
    window.alert(`This walker works in ${whatWasClickedOn.dataset.city}`);
  }
});

export const Walkers = () => {
  const walkers = getWalkers();
  let walkersHTML = "<ul>";
  for (const walker of walkers) {
    walkersHTML += `<li data-id="${walker.id}"
                    data-city="${walker.city}"
                    data-type="walker"
                    >${walker.name}
                    </li>`;
  }

  walkersHTML += "</ul>";
  return walkersHTML;
};
