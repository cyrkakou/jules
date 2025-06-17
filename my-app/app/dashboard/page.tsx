import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
// Adjusted import path for authOptions from ../api/auth/[...nextauth]/route
import { handler as authOptions } from '../api/auth/[...nextauth]/route';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect('/auth/signin');
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      </header>
      <main className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Welcome, {session.user.name || 'User'}!
        </h2>
        <p className="text-gray-600">
          This is your protected dashboard area. More features coming soon!
        </p>
        {/* You can add more dashboard-specific content here */}
      </main>
    </div>
  );
}
