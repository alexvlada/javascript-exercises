
// Using dynamic import() to load an ES Module
import('inquirer').then(inquirer => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What's your name?"
        }
    ]).then(answers => {
        console.log(`Hello, ${answers.name}!`);
    });
}).catch(error => console.error(error));