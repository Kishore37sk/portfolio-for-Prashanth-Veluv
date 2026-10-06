import type { Project } from '../types'

/**
 * Abstract, monochrome line drawings standing in for project imagery.
 * They describe the shape of the work rather than decorate it.
 */
export function ProjectVisual({ type }: { type: Project['visual'] }) {
  return type === 'network' ? <NetworkVisual /> : <EnrichmentVisual />
}

const stroke = 'currentColor'

/** Content network: one strategy at the centre, radiating to channels. */
function NetworkVisual() {
  const nodes = [
    { x: 70, y: 70, label: 'Research' },
    { x: 330, y: 62, label: 'Strategy' },
    { x: 350, y: 238, label: 'Content' },
    { x: 60, y: 236, label: 'Social' },
    { x: 205, y: 34, label: '' },
    { x: 380, y: 150, label: '' },
    { x: 200, y: 268, label: '' },
    { x: 26, y: 150, label: '' },
  ]
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full font-sans text-ink" role="img" aria-label="Abstract diagram of a content strategy connecting research, strategy, content and social channels">
      {[46, 86, 126].map((r) => (
        <circle key={r} cx="200" cy="150" r={r} fill="none" stroke={stroke} strokeOpacity="0.22" strokeWidth="0.75" />
      ))}
      <circle cx="200" cy="150" r="126" fill="none" stroke={stroke} strokeOpacity="0.5" strokeWidth="0.75" strokeDasharray="2 6" />
      {nodes.map((n, i) => (
        <line key={`l${i}`} x1="200" y1="150" x2={n.x} y2={n.y} stroke={stroke} strokeOpacity={n.label ? 0.55 : 0.2} strokeWidth="0.75" />
      ))}
      {nodes.map((n, i) => (
        <g key={`n${i}`}>
          <circle cx={n.x} cy={n.y} r={n.label ? 5 : 2.5} className={n.label ? 'fill-bg' : 'fill-ink'} stroke={stroke} strokeWidth="0.9" />
          {n.label ? (
            <text
              x={n.x}
              y={n.y + (n.y < 150 ? -14 : 22)}
              textAnchor="middle"
              fontSize="9"
              letterSpacing="2"
              fill={stroke}
              fillOpacity="0.75"
             
            >
              {n.label.toUpperCase()}
            </text>
          ) : null}
        </g>
      ))}
      <circle cx="200" cy="150" r="16" fill={stroke} />
      <circle cx="200" cy="150" r="24" fill="none" stroke={stroke} strokeWidth="0.75" />
    </svg>
  )
}

/** Enrichment pipeline: sparse rows become complete, then flow to outreach. */
function EnrichmentVisual() {
  const rows = [0, 1, 2, 3, 4, 5, 6]
  const raw = [[52, 0, 18], [40, 22, 0], [60, 0, 0], [34, 18, 26], [48, 0, 14], [56, 20, 0], [44, 0, 22]]
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full font-sans text-ink" role="img" aria-label="Abstract diagram of sparse prospect data being enriched and routed to outreach">
      <text x="24" y="40" fontSize="9" letterSpacing="2" fill={stroke} fillOpacity="0.75">RAW</text>
      <text x="186" y="40" fontSize="9" letterSpacing="2" fill={stroke} fillOpacity="0.75">ENRICHED</text>
      <text x="334" y="40" fontSize="9" letterSpacing="2" fill={stroke} fillOpacity="0.75">OUT</text>

      {/* Raw table */}
      <rect x="24" y="54" width="128" height="210" fill="none" stroke={stroke} strokeOpacity="0.35" strokeWidth="0.75" />
      {rows.map((r) => (
        <g key={`raw${r}`}>
          <line x1="24" x2="152" y1={84 + r * 30} y2={84 + r * 30} stroke={stroke} strokeOpacity="0.15" strokeWidth="0.75" />
          {raw[r].map((w, c) =>
            w ? <rect key={c} x={34 + c * 40} y={66 + r * 30} width={Math.min(w, 32)} height="5" fill={stroke} fillOpacity="0.35" /> : null,
          )}
        </g>
      ))}

      {/* Flow arrows */}
      <line x1="158" y1="159" x2="178" y2="159" stroke={stroke} strokeWidth="0.75" />
      <path d="M174 155 L179 159 L174 163" fill="none" stroke={stroke} strokeWidth="0.75" />

      {/* Enriched table */}
      <rect x="186" y="54" width="128" height="210" fill="none" stroke={stroke} strokeWidth="0.9" />
      {rows.map((r) => (
        <g key={`en${r}`}>
          <line x1="186" x2="314" y1={84 + r * 30} y2={84 + r * 30} stroke={stroke} strokeOpacity="0.2" strokeWidth="0.75" />
          {[0, 1, 2].map((c) => (
            <rect key={c} x={196 + c * 40} y={66 + r * 30} width={c === 2 ? 22 : 30} height="5" fill={stroke} fillOpacity={c === 2 ? 0.9 : 0.55} />
          ))}
        </g>
      ))}

      <line x1="320" y1="159" x2="334" y2="159" stroke={stroke} strokeWidth="0.75" />
      {/* Outreach: one stream fanning into personalised messages */}
      {rows.map((r) => (
        <path
          key={`out${r}`}
          d={`M334 159 C 352 159, 352 ${69 + r * 30}, 372 ${69 + r * 30}`}
          fill="none"
          stroke={stroke}
          strokeOpacity="0.45"
          strokeWidth="0.75"
        />
      ))}
      {rows.map((r) => (
        <circle key={`dot${r}`} cx="376" cy={69 + r * 30} r="3" className="fill-bg" stroke={stroke} strokeWidth="0.9" />
      ))}
    </svg>
  )
}
