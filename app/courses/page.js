import Link from "next/link";

export default function page() {
  const courses = [
    { id: 1, title: "Web Development 101", description: "Learn the basics of web development." },
    { id: 2, title: "Advanced JavaScript", description: "Deep dive into JavaScript concepts." },
    { id: 3, title: "React for Beginners", description: "Get started with React.js." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-indigo-600 text-white p-4 shadow-md">
        <h1 className="text-xl font-bold">Courses</h1>
      </header>

      <main className="flex-1 p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg"
            >
              <h2 className="text-lg font-bold text-indigo-600">{course.title}</h2>
              <p className="mt-2 text-gray-600">{course.description}</p>
              <Link
                href={`/courses/${course.id}`}
                className="mt-4 inline-block text-indigo-600 hover:underline"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-200 text-center py-4 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Your Application Name
      </footer>
    </div>
  );
}
