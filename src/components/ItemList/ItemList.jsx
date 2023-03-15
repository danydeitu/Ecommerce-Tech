import { Item } from "../Item/Item"
import { ItemCart } from "../ItemCart/ItemCart"
<<<<<<< HEAD
export const ItemList = ({products, plantilla}) => {
  return (
    <>
      {
        plantilla === 'item' 
        ? 
        products.map(producto => <Item item={producto} key={producto.id}/>)
        :
        products.map(producto => <ItemCart item={producto} key={producto.id}/>)
      }
    
=======
export const ItemList = ({products,plantilla}) => {
  return (
    <>
    {
    plantilla === 'item'
    ?
        products.map(producto => <Item item={producto} key={producto.id}/>)
        :
        products.map(producto => <ItemCart  item={producto} key={producto.id}/>)
    }
  
>>>>>>> 46af0d674be9098cd5321e71456156c516bf6eb9
    </>
  )
}