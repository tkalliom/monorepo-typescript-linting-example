import { Handler } from "aws-lambda";
import { getAdminClient, getStoreClient } from "ecommerce-shared";

import { HttpQuery, HttpResult } from "../types";

let adminClient: ReturnType<typeof getAdminClient>;
let storeClient: ReturnType<typeof getStoreClient>;

export const handler: Handler<HttpQuery<{ cartId: string }, string[]>, HttpResult<void>> = async function (
  _request, _context
) {
  adminClient = adminClient ?? getAdminClient();
  storeClient = storeClient ?? getStoreClient();
  await storeClient.product.list();
  return { status: 204 };
};
