const fs = require('fs');
const generatePage = require('./src/page-template.js');
const profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;

fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);

    console.log ('Portfolio complete! Check out index.html to see the output!');
});



















/* helpful for loop info
const printProfileData = profileDataArr => {
    //for loop
    for (let i=0; i<profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }
    console.log('==============');

    //forEach() instead of for loop
    profileDataArr.forEach(profileItem => console.log(profileItem));

};
printProfileData(profileDataArgs);*/