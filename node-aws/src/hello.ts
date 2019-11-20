import { APIGatewayEvent, DynamoDBRecord } from "aws-lambda";
import * as AWS from "aws-sdk";
import { HttpResponse } from "aws-sdk";

const documentClient = new AWS.DynamoDB.DocumentClient();

export const handler = async (event: APIGatewayEvent): Promise<any> => {
  return {
    statusCode: 200,
    body: "Hello world"
  };
};

"use strict";
// var AWS = require("aws-sdk"),
//   documentClient = new AWS.DynamoDB.DocumentClient();
// exports.readAllUsers = function(
//   event: APIGatewayEvent,
//   context: any,
//   callback: any
// ) {
//   var params = { TableName: process.env.TABLE_NAME };
//   documentClient.scan(params, function(err: any, data: any) {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, data.Items);
//     }
//   });
// };

export const readAllUsers = async (event: APIGatewayEvent) => {
  var params = { TableName: process.env.TABLE_NAME };
  const response = await documentClient.scan(params).promise();
  return response.Items || [];
  // documentClient.scan(params, function(err: any, data: any) {
  //   console.log("error is ", err);
  //   console.log("data is ", data);
  //   if (err) {
  //     res.statusCode = 400;
  //     res.body = "Error retrieving Todos";
  //   } else {
  //     res.statusCode = 200;
  //     res.body = data.Items;
  //   }
  // });
  // return res;
};
