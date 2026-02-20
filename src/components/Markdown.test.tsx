import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Markdown } from "@/components/Markdown";

describe("Markdown component", () => {
    it("should render basic markdown", () => {
        render(<Markdown content="# Hello World" />);
        expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Hello World");
    });

    it("should render paragraphs", () => {
        render(<Markdown content="This is a paragraph." />);
        expect(screen.getByText("This is a paragraph.")).toBeInTheDocument();
    });

    it("should render lists", () => {
        const content = `
- Item 1
- Item 2
- Item 3
    `;
        render(<Markdown content={content} />);
        const listItems = screen.getAllByRole("listitem");
        expect(listItems).toHaveLength(3);
    });

    it("should render links with correct attributes", () => {
        render(<Markdown content="[Link](https://example.com)" />);
        const link = screen.getByRole("link");
        expect(link).toHaveAttribute("href", "https://example.com");
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("should render code blocks", () => {
        const content = "```js\nconst x = 1;\n```";
        render(<Markdown content={content} />);
        expect(screen.getByText("const x = 1;")).toBeInTheDocument();
    });

    it("should render inline code", () => {
        render(<Markdown content="Use `const` for constants." />);
        expect(screen.getByText("const")).toBeInTheDocument();
    });

    it("should handle empty content", () => {
        const { container } = render(<Markdown content="" />);
        expect(container.querySelector(".prose")).toBeInTheDocument();
    });

    it("should render headings at different levels", () => {
        const content = `
# H1
## H2
### H3
#### H4
    `;
        render(<Markdown content={content} />);
        expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("H1");
        expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("H2");
        expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent("H3");
        expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent("H4");
    });

    it("should render blockquotes", () => {
        render(<Markdown content="> This is a quote" />);
        expect(screen.getByText("This is a quote")).toBeInTheDocument();
    });

    it("should render strong text", () => {
        render(<Markdown content="**bold text**" />);
        const strong = screen.getByText("bold text");
        expect(strong.tagName).toBe("STRONG");
    });

    it("should render emphasized text", () => {
        render(<Markdown content="*italic text*" />);
        const em = screen.getByText("italic text");
        expect(em.tagName).toBe("EM");
    });
});
