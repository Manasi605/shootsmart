import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", background: "#333" }}>
      <ul style={{ listStyle: "none", display: "flex", gap: "1rem", margin: 0, padding: 0 }}>
        <li><Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link></li>
        <li><Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>About</Link></li>
        <li><Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</Link></li>
        <li><Link to="/product" style={{ color: "#fff", textDecoration: "none" }}>Product</Link></li>
        <li><Link to="/services" style={{ color: "#fff", textDecoration: "none" }}>Services</Link></li>
        <li><Link to="/blog" style={{ color: "#fff", textDecoration: "none" }}>Blog</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;