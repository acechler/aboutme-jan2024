document.addEventListener("DOMContentLoaded", function () {
    const colorSelect = document.getElementById("color-options");
    const cards = document.querySelectorAll(".card");
    const header = document.querySelector(".header");
    const footer = document.querySelector(".footer");
    const sidebar = document.querySelector(".sidebar");
    const main = document.querySelector(".main");
    const favoriteItemsSummary = document.querySelector('.fav-items-summary');
  
    const themes = {
      "dark-theme": {
        primary: "#333333",
        secondary: "#555555",
        text: "white"
      },
      "light-theme": {
        primary: "#FFFFFF",
        secondary: "#DDDDDD",
        text: "black"
      },
      "blue-theme": {
        primary: "#313C51", // Softer blue color
        secondary: "#4682B4", // Softer blue color
        text: "white"
      }
    };
  
    const generateGradient = (color) => {
      return `linear-gradient(to right, ${color}, ${shadeColor(color, -20)})`;
    };
  
    const shadeColor = (color, percent) => {
      let R = parseInt(color.substring(1, 3), 16);
      let G = parseInt(color.substring(3, 5), 16);
      let B = parseInt(color.substring(5, 7), 16);
  
      R = parseInt(R * (100 + percent) / 100);
      G = parseInt(G * (100 + percent) / 100);
      B = parseInt(B * (100 + percent) / 100);
  
      R = (R < 255) ? R : 255;
      G = (G < 255) ? G : 255;
      B = (B < 255) ? B : 255;
  
      const RR = ((R.toString(16).length === 1) ? "0" + R.toString(16) : R.toString(16));
      const GG = ((G.toString(16).length === 1) ? "0" + G.toString(16) : G.toString(16));
      const BB = ((B.toString(16).length === 1) ? "0" + B.toString(16) : B.toString(16));
  
      return `#${RR}${GG}${BB}`;
    };
  
    const applyTheme = (selectedTheme) => {
      const { primary, secondary, text } = selectedTheme;
  
      const gradient = generateGradient(primary);
  
      document.body.style.background = gradient;
      cards.forEach(card => {
        card.style.background = gradient;
        card.style.border = `2px solid ${secondary}`; // Use secondary color for borders
      });
      header.style.background = gradient;
      favoriteItemsSummary.style.borderBottom = `2px solid ${secondary}`;
      footer.style.background = gradient;
      sidebar.style.background = gradient;
      main.style.background = gradient;
  
      document.body.style.color = text;
      cards.forEach(card => {
        card.style.color = text;
      });
      header.style.color = text;
      footer.style.color = text;
      sidebar.style.color = text;
      main.style.color = text;
    };
  
    colorSelect.addEventListener("change", function () {
      const selectedTheme = themes[colorSelect.value];
      if (selectedTheme) {
        applyTheme(selectedTheme);
      }
    });
  
    colorSelect.dispatchEvent(new Event('change'));
  });
  