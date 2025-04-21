"use client";

import MDEditor, { MDEditorProps } from "@uiw/react-md-editor";
import clsx from "clsx";

import styles from "./MarkdownEditor.module.scss";

export const MarkdownEditor = ({ className, ...props }: MDEditorProps) => {
  return (
    <MDEditor
      preview="edit"
      className={clsx(styles.editor, className)}
      {...props}
    />
  );
};
