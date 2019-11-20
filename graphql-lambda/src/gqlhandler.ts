import { ApolloServer } from "apollo-server-lambda";
import "reflect-metadata";
import { buildSchemaSync } from "type-graphql";
import ProjectResolver from "./resolvers/ProjectResolver";
import TaskResolver from "./resolvers/TaskResolver";

(<any>global).cachedSchema =
  (<any>global).cachedSchema ||
  buildSchemaSync({
    resolvers: [ProjectResolver, TaskResolver],
    emitSchemaFile: true
  });

const schema = (<any>global).cachedSchema;

const server = new ApolloServer({
  schema
});

exports.handler = server.createHandler();
