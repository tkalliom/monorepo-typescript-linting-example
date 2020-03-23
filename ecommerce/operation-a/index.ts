import { Handler } from "aws-lambda";
import { getAdminClient } from "ecommerce-shared";

import { HttpQuery, HttpResult } from "../types";

let client: ReturnType<typeof getAdminClient>;

export const handler: Handler<HttpQuery<void, void>, HttpResult<object>> = async function (
  _event, _context, _callback
) {
  client = client ?? getAdminClient();
  const products = await client.product.list();
  return { body: products };
};
