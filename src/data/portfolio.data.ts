export const profile = {
  name: 'Maksud Sharif',
  initials: 'MS',
  role: 'Senior Cloud Engineer · DevSecOps',
  shortRole: 'Cloud / DevSecOps',
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
  headingPrefix: 'I build secure cloud platforms that teams can ',
  headingAccent: 'trust.',
  lead: 'I architect, automate, and operate mission-critical cloud-native systems—from AWS and Kubernetes platforms to real-time data pipelines and production SRE.',
  metrics: [
    { value: '10+', label: 'Years engineering' },
    { value: '10–100×', label: 'Throughput gains' },
    { value: '2–10×', label: 'Lower query latency' },
  ],
  technologies: ['AWS', 'Kubernetes', 'OpenShift', 'Java', 'Kafka', 'Terraform'],
} as const

export type CapabilityIcon = 'cloud' | 'security' | 'observability'

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
    title: 'Cloud platforms',
    description:
      'Secure, scalable AWS and Kubernetes foundations designed around developer experience, cost, and production reality.',
    bullets: ['AWS serverless architecture', 'Kubernetes & OpenShift', 'Terraform, Helm & Ansible'],
    icon: 'cloud',
  },
  {
    number: '02',
    title: 'DevSecOps enablement',
    description:
      'Self-service delivery systems that encode security, reduce toil, and help teams ship confidently across environments.',
    bullets: [
      'CI/CD & blue/green delivery',
      'RBAC, IAM & secret management',
      'Reusable platform tooling',
    ],
    icon: 'security',
    featured: true,
  },
  {
    number: '03',
    title: 'Streaming & SRE',
    description:
      'Observable distributed systems with real-time data movement, proactive alerting, and operational discipline built in.',
    bullets: [
      'Kafka, NiFi, Flink & Debezium',
      'Prometheus & Alertmanager',
      'Runbooks & incident response',
    ],
    icon: 'observability',
  },
]

export const outcomes = [
  {
    value: '10–100×',
    description: 'throughput improvement across critical backend and client processing paths.',
  },
  {
    value: '2–10×',
    description: 'lower search latency after re-architecting a production SolrCloud subsystem.',
  },
  {
    value: '5',
    description: 'production releases delivered on AWS while passing third-party security audits.',
  },
  {
    value: '2 mo.',
    description: 'ahead of schedule for core mapping, workflow, and authentication capabilities.',
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
      'Building the deployment tooling and streaming backbone behind an enterprise data-collection platform used by multiple application teams.',
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
      'Leading application modernization from ideation through production, with an emphasis on AWS-native systems and high-throughput application architecture.',
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
      'Owned technical direction and delivery across classified and unclassified web platforms while mentoring engineers and managing the DevOps lifecycle.',
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
      'Architected and delivered multiple production applications for a global health organization in a fast-moving Agile environment.',
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
    title: 'Cloud & orchestration',
    technologies: ['AWS', 'Kubernetes', 'OpenShift', 'Docker', 'Helm', 'Terraform', 'Ansible'],
  },
  {
    title: 'Data & observability',
    technologies: [
      'Kafka',
      'NiFi',
      'Debezium',
      'Apache Flink',
      'Elasticsearch',
      'Prometheus',
      'Grafana',
    ],
  },
  {
    title: 'Application engineering',
    technologies: ['Java 21', 'Spring', 'Angular', 'React', 'Next.js', 'Node.js', 'Python'],
  },
  {
    title: 'Delivery & security',
    technologies: ['Jenkins', 'GitLab CI', 'RBAC', 'IAM', 'Blue/Green', 'SonarQube', 'Artifactory'],
  },
] as const

export const aboutDetails = [
  { label: 'Based in', value: profile.location },
  { label: 'Education', value: profile.education },
  { label: 'Ask me about', value: profile.personalNote },
] as const
