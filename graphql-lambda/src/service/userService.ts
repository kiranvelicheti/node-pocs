import User, { UserModel } from "../entities/User";
import * as mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/test");
// mongoose.connect(
//   "mongodb://kiranvelicheti:Documentdb-123@docdb-2019-12-16-19-57-35.cluster-czkrhhg4hhdy.us-east-1.docdb.amazonaws.com:27017/?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0"
// );
export class UserService {
  async listUsers(): Promise<User[] | null> {
    return await UserModel.find();
  }

  // Sample playground querry
  //mutation{
  //   createUser(data: {name: "amrutha",age:29}){
  //     name,
  //     age
  //   }
  // }
  async saveUser(user: User): Promise<User> {
    return await UserModel.create(user);
  }
}
