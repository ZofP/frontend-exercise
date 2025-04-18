import { getTranslations } from "next-intl/server";

import { fetchArticlesWithDetails } from "@/actions/article";
import { Table } from "@/components";
import { ArticleDetail } from "@/types/article";
import { TableColumn, TableRowBase } from "@/types/table";
import { DeleteArticleButton } from "./DeleteArticleButton";
import { EditArticleButton } from "./EditArticleButton";

interface ArticlesTableData extends TableRowBase, ArticleDetail {
  commentsCount: number;
  actions: string;
  author: string;
}

const getValue = <T, K extends keyof T>(obj: T, key: K): T[K] => obj[key];

export const MyArticlesTable = async () => {
  const items = await fetchArticlesWithDetails();
  const t = await getTranslations("article");
  console.log({ items });

  const tableData: ArticlesTableData[] = items.map((article) => {
    const { comments, articleId } = article;

    return {
      ...article,
      id: articleId,
      actions: "actions",
      author: t("unknownAuthor"),
      commentsCount: comments.length,
    };
  });
  const columns: TableColumn<ArticlesTableData>[] = [
    { header: "Article title", accessor: "title" },
    { header: "Perex", accessor: "perex" },
    { header: "Author", accessor: "author" },
    {
      header: "# of comments",
      accessor: "commentsCount",
      align: "center",
    },
    {
      header: "Actions",
      accessor: "actions",
      align: "center",
      render: (_, { articleId }) => {
        return (
          <div className="inline-flex space-x-2 justify-center gap-24">
            <EditArticleButton articleId={articleId} />
            <DeleteArticleButton articleId={articleId} />
          </div>
        );
      },
    },
  ];

  return <Table data={tableData} columns={columns} />;
};
