import { getTranslations } from "next-intl/server";

import { fetchArticlesWithDetails } from "@/actions/article";
import { Checkbox, Table } from "@/components";
import { ArticleDetail } from "@/types/article";
import { TableColumn, TableRowBase } from "@/types/table";
import { DeleteArticleButton } from "./DeleteArticleButton";
import { EditArticleButton } from "./EditArticleButton";

interface ArticlesTableData extends TableRowBase, ArticleDetail {
  commentsCount: number;
  actions: "actions";
  author: string;
  select: "select";
}

export const MyArticlesTable = async () => {
  const items = await fetchArticlesWithDetails();
  const t = await getTranslations();

  const tableData: ArticlesTableData[] = items.map((article) => {
    const { comments, articleId } = article;

    return {
      ...article,
      id: articleId,
      actions: "actions",
      author: t("article.unknownAuthor"),
      commentsCount: comments.length,
      select: "select",
    };
  });
  const columns: TableColumn<ArticlesTableData>[] = [
    {
      header: "select",
      accessor: "select",
      align: "center",
      disableSort: true,
      renderBodyCell: () => <Checkbox />,
      renderHeaderCell: () => <Checkbox />,
    },
    {
      header: t("pages.admin.myArticles.table.headers.title"),
      accessor: "title",
    },
    {
      header: t("pages.admin.myArticles.table.headers.perex"),
      accessor: "perex",
    },
    { header: "Author", accessor: "author" },
    {
      header: t("pages.admin.myArticles.table.headers.commentsCount"),
      accessor: "commentsCount",
      align: "center",
    },
    {
      header: t("pages.admin.myArticles.table.headers.actions"),
      accessor: "actions",
      align: "center",
      renderBodyCell: (_, { articleId }) => (
        <div className="inline-flex space-x-2 justify-center gap-24">
          <EditArticleButton articleId={articleId} />
          <DeleteArticleButton articleId={articleId} />
        </div>
      ),
    },
  ];

  return <Table data={tableData} columns={columns} />;
};
