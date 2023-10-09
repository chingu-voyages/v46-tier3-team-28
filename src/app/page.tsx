import { migratation } from '@/db';

export default function Home() {
  if (process.env.NODE_ENV === 'development') {
    migratation();
  }
  return (
    <main>
      <div>Landing Page</div>
    </main>
  );
}
