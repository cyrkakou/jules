'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function AuthButtons() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (session) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px' }}>
        <p>Signed in as {session.user?.email}</p>
        <Link href="/dashboard">
          <button>Dashboard</button>
        </Link>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px' }}>
      <p>Not signed in</p>
      {/* Link to the custom sign-in page */}
      <Link href="/auth/signin">
        <button>Sign In</button>
      </Link>
    </div>
  );
}
