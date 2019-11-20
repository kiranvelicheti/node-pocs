import { Field, Int, ObjectType } from "type-graphql";
import Project from "./Project";

@ObjectType()
export default class Task {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field(() => Project)
  project: Project;

  @Field()
  completed: boolean;
}
