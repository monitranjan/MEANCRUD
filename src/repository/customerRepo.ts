import { DbConnection } from "../db/mongoClient";

export class CustomerRepository {
    private dbConnection: any;
    private dbConnect: any;

    constructor() {
        this.dbConnection = new DbConnection();
    }

    async initCustomerRepo() {
        this.dbConnect = await this.dbConnection.dbConnect();
    }

    async getPolicyById(id: string) {
        try {
            console.log(id)
            let user = await this.dbConnect.collection("customers").findOne(
                {$or:[{"Policy_id": id},{"Customer_id":id}]}
            );
            console.log(user)
            return user;
        } catch (error) {
            throw error;
        }
    }

    async updatePolicy(id: string) {
        try {
            let result = await this.dbConnect.collection("customers").updateOne(
                { "Policy_id": id }, { $set: { "Fuel": "CNG1" } });
            return result;
        } catch (error) {
            throw error;
        }
    }
}