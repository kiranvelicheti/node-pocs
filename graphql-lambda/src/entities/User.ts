import { prop, Typegoose } from "typegoose";
import { ObjectType, Field, Int, InputType } from "type-graphql";

@ObjectType()
@InputType("user")
export default class User extends Typegoose {
  @Field()
  @prop()
  public name?: string;

  @Field(type => Int)
  @prop({ required: true })
  public age!: number;
}

export const UserModel = new User().getModelForClass(User);
