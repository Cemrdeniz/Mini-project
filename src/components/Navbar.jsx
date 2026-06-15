import useAuth from "../hooks/useAuth";

function Navbar() {
  const { logout } = useAuth();

  return (
    <div>
      <h2>Stock Management</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Navbar;