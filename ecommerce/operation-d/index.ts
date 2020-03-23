import { Handler } from "aws-lambda";
import { getStoreClient } from "ecommerce-shared";

import { HttpResult, HttpQuery } from "../types";

let storeClient: ReturnType<typeof getStoreClient>;

export const handler: Handler<HttpQuery<{ cartId: string }, void>, HttpResult<object>> = async function (
  _event, _context
) {
  storeClient = storeClient ?? getStoreClient();
  await storeClient.product.fetch();
  return {
    body: {
      a: "b"
    }
  };
};
