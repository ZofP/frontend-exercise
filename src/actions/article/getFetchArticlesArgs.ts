import { API_CONFIG } from "@/config/api";
import { ExtendedRequestInit, PaginatedFetchArgs } from "@/types";
import { buildPathWithParams } from "@/utils";

const {
  endpoints: {
    common: { articles },
  },
  tags: {
    articles: { list },
  },
} = API_CONFIG;

export const getFetchArticlesArgs = (
  args?: PaginatedFetchArgs
): [string | URL | Request, ExtendedRequestInit] => [
  buildPathWithParams(articles, args),
  {
    method: "GET",
    next: { tags: [list] },
  },
];
