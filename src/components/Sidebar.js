import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <h2 className="my-3 text-white">Company name</h2>
      <div className="pt-3">
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <Link to="/" className="nav-link">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/orders" className="nav-link">Orders</Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link">Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/customers" className="nav-link">Customers</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar