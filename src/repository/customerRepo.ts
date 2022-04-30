import { DbConnection } from "../db/mongoClient";

export class CustomerRepository {
    private dbConnection: any;
    private dbConnect: any;

    constructor() {
        this.dbConnection = new DbConnection();
    }

    async initCustomerRepo(){
        this.dbConnect = await this.dbConnection.dbConnect();
    }

    async getUserByEmail(email: string) {
        try {
            
        } catch (error) {
            throw error;
        }
    }

    async getUserById(userId: number) {
        try {

        } catch (error) {
            throw error;
        }
    }

    async createUser() {
        try {
        
        } catch (error) {
            throw error;
        }
    }

    async updateUser() {
        try {
            let result = await this.dbConnect.collection("customers").updateOne({"Policy_id" : "12346"}, {$set:{"Fuel" : "CNG1"}});
            return result;
        } catch (error) {
            throw error;
        }
    }

    async deleteUser(email: string) {
        try {
        
        } catch (error) {
            throw error;
        }
    }
}