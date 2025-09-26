document.addEventListener('DOMContentLoaded', () => {
  const themeButton = document.querySelector('.theme-button');
  const body = document.body;
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');
  const featuredCases = document.querySelector('.featured-cases');
  const caseCards = document.querySelectorAll('.case-card');
  const forkliftFeatures = document.querySelectorAll('.forklift-feature h3');
  const crimeHeaders = document.querySelectorAll('.crime-header');
  const subHeaders = document.querySelectorAll('.sub-header');
  const featuredCasesH2 = document.querySelectorAll('.featured-cases h2');
  const crimeTitles = document.querySelectorAll('.crime-title');
  const crimeQuotes = document.querySelectorAll('.crime-quote');
  const headerH1 = document.querySelectorAll('.header h1');
  const forkliftButton = document.querySelectorAll('.forklift-buttons button');
  const forkliftButtonHover = document.querySelectorAll('.forklift-buttons button:hover');
  const blockquote = document.querySelector('blockquote');

  // List of themes
  const themes = ['green-theme', 'red-theme', 'blue-theme'];
  let currentThemeIndex = 0;

  // Function to apply theme
  function applyTheme(theme) {
      // Removes all themes from body and other elements
      themes.forEach(t => body.classList.remove(t));
      if (header) header.classList.remove(...themes);
      if (nav) nav.classList.remove(...themes);
      if (featuredCases) featuredCases.classList.remove(...themes);
      caseCards.forEach(card => card.classList.remove(...themes));
      forkliftFeatures.forEach(feature => feature.classList.remove(...themes));
      crimeHeaders.forEach(header => header.classList.remove(...themes));
      subHeaders.forEach(sub => sub.classList.remove(...themes));
      featuredCasesH2.forEach(el => el.classList.remove(...themes));
      crimeTitles.forEach(el => el.classList.remove(...themes));
      crimeQuotes.forEach(el => el.classList.remove(...themes));
      headerH1.forEach(el => el.classList.remove(...themes));
      forkliftButton.forEach(el => el.classList.remove(...themes));
      forkliftButtonHover.forEach(el => el.classList.remove(...themes));

      // Elements actually getting the theme they need
      body.classList.add(theme);
      if (header) header.classList.add(theme);
      if (nav) nav.classList.add(theme);
      if (featuredCases) featuredCases.classList.add(theme);
      if (blockquote) blockquote.classList.add(theme);
      
      caseCards.forEach(card => {
          card.classList.add(theme);
      });

      forkliftFeatures.forEach(feature => {
          feature.classList.add(theme);
      });

      crimeHeaders.forEach(header => {
          header.classList.add(theme);
      });

      subHeaders.forEach(sub => {
          sub.classList.add(theme);
      });

      featuredCasesH2.forEach(el => {
          el.classList.add(theme);
      });

      crimeTitles.forEach(el => {
          el.classList.add(theme);
      });

      crimeQuotes.forEach(el => {
          el.classList.add(theme);
      });

      headerH1.forEach(el => {
          el.classList.add(theme);
      });

      forkliftButton.forEach(el => {
          el.classList.add(theme);
      });

      forkliftButtonHover.forEach(el => {
          el.classList.add(theme);
      });
  }

  // Event listener (the sequel)
  themeButton.addEventListener('click', () => {
      currentThemeIndex = (currentThemeIndex + 1) % themes.length;
      const newTheme = themes[currentThemeIndex];
      applyTheme(newTheme);
      // Store the selected theme in localStorage
      localStorage.setItem('selectedTheme', newTheme);
  });

  // The grand application
  const savedTheme = localStorage.getItem('selectedTheme');
  if (savedTheme) {
      applyTheme(savedTheme);
      currentThemeIndex = themes.indexOf(savedTheme);
  } else {
      // Initializing with the default theme if no theme is saved (post accident note. I am suffer)
      applyTheme(themes[currentThemeIndex]);
  }
});
