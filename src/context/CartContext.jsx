import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem("carrito")) || []);

  const agregarAlCarrito = (nuevoProducto) => {
    let existe = contenidoCarrito(nuevoProducto.id);
    if (existe) {
      let agregar = carrito.map((Products) => {
        if (Products.id === nuevoProducto.id) {
          return {
            ...Products,
            quantity: Products.quantity + nuevoProducto.quantity,
          };
        } else {
          return Products;
        }
      });
      setCarrito(agregar);
      localStorage.setItem("carrito", JSON.stringify(agregar));
    } else {
      setCarrito([...carrito, nuevoProducto]);
      localStorage.setItem(
        "carrito",
        JSON.stringify([...carrito, nuevoProducto])
      );
    }
  };

  const contenidoCarrito = (id) => {
    let existe = carrito.some((Products) => Products.id === id);
    return existe;
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    localStorage.removeItem("carrito");
  };

  const eliminarPorId = (id) => {
    let eliminar = carrito.filter((Products) => Products.id !== id);
    setCarrito(eliminar);
    if (carrito.length === 1){
      localStorage.removeItem("carrito");
    }else{
      localStorage.setItem("carrito", JSON.stringify(eliminar));
    }
  };

  const obtenerCantidadPorId = (id) => {
    let Products = carrito.find((prod) => prod.id === id);
    return Products?.quantity;
  };

  const obtenerTotalItems = () => {
    let total = carrito.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
    return total;
  };

  const obtenerTotalCompra = () => {
    let total = carrito.reduce((acc, elemento) => {
      return acc + elemento.quantity * elemento.price;
    }, 0);
    return total;
  };

  let data = {
    carrito,
    agregarAlCarrito,
    vaciarCarrito,
    eliminarPorId,
    obtenerCantidadPorId,
    obtenerTotalItems,
    obtenerTotalCompra,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
