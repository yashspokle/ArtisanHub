type Props = {
  product: any;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="border rounded-2xl p-4 shadow hover:scale-105 transition">
      <img
        src={product.image}
        className="w-full h-40 object-cover rounded-xl"
      />

      <h2 className="font-semibold mt-2">{product.name}</h2>
      <p>₹{product.price}</p>
      <p className="text-sm text-gray-500">{product.seller}</p>

      {product.isNew && (
        <span className="text-xs bg-green-200 px-2 py-1 rounded">
          New Seller
        </span>
      )}
    </div>
  );
}