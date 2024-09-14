import { Module } from "@nestjs/common";
import { DynamoDBService } from "../dynamodb/dynamodb.service";

@Module({
  imports: [],
  controllers: [],
  providers: [DynamoDBService],
})
export class AppModule {}
