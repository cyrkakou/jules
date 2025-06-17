// my-app/app/api/user/profile/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
// Adjusted import path for authOptions
import { handler as authOptions } from '../../auth/[...nextauth]/route';
// Adjusted import path for db and schema
import { db } from '../../../../lib/db';
import { users } from '../../../../lib/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.email) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const userEmail = session.user.email;
    const userProfile = await db.query.users.findFirst({
      where: eq(users.email, userEmail),
      columns: {
        id: true,
        name: true,
        email: true,
      }
    });

    if (!userProfile) {
      // This case should ideally not be reached if users are created in DB upon signup/signin
      // For the current demo CredentialsProvider, it will always be reached as users are not in DB.
      return NextResponse.json({ message: 'User not found in database' }, { status: 404 });
    }

    return NextResponse.json(userProfile);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
