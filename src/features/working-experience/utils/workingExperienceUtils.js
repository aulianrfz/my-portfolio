// utils/workingExperienceUtils.js
// Data dan helper untuk halaman Working Experience

export const EXPERIENCES = [
  {
    id: 1,
    company: 'PT USSI',
    location: 'Bandung, Indonesia',
    role: 'Mobile Developer',
    period: 'Nov 2025 – Present',
    isCurrent: true,
    summary:
      'Contributed to development and enhancement of multiple fintech and digital banking systems in real operational environments — building and improving mobile and web applications for financial transactions, community marketplaces, and branchless banking services.',
    highlights: [
      'Flutter-based app development & native SDK bridging',
      'EMV card transaction processing (chip, NFC, magnetic stripe)',
      'Scalable Flutter Web interfaces with dynamic theming',
      'Structured state management with Cubit',
    ],
    tags: ['Flutter', 'Dart', 'Java', 'EMV Integration', 'Flutter Web', 'REST API', 'Cubit'],
    details: [
      'Bridged native Android SDKs with Flutter via platform and event channels for hardware-level integrations',
      'Implemented secure transaction workflows and reliable communication between mobile clients and backend services',
      'Improved application architecture and optimized system behavior in production environments',
      'Built dynamic configuration-driven theming to support flexible branding and deployment without rebuilds',
      'Applied structured state management (Cubit) to isolate transaction lifecycle and ensure proper cleanup of sensitive data',
    ],
  },
  {
    id: 2,
    company: 'PT Selada Indonesia Produktif',
    location: 'Bandung, Indonesia',
    role: 'Mobile Developer Intern',
    period: 'Jun 2024 – Oct 2024',
    isCurrent: false,
    summary:
      'Contributed to Laku Pandai – Bank NTB Syariah, a mobile app for banking agents enabling fund transfers, interbank transfers, cash withdrawals, and deposits outside branch offices. Also supported the Report Bank NTB Syariah web app with backend reporting features.',
    highlights: [
      '75+ dynamic, database-driven screens built',
      '100+ services integrated end-to-end',
      'UAT directly with partner bank',
      'AWS deployment & infrastructure exposure',
    ],
    tags: ['Kotlin', 'Java', 'Android Studio', 'Laravel', 'PostgreSQL', 'AWS', 'REST API'],
    details: [
      'Designed and implemented a dynamic, data-driven architecture that minimized hardcoding and improved adaptability across 75+ screens',
      'Integrated 100+ services, connecting transaction flows with data models for seamless orchestration',
      'Implemented mobile authentication for secure login and debugged API mismatches in collaboration with backend teams',
      'Participated in User Acceptance Testing (UAT) with the partner bank, refining transaction flows and ensuring smooth inter-team coordination',
      'Gained exposure to service-based architecture, AWS for deployment, and dynamic UI development',
    ],
  },
]

/** Pisahkan experiences: current vs past */
export function groupExperiences(experiences) {
  return {
    current: experiences.filter(e => e.isCurrent),
    past:    experiences.filter(e => !e.isCurrent),
  }
}
