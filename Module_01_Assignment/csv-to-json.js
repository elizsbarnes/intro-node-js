const fs = require('fs'); // Need filestream because we're writing to a file
const converter = require('csvtojson'); // This is the npm package being used for conversion
const csvFilePath = './customer-data.csv'; // This is the original csv file
const jsonFilePath = './customer-data.json';

var jsonArray = [] // will be array that holds the json before writing it to file

// The function below will be converting the contents of customer-data.csv to customer-data.json
converter()
    .fromFile(csvFilePath)
    .on('json', (jsonObj) => { 
        jsonArray.push(jsonObj);
    })
    .on('done', (error) => {
        if (error) {
            console.log(error)
        }
        fs.writeFileSync(jsonFilePath, JSON.stringify(jsonArray, null, '\t'));
    });
