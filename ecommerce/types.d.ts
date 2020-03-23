export interface HttpQuery<P, B> {
  headers: object;
  params: P;
  body: B;
}

export interface HttpResult<B> {
  status?: number;
  headers?: object;
  body?: B;
}
