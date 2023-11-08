import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';
import { redirect } from 'next/navigation';
import Navigation from '@/components/Navigation/Navigation';

type DashboardProps = {
    children: React.ReactNode;
};
export default async function DashboardLayout({ children }: DashboardProps) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-secondary">
      <nav>
        <Navigation session={session} />
      </nav>
      {children}
    </div>
  );
}
