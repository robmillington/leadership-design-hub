import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <section className="container-narrow py-20">
        <h1 className="mb-6">Page not found</h1>
        <p className="text-xl text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block text-primary hover:text-primary/80 transition-colors"
        >
          ← Back to home
        </Link>
      </section>
    </Layout>
  );
}
