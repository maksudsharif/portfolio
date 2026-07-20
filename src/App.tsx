import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  CloudCog,
  Code2,
  Container,
  Database,
  Download,
  Mail,
  Menu,
  Network,
  PanelsTopLeft,
  Quote,
  ServerCog,
  Terminal,
  UsersRound,
  X,
  type LucideIcon,
} from 'lucide-react'
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

const capabilityIcons: Record<CapabilityIcon, LucideIcon> = {
  code: Code2,
  cloud: CloudCog,
  operations: Activity,
}

function CapabilityGlyph({ icon }: { icon: CapabilityIcon }) {
  const Glyph = capabilityIcons[icon]

  return <Glyph aria-hidden="true" />
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
            Résumé
            <ArrowUpRight aria-hidden="true" />
          </a>
          <details className="mobile-menu">
            <summary aria-label="Open navigation menu">
              <Menu className="menu-open-icon" aria-hidden="true" />
              <X className="menu-close-icon" aria-hidden="true" />
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
    { title: 'Backend', subtitle: 'Java 21 · Spring Boot', icon: ServerCog },
    { title: 'Frontend', subtitle: 'React · TypeScript', icon: PanelsTopLeft },
    { title: 'Data', subtitle: 'PostgreSQL · Neo4j', icon: Database },
    { title: 'Delivery', subtitle: 'AWS · Docker · Jenkins', icon: Container },
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
            <Network aria-hidden="true" />
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
          {services.map(({ title, subtitle, icon: ServiceIcon }) => (
            <article key={title}>
              <span className="service-icon">
                <ServiceIcon aria-hidden="true" />
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
              See my impact
              <ChevronRight aria-hidden="true" />
            </a>
            <a
              className="button button-secondary"
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
            >
              View résumé
              <Download aria-hidden="true" />
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
                <CapabilityGlyph icon={capability.icon} />
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
          <h2 id="proof-heading">Engineering that moves the numbers.</h2>
          <p>
            I modernize high-stakes software from architecture through production—making systems
            faster, releases safer, and delivery more predictable.
          </p>
          <a className="arrow-link" href="#experience">
            Explore the work <ArrowRight aria-hidden="true" />
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
            <Terminal aria-hidden="true" />
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
          <Quote aria-hidden="true" />
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
            Start a conversation
            <Mail aria-hidden="true" />
          </a>
          <a
            className="button button-outline-light"
            href={profile.linkedIn}
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn
            <UsersRound aria-hidden="true" />
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
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="main-content" tabIndex={-1}>
            <Hero />
            <Expertise />
            <Proof />
            <Experience />
            <Stack />
            <About />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}
