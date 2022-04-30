import { Router } from "express";
import { CustomerController } from "../controllers/customerController";

export class UserRoutes {
  private router: Router;
  private customerController:CustomerController;

  constructor() {
    this.router = Router();
    this.customerController = new CustomerController();
  }

  public intializeRoutes() {
    this.router.get('/api/v1/customers/:id', (req, res) => {
      this.customerController.getPolicyDetailsById(req, res);
    });
    this.router.put('/api/v1/customers/:id', (req, res) => {
      this.customerController.updatePolicyDetails(req, res)
    });
  }
}
