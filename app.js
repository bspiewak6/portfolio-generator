const generatePage = require('./src/page-template.js');
const fs = require('fs');

const profileDataArgs = process.argv.slice(2);
// why did we remove .length?
const[name, github] = profileDataArgs;

fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);

    console.log('Portfolio complete! Check out index.html to see the output!');
});