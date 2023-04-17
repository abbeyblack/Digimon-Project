    // Function to get a random integer between min and max (inclusive)
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
  
      function getRandomDigimon() {
        // Fetch the digimon data from the API
        fetch("https://digimon-api.vercel.app/api/digimon")
          .then(response => response.json())
          .then(data => {
            // Get a random index based on the number of digimon available
            const randomIndex = getRandomInt(0, data.length - 1);
            // Get the image URL and name of the random digimon
            const digimonImage = data[randomIndex].img;
            const digimonName = data[randomIndex].name;
  
            // Display the image on the page
            document.getElementById("digimonImage").src = digimonImage;
            document.getElementById("digimonName").textContent = digimonName;
          })
          .catch(error => {
            console.error("Error fetching digimon data:", error);
          });
      }
  
