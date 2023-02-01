import { useState } from "react"

export const ItemCount = ({valInicial, stock}) => {
    
    const [contador, setContador] = useState(valInicial)
            //Var       //Modificar var     //Estado inicial

    const sumar = () =>  (contador < stock) && setContador(contador + 1) //contador + 1
    const restar = () => (contador > valInicial)  && setContador(contador - 1)  //Operador ternario sin else -1


  return (
    <>
         <button className="btn btn-light" onClick={() => restar()}>-</button>
         {contador}
        <button className="btn btn-dark" onClick={() => sumar()}>+</button>
          
   
    </>
  )
}