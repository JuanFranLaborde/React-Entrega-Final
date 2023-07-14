import { Link } from "react-router-dom";

export const ItemCategory = () => {
  return (
    <div className="categorias">
      <ul className="lista-cat">
        <Link
          to="/category/Motos"
          style={{ color: "#ffffff", textDecoration: "none" }}
        >
          Motos
        </Link>
        <Link
          to="/category/Cuatris"
          style={{ color: "#ffffff", textDecoration: "none" }}
        >
          Cuatris
        </Link>
        <Link
          to="/category/Indumentaria"
          style={{ color: "#ffffff", textDecoration: "none" }}
        >
          Indumentaria
        </Link>
      </ul>
    </div>
  );
};
