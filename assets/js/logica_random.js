    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
  
      function getRandomDigimon() {
        fetch("https://digimon-api.vercel.app/api/digimon")
          .then(response => response.json())
          .then(data => {
            const randomIndex = getRandomInt(0, data.length - 1);
            const digimonImage = data[randomIndex].img;
            const digimonName = data[randomIndex].name;
            const digimonLevel = data[randomIndex].level;
  
            document.getElementById("digimonImage").src = digimonImage;
            document.getElementById("digimonName").textContent = digimonName;
            document.getElementById("digimonLevel").textContent = digimonLevel;
          })
          .catch(error => {
            console.error("Error fetching digimon data:", error);
          });
      }
  
