import './globals.css';
import NetworkToggle from '@/components/ui/NetworkToggle';

export const metadata = {
  title: {
    default: 'Sulaimon Mayowa | Full-Stack Engineer & AI Agent Builder',
    template: '%s | Sulaimon Mayowa',
  },
  description:
    'I specialize in building production-ready applications that leverage the latest in AI and full-stack technologies. Creating autonomous workflows and interfaces that don\'t just work—they scale.',
  keywords: [
    'full-stack engineer',
    'AI agent builder',
    'React',
    'Next.js',
    'portfolio',
    'Sulaimon Mayowa',
    'workflow architect',
  ],
  authors: [{ name: 'Sulaimon Mayowa' }],
  openGraph: {
    title: 'Sulaimon Mayowa | Full-Stack Engineer & AI Agent Builder',
    description:
      'I specialize in building production-ready applications that leverage the latest in AI and full-stack technologies.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logos/sm-favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/logos/sm-favicon.png" type="image/png" />
        {/* Anti-flash theme script - applies dark class before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        {children}
        <NetworkToggle />
      </body>
    </html>
  );
}
