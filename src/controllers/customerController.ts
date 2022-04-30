import { CustomerRepository } from "../repository/customerRepo";
import { Request, Response, NextFunction } from 'express';

export class CustomerController {
   private customerRepository: CustomerRepository;

   constructor() {
      this.customerRepository = new CustomerRepository();
   }

   async getPolicyDetailsById(req: Request, res: Response) {
      try {
         await this.customerRepository.initCustomerRepo();
         let policyDetails = await this.customerRepository.getPolicyById(req.params.id);
         if (policyDetails == null) {
            return res.status(400).send('Policy Not found');
         }
         res.status(200).send({ policyDetails });
      } catch (error) {
         console.log(error);
      }
   }

   async updatePolicyDetails(req: Request, res: Response) {
      try {
         await this.customerRepository.initCustomerRepo();
         let user = await this.customerRepository.updatePolicy(req.params.id);
         if (user == null) {
            return res.status(400).send('Policy Not found');
         }
         res.status(200).send("update success");
      } catch (error) {
         console.log(error);
      }
   }
}