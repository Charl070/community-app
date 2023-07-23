const baseUrl: string = 'http://localhost';

const request = <B>(
  url: string,
  method: ApiMethod,
  body?: B | null,
  headers: { [key: string]: string } = {},
): Promise<Response> => {
  const jsonBody: string | undefined = body ? JSON.stringify(body) : undefined;

  return fetch(`${baseUrl}${url}`, {
    method: method,
    body: jsonBody,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  }).then(res => {
    if (res.status > 204) {
      throw Error('Failed');
    }
    return res.json();
  });
};

export { baseUrl, request };
