import { Linkedin } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to main content
      </a>

      <main id="main-content" className="pt-24">
        {children}
      </main>

      <footer className="border-t border-border mt-24" role="contentinfo">
        <div className="container-wide py-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} · Rob Millington</p>
            <div className="flex items-center gap-6">
              <p className="hidden md:block text-[10px] text-muted-foreground/60 uppercase tracking-widest">
                Built with Lovable, Antigravity and Netlify
              </p>
              <a
                href="https://www.linkedin.com/in/rmillington/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
