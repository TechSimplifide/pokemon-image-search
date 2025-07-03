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
      setTimeout(() => {
      result.innerHTML = "";
    }, 5000);
    })
    .catch((error) => console.log(error));
});
