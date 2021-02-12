module.exports = generatePage;

function generatePage(data) {
    return `
  
  
    <h1 align="center">${data.Title} ✌️🤟🙏</h1>
   
    ![badge](https://img.shields.io/badge/license-${data.license}}-brightgreen)<br />

  

  ## Description 

  
  🔍 ${data.Description}

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
  💽💽 ${data.installation}
  ## Usage
  *Instructions and examples for use:*
  📚 ${data.usage}
  ## Licence
  📝📑![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  
  ## Contributors
  💆🏽💆🏻‍♂️👳🏽👳🏽👳🏻‍♀️👨🏾‍🦽👨🏿‍🤝‍👨🏾${data.contributing}
 
  ## Test
  ${data.test}
  `;
  }