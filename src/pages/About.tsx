import { Layout } from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <article className="container-narrow py-20">
        <h1 className="mb-6">
          <span className="inline-block text-sm font-sans font-medium tracking-widest uppercase bg-accent-grey text-accent-grey-foreground px-4 py-1.5 rounded-full">About</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-16">
          Two decades of designing products and building the teams that design them.
        </p>

        {/* Bio */}
        <section className="border-t border-border pt-12 mb-16">
          <div className="prose">
            <p>
              I'm a design leader with approximately twenty years of experience spanning 
              hands-on product design, design systems, research operations, and 
              organisational design. Currently serving as Head of Product Design, I lead 
              a team of around ten designers working across multiple product squads.
            </p>
            <p>
              My focus has shifted over the years from making things to making teams that 
              make things. I still care deeply about craft, but I've learned that my highest 
              leverage is in creating conditions where talented people can do their best 
              work—through hiring, systems, rituals, and strategic direction.
            </p>
            <p>
              I'm particularly interested in design systems as organisational infrastructure, 
              research operations as competitive advantage, and the uncomfortable middle 
              ground between individual craft and scaled impact.
            </p>
          </div>
        </section>

        {/* Career Arc */}
        <section className="border-t border-border pt-12 mb-16">
          <h2 className="mb-6">Career Arc</h2>
          <div className="prose">
            <p>
              <strong>Early years: Hands-on craft.</strong> Started as a visual designer, 
              moved into interaction design, eventually became what we'd now call a product 
              designer. Spent years obsessing over pixels, interactions, and the details 
              that make products feel right.
            </p>
            <p>
              <strong>Middle years: Senior IC and early leadership.</strong> Transitioned 
              from individual contributor to leading small teams. Learned that managing 
              people is a different skill from designing products. Made many mistakes. 
              Gradually figured out that my job was to make the team successful, not to 
              be the best designer on the team.
            </p>
            <p>
              <strong>Recent years: Organisational design.</strong> Moved into roles where 
              I'm responsible for design culture, hiring, systems, and strategy. The work 
              is increasingly abstract—I'm designing the conditions for design rather than 
              the designs themselves. This is harder than it sounds and more rewarding than 
              I expected.
            </p>
          </div>
        </section>

        {/* Principles */}
        <section className="border-t border-border pt-12 mb-16">
          <h2 className="mb-6">Working Principles</h2>
          <div className="prose">
            <ul>
              <li>
                <strong>Strong opinions, loosely held.</strong> I'll advocate forcefully 
                for positions I believe in, and change my mind when presented with better 
                evidence.
              </li>
              <li>
                <strong>Systems over heroics.</strong> Sustainable design quality comes 
                from infrastructure, not individual effort.
              </li>
              <li>
                <strong>Transparency about uncertainty.</strong> I'd rather say "I don't 
                know" than pretend confidence I don't have.
              </li>
              <li>
                <strong>Craft matters, but outcomes matter more.</strong> Beautiful work 
                that doesn't solve the problem isn't beautiful.
              </li>
              <li>
                <strong>The team is the product.</strong> My job is building capability, 
                not doing the work myself.
              </li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-border pt-12">
          <h2 className="mb-6">Get in Touch</h2>
          <div className="prose">
            <p>
              I'm always interested in conversations about design leadership, 
              building design teams, and the craft of product work.
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/rmillington/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact me on LinkedIn →
              </a>
            </p>
          </div>
        </section>
      </article>
    </Layout>
  );
}
