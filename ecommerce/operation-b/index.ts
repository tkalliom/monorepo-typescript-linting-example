import { Handler } from "aws-lambda";
import { getAdminClient, getStoreClient } from "ecommerce-shared";

import { HttpQuery, HttpResult } from "../types";

let adminClient: ReturnType<typeof getAdminClient>;
let storeClient: ReturnType<typeof getStoreClient>;

export const handler: Handler<HttpQuery<void, string[]>, HttpResult<void>> = async function (_request, _context) {
  adminClient = adminClient ?? getAdminClient();
  storeClient = storeClient ?? getStoreClient();
  const checkout = await storeClient.checkout.create();

  return {
    status: 201,
    headers: { Location: `/${checkout.id}` }
  };
};
