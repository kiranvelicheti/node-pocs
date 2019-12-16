import { Resolver, Query, Mutation, Arg, Ctx } from "type-graphql";
import User from "../entities/User";
import { UserService } from "../service/userService";
import { Context } from "apollo-server-core";

@Resolver(User)
export default class {
  private readonly userService: UserService = new UserService();
  @Query(returns => [User])
  async retrieveAllUsers(): Promise<User[] | null> {
    return await this.userService.listUsers();
  }

  @Mutation(returns => User)
  async createUser(
    @Arg("data") user: User,
    @Ctx() ctx: Context
  ): Promise<User> {
    return await this.userService.saveUser(user);
  }
}
