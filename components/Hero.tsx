export default function Hero() {
  return (
    <div className="px-6 md:px-16 py-20 bg-gradient-to-r from-orange-100 via-pink-100 to-yellow-100 text-center">
      
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Discover Unique Handmade Creations
      </h1>

      <p className="text-gray-600 mb-6">
        Support small artisans and find products that tell a story
      </p>

      <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
        Explore Now
      </button>
    </div>
  );
}