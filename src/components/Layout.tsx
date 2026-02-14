import { Linkedin } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <main className="pt-24">{children}</main>

      <footer className="border-t border-border mt-24">
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
                aria-label="LinkedIn"
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
