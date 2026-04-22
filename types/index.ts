export type Mode = 'study' | 'quiz';
export type Theme = 'light' | 'dark';
export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Subject {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  mcqCount: number;
}

export interface Exam {
  id: string;
  name: string;
  slug: string;
}

export interface Subtopic {
  id: string;
  subjectId: string;
  name: string;
  slug: string;
}

export interface Option {
  id: string;
  text: string;
}

export interface MCQ {
  id: string;
  slug: string;
  question: string;
  options: Option[];
  correctOptionId: string;
  explanation: string;
  sourceUrl?: string;
  imageUrl?: string;
  subject: string;
  subjectSlug: string;
  examType: string;
  difficulty: Difficulty;
  important?: boolean;
  relatedIds?: string[];
  createdAt: string;
}

export interface MockTest {
  id: string;
  title: string;
  examType: string;
  jobTitle: string;
  durationInMinutes: number;
  mcqIds: string[];
  description: string;
}

export interface TestAttempt {
  id: string;
  testId: string;
  score: number;
  total: number;
  correct: number;
  wrong: number;
  points: number;
  createdAt: string;
  subjectBreakdown: { subject: string; accuracy: number }[];
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  points: number;
  streak: number;
  badge: string;
}
