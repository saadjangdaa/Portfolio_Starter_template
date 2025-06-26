export default function StaticPage() {
  // Static content - this will be rendered at build time
  const myContent = "Saad";
  
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Static Page
        </h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-xl text-gray-700">
            Hi, I am static content: <span className="font-bold text-blue-600">{myContent}</span>
          </p>
          <p className="text-gray-600 mt-4">
            This page is statically generated at build time using Next.js App Router.
          </p>
        </div>
      </div>
    </div>
  );
}
  