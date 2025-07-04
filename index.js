let btn = document.querySelector(".search");

btn.addEventListener("click", () => {
  let input = document.querySelector(".text-field").value.toLowerCase().trim();
  let result = document.querySelector(".result");
  if (input === "") {
    // result.innerHTML =`<p>please enter a pokemon name or id!</p>`
    alert("please enter a pokemon name or id!");
    return;
  }
  let url = `https://pokeapi.co/api/v2/pokemon/${input}`;
  fetch(url)
    .then((response, reject) => {
      return response.json();
    })
    .then((data) => {
      result.innerHTML = `
    <h3>${data.name.toUpperCase()}</h3>
    <img src='${data.sprites.front_default}' alt='${data.name}'/>
    `;
      document.querySelector(".text-field").value = "";
      //   setTimeout(() => {
      //   result.innerHTML = "";
      // }, 5000);
    })
    .catch((error) => console.log(error));
});

let popular = document.querySelector(".popular-pokemons");
const famousPokemons = [
  { id: 25, name: "Pikachu" },
  { id: 7, name: "Squirtle" },
  { id: 40, name: "wigglytuff" },
  { id: 6, name: "Charizard" },
  { id: 1, name: "Bulbasaur" },
  { id: 8, name: "Wartortle" },
  { id: 9, name: "Blastoise" },
  { id: 133, name: "eevee" },
  { id: 149, name: "dragonite" },
  { id: 59, name: "arcanine" },
  { id: 197, name: "Umbreon" },
];

famousPokemons.forEach((pokemon) => {
  const card = document.createElement("div");
  card.setAttribute("class", "cards");
  const name = document.createElement("h3");
  name.setAttribute("class", "popular");
  name.textContent = pokemon.name.toUpperCase();
  const Id = document.createElement("h3");
  Id.setAttribute("class", "popular");
  Id.textContent = `Id: ${pokemon.id}`;
  const img = document.createElement("img");
  img.setAttribute("class", "popular-img");
  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  img.alt = pokemon.name;
  card.appendChild(name);
  card.appendChild(Id);
  card.appendChild(img);

  popular.appendChild(card);
});
