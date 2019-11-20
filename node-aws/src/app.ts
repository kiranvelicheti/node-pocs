import express from "express";
import { Request, Response } from "express";
import * as customerController from "./controller/CustomerController";

const app = express();
app.use(express.json());
const port = 8080 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hi!");
});

app.get("/customer", customerController.allCustomer);
app.post("/customer", customerController.saveCustomer);
app.get("/customer/:id", customerController.findById);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
