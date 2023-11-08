import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';
import { redirect } from 'next/navigation';
import Navigation from '@/components/Navigation';

type DashboardProps = {
    children: React.ReactNode;
};
export default async function ProfileLayout({ children }: DashboardProps) {
    const session = await getServerSession(authOptions);

    // if (!session) {
    //     redirect('/login');
    // }

    return (
        <>
            <nav>
                <Navigation session={session} />
            </nav>
            <main>{children}</main>
        </>
    );
}
