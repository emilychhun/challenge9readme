module.exports = generatePage;

function generatePage(data) {
    return `

<h1 align="center">${data.Title} ✌️🤟🙏👋</h1>


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
  💽💽 ${data.installation}
  ## UsageREADME.md Generator Using Node.js 
  *Instructions and examples for use:*
  📚 ${data.usage}
  ## Licence
  📝📑![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  
  ## Contributors
  💆🏽💆🏻‍♂️👳🏽👳🏽👳🏻‍♀️👨🏾‍🦽👨🏿‍🤝‍👨🏾${data.contributing}
 
  ## Test
  ${data.test}

  ## Questions
  *✋For any questions, please contact me with the information below:*
  <br />
  :octocat: Find me on GitHub: [${data.UserName}](https://github.com/${data.UserName})<br />
  Email me with any questions: ${data.email}<br /><br />
  
  
  
  <br />



  `;
  }