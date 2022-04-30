import express from "express";
const app = express(); 
import { DbConnection } from "./db/mongoClient";
import { UserRoutes } from "./routes/route";

class Server {
    private routes;
    private app;
    private port;
    constructor(routes) {
        this.routes = routes;
        this.app = express();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.routes.forEach((route: any) => {
            route.intializeRoutes();
            this.app.use('/', route.router);
        });
    }
    private onListening = () => {
        console.log(`App listening on the port ${this.port}`);
      }

    public listen() {
        this.port = process.env.PORT || 5000;
        this.app.listen(this.port, this.onListening);
    }

}

let object = new Server([new UserRoutes()]);
object.listen();
// const port = process.env.PORT || 5000;

// app.use(express.json());
// app.use('/', insuranceController);

// app.get('/', async (req, res) => {
//     let dbConnection = new DbConnection();
//     let dbConnect = await dbConnection.dbConnect();
//     let data = dbConnect.collection("customers");
//     let result = await data.find().toArray();
//     res.send(result);
// })

// app.get('/update', async (req, res) => {
    // let data = await dbConnect();
    // let result = await data.updateOne({"Policy_id" : "12345"}, {$set:{"Fuel" : "CNG1"}});
    // res.send(result);
// })

// app.listen(port, () => {
//     console.log("server started on " + port);
// })