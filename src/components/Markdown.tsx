import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownProps {
  content: string;
}

export function Markdown({ content }: MarkdownProps) {
  return (
    <div className="prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => <h1>{children}</h1>,
          h2: ({ children }) => <h2>{children}</h2>,
          h3: ({ children }) => <h3>{children}</h3>,
          h4: ({ children }) => <h4>{children}</h4>,
          p: ({ children }) => <p>{children}</p>,
          ul: ({ children }) => <ul>{children}</ul>,
          ol: ({ children }) => <ol>{children}</ol>,
          li: ({ children }) => <li>{children}</li>,
          blockquote: ({ children }) => <blockquote>{children}</blockquote>,
          strong: ({ children }) => <strong>{children}</strong>,
          em: ({ children }) => <em>{children}</em>,
          a: ({ href, children }) => (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          ),
          code: ({ className, children }) => {
            const isInline = !className;
            if (isInline) {
              return <code>{children}</code>;
            }
            return (
              <pre>
                <code className={className}>{children}</code>
              </pre>
            );
          },
          hr: () => <hr />,
          img: ({ src, alt }) => {
            const [imageError, setImageError] = React.useState(false);

            if (!src || imageError) {
              return (
                <div className="w-full h-64 bg-secondary rounded-lg md:rounded-xl my-12 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <p className="text-sm">Image unavailable</p>
                    {alt && <p className="text-xs mt-2">{alt}</p>}
                  </div>
                </div>
              );
            }

            return (
              <img
                src={src}
                alt={alt ?? ""}
                loading="lazy"
                className="w-full h-auto rounded-lg md:rounded-xl my-12"
                onError={() => setImageError(true)}
                style={{ aspectRatio: 'auto' }}
              />
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
