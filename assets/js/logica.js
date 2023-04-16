// Make a GET request to the Digimon API
fetch("https://digimon-api.vercel.app/api/digimon")
  .then(response => response.json()) // Convert the response to JSON
  .then(data => {
    // Extract the list of Digimon
    const digimonList = data.data;

    // Loop through each Digimon and create a list element for them
    digimonList.forEach(digimon => {
      // Create a list item element
      const listItem = document.createElement("li");

      // Create an image element
      const image = document.createElement("img");
      image.src = digimon.img; // Set the image source to the Digimon's image URL
      listItem.appendChild(image); // Append the image to the list item

      // Create a span element for the Digimon's name
      const name = document.createElement("span");
      name.textContent = `Name: ${digimon.name}`; // Set the text content to the Digimon's name
      listItem.appendChild(name); // Append the name span to the list item

      // Create a span element for the Digimon's level
      const level = document.createElement("span");
      level.textContent = `Level: ${digimon.level}`; // Set the text content to the Digimon's level
      listItem.appendChild(level); // Append the level span to the list item

      // Append the list item to the list
      document.getElementById("digimon-list").appendChild(listItem);
    });
  })
  .catch(error => console.error(error)); // Handle any errors that occur during the fetch request
