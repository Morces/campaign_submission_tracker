"use client";

export default function LandingPage() {
  return (
    <div className="bg-white text-black">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 border-b">
        <div className="text-lg font-bold">Monotree</div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:underline">
            Product
          </a>
          <a href="#" className="hover:underline">
            Why us
          </a>
          <a href="#" className="hover:underline">
            About us
          </a>
          <a href="#" className="hover:underline">
            Cases
          </a>
          <a href="#" className="hover:underline">
            Blog
          </a>
          <button className="bg-black text-white px-4 py-2 rounded-md">
            Book a demo
          </button>
          <select className="border rounded-md p-1">
            <option>English</option>
            <option>Spanish</option>
          </select>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-16">
        <h1 className="text-5xl font-bold mb-4">Put people first</h1>
        <p className="text-lg mb-8">
          Fast, user-friendly, and engaging – turn HR into people and culture
          and streamline your daily operations with your own branded app.
        </p>
        <div className="flex justify-center items-center gap-2">
          <input
            type="email"
            placeholder="Enter work email"
            className="border rounded-md p-2 w-64"
          />
          <button className="bg-black text-white px-4 py-2 rounded-md">
            Book a demo
          </button>
        </div>
      </header>

      {/* Illustration */}
      <section className="flex justify-center py-16">
        {/* Placeholder for Illustration */}
        <div className="bg-gray-100 p-16 rounded-md shadow-md">
          <p>Illustration goes here</p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="text-center py-8">
        <div className="flex justify-center gap-16">
          <div>
            <h2 className="text-4xl font-bold">75.2%</h2>
            <p className="text-gray-600">Average daily activity</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">~20k</h2>
            <p className="text-gray-600">Average daily users</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">4.5</h2>
            <p className="text-gray-600">Average user rating</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full bg-gray-200 p-4 flex justify-between items-center">
        <p>
          We use cookies to enhance your experience. Learn more in our Cookie
          Policy.
        </p>
        <div className="flex gap-2">
          <button className="bg-black text-white px-4 py-2 rounded-md">
            Accept
          </button>
          <button className="border px-4 py-2 rounded-md">Reject</button>
        </div>
      </footer>
    </div>
  );
}
