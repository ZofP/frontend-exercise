export const ENDPOINTS_CONFIG = {
  anonymous: {
    articles: "/articles",
    articleById: "/articles/:articleId",
    commentsForArticle: "/articles/:articleId/comments",
    getImage: "/images/:imageId",
    createImage: "/images",
  },
  admin: {
    login: "/admin/auth/login",
    refreshToken: "/admin/auth/refresh",
    tenants: "/admin/tenants",
    tenantById: "/admin/tenants/:tenantId",
    articles: "/admin/articles",
    articleById: "/admin/articles/:articleId",
    commentsForArticle: "/admin/articles/:articleId/comments",
    upvoteComment: "/admin/comments/:commentId/upvote",
    downvoteComment: "/admin/comments/:commentId/downvote",
    images: "/admin/images",
    imageById: "/admin/images/:imageId",
  },
} as const;
