module.exports = generatePage;

function generatePage(data) {
    return `

 
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