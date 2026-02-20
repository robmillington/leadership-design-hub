import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Markdown } from "@/components/Markdown";
import { getBySlug, formatDate, calculateReadingTime } from "@/lib/content";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, ArrowRight, AlertCircle } from "lucide-react";

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = slug ? getBySlug("case-studies", slug) : undefined;

  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    if (caseStudy?.meta.protected) {
      const unlocked = sessionStorage.getItem(`case_study_unlocked_${slug}`);
      if (unlocked === "true") {
        setIsUnlocked(true);
      }
    } else {
      setIsUnlocked(true);
    }
  }, [caseStudy, slug]);

  if (!caseStudy) {
    return (
      <Layout>
        <section className="container-narrow py-20">
          <h1>Case study not found</h1>
          <p className="text-muted-foreground mt-4">
            <Link to="/case-studies">← Back to case studies</Link>
          </p>
        </section>
      </Layout>
    );
  }

  const handleUnlock = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (password.toLowerCase() === "awazing") {
      setIsUnlocked(true);
      setError(false);
      sessionStorage.setItem(`case_study_unlocked_${slug}`, "true");
    } else {
      setError(true);
      setPassword("");
    }
  };

  const readingTime = calculateReadingTime(caseStudy.body);

  return (
    <Layout>
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <motion.div
            key="password-screen"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.24, ease: "easeInOut" }}
            className="container-narrow py-24 flex flex-col items-center justify-center min-h-[60vh]"
          >
            <div className="w-full max-w-sm bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-border shadow-sm">
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Lock size={24} />
                </div>
              </div>

              <h2 className="text-center text-2xl mb-2">Protected case study</h2>
              <p className="text-center text-muted-foreground mb-8 text-sm">
                This project contains commercially sensitive work. Please enter the password to continue.
              </p>

              <form onSubmit={handleUnlock} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="password" title="Password" className="text-sm font-medium sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    autoFocus
                  />
                  {error && (
                    <div className="flex items-center gap-2 text-destructive text-sm mt-2 animate-in fade-in slide-in-from-top-1">
                      <AlertCircle size={14} />
                      <span>Incorrect password</span>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity font-medium"
                >
                  View case study
                  <ArrowRight size={16} />
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-border flex justify-center">
                <Link to="/case-studies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  ← Back to case studies
                </Link>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.article
            key="case-study-content"
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="container-narrow py-20"
          >
            {/* Header */}
            <header className="mb-12">
              <Link
                to="/case-studies"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
              >
                ← Back to case studies
              </Link>

              <div className="flex items-center gap-3 mb-4">
                <h1 className="my-0">{caseStudy.meta.title}</h1>
                {caseStudy.meta.protected && (
                  <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-medium uppercase tracking-wider">
                    <Lock size={10} />
                    Protected
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                {caseStudy.meta.period && (
                  <>
                    <span className="font-medium text-foreground">{caseStudy.meta.period}</span>
                    <span>·</span>
                  </>
                )}
                {!caseStudy.meta.period && caseStudy.meta.date && (
                  <>
                    <time dateTime={caseStudy.meta.date}>
                      {formatDate(caseStudy.meta.date)}
                    </time>
                    <span>·</span>
                  </>
                )}
                <span>{readingTime} min read</span>
                {caseStudy.meta.role && (
                  <>
                    <span>·</span>
                    <span>{caseStudy.meta.role}</span>
                  </>
                )}
              </div>

              {caseStudy.meta.summary && (
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {caseStudy.meta.summary}
                </p>
              )}
            </header>

            {/* Content */}
            <div className="border-t border-border pt-12">
              <Markdown content={caseStudy.body} />
            </div>
          </motion.article>
        )}
      </AnimatePresence>
    </Layout>
  );
}
