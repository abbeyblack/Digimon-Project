$(document).ready(function () {
  $("h1").on({
    mouseenter: function () {
      $(this).css("background-color", "#fdcae1");
    },
    mouseleave: function () {
      $(this).css("background-color", "#ff6961");
    },
    click: function () {
      $(this).css("background-color", "#84b6f4");
    },
  });
});

fetch("https://digimon-api.vercel.app/api/digimon")
  .then((response) => response.json())
  .then((data) => {
    tabla(data);

    function tabla(data) {
      contenido.innerHTML = "";

      data.map((temp, index) => {
        contenido.innerHTML += `
            
        <tr>
        <th scope="row">${index + 1}</th>
        <th scope="col">${temp.name}</th>
        <th scope="col">${temp.level}</th>
        <th scope="col"><img src="${temp.img}" alt="${temp.name}"></th>
        </tr>
            
            `;
      });
    }
  });

fetch("https://digimon-api.vercel.app/api/digimon")
  .then((response) => response.json())
  .then((data) => {
    const select = document.getElementById("digimon-select");
    data.forEach((digimon) => {
      const option = document.createElement("option");
      option.value = digimon.name;
      option.textContent = digimon.name;
      select.appendChild(option);
    });

    select.addEventListener("change", (event) => {
      const selectedDigimonName = event.target.value;
      const selectedDigimon = data.find(
        (digimon) => digimon.name === selectedDigimonName
      );
      const digimonDetails = document.getElementById("digimon-details");

      digimonDetails.innerHTML = `
        <h2>${selectedDigimon.name}</h2>
        <p>Level: ${selectedDigimon.level}</p>
        <img src="${selectedDigimon.img}" alt="${selectedDigimon.name} Image">
      `;
    });
  })
  .catch((error) => console.error(error));
