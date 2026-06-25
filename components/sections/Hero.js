import ScrollReveal from '@/components/ui/ScrollReveal';
import Icon from '@/components/ui/Icon';

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center min-h-[600px] md:min-h-[716px]">
      {/* Left Content */}
      <div className="space-y-8">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 bg-surface-container-low px-4 py-1.5 rounded-full border border-outline-variant/30">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-label-mono text-label-mono uppercase tracking-wider text-on-surface-variant">
              Available for projects
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="font-h1-mobile md:font-h1 text-h1-mobile md:text-h1">
            Sulaimon <span className="text-secondary opacity-60">Mayowa</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="flex flex-wrap gap-4 font-label-mono text-label-mono">
            <span className="px-4 py-2 bg-surface-container-highest rounded-lg">
              FULL-STACK ENGINEER
            </span>
            <span className="px-4 py-2 bg-indigo-accent/10 text-indigo-accent rounded-lg">
              AI AGENT BUILDER
            </span>
            <span className="px-4 py-2 bg-surface-container-highest rounded-lg">
              WORKFLOW ARCHITECT
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="grid grid-cols-3 gap-8 py-8 border-y border-outline-variant/30">
            <div>
              <div className="font-h3 text-h3">5+</div>
              <div className="font-caption text-caption text-secondary uppercase">
                Years Exp.
              </div>
            </div>
            <div>
              <div className="font-h3 text-h3">10+</div>
              <div className="font-caption text-caption text-secondary uppercase">
                Projects
              </div>
            </div>
            <div>
              <div className="font-h3 text-h3">50%</div>
              <div className="font-caption text-caption text-secondary uppercase">
                Efficiency Gain
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <div className="flex gap-6 pt-4">
            <a
              href="https://linkedin.com/in/sulaimon-mayowa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors flex items-center gap-1.5"
            >
              <Icon name="link" size="text-lg" /> LinkedIn
            </a>
            <a
              href="https://github.com/sulaimonmayowa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors flex items-center gap-1.5"
            >
              <Icon name="code" size="text-lg" /> GitHub
            </a>
            <a
              href="https://x.com/sulaimonmayowaA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors flex items-center gap-1.5"
            >
              <Icon name="alternate_email" size="text-lg" /> X / Twitter
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Right — Terminal Window */}
      <ScrollReveal delay={300} className="lg:pl-12">
        <div className="terminal-float bg-[#1b1b1b] rounded-xl overflow-hidden shadow-2xl border border-white/10 font-label-mono text-[13px] leading-relaxed">
          {/* Terminal Header */}
          <div className="bg-white/5 px-4 py-2.5 flex gap-2 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <div className="ml-4 text-white/30 text-[11px]">sulaimon@terminal — bash</div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 text-[#a9b7c6] min-h-[300px] space-y-4">
            <div>
              <span className="text-[#27c93f]">➜</span>{' '}
              <span className="text-indigo-accent">~</span> whoami
              <div className="text-white mt-1">
                sulaimon-mayowa (developer, innovator, architect)
              </div>
            </div>
            <div>
              <span className="text-[#27c93f]">➜</span>{' '}
              <span className="text-indigo-accent">~</span> cat skills.json
              <div className="mt-1 text-white/80">
                {'{'}
                <br />
                &nbsp;&nbsp;&quot;frontend&quot;: [&quot;React&quot;, &quot;Next.js&quot;, &quot;Tailwind&quot;],
                <br />
                &nbsp;&nbsp;&quot;backend&quot;: [&quot;Node&quot;, &quot;Python&quot;, &quot;Postgres&quot;],
                <br />
                &nbsp;&nbsp;&quot;ai&quot;: [&quot;LangChain&quot;, &quot;LLMs&quot;, &quot;VectorDBs&quot;]
                <br />
                {'}'}
              </div>
            </div>
            <div>
              <span className="text-[#27c93f]">➜</span>{' '}
              <span className="text-indigo-accent">~</span>{' '}
              <span className="blinking-cursor" />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
