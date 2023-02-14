import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
//componentes

import { ItemList } from '../ItemList/ItemList'
//context
import {useDarkModeContext } from '../../context/DarkModeContext'
export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {idCategoria}= useParams()
const {DarkMode} = useDarkModeContext()
    useEffect(() => {
        if(idCategoria) {
            fetch('../json/productos.json')
            .then(response => response.json())
            .then(items => {
                const products = items.filter(prod => prod.idCategoria === parseInt(idCategoria))
                const productsList = ItemList({products}) //Array de productos en JSX
                console.log(productsList)
                setProductos(productsList)
            })
        } else {
            fetch('./json/productos.json')
            .then(response => response.json())
            .then(products => {
                console.log(products)
                const productsList = ItemList({products}) //Array de productos en JSX
                console.log(productsList)
                setProductos(productsList)
            })
        }
        
    }, [idCategoria])
    //[] cuando se renderiza
    //[prop] cuando se renderiza y cuando se actualiza
    return (
        <div className='row cardProductos'>
            {productos}
        </div>
    )
}