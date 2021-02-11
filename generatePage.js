module.exports = generatePage;

function generatePage(data) {
    return `
  # **${data.Title}**
  
  ${data.badge}
 
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