import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Cta() {
  return (
    <section className="py-section-gap">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <ScrollReveal>
          <div className="bg-primary-container rounded-3xl p-margin-mobile md:p-panel-padding relative overflow-hidden group dark:bg-surface-container-high">
            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.15),transparent)] pointer-events-none transition-all group-hover:scale-110" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-accent/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 text-center py-20 space-y-8">
              <h2 className="font-h1-mobile md:font-h1 text-h1-mobile md:text-h1 text-on-primary dark:text-on-surface">
                Let&apos;s build the <br />
                <span className="text-indigo-accent">future.</span>
              </h2>
              <p className="text-white font-body-lg text-body-lg max-w-xl mx-auto">
                Currently accepting select projects for 2026. Reach out to
                discuss your architectural challenges.
              </p>
              <div className="pt-8">
                <a
                  href="https://calendar.app.google/FWxEjkJSGDDemGJD9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-indigo-accent text-white px-12 py-5 rounded-full font-h3 text-[20px] hover:scale-105 active:scale-95 transition-all shadow-xl shadow-indigo-accent/20"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
