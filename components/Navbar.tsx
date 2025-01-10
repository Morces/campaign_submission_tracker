export function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 border-b">
      <div className="text-lg font-bold">Campaign Tracker</div>
      <div className="flex items-center gap-4">
        <a href="#" className="hover:underline">
          Campaigns
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
      </div>
    </nav>
  );
}
