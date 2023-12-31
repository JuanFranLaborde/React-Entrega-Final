import { Button } from "@mui/material";
import { CartContext } from "../../../context/CartContext";
import "./Cart.css";
import { useContext } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export const CartContainer = () => {
  const { carrito, vaciarCarrito, eliminarPorId, obtenerTotalCompra } =
    useContext(CartContext);

  const limpiar = () => {
    Swal.fire({
      title: "¿Estás seguro que quieres vaciar el carrito?",
      imageUrl:
        "https://res.cloudinary.com/dp8auiwtw/image/upload/v1689010341/Panader%C3%ADa%20S%C3%A1nchez/wonder-wondering_mb8cc9.jpg",
      imageWidth: 400,
      imageHeight: 300,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sí, elimina todo!",
      denyButtonText: `No, me arrepentí!`,
    }).then((result) => {
      if (result.isConfirmed) {
        vaciarCarrito();
        Swal.fire("¡Carrito vaciado exitosamente!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito no se modificó", "", "error");
      }
    });
  };

  let totalCompra = obtenerTotalCompra();

  return (
    <div className="carrito">
      {carrito.length === 0 ? (
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "10rem",
            color: "#FF6B6B",
          }}
        >
          No hay productos agregados al carrito
        </h1>
      ) : (
        <div>
          <Button 
            style={{
              backgroundColor: "#FF6B6B",
              color: "#ffffff",
              borderRadius: "8px",
              borderColor: "transparent",
              cursor: "grab",
              transition: "background-color 0.5s, color 0.5s",
            }}
            onClick={limpiar}
          >
            Vaciar carrito
          </Button>
          <Link to="/checkout">
            <Button className="finalizar"
              style={{
                backgroundColor: "#FF6B6B",
                color: "#ffffff",
                borderRadius: "8px",
                borderColor: "transparent",
                cursor: "grab",
                transition: "background-color 0.5s, color 0.5s",
              }}
            >
              Finalizar compra
            </Button>
          </Link>
          <h2>El total del carrito es: ${totalCompra}</h2>
        </div>
      )}
      {carrito.map((Products) => {
        return (
          <div key={Products.id}>
            <h2>🏍{Products.title}</h2>
            <h2>-{Products.price}</h2>
            <h2>-{Products.quantity}</h2>
            
            <button onClick={() => eliminarPorId(Products.id)}>Eliminar</button>
          </div>
        );
      })}
    </div>
  );
};
