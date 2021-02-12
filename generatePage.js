module.exports = generatePage;

function generatePage(data) {
    return `
  
  <h1 align="center">${data.Title} 👋</h1>
  
  const params = {
    show_icons: true,
    ...(options.theme && options.theme !== "none") && { theme: options.theme },
    ...options.titleColor && { "title_color": options.titleColor },
    ...options.textColor && { "text_color": options.textColor},
    ...options.bgColor && { "bg_color": options.bgColor},
    ...options.hideBorder && { "hide_border": options.hideBorder},
    ...options.cacheSeconds && { "cache_seconds": options.cacheSeconds},
    ...options.locale && { "locale": options.locale},
  }
 
  ## Description 
  
  ${data.Description}
  ## Table of contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Licence](#Licence)
  - [Contributors](#Contributors)
  - [Test](#Test)
  - [Repository Link](#Repository)

  ## Installation
 ${data.installation}
  ## Usage
  ${data.usage}
  ## Licence
  ${data.license}
  ## Contributors
  ${data.contributing}
 
  ## Test
  ${data.test}
  `;
  }