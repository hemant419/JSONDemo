const fs = require('fs');

const db = require('./StudBio.json');

db.forEach(data2=>{
    console.log(data2.email);
});

/*const jsondata = JSON.stringify(stud);

const data = JSON.parse(jsondata);
console.log(data);

fs.writeFile('StudBio.json', jsondata, (err)=>{
    console.log("Success!!!!");
});

fs.readFile("StudBio.json", "utf-8", (err, data1)=>{
    //console.log(data1);

    const newdata = JSON.parse(data1)
});*/