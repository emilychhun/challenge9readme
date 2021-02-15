module.exports = generatePage;

function generatePage(data) {
    return `
<h1 align="center">✌️🤟🙏👋${data.Title} ✌️🤟🙏👋</h1>
<h1 align="center">

![badge](https://img.shields.io/npm/v/npm.svg?logo=javascript)
![badge](https://img.shields.io/npm/v/npm.svg?logo=npm)
[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)
![badge](https://img.shields.io/static/v1?logo=react&message=React&color=Blue)
![badge](https://img.shields.io/npm/v/npm.svg?logo=javascript)
 <a href="https://twitter.com/jpdewoody">
  <img alt="Twitter: jpdewoody" src="https://img.shields.io/twitter/follow/jpdewoody.svg?style=social" target="_blank" />
 </a>
</h1>

## Description 

  *The what, why, and how:* 
  
  🔍 ${data.Description}

 *Check out the [ExampleREADME.md](https://github.com/emilychhun/challenge9readme/blob/main/demo/DemoREADME.md) as an example.*
  <br />
 
  ## Table of contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Licence](#Licence)
  - [Contributors](#Contributors)
  - [Test](#Test)
  - [Repository Link](#Repository)
 
  <br />

 ## Installation

  *Steps required to install project and how to get the development environment running:*
  
💽💽 ${data.installation}

<br />
  
  
  ## Usage
  *Instructions and examples for use:*
  
  📚 ${data.usage}
  
  *Demo*

  View a demonstration of the application:
  <br />
  
  ![alt text](https://github.com/emilychhun/challenge9readme/blob/main/READMe-generator-emily1.gif "Logo Title Text 1")
  
  ## Licence
  📝📑
  
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  <br />
  
 
  ## Contributors
  💆🏽💆🏻‍♂️👳🏽👳🏽👳🏻‍♀️👨🏾‍🦽👨🏿‍🤝‍👨🏾${data.contributing}
  <br />
 
 
  ## Test
  🥇 *Tests for application and how to run them:*
 
   ${data.test}
  <br />
 
  ## Questions
  <br />

   *✋For any questions, please contact me with the information below:*
  <br />

 Find me on GitHub: [${data.UserName}](https://github.com/${data.UserName})
 <br />

  Email me with any questions: ${data.email}
  <br />

  repo link: [readme-repo-link](https://github.com/emilychhun/challenge9readme)
  
  <br />
  `;
  }