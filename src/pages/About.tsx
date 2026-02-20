import { Layout } from "@/components/Layout";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function About() {
  const [isEarlierWorkOpen, setIsEarlierWorkOpen] = useState(false);
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === "#earlier-work") {
      setIsEarlierWorkOpen(true);
      setTimeout(() => {
        const element = document.getElementById("earlier-work");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [hash]);

  return (
    <Layout>
      <article className="container-narrow py-20">
        <h1 className="mb-6">
          <span className="inline-block text-sm font-sans font-medium tracking-widest uppercase bg-white dark:bg-black/70 dark:backdrop-blur-xl text-black dark:text-white px-4 py-1.5 rounded-full shadow-sm">About</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-16">
          Product design leader operating at the intersection of product, design and commercial performance.
        </p>

        {/* Intro */}
        <section className="border-t border-border pt-12 mb-16">
          <div className="prose">
            <p>
              I lead product design for high-traffic digital platforms, shaping both the experiences customers see and the teams and systems that deliver them.
            </p>
            <p>
              My focus is connecting design to measurable business outcomes. That includes improving conversion, increasing customer lifetime value, and building product capabilities that scale across brands and markets.
            </p>
            <p>
              I've spent the last few years operating close to product leadership, contributing to roadmap direction, experimentation strategy and organisational design. My role often sits between design, product and engineering, helping align vision with delivery.
            </p>
            <p>
              I still care about craft. But my primary leverage now is building strong teams, clear systems and focused product strategy.
            </p>
          </div>
        </section>

        {/* Product & Leadership Experience */}
        <section className="border-t border-border pt-12 mb-16">
          <h2 className="mb-6">Product &amp; Leadership Experience</h2>
          <div className="prose">
            <p className="text-base text-muted-foreground mb-8">
              Recent work, prioritised for relevance to product leadership and commercial outcomes.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl mb-3">Awaze — Head of Product Design (2021–Present)</h3>
                <ul className="space-y-1.5">
                  <li>Leading product design across Cottages.com, Hoseasons and Novasol</li>
                  <li>Supporting a platform handling ~300k daily sessions across multiple brands</li>
                  <li>Built and scaled a shared multi-brand design system improving delivery speed and consistency</li>
                  <li>Introduced research operations and experimentation practices to support optimisation and decision-making</li>
                  <li>Partnering with product leadership on roadmap, funnel performance and strategic initiatives</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3">Barclays — Lead Product Designer (2020–2021)</h3>
                <ul className="space-y-1.5">
                  <li>Designed a new "Product Hub" across app and web to grow adoption of financial products</li>
                  <li>Worked on commercial opportunities spanning loans, insurance and mortgages</li>
                  <li>Moved into a strategic team exploring the future consumer banking model and paid services</li>
                  <li>Heavy involvement in customer research, behavioural insight and proposition design</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3">Thomas Cook Airlines — Head of Design (2018–2019)</h3>
                <ul className="space-y-1.5">
                  <li>Set up team culture and product design ways of working across multiple squads</li>
                  <li>Built a digital design system to improve consistency across the estate</li>
                  <li>Mentored designers and supported discovery through to iteration and delivery</li>
                  <li>Close collaboration with product and engineering to align intent with execution</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3">NHS App — Lead Product Designer (2017–2019)</h3>
                <ul className="space-y-1.5">
                  <li>Core design role on a nationally scaled product delivered in under a year</li>
                  <li>Designed critical journeys in a regulated environment, balancing usability, security and trust</li>
                  <li>Led UX research through regular sessions to capture needs and validate direction</li>
                  <li>Rapid prototyping from design tools into higher-fidelity prototypes for testing and alignment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Earlier Creative & Interactive Work - Expandable */}
        <section id="earlier-work" className="border-t border-border pt-12 mb-16">
          <Collapsible open={isEarlierWorkOpen} onOpenChange={setIsEarlierWorkOpen}>
            <CollapsibleTrigger asChild>
              <button
                className="flex items-center justify-between w-full text-left group mb-2"
                aria-expanded={isEarlierWorkOpen}
                aria-controls="earlier-work-content"
              >
                <div>
                  <h2 className="mb-2">Earlier Creative &amp; Interactive Work</h2>
                  <p className="text-sm text-muted-foreground">
                    Before moving fully into product, I spent a decade leading creative, interactive and motion projects across studios and agencies.
                  </p>
                </div>
                <ChevronDown
                  className={`ml-4 h-5 w-5 text-muted-foreground transition-transform duration-240 ease-in-out flex-shrink-0 ${isEarlierWorkOpen ? "rotate-180" : ""
                    }`}
                />
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent
              id="earlier-work-content"
              className="overflow-hidden transition-all duration-240 ease-in-out data-[state=closed]:animate-collapse-up data-[state=open]:animate-collapse-down"
            >
              <div className="prose pt-6">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl mb-3">Hitachi / Salford Royal — Senior UX &amp; Design Manager (2019–2020)</h3>
                    <ul className="space-y-1.5">
                      <li>Discovery for hospital bed management and patient flow systems</li>
                      <li>Service and systems thinking across operational healthcare environments</li>
                      <li>Worked across complex stakeholder groups to map problems and define opportunities</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl mb-3">Numiko — Head of Design &amp; UX (2015–2017)</h3>
                    <ul className="space-y-1.5">
                      <li>Senior creative lead across multiple digital programmes</li>
                      <li>Work included Science Museum Group, University of London and The King's Fund</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl mb-3">The Neighbourhood — Lead Creative (2011–2015)</h3>
                    <ul className="space-y-1.5">
                      <li>Led multidisciplinary teams across digital, interactive and emerging tech projects</li>
                      <li>Clients included Heston Blumenthal projects, BlackBerry and Bruntwood</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl mb-3">AllofUs — Senior Interaction Designer (2009–2011)</h3>
                    <ul className="space-y-1.5">
                      <li>Interaction design and motion across Sky and Xbox interface work</li>
                      <li>Rapid prototyping and concept development across digital experiences</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl mb-3">Earlier motion/design work</h3>
                    <p>
                      Broadcast branding, interactive campaigns and animation work across major brands (MTV, BBC, Playstation, Atari, Call of Duty)
                    </p>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </section>

        {/* How I Operate */}
        <section className="border-t border-border pt-12 mb-16">
          <h2 className="mb-6">How I operate</h2>
          <div className="prose">
            <ul>
              <li>
                <strong>Outcomes first.</strong> Design is a lever for growth, not decoration.
              </li>
              <li>
                <strong>Speed of learning.</strong> I optimise for rapid validation and clear decision-making.
              </li>
              <li>
                <strong>Systems over heroics.</strong> Teams scale through patterns, tools and shared standards.
              </li>
              <li>
                <strong>Comfortable with ambiguity.</strong> I'll act with imperfect data and adjust fast.
              </li>
              <li>
                <strong>Strong opinions, loosely held.</strong> I'll push a view, then change it with evidence.
              </li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-border pt-12">
          <h2 className="mb-6">Get in Touch</h2>
          <div className="prose">
            <p>
              I'm always interested in conversations about product strategy, design leadership, and building teams that deliver measurable impact.
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
