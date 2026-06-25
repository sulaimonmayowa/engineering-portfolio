export default function MDXContent({ source }) {
  // Normalize CRLF to LF, then remove separator lines
  const normalized = source.replace(/\r\n/g, '\n');
  const cleaned = normalized.replace(/\n(\*\*\*|---|===)\n/g, '\n\n');
  const paragraphs = cleaned.trim().split('\n\n').filter(Boolean);

  return (
    <div className="space-y-5">
      {paragraphs.map((p, i) => {
        const trimmed = p.trim();
        if (!trimmed) return null;

        // ## or ### headings
        if (/^#{2,3}\s/.test(trimmed)) {
          const level = trimmed.startsWith('###') ? 3 : 2;
          const text = trimmed.replace(/^#{2,3}\s+/, '');
          if (level === 2) {
            return <h2 key={i} className="font-h3 font-semibold text-on-surface mt-8 mb-3">{text}</h2>;
          }
          return <h3 key={i} className="font-semibold text-on-surface mt-6 mb-2 text-body-md">{text}</h3>;
        }

        // Bold-only lines like **01 / Overview**
        if (/^\*\*[^*]+\*\*$/.test(trimmed)) {
          const text = trimmed.replace(/\*\*/g, '');
          return <p key={i} className="text-body-lg font-semibold text-on-surface">{text}</p>;
        }

        // Blockquote >
        if (trimmed.startsWith('> ')) {
          const text = trimmed.replace(/^> /gm, '');
          return (
            <blockquote key={i} className="border-l-4 border-indigo-accent pl-6 italic text-on-surface-variant text-body-md">
              {renderInline(text)}
            </blockquote>
          );
        }

        // Unordered list
        if (trimmed.split('\n').every(line => /^[\d]+\.\s/.test(line) || /^-\s/.test(line))) {
          const items = trimmed.split('\n');
          const isOrdered = /^\d+\./.test(items[0]);
          const Tag = isOrdered ? 'ol' : 'ul';
          return (
            <Tag key={i} className={`${isOrdered ? 'list-decimal' : 'list-disc'} pl-6 space-y-1.5 text-body-md text-on-surface-variant`}>
              {items.map((item, j) => {
                const text = item.replace(/^[\d]+\.\s|-\s/, '');
                return <li key={j}>{renderInline(text)}</li>;
              })}
            </Tag>
          );
        }

        // Table
        if (trimmed.includes('|---')) {
          const rows = trimmed.split('\n').filter(r => r.trim().startsWith('|') && !r.includes('|---'));
          return (
            <div key={i} className="overflow-x-auto my-6">
              <table className="w-full text-left text-body-md border-collapse">
                <thead>
                  <tr className="border-b-2 border-indigo-accent/20">
                    {rows[0].split('|').filter(Boolean).map((h, j) => (
                      <th key={j} className="px-4 py-3 font-semibold text-on-surface">{h.trim()}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.slice(1).map((row, j) => (
                    <tr key={j} className="border-b border-on-surface/10">
                      {row.split('|').filter(Boolean).map((c, k) => (
                        <td key={k} className="px-4 py-3 text-on-surface-variant">{c.trim()}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        // Regular paragraph with inline formatting
        return <p key={i} className="text-body-md text-on-surface-variant leading-relaxed">{renderInline(trimmed)}</p>;
      })}
    </div>
  );
}

function renderInline(text) {
  // Bold
  let result = text.replace(/\*\*(.+?)\*\*/g, '<strong class="text-on-surface font-semibold">$1</strong>');
  // Italic
  result = result.replace(/_(.+?)_/g, '<em class="italic">$1</em>');
  // Links
  result = result.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-indigo-accent hover:underline" target="_blank" rel="noopener noreferrer">$1</a>');
  return <span dangerouslySetInnerHTML={{ __html: result }} />;
}
