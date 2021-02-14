module.exports = generatePage;

function generatePage(data) {
    return `

<h1 align="center">✌️🤟🙏👋${data.Title} ✌️🤟🙏👋</h1>
![badge]( https://img.shields.io/npm/v/npm.svg?logo=javascript)
![badge]( https://img.shields.io/npm/v/npm.svg?logo=npm)
![badge]( /amo/stars/:addonId)
![badge]( /node/v-lts/@:scope/:packageName/:tag?registry_uri=https%3A%2F%2Fregistry.npmjs.com)
![badge]( https://img.shields.io/static/v1?logo=react&message=React&color=Blue)
![badge]( https://img.shields.io/npm/v/npm.svg?logo=javascript)


  ## Description 
  *The what, why, and how:* 
  
  🔍 ${data.Description}


 
 
  ## Table of contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Licence](#Licence)
  - [Contributors](#Contributors)
  - [Test](#Test)
  - [Repository Link](#Repository)




  ## Installation
  *Steps required to install project and how to get the development environment running:
  💽💽 ${data.installation}
  ## UsageREADME.md Generator Using Node.js 
  *Instructions and examples for use:*
  📚 ${data.usage}
  ## Licence
  📝📑![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  
  ## Contributors
  💆🏽💆🏻‍♂️👳🏽👳🏽👳🏻‍♀️👨🏾‍🦽👨🏿‍🤝‍👨🏾${data.contributing}
 
  ## Test
  *Tests for application and how to run them:
  ${data.test}

  ## Questions
  <br />
  *✋For any questions, please contact me with the information below:*
  <br />
  Find me on GitHub: [${data.UserName}](https://github.com/${data.UserName})<br />
  Email me with any questions: ${data.email}<br /><br />
  
  
  
  <br />



  `;
  }