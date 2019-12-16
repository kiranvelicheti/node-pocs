import { ApolloServer } from "apollo-server-lambda";
import "reflect-metadata";
import { buildSchemaSync } from "type-graphql";
import ProjectResolver from "./resolvers/ProjectResolver";
import TaskResolver from "./resolvers/TaskResolver";
import UserResolver from "./resolvers/UserResolver";

(<any>global).cachedSchema =
  (<any>global).cachedSchema ||
  buildSchemaSync({
    resolvers: [ProjectResolver, TaskResolver, UserResolver],
    emitSchemaFile: false
  });

const schema = (<any>global).cachedSchema;

const server = new ApolloServer({
  schema
});

exports.handler = server.createHandler();
