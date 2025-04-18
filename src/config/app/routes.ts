export const ROUTES_CONFIG = {
  common: {
    home: "/",
    about: "/about",
    articleDetail: "/articles/:articleId",
  },
  anonymous: { login: "/login" },
  admin: {
    myArticles: "/admin/articles",
    newArticle: "/admin/articles/new",
    editArticle: "/admin/articles/:articleId/edit",
  },
} as const;
