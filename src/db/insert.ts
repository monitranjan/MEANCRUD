// const dbConnect = require("./db/mongoClient");
import  dbConnect  from "./mongoClient";
const csvtojson = require("csvtojson");
const path = require('path');
const csvFilePath = path.join(__dirname + "/insurance.csv")
const insertData = async () => {
    try {
        let data = await dbConnect();
        csvtojson()
            .fromFile(csvFilePath)
            .then(csvData => {
                data.insertMany(csvData, (err, res) => {
                    if (err) throw err;
                    console.log(`Inserted: ${res.insertedCount} rows`);
                });
            })
    } catch (error) {
        console.log(error)
    }
}
export default insertData;