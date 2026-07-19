import type { ReactNode } from 'react'
import {
  aboutDetails,
  capabilities,
  hero,
  outcomes,
  profile,
  roles,
  stackGroups,
  type CapabilityIcon,
} from './data/portfolio.data'

type IconProps = {
  children: ReactNode
  className?: string
}

function Icon({ children, className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      {children}
    </svg>
  )
}

const capabilityIcons: Record<CapabilityIcon, ReactNode> = {
  cloud: (
    <>
      <path d="M6 19a4 4 0 0 1-.5-8A7 7 0 0 1 19 9.5 4.5 4.5 0 0 1 18.5 19H6Z" />
      <path d="m9 15 3-3 3 3m-3-3v7" />
    </>
  ),
  security: (
    <>
      <path d="M12 3 5 6v5c0 4.6 2.8 8 7 10 4.2-2 7-5.4 7-10V6l-7-3Z" />
      <path d="m8 12 2.5 2.5L16 9" />
    </>
  ),
  observability: (
    <>
      <path d="M4 18V9m5 9V5m5 13v-7m5 7V3" />
      <path d="M3 21h18" />
    </>
  ),
}

function Header() {
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <a className="brand" href="#top" aria-label={`${profile.name}, home`}>
          <span className="brand-mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span className="brand-copy">
            <strong>{profile.name}</strong>
            <small>{profile.shortRole}</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#expertise">Expertise</a>
          <a href="#experience">Experience</a>
          <a href="#stack">Stack</a>
          <a href="#about">About</a>
        </nav>
        <div className="nav-actions">
          <a className="text-link desktop-contact" href={`mailto:${profile.email}`}>
            Let's talk
          </a>
          <a
            className="button button-small button-ghost"
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
          >
            Résumé{' '}
            <Icon>
              <path d="M7 17 17 7M8 7h9v9" />
            </Icon>
          </a>
          <details className="mobile-menu">
            <summary aria-label="Open navigation menu">
              <Icon>
                <path d="M4 7h16M4 12h16M4 17h16" />
              </Icon>
            </summary>
            <nav aria-label="Mobile navigation">
              <a href="#expertise">Expertise</a>
              <a href="#experience">Experience</a>
              <a href="#stack">Stack</a>
              <a href="#about">About</a>
              <a href={`mailto:${profile.email}`}>Let's talk</a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  )
}

function PlatformVisual() {
  const services = [
    [
      'Backend',
      'Java 21 · Spring Boot',
      <>
        <path d="M5 7h14M7 4v6m10-6v6M4 14h6v6H4zm10 0h6v6h-6z" />
      </>,
    ],
    [
      'Frontend',
      'React · TypeScript',
      <>
        <path d="M4 17V9m5 8V5m5 12v-7m5 7V3M3 21h18" />
      </>,
    ],
    [
      'Data',
      'PostgreSQL · Neo4j',
      <>
        <path d="M12 3 5 6v5c0 4.6 2.8 8 7 10 4.2-2 7-5.4 7-10V6l-7-3Zm-3 9 2 2 4-5" />
      </>,
    ],
    [
      'Delivery',
      'AWS · Docker · Jenkins',
      <>
        <path d="M4 6h16v12H4zM8 10l2 2-2 2m4 0h4" />
      </>,
    ],
  ] as const

  return (
    <div className="platform-visual" aria-label="Software architecture illustration">
      <div className="visual-toolbar">
        <div className="visual-title">
          <span className="live-indicator" />
          <span>application_delivery</span>
        </div>
        <span className="mono muted">main · production</span>
      </div>
      <div className="visual-content">
        <div className="signal-row">
          <span>web clients</span>
          <span>services</span>
          <span>events</span>
        </div>
        <div className="flow-lines" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="core-node">
          <div className="node-icon">
            <Icon>
              <path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Zm0 0v9m8-4.5-8 4.5-8-4.5m8 13v-9" />
            </Icon>
          </div>
          <div>
            <span className="mono muted">APPLICATION ARCHITECTURE</span>
            <strong>Cloud-native production system</strong>
          </div>
          <span className="health-chip">
            <span /> healthy
          </span>
        </div>
        <div className="service-grid">
          {services.map(([title, subtitle, icon]) => (
            <article key={title}>
              <span className="service-icon">
                <Icon>{icon}</Icon>
              </span>
              <div>
                <strong>{title}</strong>
                <small>{subtitle}</small>
              </div>
            </article>
          ))}
        </div>
        <div className="visual-footer mono">
          <span>
            <i className="pulse-dot" /> build passing
          </span>
          <span className="muted">release ready</span>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />
      <div className="shell hero-layout">
        <div className="hero-copy">
          <div className="eyebrow-row">
            <span className="status-pill">
              <span className="status-dot" /> {hero.availability}
            </span>
            <span className="clearance-pill">{profile.clearance}</span>
          </div>
          <p className="overline">{profile.role}</p>
          <h1 id="hero-heading">
            {hero.headingPrefix}
            <span>{hero.headingAccent}</span>
          </h1>
          <p className="hero-lede">{hero.lead}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experience">
              See my impact{' '}
              <Icon>
                <path d="m9 18 6-6-6-6" />
              </Icon>
            </a>
            <a
              className="button button-secondary"
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
            >
              View résumé{' '}
              <Icon>
                <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
              </Icon>
            </a>
          </div>
          <dl className="hero-metrics" aria-label="Career highlights">
            {hero.metrics.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.value}</dt>
                <dd>{metric.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <PlatformVisual />
      </div>
      <div className="shell trusted-strip" aria-label="Core technologies">
        <span>Built across</span>
        <div>
          {hero.technologies.map((technology) => (
            <strong key={technology}>{technology}</strong>
          ))}
        </div>
      </div>
    </section>
  )
}

function Expertise() {
  return (
    <section className="section expertise" id="expertise" aria-labelledby="expertise-heading">
      <div className="shell">
        <div className="section-heading split-heading">
          <div>
            <p className="overline">What I do</p>
            <h2 id="expertise-heading">Software engineered from design through production.</h2>
          </div>
          <p>
            I combine a full-stack enterprise Java background with cloud architecture, DevSecOps,
            and SRE to deliver secure systems across the complete software lifecycle.
          </p>
        </div>
        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article
              className={`capability-card${capability.featured ? ' featured-card' : ''}`}
              key={capability.title}
            >
              <span className="card-number">{capability.number}</span>
              <div className="capability-icon">
                <Icon>{capabilityIcons[capability.icon]}</Icon>
              </div>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <ul>
                {capability.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Proof() {
  return (
    <section className="section proof" aria-labelledby="proof-heading">
      <div className="shell proof-layout">
        <div className="proof-copy">
          <p className="overline">Selected outcomes</p>
          <h2 id="proof-heading">Measured in performance, delivery, and scale.</h2>
          <p>
            The work spans new application features, legacy modernization, backend optimization, and
            secure production delivery—with results that show up in the numbers.
          </p>
          <a className="arrow-link" href="#experience">
            Explore the work <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="proof-grid">
          {outcomes.map((outcome) => (
            <article key={outcome.value}>
              <strong>{outcome.value}</strong>
              <p>{outcome.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section experience" id="experience" aria-labelledby="experience-heading">
      <div className="shell">
        <div className="section-heading split-heading">
          <div>
            <p className="overline">Experience</p>
            <h2 id="experience-heading">A decade building and shipping production software.</h2>
          </div>
          <p>
            From enterprise Java applications and React frontends to AWS serverless systems, I’ve
            led software from ideation and architecture through implementation and production.
          </p>
        </div>
        <div className="timeline">
          {roles.map((role) => (
            <article
              className={`timeline-item${role.current ? ' current-role' : ''}`}
              key={`${role.company}-${role.dates}`}
            >
              <div className="timeline-rail">
                <span />
              </div>
              <div className="timeline-meta">
                {role.current && <span className="role-status">Current</span>}
                <time dateTime={role.dateTime}>{role.dates}</time>
                {role.note && <small>{role.note}</small>}
              </div>
              <div className="timeline-content">
                <div className="role-heading">
                  <div>
                    <h3>
                      {role.title} {role.qualifier && <span>{role.qualifier}</span>}
                    </h3>
                    <p>{role.company}</p>
                  </div>
                </div>
                <p className="role-summary">{role.summary}</p>
                <ul className="impact-list">
                  {role.impact.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="tag-row">
                  {role.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stack() {
  return (
    <section className="section stack" id="stack" aria-labelledby="stack-heading">
      <div className="shell stack-layout">
        <div className="stack-intro">
          <p className="overline">Technical range</p>
          <h2 id="stack-heading">Software depth. Production breadth.</h2>
          <p>
            My strongest work connects application code, data, delivery systems, cloud
            infrastructure, security, and operations into one coherent engineering practice.
          </p>
          <div className="stack-note">
            <Icon>
              <path d="M4 5h16v14H4zM8 9l2 3-2 3m5 0h3" />
            </Icon>
            <span>
              <strong>Still hands-on.</strong> Java, TypeScript, Python, Bash, and SQL.
            </span>
          </div>
        </div>
        <div className="stack-groups">
          {stackGroups.map((group, index) => (
            <article key={group.title}>
              <h3>
                <span>{String(index + 1).padStart(2, '0')}</span> {group.title}
              </h3>
              <div className="tech-list">
                {group.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-heading">
      <div className="shell about-layout">
        <div className="about-panel">
          <p className="overline">How I build</p>
          <h2 id="about-heading">I stay close to the code and the outcome.</h2>
          <p className="about-lede">
            Strong software engineering spans the full SDLC—from design and implementation through
            testing, deployment, and production SRE.
          </p>
          <p>
            I lead from the work: partnering with customers, writing code, mentoring engineers,
            improving delivery pipelines, and staying present through rollout and incident response.
            I’m particularly interested in cloud-native applications, distributed systems, and
            software that remains secure, observable, and maintainable in production.
          </p>
          <div className="about-details">
            {aboutDetails.map((detail) => (
              <div key={detail.label}>
                <span>{detail.label}</span>
                <strong>{detail.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <blockquote>
          <Icon>
            <path d="M7 17H4a2 2 0 0 1-2-2v-3a7 7 0 0 1 7-7v3a4 4 0 0 0-4 4h2v5Zm12 0h-3a2 2 0 0 1-2-2v-3a7 7 0 0 1 7-7v3a4 4 0 0 0-4 4h2v5Z" />
          </Icon>
          <p>Design it. Build it. Test it. Deploy it. Operate it.</p>
          <footer>My software engineering philosophy</footer>
        </blockquote>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact" aria-labelledby="contact-heading">
      <div className="contact-grid" aria-hidden="true" />
      <div className="shell contact-inner">
        <p className="overline">Let's build something production-ready</p>
        <h2 id="contact-heading">Have a hard software or systems problem?</h2>
        <p>
          I’m always interested in meaningful missions, ambitious systems, and teams that care about
          engineering well.
        </p>
        <div className="contact-actions">
          <a className="button button-light" href={`mailto:${profile.email}`}>
            Start a conversation{' '}
            <Icon>
              <path d="M4 6h16v12H4zM4 7l8 6 8-6" />
            </Icon>
          </a>
          <a
            className="button button-outline-light"
            href={profile.linkedIn}
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-layout">
        <div>
          <a className="brand footer-brand" href="#top" aria-label="Back to top">
            <span className="brand-mark" aria-hidden="true">
              {profile.initials}
            </span>
            <span className="brand-copy">
              <strong>{profile.name}</strong>
              <small>{profile.role}</small>
            </span>
          </a>
          <p>Production software. Cloud-native systems. Measurable results.</p>
        </div>
        <nav aria-label="Social links">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.linkedIn} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.resume} target="_blank" rel="noreferrer">
            Résumé
          </a>
        </nav>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 {profile.name}</span>
        <span>Designed and engineered with intent.</span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Expertise />
        <Proof />
        <Experience />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
