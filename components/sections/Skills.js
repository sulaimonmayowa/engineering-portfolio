'use client';

import { useEffect, useRef } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';

const skillCategories = [
  {
    title: 'Frontend',
    accent: 'bg-primary',
    skills: [
      { name: 'React / Next.js', percent: 95 },
      { name: 'Tailwind CSS', percent: 90 },
      { name: 'TypeScript', percent: 88 },
    ],
  },
  {
    title: 'Backend & AI',
    accent: 'bg-indigo-accent',
    skills: [
      { name: 'Node.js / Python', percent: 92 },
      { name: 'LangChain / OpenAI', percent: 85 },
      { name: 'Supabase / Firebase', percent: 80 },
    ],
  },
  {
    title: 'Infrastructure',
    accent: 'bg-primary',
    skills: [
      { name: 'AWS / GCP', percent: 75 },
      { name: 'Docker / Kubernetes', percent: 70 },
      { name: 'CI/CD Pipelines', percent: 85 },
    ],
  },
];

function SkillBar({ name, percent, accent }) {
  const barRef = useRef(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.width = `${percent}%`;
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [percent]);

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-label-mono text-label-mono">{name}</span>
        <span className="text-secondary">{percent}%</span>
      </div>
      <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
        <div
          ref={barRef}
          className={`skill-bar h-full rounded-full ${accent}`}
          style={{ width: '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="py-section-gap">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <ScrollReveal>
          <SectionLabel>expertise</SectionLabel>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
          {skillCategories.map((category, i) => (
            <ScrollReveal key={category.title} delay={i * 100}>
              <div className="space-y-6">
                <h4 className="font-label-mono text-label-mono font-bold uppercase tracking-widest text-secondary">
                  {category.title}
                </h4>
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      percent={skill.percent}
                      accent={category.accent}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
