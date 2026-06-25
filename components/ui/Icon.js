/**
 * Material Symbols icon wrapper.
 */
export default function Icon({ name, className = '', filled = false, size = 'text-2xl' }) {
  return (
    <span
      className={`material-symbols-outlined ${size} ${className}`}
      style={{
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' 300, 'GRAD' 0, 'opsz' 24`,
      }}
    >
      {name}
    </span>
  );
}
