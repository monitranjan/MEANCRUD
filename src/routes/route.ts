import { Router } from "express";
import { UserController } from "../controllers/customer.controller";

export class UserRoutes {
  router: Router;
  private userController:UserController;

  constructor() {
    this.router = Router();
    this.userController = new UserController();
  }

  public intializeRoutes() {
    this.router.get('/api/v1/users', (req, res, next) => {
      this.userController.updateUser(req, res, next);
    });
    // this.router.post('/internal/api/v1/users', (req, res, next) => {
    //   this.userController.createUser(req, res, next)
    // });
    // this.router.put('/internal/api/v1/users/:id', (req, res, next) => {
    //   this.userController.updateUser(req, res, next)
    // });
    // this.router.delete('/internal/api/v1/users/:id', (req, res, next) => {
    //   this.userController.deleteUser(req, res, next)
    // });
  }
}
