export function HeroSection() {
  return (
    <header className="text-center py-16 px-4">
      <h1 className="text-5xl font-bold mb-4">Put people first</h1>
      <p className="text-lg mb-8">
        Fast, user-friendly, and engaging – turn HR into people and culture and
        streamline your daily operations with your own branded app.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
        <input
          type="email"
          placeholder="Enter work email"
          className="border rounded-md p-2 w-full sm:w-64"
        />
      </div>
    </header>
  );
}
