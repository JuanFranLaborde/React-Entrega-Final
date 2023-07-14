import "./Counter.css";
import { useCount } from "../../hooks/useCount";
import { Button } from "@mui/material";

export const ItemCount = ({ stock, inicial = 1, onAdd }) => {
  const { count, decremento, incremento } = useCount(inicial, stock);

  return (
    <div className="todo">
      <div className="contador">
        <Button
          style={{
            backgroundColor: "#FF6B6B",
            color: "#ffffff",
            borderRadius: "8px",
            borderColor: "transparent",
            cursor: "grab",
            transition: "background-color 0.5s, color 0.5s",
          }}
          onClick={decremento}
        >
          -
        </Button>
        <span>{count}</span>
        <Button style={{
          backgroundColor: "#FF6B6B",
          color: "#ffffff",
          borderRadius: "8px",
          borderColor: "transparent",
          cursor: "grab",
          transition: "background-color 0.5s, color 0.5s",
        }}
         onClick={incremento}>
          +
        </Button>
      </div>
      <Button
        style={{
          backgroundColor: "#FF6B6B",
          color: "#ffffff",
          borderRadius: "8px",
          borderColor: "transparent",
          cursor: "grab",
          transition: "background-color 0.5s, color 0.5s",
        }}
        onClick={() => onAdd(count)}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};
