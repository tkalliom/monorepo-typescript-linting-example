import { Callback, Context } from "aws-lambda";
import { SNS } from "aws-sdk";
import { config } from "dotenv";

config();

export async function handler(purchase: object, _context: Context, _errorCallback: Callback): Promise<void> {
  const sns = new SNS();
  const snsArguments = {
    TopicArn: "a topic",
    Message: JSON.stringify(purchase)
  };
  await sns.publish(snsArguments).promise();
}
