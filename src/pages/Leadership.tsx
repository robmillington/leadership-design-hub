import { Layout } from "@/components/Layout";

export default function Leadership() {
  return (
    <Layout>
      <article className="container-narrow py-20">
        <h1 className="mb-6">
          <span className="inline-block text-sm font-sans font-medium tracking-widest uppercase bg-white dark:bg-black/70 dark:backdrop-blur-xl text-black dark:text-white px-4 py-1.5 rounded-full shadow-sm">Leadership & Practice</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-16">
          How I think about leading design teams, building craft at scale, and
          creating the conditions for great product work.
        </p>

        {/* How I Lead */}
        <section className="border-t border-border pt-12 mb-16">
          <h2 className="mb-6">How I Lead Design Teams</h2>
          <div className="prose">
            <p>
              Design leadership, at its core, is about creating conditions where talented
              people can do their best work. This means stepping back from hands-on design
              and focusing on hiring, systems, rituals, and strategic direction.
            </p>
            <p>
              I believe in <strong>high autonomy with high alignment</strong>. Teams should
              have significant freedom in how they approach problems, but they need shared
              principles and goals to coordinate effectively. My role is to establish that
              alignment and then get out of the way.
            </p>
            <p>
              I invest heavily in <strong>feedback culture</strong>. Regular crits, structured
              reviews, and candid 1:1s create the environment where designers grow. I'd rather
              have uncomfortable conversations early than discover problems late.
            </p>
          </div>
        </section>

        {/* Craft at Scale */}
        <section className="border-t border-border pt-12 mb-16">
          <h2 className="mb-6">Craft at Scale</h2>
          <div className="prose">
            <p>
              The hardest transition in design leadership is accepting that you can't
              personally ensure quality anymore. At 10+ designers, you're building systems
              that produce quality rather than producing it yourself.
            </p>
            <p>
              This means <strong>encoding craft into infrastructure</strong>: design systems
              that make good decisions the default, review processes that surface issues
              early, and documentation that captures not just what we build but why.
            </p>
            <p>
              I'm strategic about where I personally engage. Early concept work, critical
              user-facing flows, and work from designers developing their judgment get my
              direct attention. Everything else runs through the systems we've built together.
            </p>
          </div>
        </section>

        {/* Design Systems */}
        <section className="border-t border-border pt-12 mb-16">
          <h2 className="mb-6">Design Systems Philosophy</h2>
          <div className="prose">
            <p>
              Design systems are often misunderstood as component libraries. They're actually
              <strong>encoded design decisions</strong>—a way to scale taste and judgment
              across an organisation.
            </p>
            <p>
              I favour <strong>federated models</strong> over centralised design systems teams.
              When every product team contributes to the system, you get better buy-in and
              more relevant components. The trade-off is consistency, which you manage through
              clear governance and shared principles.
            </p>
            <p>
              <strong>Tokens before themes.</strong> Investing in design tokens (colour, spacing,
              typography) creates more leverage than building themed component variants. Products
              can maintain distinct personalities while sharing foundational decisions.
            </p>
          </div>
        </section>

        {/* Research Operations */}
        <section className="border-t border-border pt-12 mb-16">
          <h2 className="mb-6">Research Operations</h2>
          <div className="prose">
            <p>
              Research without infrastructure creates noise, not insight. The goal of research
              ops is to make learning <strong>compound</strong>—each study building on previous
              understanding rather than starting from scratch.
            </p>
            <p>
              I believe in <strong>enabling designers to research</strong> rather than
              centralising research in a specialist team. This means building recruitment
              panels, repository systems, and methodology templates that make it easy for
              any designer to run rigorous studies.
            </p>
            <p>
              <strong>Synthesis is the multiplier.</strong> Regular cross-team synthesis
              sessions surface patterns that individual studies miss. This is where research
              ops creates real strategic value.
            </p>
          </div>
        </section>

        {/* Cross-functional Collaboration */}
        <section className="border-t border-border pt-12">
          <h2 className="mb-6">Working with PMs and Engineering</h2>
          <div className="prose">
            <p>
              The best product work happens when design, product management, and engineering
              operate as genuine partners rather than a handoff chain. This requires
              <strong>shared context from the start</strong>—bringing all disciplines into
              problem framing, not just solution execution.
            </p>
            <p>
              I push for <strong>early technical involvement</strong> in design exploration.
              Engineers should be sketching alongside designers, not receiving finished specs.
              This catches feasibility issues early and often produces better solutions.
            </p>
            <p>
              With PMs, I focus on <strong>aligning on problems before solutions</strong>.
              It's easy to spend months refining a design for the wrong problem. Regular
              recalibration on user needs and business goals keeps us honest.
            </p>
          </div>
        </section>
      </article>
    </Layout>
  );
}
