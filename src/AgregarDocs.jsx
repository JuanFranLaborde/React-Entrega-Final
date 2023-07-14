import { addDoc, collection } from "@firebase/firestore";
// import { Products } from "./productsMock";
import { dataBase } from "./firebaseConfig";

export const AgregarDocs = () => {
  const rellenar = () => {
    let itemsCollections = collection(dataBase, "Products");

    Products.forEach((elemento) => {
      addDoc(itemsCollections, elemento);
    });
  };

  return (
    <div>
      <button onClick={rellenar}>Rellenar mi coleccion de productos</button>
    </div>
  );
};
