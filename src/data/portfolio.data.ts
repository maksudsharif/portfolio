export const profile = {
  name: 'Maksud Sharif',
  initials: 'MS',
  role: 'Senior Software Engineer · Cloud & DevSecOps',
  shortRole: 'Software / Cloud Engineering',
  email: 'maksudsharif@gmail.com',
  linkedIn: 'https://linkedin.com/in/maksudsharif',
  github: 'https://github.com/maksudsharif',
  resume: '/assets/resume.pdf',
  location: 'Reston / Herndon, VA',
  clearance: 'Active TS/SCI · CI Polygraph',
  education: 'Computer Science · University of Virginia',
  personalNote: 'My two-site homelab',
} as const

export const hero = {
  availability: 'Available for the right mission',
  headingPrefix: 'I build production software that teams can ',
  headingAccent: 'ship with confidence.',
  lead: 'I design and deliver full-stack enterprise applications and cloud-native systems—from Java and TypeScript code through AWS architecture, CI/CD, and production SRE.',
  metrics: [
    { value: '10+', label: 'Years building software' },
    { value: '10–100×', label: 'Processing throughput' },
    { value: '2–10×', label: 'Lower query latency' },
  ],
  technologies: ['Java', 'Spring Boot', 'TypeScript', 'React', 'AWS', 'Kubernetes'],
} as const

export type CapabilityIcon = 'code' | 'cloud' | 'operations'

export const capabilities: ReadonlyArray<{
  number: string
  title: string
  description: string
  bullets: ReadonlyArray<string>
  icon: CapabilityIcon
  featured?: boolean
}> = [
  {
    number: '01',
    title: 'Software engineering',
    description:
      'Full-stack applications and distributed services engineered across the SDLC, from system design and implementation through testing and production.',
    bullets: [
      'Java 21, Spring Boot & Python',
      'TypeScript, React & Next.js',
      'APIs, search & data-intensive systems',
    ],
    icon: 'code',
    featured: true,
  },
  {
    number: '02',
    title: 'Cloud-native architecture',
    description:
      'Secure application architectures that modernize legacy systems with serverless platforms, container orchestration, and event-driven patterns.',
    bullets: [
      'Serverless application platforms',
      'Container orchestration',
      'Event streaming, processing & search',
    ],
    icon: 'cloud',
  },
  {
    number: '03',
    title: 'Delivery, security & SRE',
    description:
      'Production ownership built into the software lifecycle with automated delivery, least-privilege security, observability, and incident response.',
    bullets: [
      'CI/CD & blue/green deployments',
      'RBAC, IAM & security hardening',
      'Observability & production operations',
    ],
    icon: 'operations',
  },
]

export const outcomes = [
  {
    value: 'Up to 100×',
    description:
      'greater processing throughput after optimizing critical backend and client architecture.',
  },
  {
    value: 'Up to 10×',
    description: 'faster production search after re-architecting a SolrCloud subsystem.',
  },
  {
    value: '2–3×',
    description:
      'faster API responses across five AWS releases that passed independent security audits.',
  },
  {
    value: '2 months',
    description: 'ahead of schedule delivering mapping, workflow, and authentication capabilities.',
  },
] as const

export type Role = {
  dates: string
  dateTime: string
  note?: string
  title: string
  qualifier?: string
  company: string
  current?: boolean
  summary: string
  impact: ReadonlyArray<string>
  tags: ReadonlyArray<string>
}

export const roles: ReadonlyArray<Role> = [
  {
    dates: 'Sep 2025 — Present',
    dateTime: '2025-09',
    title: 'Senior Cloud Engineer',
    qualifier: '(DevSecOps)',
    company: 'SHLD, Inc. · Herndon, VA',
    current: true,
    summary:
      'Building and operating the deployment tooling and core streaming infrastructure that multiple application teams depend on to collect and disseminate data at enterprise scale.',
    impact: [
      'Architected enterprise-wide CDC pipelines with Debezium and Apache Flink for real-time platform data streaming.',
      'Standardized Kubernetes/OpenShift deployments with reusable Helm patterns for RBAC, ConfigMaps, and secrets.',
      'Built Prometheus and Alertmanager observability for stateful workloads, enabling proactive incident detection.',
    ],
    tags: ['OpenShift', 'Kafka', 'Flink', 'Helm', 'Prometheus', 'SRE'],
  },
  {
    dates: 'May 2022 — Present',
    dateTime: '2022-05',
    note: 'Lead engineer · as needed',
    title: 'Cloud Solutions Architect',
    company: 'Navstar Inc. · Reston, VA',
    summary:
      'Leading design and implementation from ideation through production while modernizing legacy systems into cloud-native serverless applications on AWS.',
    impact: [
      'Migrated a legacy J2EE monolith to AWS Lambda, Step Functions, SQS, S3, and API Gateway—lowering cost and improving performance.',
      'Improved critical processing throughput by 10–100× across backend and client architecture.',
      'Led prototype delivery for recommendation, pattern-recognition, and WebGL-accelerated capabilities.',
    ],
    tags: ['AWS', 'Java 21', 'Spring Native', 'React', 'Neo4j', 'CI/CD'],
  },
  {
    dates: 'Oct 2019 — May 2022',
    dateTime: '2019-10',
    note: 'formerly The Buffalo Group',
    title: 'Lead Software Engineer',
    company: 'Jacobs Engineering Group · Reston, VA',
    summary:
      'Owned direction, capabilities, and delivery of web-based solutions—partnering with customers, writing code, mentoring engineers, and managing the DevOps lifecycle across multiple applications.',
    impact: [
      'Delivered mapping, workflow, and authentication capabilities two months ahead of schedule.',
      'Modernized SOAP ingestion into scalable search pipelines using Python, Kafka, and Elasticsearch.',
      'Took a Java proof of concept to a secure, scalable production system in six months.',
    ],
    tags: ['Spring Boot', 'AWS', 'Python', 'Kafka', 'Elasticsearch', 'OpenShift'],
  },
  {
    dates: 'Sep 2015 — Oct 2019',
    dateTime: '2015-09',
    title: 'Lead Software Engineer',
    company: 'Armedia LLC. · Vienna, VA',
    summary:
      'Architect and tech lead driving design, implementation, testing, and deployment of multiple production applications for a global health organization.',
    impact: [
      'Delivered five AWS production releases, improved API response times 2–3×, and passed third-party security audits.',
      'Re-architected SolrCloud search to reduce query latency by 2–10×.',
      'Launched a greenfield platform with real-time auditing, alerting, MFA, and automated field-report analysis.',
    ],
    tags: ['Java', 'Spring', 'AngularJS', 'AWS', 'SolrCloud', 'MFA'],
  },
]

export const stackGroups = [
  {
    title: 'Languages & frameworks',
    technologies: ['Java 21', 'Spring Boot', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python'],
  },
  {
    title: 'Data & distributed systems',
    technologies: [
      'Kafka',
      'Elasticsearch',
      'SolrCloud',
      'PostgreSQL',
      'Neo4j',
      'Redis',
      'Apache Flink',
    ],
  },
  {
    title: 'Cloud & DevOps',
    technologies: ['AWS', 'Kubernetes', 'OpenShift', 'Docker', 'Helm', 'Terraform', 'Ansible'],
  },
  {
    title: 'Delivery, security & SRE',
    technologies: ['Jenkins', 'GitLab CI', 'RBAC', 'IAM', 'Prometheus', 'Grafana', 'Blue/Green'],
  },
] as const

export const aboutDetails = [
  { label: 'Based in', value: profile.location },
  { label: 'Education', value: profile.education },
  { label: 'Ask me about', value: profile.personalNote },
] as const
