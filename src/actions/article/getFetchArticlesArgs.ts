import { API_CONFIG } from "@/config/api";
import { ExtendedRequestInit, PaginatedFetchArgs } from "@/types";
import { buildPathWithParams } from "@/utils";

export const getFetchArticlesArgs = (
  args?: PaginatedFetchArgs
): [string | URL | Request, ExtendedRequestInit] => [
  buildPathWithParams(API_CONFIG.endpoints.common.articles, args),
  {
    method: "GET",
    next: { tags: ["articles"] },
  },
];
