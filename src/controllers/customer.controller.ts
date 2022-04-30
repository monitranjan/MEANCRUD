import { CustomerRepository } from "../repository/customerRepo";


export class UserController {
   private customerRepository:CustomerRepository;
   constructor(){
      this.customerRepository = new CustomerRepository();
   }
   async updateUser(req, res, next){
      try {
         await this.customerRepository.initCustomerRepo();
         let user = await this.customerRepository.updateUser();
         if (user == null) {
           return res.status(400).send('User not regestered');
         }
         res.status(200).send("update success");
       } catch (error) {
         console.log(error);
         next();
       }
   }
}