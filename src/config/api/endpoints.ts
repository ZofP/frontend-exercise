export const ENDPOINTS_CONFIG = {
  anonymous: {
    login: "/login",
  },
  common: {
    articles: "/articles",
    articleById: "/articles/:articleId",
    commentsForArticle: "/articles/:articleId/comments",
    getImage: "/images/:imageId",
    upvoteComment: "/comments/:commentId/vote/up",
    downvoteComment: "/comments/:commentId/vote/down",
    comments: "/comments",
  },
  admin: {
    commentsForArticle: "/articles/:articleId/comments",
    images: "/images",
    imageById: "/images/:imageId",
    createImage: "/images",
  },
} as const;
