interface ResponseOptions {
  statusCode?: number;
  message?: string;
  data?: any[];
  ok?: boolean;
}

export function responseGenerator(responseOptions: ResponseOptions) {
  const {
    statusCode = 200,
    message = "ok",
    data = [],
    ok = true,
  } = responseOptions;
  return {
    statusCode,
    ok,
    message,
    data,
  };
}
