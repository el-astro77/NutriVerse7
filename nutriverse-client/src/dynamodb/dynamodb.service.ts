import { Injectable } from "@nestjs/common";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
@Injectable()
export class DynamoDBService {
  private readonly docClient: DynamoDBDocumentClient;

  constructor() {
    const client = new DynamoDBClient({
      region: process.env.AWS_REGION || "us-east-1",
      // Add credentials here if not using AWS CLI or IAM roles
    });

    this.docClient = DynamoDBDocumentClient.from(client);
  }

  getDocClient(): DynamoDBDocumentClient {
    return this.docClient;
  }
}
