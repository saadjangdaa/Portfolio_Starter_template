export const dynamic = "force-static";

export default function SSGExample() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">SSG Example</h1>
        <p className="text-xl text-gray-700 mb-4">This page is statically generated at build time.</p>
        <p className="text-gray-600">Refresh the page: the content will not change until you rebuild the app.</p>
      </div>
    </div>
  );
} 