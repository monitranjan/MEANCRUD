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

let server = new Server([new UserRoutes()]);
server.listen();
