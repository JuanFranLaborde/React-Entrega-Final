import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA17qFe9PWzLqoyxyoRYXhBzcnHFDhjsE0",
  authDomain: "moto-ruta-react.firebaseapp.com",
  projectId: "moto-ruta-react",
  storageBucket: "moto-ruta-react.appspot.com",
  messagingSenderId: "968988171794",
  appId: "1:968988171794:web:497eb93ef151a0b00242cb"
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)