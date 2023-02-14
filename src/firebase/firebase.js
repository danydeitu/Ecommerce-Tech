// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { initializeApp } from "firebase/app";
import {getFirestore, collection,addDoc} from 'firebase/firestore'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-gyL-YiluGWZHHvUKezl68ywX_esxVHc",
  authDomain: "dany-tech-c1ab3.firebaseapp.com",
  projectId: "dany-tech-c1ab3",
  storageBucket: "dany-tech-c1ab3.appspot.com",
  messagingSenderId: "699786385604",
  appId: "1:699786385604:web:eb760464c896d322fe1191"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  /*CRUD PRODUCTOS
    CREATE
    READ
    UPDATE
    DELETE*/

    export const cargarBDD = async () => {
        const promise = await fetch('./json/productos.json')
        const productos = await promise.json()
        productos.forEach( async (prod) => {
            await addDoc(collection(db,"productos"), {
                nombre: prod.nombre,
                marca: prod.marca,
                modelo: prod.modelo,
                idCategoria: prod.idCategoria,
                stock: prod.stock,
                precio: prod.precio,
                img: prod.img
            })
        })
    }