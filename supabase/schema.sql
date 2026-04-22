create extension if not exists "uuid-ossp";

create table if not exists users (
  id uuid primary key default uuid_generate_v4(),
  full_name text not null,
  email text unique not null,
  avatar_url text,
  points numeric default 0,
  streak integer default 0,
  badge text default 'Bronze',
  created_at timestamptz default now()
);

create table if not exists subjects (
  id uuid primary key default uuid_generate_v4(),
  name text not null unique,
  slug text not null unique,
  description text,
  icon text,
  created_at timestamptz default now()
);

create table if not exists exams (
  id uuid primary key default uuid_generate_v4(),
  name text not null unique,
  slug text not null unique,
  created_at timestamptz default now()
);

create table if not exists subtopics (
  id uuid primary key default uuid_generate_v4(),
  subject_id uuid not null references subjects(id) on delete cascade,
  name text not null,
  slug text not null unique,
  created_at timestamptz default now()
);

create table if not exists mcqs (
  id uuid primary key default uuid_generate_v4(),
  subject_id uuid not null references subjects(id) on delete cascade,
  exam_id uuid references exams(id) on delete set null,
  subtopic_id uuid references subtopics(id) on delete set null,
  slug text not null unique,
  question text not null,
  options jsonb not null,
  correct_option_id text not null,
  explanation text,
  source_url text,
  image_url text,
  difficulty text check (difficulty in ('Easy', 'Medium', 'Hard')) default 'Easy',
  is_important boolean default false,
  created_at timestamptz default now()
);

create table if not exists mcq_attempts (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references users(id) on delete cascade,
  mcq_id uuid not null references mcqs(id) on delete cascade,
  selected_option_id text,
  is_correct boolean,
  mode text check (mode in ('study', 'quiz')) not null,
  attempted_at timestamptz default now()
);

create table if not exists bookmarks (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references users(id) on delete cascade,
  mcq_id uuid not null references mcqs(id) on delete cascade,
  created_at timestamptz default now(),
  unique(user_id, mcq_id)
);

create table if not exists mock_tests (
  id uuid primary key default uuid_generate_v4(),
  exam_id uuid references exams(id) on delete set null,
  title text not null,
  job_title text,
  description text,
  duration_in_minutes integer not null default 20,
  mcq_ids jsonb not null,
  created_at timestamptz default now()
);

create table if not exists user_test_attempts (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references users(id) on delete cascade,
  mock_test_id uuid not null references mock_tests(id) on delete cascade,
  answers jsonb not null,
  correct_count integer default 0,
  wrong_count integer default 0,
  score integer default 0,
  points numeric default 0,
  started_at timestamptz default now(),
  completed_at timestamptz
);

create table if not exists payments (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references users(id) on delete cascade,
  amount numeric not null,
  currency text default 'PKR',
  plan_name text not null,
  status text default 'pending',
  provider text default 'manual',
  paid_at timestamptz,
  created_at timestamptz default now()
);

alter table users enable row level security;
alter table subjects enable row level security;
alter table exams enable row level security;
alter table subtopics enable row level security;
alter table mcqs enable row level security;
alter table mcq_attempts enable row level security;
alter table bookmarks enable row level security;
alter table mock_tests enable row level security;
alter table user_test_attempts enable row level security;
alter table payments enable row level security;

create policy "Public can read subjects" on subjects for select using (true);
create policy "Public can read exams" on exams for select using (true);
create policy "Public can read subtopics" on subtopics for select using (true);
create policy "Public can read mcqs" on mcqs for select using (true);
create policy "Public can read mock tests" on mock_tests for select using (true);
