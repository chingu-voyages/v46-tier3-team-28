import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';

export default async function Page() {
  const session = await getServerSession(authOptions);

  return <div>Hi data {JSON.stringify(session)}</div>;
}
