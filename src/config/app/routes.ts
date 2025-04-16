export const ROUTES_CONFIG = {
  common: {
    home: "/",
    about: "/about",
    articleDetail: "/articles/:id",
  },
  anonymous: { login: "/login" },
  admin: {
    myArticles: "/admin/articles",
    newArticle: "/admin/articles/new",
  },
} as const;
