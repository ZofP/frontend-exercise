import ReactMarkdown from "react-markdown";

import styles from "./MarkdownContent.module.scss";

interface MarkdownContentProps {
  content: string;
}

export const MarkdownContent = ({ content }: MarkdownContentProps) => {
  return (
    <article className={styles.markdown}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
};
