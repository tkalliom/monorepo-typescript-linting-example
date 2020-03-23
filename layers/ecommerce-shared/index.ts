import fetch from "node-fetch";
import Shopify = require("shopify-api-node");
import * as Client from "shopify-buy";

function getDomain(): string {
  const domain = process.env.DOMAIN;
  if (!domain) throw "Shopify domain not configured";
  return domain;
}

export function getAdminClient(): Shopify {
  const apiKey = process.env.APIKEY;
  if (!apiKey) throw "Shopify API key not configured";
  const password = process.env.PASSWORD;
  if (!password) throw "Shopify password not configured";
  return new Shopify({ shopName: getDomain(), apiKey, password });
}

export function getStoreClient(): ReturnType<typeof Client.buildClient> {
  const storefrontAccessToken = process.env.ACCESS_TOKEN;
  if (!storefrontAccessToken) throw "Storefront access token not configured";
  return Client.buildClient(
    { domain: getDomain(), storefrontAccessToken },
    fetch
  );
}
