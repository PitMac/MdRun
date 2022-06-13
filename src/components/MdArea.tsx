import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { TextContext } from "../context/TextContext";

export const MdArea = () => {
  const { code } = useContext(TextContext);

  return (
    <ReactMarkdown
      className="markdown"
      components={{
        img({ node, className, children, ...props }) {
          return (
            <img {...props} style={{ maxWidth: "100%" }}>
              {children}
            </img>
          );
        },
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              lineProps={{
                style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
              }}
              wrapLines={true}
              children={String(children).replace(/\n$/, "")}
              // @ts-ignore
              style={atomDark}
              PreTag="div"
              language={match[1]}
              {...props}
            />
          ) : (
            <code className={className ? className : ""} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {code}
    </ReactMarkdown>
  );
};
