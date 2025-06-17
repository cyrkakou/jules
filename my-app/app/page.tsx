export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">Welcome to SaaSBoiler!</h1>
        <p className="text-xl text-gray-700 mb-8">
          The perfect starting point for your next great SaaS application, built with Next.js 15 and Tailwind CSS.
        </p>
        <a
          href="/auth/signin"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </a>
      </div>
    </main>
  );
}
