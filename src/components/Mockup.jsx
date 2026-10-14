// Miniature, code-drawn website previews. Everything scales with the
// mockup's width (container query units), so they stay crisp at any size.

export const SITES = {
  bloom: {
    name: 'bloom',
    url: 'bloompilates.studio',
    industry: 'Pilates Studio',
    featured: true,
    theme: { bg: '#ede4d7', fg: '#5a3b2e', accent: '#a8653f', soft: '#f8f4ee' },
  },
  vantra: {
    name: 'Vantra.',
    url: 'vantracollective.com',
    industry: 'Creator Agency',
    featured: true,
    theme: { bg: '#f5f1eb', fg: '#0d0d0d', accent: '#c8390f', soft: '#e9e2d8' },
  },
  olive: {
    name: 'Maison Olive',
    url: 'maisonolive.com',
    industry: 'Restaurant',
    theme: { bg: '#14231b', fg: '#f3ead8', accent: '#c9a45c', soft: '#1f3328' },
  },
  northline: {
    name: 'Northline',
    url: 'northlinerealty.com',
    industry: 'Real Estate',
    theme: { bg: '#f4f2ee', fg: '#0f1b2d', accent: '#2b59c3', soft: '#e3e0d9' },
  },
  forge: {
    name: 'FORGE',
    url: 'forgeathletics.co',
    industry: 'Fitness',
    theme: { bg: '#0b0b0b', fg: '#f2f2f2', accent: '#c6ff3d', soft: '#1a1a1a' },
  },
  lumiere: {
    name: 'Lumière',
    url: 'lumiereskin.com',
    industry: 'Skincare',
    theme: { bg: '#f7e9e3', fg: '#3a2420', accent: '#c27a68', soft: '#efd8cf' },
  },
  atlas: {
    name: 'Atlas & Vale',
    url: 'atlasvale.law',
    industry: 'Law Firm',
    theme: { bg: '#1c0f13', fg: '#efe3d0', accent: '#c8a165', soft: '#2a1820' },
  },
  pulse: {
    name: 'Pulse',
    url: 'app.pulsemetrics.io',
    industry: 'SaaS',
    theme: { bg: '#0d1020', fg: '#e8eaff', accent: '#7c6cff', soft: '#171b33' },
  },
}

function Lines({ n = 3, w = [90, 75, 60] }) {
  return (
    <div className="m-lines">
      {Array.from({ length: n }, (_, i) => (
        <i key={i} style={{ width: `${w[i % w.length]}%` }} />
      ))}
    </div>
  )
}

function Body({ id }) {
  switch (id) {
    case 'bloom':
      return (
        <>
          <div className="m-hero m-hero--split">
            <div>
              <small className="m-kicker">Uskoro otvorenje</small>
              <h4 className="m-bloom-h">Procvjetajte u svoju <em>najjaču</em> verziju</h4>
              <Lines n={2} />
              <span className="m-btn">Pridruži se listi</span>
            </div>
            <div className="m-arch"><span /></div>
          </div>
          <div className="m-row3">
            {['Preciznost', 'Evolucija', 'Prisutnost'].map((t) => (
              <div className="m-card m-bloom-card" key={t}><i /><b>{t}</b></div>
            ))}
          </div>
        </>
      )
    case 'vantra':
      return (
        <>
          <div className="m-hero m-hero--split">
            <div>
              <small className="m-kicker">Brand × creator matchmaking</small>
              <h4 className="m-vc-h">Where Brands<br />Meet <em>Creators.</em></h4>
              <Lines n={2} />
              <span className="m-btn">Work with us</span>
            </div>
            <div className="m-vc-orbit"><span /><span /><span /></div>
          </div>
          <div className="m-row4">
            {['@maya.eats', '@coastfit', '@studio.lou', '@nomadjay'].map((h) => (
              <div className="m-card m-creator" key={h}><span className="m-avatar" /><b>{h}</b></div>
            ))}
          </div>
        </>
      )
    case 'olive':
      return (
        <>
          <div className="m-hero m-hero--split">
            <div>
              <small className="m-kicker">Est. 2014 · Provençal kitchen</small>
              <h4 className="m-serif">An evening<br />worth savoring.</h4>
              <Lines n={2} />
              <span className="m-btn">Reserve a table</span>
            </div>
            <div className="m-plate"><span /></div>
          </div>
          <div className="m-row3">
            {['Tasting menu', 'Wine cellar', 'Private dining'].map((t) => (
              <div className="m-card" key={t}><div className="m-thumb m-thumb--warm" /><b>{t}</b></div>
            ))}
          </div>
        </>
      )
    case 'northline':
      return (
        <>
          <div className="m-hero m-hero--photo m-hero--sky">
            <h4>Find the place<br />you’ll call home.</h4>
            <div className="m-search"><i /><i /><span className="m-btn">Search</span></div>
          </div>
          <div className="m-row3">
            {['$1.2M · 4bd', '$865K · 3bd', '$2.4M · 5bd'].map((t) => (
              <div className="m-card" key={t}><div className="m-thumb m-thumb--house" /><b>{t}</b><Lines n={1} /></div>
            ))}
          </div>
        </>
      )
    case 'forge':
      return (
        <>
          <div className="m-hero m-hero--center">
            <h4 className="m-heavy">TRAIN<br /><em>HARDER.</em></h4>
            <span className="m-btn">Start free week</span>
          </div>
          <div className="m-row3">
            {['HIIT', 'STRENGTH', 'RECOVERY'].map((t) => (
              <div className="m-card m-card--dark" key={t}><div className="m-thumb m-thumb--lime" /><b>{t}</b></div>
            ))}
          </div>
        </>
      )
    case 'lumiere':
      return (
        <>
          <div className="m-hero m-hero--split">
            <div>
              <small className="m-kicker">New · Glow serum</small>
              <h4 className="m-serif">Skin, but<br />luminous.</h4>
              <Lines n={2} />
              <span className="m-btn">Shop now — $48</span>
            </div>
            <div className="m-bottle"><span /></div>
          </div>
          <div className="m-row4">
            {[1, 2, 3, 4].map((t) => (
              <div className="m-card" key={t}><div className="m-thumb m-thumb--blush" /><Lines n={1} /></div>
            ))}
          </div>
        </>
      )
    case 'atlas':
      return (
        <>
          <div className="m-hero m-hero--left">
            <small className="m-kicker">Corporate · Estate · Litigation</small>
            <h4 className="m-serif">Counsel with<br />conviction.</h4>
            <Lines n={2} w={[70, 55]} />
            <span className="m-btn">Book a consultation</span>
          </div>
          <div className="m-stats">
            {['30+ yrs', '1,200 cases', '98% retained'].map((t) => <b key={t}>{t}</b>)}
          </div>
        </>
      )
    case 'pulse':
      return (
        <div className="m-dash">
          <aside>{[1, 2, 3, 4, 5].map((i) => <i key={i} />)}</aside>
          <div>
            <div className="m-kpis">
              {['$48.2K', '2,931', '+18%'].map((t) => <div key={t} className="m-kpi"><b>{t}</b><Lines n={1} w={[50]} /></div>)}
            </div>
            <div className="m-chart">
              {[40, 55, 35, 70, 60, 85, 75, 95].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}
            </div>
          </div>
        </div>
      )
    default:
      return <Lines n={4} />
  }
}

export default function Mockup({ id, className = '', style }) {
  const site = SITES[id]
  const t = site.theme
  return (
    <div
      className={`mockup ${className}`}
      style={{ '--m-bg': t.bg, '--m-fg': t.fg, '--m-accent': t.accent, '--m-soft': t.soft, ...style }}
      role="img"
      aria-label={`${site.industry} website concept: ${site.name}`}
    >
      <div className="m-bar">
        <span className="m-dots"><i /><i /><i /></span>
        <span className="m-url">{site.url}</span>
      </div>
      <div className="m-page">
        {id !== 'pulse' && (
          <div className={`m-nav m-nav--${id}`}>
            <b>{site.name}</b>
            <span><i /><i /><i /></span>
          </div>
        )}
        <Body id={id} />
      </div>
      <div className="m-gloss" />
    </div>
  )
}
