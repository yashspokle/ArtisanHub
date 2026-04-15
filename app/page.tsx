import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div className="bg-[#fafafa] text-gray-800">
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* RECOMMENDED */}
      <section className="px-6 md:px-16 py-12">
        <h2 className="text-3xl font-semibold mb-6">
          Recommended for You
        </h2>

        <div className="flex gap-6 overflow-x-auto scrollbar-hide">
          {products.map((p) => (
            <div key={p.id} className="min-w-[240px]">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>

      {/* HIDDEN GEMS */}
      <section className="px-6 md:px-16 py-12 bg-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold">Hidden Gems</h2>
          <span className="text-sm text-gray-500">
            Support emerging artisans
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products
            .filter((p) => p.isNew)
            .map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="px-6 md:px-16 py-12">
        <h2 className="text-3xl font-semibold mb-6">Categories</h2>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {["Jewelry", "Art", "Clothing", "Decor", "Gifts", "Accessories"].map(
            (cat) => (
              <div
                key={cat}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg hover:scale-105 transition text-center cursor-pointer"
              >
                {cat}
              </div>
            )
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-6">
        <p>© 2026 ArtisanHub. All rights reserved.</p>
      </footer>
    </div>
  );
}