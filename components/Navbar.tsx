export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 md:px-16 py-4 bg-white shadow-sm sticky top-0 z-50">
      
      <h1 className="text-2xl font-bold">ArtisanHub</h1>

      <input
        type="text"
        placeholder="Search handmade products..."
        className="hidden md:block border rounded-full px-4 py-2 w-1/3 focus:outline-none"
      />

      <div className="flex gap-6 text-sm">
        <span className="cursor-pointer">Profile</span>
        <span className="cursor-pointer">Cart</span>
      </div>
    </nav>
  );
}