import { ApolloServer } from "apollo-server-lambda";

import "reflect-metadata";

import { buildSchema, buildSchemaSync } from "type-graphql";
import ProjectResolver from "./resolvers/ProjectResolver";
import TaskResolver from "./resolvers/TaskResolver";

// async function bootstrap() {
const schema = buildSchemaSync({
  resolvers: [ProjectResolver, TaskResolver],
  emitSchemaFile: true
});

const server = new ApolloServer({
  schema
});

exports.graphqlHandler = server.createHandler();
// }

// export default bootstrap();
