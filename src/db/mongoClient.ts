import { MongoClient, Db } from "mongodb";
export class DbConnection {
    private url = "mongodb://localhost:27017";
    private databaseName = 'mydb';
    private db1;

    async dbConnect() {
        if (!this.db1) {
            let result = await MongoClient.connect(this.url);
            if (result) {
                console.log("DB connected");
            }
            this.db1 = result.db(this.databaseName);
        }
        return this.db1;
    }
}
