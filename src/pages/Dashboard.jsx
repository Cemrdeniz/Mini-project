import products from "../data/products";

function Dashboard() {
  const totalProducts = products.length;
  const totalStock = products.reduce(
    (acc, product) => acc + product.stock,
    0
  );

  const totalValue = products.reduce(
    (acc, product) => acc + product.price * product.stock,
    0
  );

  return (
    <div>
      <h1>Dashboard</h1>

      <div>
        <h3>Total Products: {totalProducts}</h3>
        <h3>Total Stock: {totalStock}</h3>
        <h3>Total Inventory Value: ${totalValue}</h3>
      </div>
    </div>
  );
}

export default Dashboard;