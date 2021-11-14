const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);


const printProfileData = profileDataArr => {
    //for loop
    for (let i=0; i<profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }
    console.log('==============');

    //forEach() instead of for loop
    profileDataArr.forEach(profileItem => console.log(profileItem));

};



printProfileData(profileDataArgs);