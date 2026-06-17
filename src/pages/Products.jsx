import { useState } from "react";
import productsData from "../data/products";
import formatPrice from "../utils/formatPrice";
import AddProduct from "../components/AddProduct";

function Products() {
  const [products, setProducts] = useState(productsData);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <h1>Products</h1>

      <AddProduct onAdd={addProduct} />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{formatPrice(product.price)}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;