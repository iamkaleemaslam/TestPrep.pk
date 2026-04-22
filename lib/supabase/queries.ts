import { createSupabaseServerClient } from './server';
import { leaderboard, mcqs, mockTests, subjects, testAttempts } from '@/lib/data/sample-data';

export async function getSubjects() {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.from('subjects').select('*').order('name');
  return data?.length ? data : subjects;
}

export async function getMCQs() {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.from('mcqs').select('*').order('created_at', { ascending: false });
  return data?.length ? data : mcqs;
}

export async function getMCQsBySubject(slug: string) {
  const items = await getMCQs();
  return items.filter((mcq: { subjectSlug: string }) => mcq.subjectSlug === slug);
}

export async function getMockTests() {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.from('mock_tests').select('*').order('title');
  return data?.length ? data : mockTests;
}

export async function getLeaderboard() {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.from('users').select('id, full_name, points, streak, badge').order('points', { ascending: false }).limit(5);
  return data?.length ? data : leaderboard;
}

export async function getDashboardStats() {
  return testAttempts;
}
