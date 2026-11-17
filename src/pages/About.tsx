const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 font-sans">
      <h1 className="text-5xl font-bold text-white mb-8 drop-shadow-lg tracking-tight">
        About
      </h1>

      <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-10 max-w-2xl w-full shadow-2xl border border-white/30">
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Welcome to the Makers Intern Learning Session! This application is designed to help you
          learn and practice React concepts through interactive examples and exercises.
        </p>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">What you'll learn:</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-3 py-2 text-gray-600 border-b border-gray-200 last:border-0">
              <span className="inline-block w-6 h-6 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold shrink-0">
                ✓
              </span>
              React fundamentals (components, props, state)
            </li>
            <li className="flex items-center gap-3 py-2 text-gray-600 border-b border-gray-200 last:border-0">
              <span className="inline-block w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-sm font-semibold shrink-0">
                ✓
              </span>
              Conditional rendering and list rendering
            </li>
            <li className="flex items-center gap-3 py-2 text-gray-600 border-b border-gray-200 last:border-0">
              <span className="inline-block w-6 h-6 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 text-sm font-semibold shrink-0">
                ✓
              </span>
              Lifecycle methods and hooks
            </li>
            <li className="flex items-center gap-3 py-2 text-gray-600 border-b border-gray-200 last:border-0">
              <span className="inline-block w-6 h-6 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold shrink-0">
                ✓
              </span>
              Form handling and validation
            </li>
            <li className="flex items-center gap-3 py-2 text-gray-600 border-b border-gray-200 last:border-0">
              <span className="inline-block w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-sm font-semibold shrink-0">
                ✓
              </span>
              API integration and data fetching
            </li>
          </ul>
        </div>

        <div className="flex justify-between pt-5 border-t border-gray-200">
          <p className="text-sm text-gray-400 font-medium">Version 1.0.0</p>
          <p className="text-sm text-gray-400 font-medium">Built with React & TypeScript</p>
        </div>
      </div>
    </div>
  );
};

export default About;