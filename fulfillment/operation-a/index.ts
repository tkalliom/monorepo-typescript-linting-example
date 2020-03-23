import { SQSHandler } from "aws-lambda";

export const handler: SQSHandler = async function (_event, _context, _callback) {
    console.log("Hello world");
};
