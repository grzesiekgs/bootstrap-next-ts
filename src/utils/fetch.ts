export type SupportedFetchMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type FetchBody = Record<string, any>;

export interface FetchParams {
  method: SupportedFetchMethods;
  body?: FetchBody;
  [key: string]: any;
}

export const appendBodyAsSearchParams = (fetchUrl: string, fetchBody: FetchBody) =>
  Object.entries(fetchBody).reduce<URL>((newUrl, [attribute, value]) => {
    newUrl.searchParams.append(attribute, value);

    return newUrl;
  }, new URL(fetchUrl)).href;

export const getRequestUrlAndParams = (
  url: string,
  params: FetchParams
): { url: string; params: Record<string, string> } => {
  if (params.method === 'GET' && params.body) {
    const { body, ...rawParams } = params;

    return {
      url: appendBodyAsSearchParams(url, body),
      params: rawParams
    };
  }

  if (params.body) {
    const { body, ...rawParams } = params;

    return {
      params: {
        ...rawParams,
        body: JSON.stringify(body)
      },
      url
    };
  }

  return {
    url,
    params
  };
};
