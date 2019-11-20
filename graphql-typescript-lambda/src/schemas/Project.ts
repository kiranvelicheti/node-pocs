import { Field, Int, ObjectType } from "type-graphql";
import Task from "./Task";

@ObjectType()
export default class Project {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => [Task])
  tasks: Task[];
}
