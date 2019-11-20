import { Request, Response } from "express";
import Customer from "../domain/Customer";
import { CustomerDomain } from "../domain/CustomerDomain";
import _ from "lodash";

export let allCustomer = (req: Request, res: Response) => {
  Customer.find((err: any, customers: any) => {
    if (err) {
      res.send("Error!");
    } else {
      var customerDomain = _.map(
        customers,
        customer =>
          new CustomerDomain(customer.name, customer.address, 5738919801)
      );
      res.send(customers);
    }
  });
};

export let saveCustomer = (req: Request, res: Response) => {
  var customer = new Customer(req.body);
  customer.save((err: any) => {
    if (err) {
      res.send("Error!");
    } else {
      res.send(customer);
    }
  });
};

export let findById = (req: Request, res: Response) => {
  Customer.findById(req.params.id, (err: any, customer: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(customer);
    }
  });
};
