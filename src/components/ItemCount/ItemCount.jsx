import { useState } from "react"

export const ItemCount = () => {
    
    const [contador, setContador] = useState(0)
            //Var       //Modificar var     //Estado inicial

    const restar = () => setContador(contador - 1)
    const sumar = () =>  setContador(contador + 1) //contador = contador + 1, - 1
   


  return (
    <>
       <button className="btn btn-light" onClick={() => restar()}>-</button>
       {contador}
        <button className="btn btn-dark" onClick={() => sumar()}>+</button>
        
     
    </>
  )
}