import { Exam, LeaderboardEntry, MCQ, MockTest, Subject, TestAttempt } from '@/types';

export const subjects: Subject[] = [
  { id: 's1', name: 'General Knowledge', slug: 'general-knowledge-mcqs', icon: 'Globe2', description: 'Current affairs, capitals, institutions and world facts.', mcqCount: 1480 },
  { id: 's2', name: 'Pakistan Studies', slug: 'pakistan-studies-mcqs', icon: 'Flag', description: 'History, constitution, geography and national affairs.', mcqCount: 1240 },
  { id: 's3', name: 'Islamic Studies', slug: 'islamic-studies-mcqs', icon: 'MoonStar', description: 'Quran, Hadith, fiqh and Islamic history.', mcqCount: 1180 },
  { id: 's4', name: 'Everyday Science', slug: 'everyday-science-mcqs', icon: 'Atom', description: 'Physics, chemistry, biology and environment basics.', mcqCount: 960 },
  { id: 's5', name: 'Computer', slug: 'computer-mcqs', icon: 'Laptop2', description: 'Computer fundamentals, IT, internet and software.', mcqCount: 820 },
  { id: 's6', name: 'English', slug: 'english-mcqs', icon: 'Languages', description: 'Grammar, vocabulary, comprehension and idioms.', mcqCount: 1110 },
  { id: 's7', name: 'Mathematics', slug: 'mathematics-mcqs', icon: 'Calculator', description: 'Arithmetic, algebra, ratios and quantitative reasoning.', mcqCount: 990 },
  { id: 's8', name: 'Geography', slug: 'geography-mcqs', icon: 'Map', description: 'Physical, world and Pakistan geography.', mcqCount: 650 }
];

export const exams: Exam[] = [
  { id: 'e1', name: 'PPSC', slug: 'ppsc' },
  { id: 'e2', name: 'FPSC', slug: 'fpsc' },
  { id: 'e3', name: 'NTS', slug: 'nts' },
  { id: 'e4', name: 'SPSC', slug: 'spsc' },
  { id: 'e5', name: 'KPPSC', slug: 'kppsc' }
];

export const subtopicsBySubject: Record<string, string[]> = {
  'pakistan-studies-mcqs': ['History', 'Constitution', 'Mountains and Glaciers', 'Rivers', 'National Movement', 'Current Affairs'],
  'general-knowledge-mcqs': ['Capitals', 'International Organizations', 'Currencies', 'World Leaders', 'Important Days'],
  'islamic-studies-mcqs': ['Quran', 'Hadith', 'Seerah', 'Khulafa-e-Rashideen'],
  'everyday-science-mcqs': ['Biology', 'Chemistry', 'Physics', 'Environment'],
  'computer-mcqs': ['Hardware', 'Software', 'Networking', 'Programming'],
  'english-mcqs': ['Grammar', 'Vocabulary', 'Synonyms', 'Antonyms'],
  'mathematics-mcqs': ['Arithmetic', 'Algebra', 'Percentages', 'Ratios'],
  'geography-mcqs': ['World Geography', 'Pakistan Geography', 'Maps']
};

export const mcqs: MCQ[] = [
  {
    id: 'm1',
    slug: 'highest-mountain-peak-in-pakistan',
    question: 'Which is the highest mountain peak in Pakistan?',
    options: [
      { id: 'a', text: 'Nanga Parbat' },
      { id: 'b', text: 'K2' },
      { id: 'c', text: 'Rakaposhi' },
      { id: 'd', text: 'Tirich Mir' }
    ],
    correctOptionId: 'b',
    explanation: 'K2 is the highest mountain in Pakistan and the second-highest peak in the world, located in the Karakoram range.',
    sourceUrl: 'https://en.wikipedia.org/wiki/K2',
    subject: 'Pakistan Studies',
    subjectSlug: 'pakistan-studies-mcqs',
    examType: 'PPSC',
    difficulty: 'Easy',
    important: true,
    relatedIds: ['m2', 'm3'],
    createdAt: '2026-03-10'
  },
  {
    id: 'm2',
    slug: 'largest-glacier-outside-polar-region',
    question: 'Which glacier in Pakistan is known as the largest outside the polar regions?',
    options: [
      { id: 'a', text: 'Baltoro Glacier' },
      { id: 'b', text: 'Biafo Glacier' },
      { id: 'c', text: 'Siachen Glacier' },
      { id: 'd', text: 'Hispar Glacier' }
    ],
    correctOptionId: 'c',
    explanation: 'Siachen Glacier is often cited as the largest glacier outside the polar areas and lies in the eastern Karakoram.',
    sourceUrl: 'https://en.wikipedia.org/wiki/Siachen_Glacier',
    subject: 'Pakistan Studies',
    subjectSlug: 'pakistan-studies-mcqs',
    examType: 'FPSC',
    difficulty: 'Medium',
    relatedIds: ['m1'],
    createdAt: '2026-03-12'
  },
  {
    id: 'm3',
    slug: 'pakistan-national-language',
    question: 'What is the national language of Pakistan?',
    options: [
      { id: 'a', text: 'Punjabi' },
      { id: 'b', text: 'Sindhi' },
      { id: 'c', text: 'Urdu' },
      { id: 'd', text: 'Pashto' }
    ],
    correctOptionId: 'c',
    explanation: 'Urdu is the national language of Pakistan, while English is widely used for official purposes.',
    sourceUrl: 'https://en.wikipedia.org/wiki/Languages_of_Pakistan',
    subject: 'Pakistan Studies',
    subjectSlug: 'pakistan-studies-mcqs',
    examType: 'NTS',
    difficulty: 'Easy',
    createdAt: '2026-03-17'
  },
  {
    id: 'm4',
    slug: 'capital-of-australia',
    question: 'What is the capital of Australia?',
    options: [
      { id: 'a', text: 'Sydney' },
      { id: 'b', text: 'Melbourne' },
      { id: 'c', text: 'Canberra' },
      { id: 'd', text: 'Perth' }
    ],
    correctOptionId: 'c',
    explanation: 'Canberra is the capital city of Australia and serves as the seat of government.',
    sourceUrl: 'https://en.wikipedia.org/wiki/Canberra',
    subject: 'General Knowledge',
    subjectSlug: 'general-knowledge-mcqs',
    examType: 'PPSC',
    difficulty: 'Easy',
    createdAt: '2026-03-18'
  },
  {
    id: 'm5',
    slug: 'headquarters-of-unesco',
    question: 'UNESCO headquarters is located in which city?',
    options: [
      { id: 'a', text: 'Geneva' },
      { id: 'b', text: 'Paris' },
      { id: 'c', text: 'New York' },
      { id: 'd', text: 'Rome' }
    ],
    correctOptionId: 'b',
    explanation: 'UNESCO is headquartered in Paris, France.',
    sourceUrl: 'https://en.wikipedia.org/wiki/UNESCO',
    subject: 'General Knowledge',
    subjectSlug: 'general-knowledge-mcqs',
    examType: 'FPSC',
    difficulty: 'Easy',
    createdAt: '2026-03-19'
  },
  {
    id: 'm6',
    slug: 'first-revealed-word-of-quran',
    question: 'What was the first revealed word of the Holy Quran?',
    options: [
      { id: 'a', text: 'Iqra' },
      { id: 'b', text: 'Noor' },
      { id: 'c', text: 'Rahma' },
      { id: 'd', text: 'Kitab' }
    ],
    correctOptionId: 'a',
    explanation: 'The first revealed word is Iqra, meaning Read.',
    sourceUrl: 'https://en.wikipedia.org/wiki/Muhammad%27s_first_revelation',
    subject: 'Islamic Studies',
    subjectSlug: 'islamic-studies-mcqs',
    examType: 'PPSC',
    difficulty: 'Easy',
    createdAt: '2026-03-20'
  },
  {
    id: 'm7',
    slug: 'si-unit-of-force',
    question: 'What is the SI unit of force?',
    options: [
      { id: 'a', text: 'Joule' },
      { id: 'b', text: 'Pascal' },
      { id: 'c', text: 'Newton' },
      { id: 'd', text: 'Watt' }
    ],
    correctOptionId: 'c',
    explanation: 'The SI unit of force is Newton.',
    sourceUrl: 'https://en.wikipedia.org/wiki/Force',
    subject: 'Everyday Science',
    subjectSlug: 'everyday-science-mcqs',
    examType: 'NTS',
    difficulty: 'Easy',
    createdAt: '2026-03-21'
  },
  {
    id: 'm8',
    slug: 'brain-of-computer',
    question: 'Which component is called the brain of the computer?',
    options: [
      { id: 'a', text: 'RAM' },
      { id: 'b', text: 'CPU' },
      { id: 'c', text: 'Motherboard' },
      { id: 'd', text: 'Hard Disk' }
    ],
    correctOptionId: 'b',
    explanation: 'CPU processes instructions and performs calculations, so it is considered the brain of the computer.',
    sourceUrl: 'https://en.wikipedia.org/wiki/Central_processing_unit',
    subject: 'Computer',
    subjectSlug: 'computer-mcqs',
    examType: 'KPPSC',
    difficulty: 'Easy',
    createdAt: '2026-03-23'
  },
  {
    id: 'm9',
    slug: 'synonym-of-rapid',
    question: 'Choose the synonym of “Rapid”.',
    options: [
      { id: 'a', text: 'Slow' },
      { id: 'b', text: 'Swift' },
      { id: 'c', text: 'Weak' },
      { id: 'd', text: 'Rough' }
    ],
    correctOptionId: 'b',
    explanation: 'Swift is the closest synonym for rapid.',
    sourceUrl: 'https://en.wiktionary.org/wiki/rapid',
    subject: 'English',
    subjectSlug: 'english-mcqs',
    examType: 'SPSC',
    difficulty: 'Easy',
    createdAt: '2026-03-24'
  },
  {
    id: 'm10',
    slug: '25-percent-of-400',
    question: 'What is 25% of 400?',
    options: [
      { id: 'a', text: '100' },
      { id: 'b', text: '75' },
      { id: 'c', text: '90' },
      { id: 'd', text: '125' }
    ],
    correctOptionId: 'a',
    explanation: '25% means one quarter. One quarter of 400 is 100.',
    sourceUrl: 'https://en.wikipedia.org/wiki/Percentage',
    subject: 'Mathematics',
    subjectSlug: 'mathematics-mcqs',
    examType: 'FPSC',
    difficulty: 'Easy',
    createdAt: '2026-03-24'
  },
  {
    id: 'm11',
    slug: 'largest-ocean-in-the-world',
    question: 'Which is the largest ocean in the world?',
    options: [
      { id: 'a', text: 'Atlantic Ocean' },
      { id: 'b', text: 'Indian Ocean' },
      { id: 'c', text: 'Arctic Ocean' },
      { id: 'd', text: 'Pacific Ocean' }
    ],
    correctOptionId: 'd',
    explanation: 'The Pacific Ocean is the largest and deepest ocean on Earth.',
    sourceUrl: 'https://en.wikipedia.org/wiki/Pacific_Ocean',
    subject: 'Geography',
    subjectSlug: 'geography-mcqs',
    examType: 'NTS',
    difficulty: 'Easy',
    createdAt: '2026-03-25'
  },
  {
    id: 'm12',
    slug: 'pakistan-resolution-year',
    question: 'In which year was the Pakistan Resolution passed?',
    options: [
      { id: 'a', text: '1930' },
      { id: 'b', text: '1940' },
      { id: 'c', text: '1947' },
      { id: 'd', text: '1956' }
    ],
    correctOptionId: 'b',
    explanation: 'The Pakistan Resolution was passed on 23 March 1940 in Lahore.',
    sourceUrl: 'https://en.wikipedia.org/wiki/Lahore_Resolution',
    subject: 'Pakistan Studies',
    subjectSlug: 'pakistan-studies-mcqs',
    examType: 'KPPSC',
    difficulty: 'Medium',
    important: true,
    createdAt: '2026-03-26'
  },
  {
    id: 'm13',
    slug: 'shortkey-for-copy',
    question: 'Which keyboard shortcut is commonly used to copy selected text?',
    options: [
      { id: 'a', text: 'Ctrl + V' },
      { id: 'b', text: 'Ctrl + X' },
      { id: 'c', text: 'Ctrl + C' },
      { id: 'd', text: 'Ctrl + A' }
    ],
    correctOptionId: 'c',
    explanation: 'Ctrl + C is the universal shortcut for copy in most operating systems.',
    sourceUrl: 'https://support.microsoft.com/en-us/windows/keyboard-shortcuts-in-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec',
    subject: 'Computer',
    subjectSlug: 'computer-mcqs',
    examType: 'PPSC',
    difficulty: 'Easy',
    createdAt: '2026-03-27'
  },
  {
    id: 'm14',
    slug: 'planet-known-as-red-planet',
    question: 'Which planet is known as the Red Planet?',
    options: [
      { id: 'a', text: 'Venus' },
      { id: 'b', text: 'Mars' },
      { id: 'c', text: 'Mercury' },
      { id: 'd', text: 'Jupiter' }
    ],
    correctOptionId: 'b',
    explanation: 'Mars is called the Red Planet because of iron oxide on its surface.',
    sourceUrl: 'https://science.nasa.gov/mars/',
    subject: 'Everyday Science',
    subjectSlug: 'everyday-science-mcqs',
    examType: 'SPSC',
    difficulty: 'Easy',
    createdAt: '2026-03-28'
  },
  {
    id: 'm15',
    slug: 'antonym-of-ancient',
    question: 'Choose the antonym of “Ancient”.',
    options: [
      { id: 'a', text: 'Old' },
      { id: 'b', text: 'Historic' },
      { id: 'c', text: 'Modern' },
      { id: 'd', text: 'Classic' }
    ],
    correctOptionId: 'c',
    explanation: 'Modern is the opposite in meaning of ancient.',
    sourceUrl: 'https://www.merriam-webster.com/dictionary/ancient',
    subject: 'English',
    subjectSlug: 'english-mcqs',
    examType: 'FPSC',
    difficulty: 'Easy',
    createdAt: '2026-03-29'
  } 
];

export const mockTests: MockTest[] = [
  {
    id: 't1',
    title: 'PPSC Assistant Mock Test 01',
    examType: 'PPSC',
    jobTitle: 'Assistant',
    durationInMinutes: 20,
    mcqIds: ['m1', 'm4', 'm6', 'm8', 'm10', 'm12'],
    description: 'Mixed aptitude practice for Assistant posts.'
  },
  {
    id: 't2',
    title: 'FPSC Inspector Mock Test 01',
    examType: 'FPSC',
    jobTitle: 'Inspector',
    durationInMinutes: 25,
    mcqIds: ['m2', 'm5', 'm9', 'm10', 'm15'],
    description: 'Focused practice for FPSC inspector recruitment.'
  },
  {
    id: 't3',
    title: 'NTS General Mock Test 01',
    examType: 'NTS',
    jobTitle: 'General',
    durationInMinutes: 15,
    mcqIds: ['m3', 'm7', 'm11', 'm14'],
    description: 'Quick mixed test for general recruitment exams.'
  }
];

export const leaderboard: LeaderboardEntry[] = [
  { id: 'u1', name: 'Ayesha Khan', points: 2840, streak: 41, badge: 'Gold' },
  { id: 'u2', name: 'Bilal Ahmed', points: 2735, streak: 36, badge: 'Gold' },
  { id: 'u3', name: 'Sana Tariq', points: 2610, streak: 29, badge: 'Silver' },
  { id: 'u4', name: 'Hamza Noor', points: 2550, streak: 25, badge: 'Silver' },
  { id: 'u5', name: 'Maham Ali', points: 2445, streak: 20, badge: 'Bronze' }
];

export const testAttempts: TestAttempt[] = [
  {
    id: 'a1',
    testId: 't1',
    score: 4,
    total: 6,
    correct: 4,
    wrong: 2,
    points: 3.5,
    createdAt: '2026-04-01',
    subjectBreakdown: [
      { subject: 'Pakistan Studies', accuracy: 80 },
      { subject: 'Computer', accuracy: 60 },
      { subject: 'Islamic Studies', accuracy: 100 }
    ]
  },
  {
    id: 'a2',
    testId: 't2',
    score: 3,
    total: 5,
    correct: 3,
    wrong: 2,
    points: 2.5,
    createdAt: '2026-04-08',
    subjectBreakdown: [
      { subject: 'General Knowledge', accuracy: 50 },
      { subject: 'English', accuracy: 80 },
      { subject: 'Mathematics', accuracy: 60 }
    ]
  }
];

export const stats = [
  { label: 'MCQs', value: '10K+' },
  { label: 'Students', value: '5K+' },
  { label: 'Subjects', value: '15+' },
  { label: 'Success Rate', value: '95%' }
];
