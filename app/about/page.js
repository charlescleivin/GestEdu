export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About GestEdu
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Modern Educational Management System
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            GestEdu is dedicated to transforming educational management through 
            innovative technology. We provide schools, teachers, and students with 
            powerful tools to streamline administrative tasks, enhance communication, 
            and improve the overall learning experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="text-blue-600 dark:text-blue-400 text-3xl mb-3">📚</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Student Management
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Comprehensive student records, attendance tracking, and performance analytics.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="text-green-600 dark:text-green-400 text-3xl mb-3">👨‍🏫</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Teacher Tools
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Grade management, lesson planning, and seamless parent communication.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="text-purple-600 dark:text-purple-400 text-3xl mb-3">📊</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Analytics & Reports
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Data-driven insights to improve educational outcomes and operations.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="text-orange-600 dark:text-orange-400 text-3xl mb-3">🔒</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Secure & Reliable
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Enterprise-grade security protecting sensitive educational data.
            </p>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Built With Modern Technology
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            GestEdu leverages cutting-edge technologies to deliver a fast, 
            reliable, and scalable educational management platform.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium">
              Next.js
            </span>
            <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium">
              React
            </span>
            <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium">
              Tailwind CSS
            </span>
            <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium">
              Vercel
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}