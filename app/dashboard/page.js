import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-indigo-600 text-white p-4 shadow-md">
        <h1 className="text-xl font-bold">Welcome to Your Dashboard</h1>
      </header>

      <main className="flex-1 p-6">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Quick Links */}
          <Link href="/courses" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
            <h2 className="text-lg font-bold text-indigo-600">View Courses</h2>
            <p className="mt-2 text-gray-600">Browse and manage your courses.</p>
          </Link>
          <Link href="/profile" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
            <h2 className="text-lg font-bold text-indigo-600">Edit Profile</h2>
            <p className="mt-2 text-gray-600">Update your personal details.</p>
          </Link>
          <Link href="/notifications" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
            <h2 className="text-lg font-bold text-indigo-600">Notifications</h2>
            <p className="mt-2 text-gray-600">Check your latest notifications.</p>
          </Link>
        </div>
      </main>

      <footer className="bg-gray-200 text-center py-4 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Your Application Name
      </footer>
    </div>
  );
}
