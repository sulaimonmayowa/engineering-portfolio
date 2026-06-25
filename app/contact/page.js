import CursorGlow from '@/components/ui/CursorGlow';
import Nav from '@/components/sections/Nav';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Icon from '@/components/ui/Icon';
import Footer from '@/components/sections/Footer';

export const metadata = {
  title: 'Contact',
  description:
    'Ready to build the future? Reach out to discuss your architectural challenges and AI automation needs.',
};

export default function ContactPage() {
  return (
    <>
      <CursorGlow />
      <Nav />
      <main className="relative z-10 pt-32">
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <div className="space-y-8">
                <span className="font-label-mono text-label-mono text-secondary">
                  // get in touch
                </span>
                <h2 className="font-h2-mobile md:font-h2 text-h2-mobile md:text-h2 leading-tight">
                  Let&apos;s build the{' '}
                  <span className="text-indigo-accent">future.</span>
                </h2>
                <p className="font-body-lg text-body-lg text-secondary">
                  Ready to discuss your next project? Book a free discovery call
                  and let&apos;s map out your architectural challenges together.
                </p>
                <div className="space-y-6 pt-4">
                  {[
                    { icon: 'calendar_month', label: 'Free Discovery Call', val: '30-min strategy session' },
                    { icon: 'schedule', label: 'Response Time', val: 'Within 24 hours' },
                    { icon: 'language', label: 'Location', val: 'Remote — Global Availability' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-indigo-accent/10 flex items-center justify-center text-indigo-accent">
                        <Icon name={item.icon} />
                      </div>
                      <div>
                        <div className="font-semibold">{item.label}</div>
                        <div className="text-body-md text-secondary">
                          {item.val}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  href="https://calendar.app.google/FWxEjkJSGDDemGJD9"
                  target="_blank"
                  icon="arrow_forward"
                  size="lg"
                >
                  Book a Discovery Call
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white border border-outline-variant/30 p-12 rounded-3xl">
                <div className="space-y-6">
                  <div className="font-h3 text-h3 font-bold mb-6">
                    Send a Message
                  </div>
                  <div>
                    <label className="font-label-mono text-label-mono text-secondary block mb-2">
                      NAME
                    </label>
                    <input
                      type="text"
                      className="w-full border-b-2 border-outline-variant/30 bg-transparent py-3 font-body-md text-body-md focus:border-indigo-accent focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="font-label-mono text-label-mono text-secondary block mb-2">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      className="w-full border-b-2 border-outline-variant/30 bg-transparent py-3 font-body-md text-body-md focus:border-indigo-accent focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="font-label-mono text-label-mono text-secondary block mb-2">
                      MESSAGE
                    </label>
                    <textarea
                      rows={4}
                      className="w-full border-b-2 border-outline-variant/30 bg-transparent py-3 font-body-md text-body-md focus:border-indigo-accent focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button className="w-full" variant="primary" size="lg">
                    Send Message
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
