export function HeroSection() {
  return (
    <header className="flex max-w-7xl mx-auto flex-col-reverse md:flex-row items-center py-16 px-4">
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-5xl font-bold mb-4">Empower Your Campaigns</h1>
        <p className="text-lg mb-8">
          Manage influencers, track campaigns, and maximize your reach with our
          all-in-one platform.
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="border rounded-md p-2 w-full sm:w-64"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full sm:w-auto">
            Get Started
          </button>
        </div>
      </div>
      <div className="max-md:w-4/5 max-md:mx-auto flex justify-center items-center">
        <img
          src="/hero.webp"
          alt="Campaign management illustration"
          className="rounded-lg shadow-lg w-1/2 h-auto"
        />
      </div>
    </header>
  );
}
