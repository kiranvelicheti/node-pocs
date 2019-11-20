import mongoose from "mongoose";

const uri: string = "mongodb://127.0.0.1:27017/test";

mongoose.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err: any) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("Successfully Connected!");
    }
  }
);

export interface ICustomer extends mongoose.Document {
  name: string;
  address: string;
}

export const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true }
});

const Customer = mongoose.model<ICustomer>("Customer", CustomerSchema);
export default Customer;
