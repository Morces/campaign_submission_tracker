export function Footer() {
  return (
    <footer className="w-full bg-gray-200 p-4 flex flex-col sm:flex-row justify-between items-center">
      <p className="text-center sm:text-left">
        Simplify your influencer campaigns with our trusted platform.
      </p>
      <div className="flex gap-2 mt-2 sm:mt-0">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Learn More
        </button>
        <button className="border px-4 py-2 rounded-md">Contact Us</button>
      </div>
    </footer>
  );
}
