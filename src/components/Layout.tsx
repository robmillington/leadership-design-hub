import { Link, useLocation } from "react-router-dom";
interface LayoutProps {
  children: React.ReactNode;
}
const navItems = [{
  path: "/",
  label: "Home"
}, {
  path: "/case-studies",
  label: "Case Studies"
}, {
  path: "/leadership",
  label: "Leadership & Practice"
}, {
  path: "/writing",
  label: "Writing"
}, {
  path: "/about",
  label: "About"
}];
export function Layout({
  children
}: LayoutProps) {
  const location = useLocation();
  return <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <nav className="container-wide py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <Link to="/" className="font-serif text-xl text-foreground hover:text-foreground no-underline">Rob Millington</Link>
            <ul className="flex flex-wrap gap-6 text-sm">
              {navItems.map(item => <li key={item.path}>
                  <Link to={item.path} className={`transition-colors no-underline ${location.pathname === item.path ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"}`}>
                    {item.label}
                  </Link>
                </li>)}
            </ul>
          </div>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="border-t border-border mt-24">
        <div className="container-wide py-12">
          <div className="flex flex-col sm:flex-row justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} · Head of Product Design</p>
            <p>Built with React + Vite · No dependencies on proprietary platforms</p>
          </div>
        </div>
      </footer>
    </div>;
}