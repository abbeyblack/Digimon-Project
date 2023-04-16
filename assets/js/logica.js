
fetch("https://digimon-api.vercel.app/api/digimon")
  .then(response => response.json()) 
  .then(data => {
    tabla(data)

    function tabla(data) {
        contenido.innerHTML = ""

        // Use map() function to generate row numbers starting from 1
        data.map((temp, index) => {
            contenido.innerHTML +=
        
            `
            
        <tr>
        <th scope="row">${index + 1}</th>
        <th scope="col">${temp.name}</th>
        <th scope="col">${temp.level}</th>
        <th scope="col"><img src="${temp.img}" alt="${temp.name}"></th>
        </tr>
            
            `

                  
        })
    }
})

// scripts.js

// Fetch Digimon data from the API
fetch("https://digimon-api.vercel.app/api/digimon")
  .then(response => response.json()) 
  .then(data => {
    // Get the select element and populate it with options
    const select = document.getElementById("digimon-select");
    data.forEach(digimon => {
      const option = document.createElement("option");
      option.value = digimon.name;
      option.textContent = digimon.name;
      select.appendChild(option);
    });

    // Add event listener for select change
    select.addEventListener("change", (event) => {
      const selectedDigimonName = event.target.value;
      const selectedDigimon = data.find(digimon => digimon.name === selectedDigimonName);
      const digimonDetails = document.getElementById("digimon-details");

      // Display the selected Digimon details
      digimonDetails.innerHTML = `
        <h2>${selectedDigimon.name}</h2>
        <p>Level: ${selectedDigimon.level}</p>
        <img src="${selectedDigimon.img}" alt="${selectedDigimon.name} Image">
      `;
    });
  })
  .catch(error => console.error(error));
