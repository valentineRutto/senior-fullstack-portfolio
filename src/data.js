export const projects = [
  {
    number: "01",
    title: "Commerce Platform",
    summary:
      "A modular commerce platform enabling multi-tenant deployments with per-tenant customization and unified operations.",
    stack: "TypeScript, Node.js, PostgreSQL, Redis, Kafka, Docker, AWS",
    role: "Lead Engineer",
    period: "2022—2024",
    outcome: "Reduced release lead time while creating a stable path for tenant-specific growth.",
  },
  {
    number: "02",
    title: "Data Ingestion Service",
    summary:
      "A high-throughput ingestion service processing event streams with exactly-once guarantees and safe schema evolution.",
    stack: "Go, Kafka, PostgreSQL, Redis, Avro, Kubernetes, GCP",
    role: "Lead Engineer",
    period: "2020—2022",
    outcome: "Made critical data flows observable, replayable, and resilient under sustained load.",
  },
  {
    number: "03",
    title: "Developer Experience Platform",
    summary:
      "An internal platform improving developer productivity through self-service tooling, automation, and clear observability.",
    stack: "TypeScript, React, Node.js, GraphQL, OpenTelemetry, AWS",
    role: "Principal Engineer",
    period: "2018—2020",
    outcome: "Replaced scattered workflows with a dependable paved road from commit to production.",
  },
];

export const expertise = [
  {
    title: "Product Engineering",
    items: [
      "Domain modeling & system design",
      "TypeScript, Node.js, React",
      "Event-driven architecture",
      "API & contract design",
      "Testing strategy & quality systems",
      "Developer experience",
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      "Microservices & modular monoliths",
      "PostgreSQL, Redis, Kafka",
      "Idempotency & reliability patterns",
      "AuthN / AuthZ & multi-tenancy",
      "Performance & scalability",
      "Data modeling & migrations",
    ],
  },
  {
    title: "Cloud & Delivery",
    items: [
      "AWS / GCP infrastructure",
      "Docker & Kubernetes",
      "CI/CD & automated testing",
      "Observability: metrics, logs, traces",
      "Security, secrets & compliance",
      "Cost-aware architecture",
    ],
  },
];

export const experience = [
  {
    period: "2021—Present",
    role: "Staff / Principal Engineer",
    team: "Platform Team",
    detail:
      "Leading engineering for a multi-tenant platform serving multiple products. Focused on architecture, reliability, and developer productivity.",
  },
  {
    period: "2017—2021",
    role: "Senior Software Engineer",
    team: "Product Engineering",
    detail:
      "Built core services and developer tooling. Drove technical direction and mentored engineers across multiple teams.",
  },
  {
    period: "2013—2017",
    role: "Software Engineer",
    team: "Core Services",
    detail:
      "Designed and implemented backend services and APIs, with a focus on performance, scalability, and clean abstractions.",
  },
  {
    period: "2009—2013",
    role: "Software Engineer",
    team: "Early Career",
    detail:
      "Worked across the stack delivering features, fixing hard problems, and building a strong engineering foundation.",
  },
];

export const writing = [
  ["May 02, 2024", "Designing Reliable Event-Driven Systems", "Architecture", "8 min"],
  ["Feb 18, 2024", "Idempotency: The Quiet Backbone of Robust APIs", "Backend", "6 min"],
  ["Nov 09, 2023", "Schema Evolution Without Pain", "Data", "7 min"],
  ["Aug 21, 2023", "Observability That Helps You Sleep", "DevOps", "6 min"],
  ["Jun 12, 2023", "Developer Experience Is a Product", "Engineering", "5 min"],
];
