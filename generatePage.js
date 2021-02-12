module.exports = generatePage;

function generatePage(data) {
    return `
    <h1 align="center">${data.Title} 👋</h1>
    <img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/[ICON NAME].svg" />
    <img height="32" width="32" src="https://unpkg.com/simple-icons@v4/icons/[ICON NAME].svg" />
  ## Description 
  
  ${data.Description}

  *The what, why, and how:* 
 
 
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
  *Instructions and examples for use:*
  ${data.usage}
  ## Licence
  ${data.license}
  ## Contributors
  ${data.contributing}
 
  ## Test
  ${data.test}
  `;
  }