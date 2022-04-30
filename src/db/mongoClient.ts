import { MongoClient, Db } from "mongodb";
export class DbConnection {
    private url = "mongodb://localhost:27017";
    private databaseName = 'mydb';
    private dbInstance;

    async dbConnect() {
        if (!this.dbInstance) {
            let result = await MongoClient.connect(this.url);
            if (result) {
                console.log("DB connected");
            }
            this.dbInstance = result.db(this.databaseName);
        }
        return this.dbInstance;
    }
}
