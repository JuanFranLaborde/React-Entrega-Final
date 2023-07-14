import "./Navbar.css";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img
            src="https://i.pinimg.com/originals/61/a7/a2/61a7a2b87b13b388458f84fb971c67dc.jpg"
            alt=""
            style={{ width: "90px", display: "flex", alignItems: "center" }}
          />
        </Link>
        <ul className="lista">
          <Link to="/" style={{ color: "#FF6B6B", textDecoration: "none" }}>
            Inicio
          </Link>
          <Link to="/productos" style={{ color: "#FF6B6B", textDecoration: "none" }}>
            Productos
          </Link>
          <Link to="/contacto" style={{ color: "#FF6B6B", textDecoration: "none" }}>
            Contacto
          </Link>
        </ul>
        <Link to="/carrito">
          <CartWidget />
        </Link>
      </div>
    </>
  );
};
