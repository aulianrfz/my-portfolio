// utils/skillsUtils.js
// Data dan helper untuk halaman Skills

export const SKILL_GROUPS = [
  {
    id: 'languages',
    label: 'Languages',
    icon: '⌨️',
    items: [
      { name: 'PHP',        level: 'proficient' },
      { name: 'Dart',       level: 'proficient' },
      { name: 'Kotlin',     level: 'proficient' },
      { name: 'Java',       level: 'proficient' },
      { name: 'JavaScript', level: 'proficient' },
      { name: 'HTML & CSS', level: 'proficient' },
      { name: 'SQL',        level: 'proficient' },
      { name: 'C',          level: 'familiar'   },
      { name: 'Python',     level: 'basic'      },
      { name: 'Go',         level: 'basic'      },
    ],
  },
  {
    id: 'frameworks',
    label: 'Frameworks & Libraries',
    icon: '🧩',
    items: [
      { name: 'Flutter',      level: 'proficient' },
      { name: 'Laravel',      level: 'proficient' },
      { name: 'Bootstrap',    level: 'proficient' },
      { name: 'CodeIgniter',  level: 'familiar'   },
      { name: 'Spring Boot',  level: 'basic'      },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    icon: '🗄️',
    items: [
      { name: 'MySQL',                      level: 'proficient' },
      { name: 'PostgreSQL',                 level: 'familiar'   },
      { name: 'Database Design & Normalization', level: 'proficient' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: '🔧',
    items: [
      { name: 'Git & Sourcetree', level: 'proficient' },
      { name: 'Figma',            level: 'familiar'   },
      { name: 'Android Studio',   level: 'proficient' },
      { name: 'Postman',          level: 'proficient' },
      { name: 'Firebase',         level: 'familiar'   },
      { name: 'Navicat',          level: 'familiar'   },
      { name: 'draw.io',          level: 'familiar'   },
      { name: 'TAIGA',            level: 'familiar'   },
    ],
  },
  {
    id: 'deployment',
    label: 'Deployment & Server',
    icon: '🚀',
    items: [
      { name: 'VPS Hosting (aaPanel)', level: 'familiar' },
      { name: 'SSH',                   level: 'familiar' },
      { name: 'Linux',                 level: 'basic'    },
      { name: 'Docker',                level: 'basic'    },
      { name: 'CI/CD',                 level: 'basic'    },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud',
    icon: '☁️',
    items: [
      { name: 'AWS',          level: 'basic' },
      { name: 'Google Cloud', level: 'basic' },
    ],
  },
  {
    id: 'software-engineering',
    label: 'Software Engineering',
    icon: '📐',
    items: [
      { name: 'Requirement Analysis',         level: 'proficient' },
      { name: 'System Design (UML/BPMN)',     level: 'proficient' },
      { name: 'Technical Documentation',      level: 'proficient' },
      { name: 'SDLC',                         level: 'proficient' },
      { name: 'Agile / Scrum',                level: 'familiar'   },
    ],
  },
  {
    id: 'testing',
    label: 'Testing',
    icon: '🧪',
    items: [
      { name: 'UAT',         level: 'proficient' },
      { name: 'Test Plan',   level: 'proficient' },
      { name: 'Test Case',   level: 'proficient' },
      { name: 'Test Result', level: 'proficient' },
    ],
  },
]

/**
 * Warna & label untuk tiap level keahlian
 */
export const LEVEL_META = {
  proficient: { label: 'Proficient', color: 'accent' },
  familiar:   { label: 'Familiar',   color: 'soft'   },
  basic:      { label: 'Basic',      color: 'muted'  },
}
