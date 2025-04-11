export const ROUTES_CONFIG = {
  common: {
    home: "/",
    about: "/about",
    articleDetail: "/articles/:id",
  },
  anonymous: { login: "/login" },
  admin: {
    myArticles: "/my-articles",
    newArticle: "/articles/new",
  },
} as const;
