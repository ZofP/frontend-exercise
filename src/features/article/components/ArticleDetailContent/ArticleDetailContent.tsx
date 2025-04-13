import { MarkdownContent } from "@/components";

interface ArticleDetailContentProps {
  content: string;
}

const sampleMarkdown = `
# Article Title

This is an **article** written in _Markdown_.

## Subheading
Here's a [link](https://www.example.com) to an example website.

- Bullet point 1
- Bullet point 2

\`\`\`js
// Some JavaScript code block
const hello = "Hello, world!";
console.log(hello);
\`\`\`

> A blockquote example.

![Image Alt Text](https://via.placeholder.com/150)

`;

export const ArticleDetailContent = ({
  content,
}: ArticleDetailContentProps) => {
  return (
    <div>
      <MarkdownContent content={content} />
    </div>
  );
};
