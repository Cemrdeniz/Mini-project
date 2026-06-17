import { useState } from "react";

function AddProduct({ onAdd }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name,
      category,
      price: Number(price),
      stock: Number(stock),
    };

    onAdd(newProduct);

    setName("");
    setCategory("");
    setPrice("");
    setStock("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />

      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProduct;