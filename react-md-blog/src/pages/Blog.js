import React, { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import test from "../markdown/test.md"
import remarkGfm from 'remark-gfm'

// Style
import "../style/blog.css";

function Blog() {
  let [markdown, setMarkdown] = useState("");
  useEffect(() => {
    fetch(test)
      .then((row) => row.text())
      .then((text) => {
        setMarkdown(text);
      });
  }, []);
  return (
    <div>
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}

export default Blog;
