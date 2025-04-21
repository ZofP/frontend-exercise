export const ENDPOINTS_CONFIG = {
  anonymous: {
    login: "/login",
  },
  common: {
    articles: "/articles",
    articleById: "/articles/:articleId",
    commentsForArticle: "/articles/:articleId/comments",
    getImage: "/images/:imageId",
    createImage: "/images",
  },
  admin: {
    commentsForArticle: "/admin/articles/:articleId/comments",
    upvoteComment: "/admin/comments/:commentId/upvote",
    downvoteComment: "/admin/comments/:commentId/downvote",
    images: "/admin/images",
    imageById: "/admin/images/:imageId",
  },
} as const;
