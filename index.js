
const inquirer = require('inquirer');
const generatePage =require('./generatePage');

const fs = require('fs');




const questions =[
{
    type: 'input',
    message: 'What is your GitHub username? (Required)',
    name:'UserName',
    validate:  nameInput1 =>{
        if (nameInput1){
            return true;
        }else{
            console.log('Please enter your name!');
        }
    }

},
        

{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',

    validate:  nameInput2 =>{
        if (nameInput2){
            return true;
        }else{
            console.log('Please enter your email address!');
        }
    }



},
{
    
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    

 

},
{
type: 'input',
message: 'what is the title for your projects?',
name: 'Title',
validate:  nameInput3 =>{
    if (nameInput3){
        return true;
    }else{
        console.log('Please enter title for your projects!');
    }
}

},
{
    type: 'input',
    message: 'Please give description of your project.',
    name: 'Description',
    validate:  nameInput4 =>{
        if (nameInput4){
            return true;
        }else{
            console.log('Please give description of your project!');
        }
    }
},
{
    type: "input",
    name: "installation",
    message: "Please provide the installation instructions",
    validate:  nameInput5 =>{
        if (nameInput5){
            return true;
        }else{
            console.log('Please provide the installation instructions!');
        }
    }
},
{
           type: "input",
        name: "test",
        message: "Please provide the project tests",
    validate:  nameInput6 =>{
        if (nameInput6){
            return true;
        }else{
            console.log('Please provide the project tests!');
        }
    }
},
{
    type: "input",
    name: "badge",
    message: "Please provide the badges links that you want.",
    validate:  nameInput7 =>{
        if (nameInput7){
            return true;
        }else{
            console.log('Please enter your name!');
        }
    }

},
{
    type: "input",
    name: "repo",
    message: "What is your repo link?",
    validate:  nameInput8 =>{
        if (nameInput8){
            return true;
        }else{
            console.log('Please enter your name!');
        }
    }


},
{
    type: "input",
    name: "contributing",
    message: "Please provide the contributing parties",
    validate:  nameInput9 =>{
        if (nameInput9){
            return true;
        }else{
            console.log('Please provide the contributing parties!');
        }
    }


},
    
{
    type: "input",
        name: "usage",
        message: "Please provide the project usage",
    validate:  nameInput9 =>{
        if (nameInput9){
            return true;
        }else{
            console.log('Please provide the contributing parties!');
        }
    }


},   

];

function writeToFile(fileName, data){
    fs.writeFile('./demo/'+ fileName, data, function(err){
if(err){
    return console.log(err);
}
  console.log('Successfully wrote:' + fileName); 
})
};


function init(){
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile('DemoREADME.md', generatePage(data));
    })
}
init();

