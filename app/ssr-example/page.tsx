export const dynamic = "force-dynamic";

export default async function SSRExample() {
  const now = new Date().toLocaleString();
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">SSR Example</h1>
        <p className="text-xl text-gray-700 mb-4">This page is server-side rendered on every request.</p>
        <p className="text-gray-600">Current server time: <span className="font-mono text-blue-600">{now}</span></p>
        <p className="text-gray-500 mt-2">Refresh the page: the time will update every time.</p>
      </div>
    </div>
  );
} 