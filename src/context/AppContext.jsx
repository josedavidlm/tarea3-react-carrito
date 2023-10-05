import { createContext, useEffect, useState } from "react"
import { getApiProductos } from "../helpers/getApiProductos"
export const VentaContext = createContext()

export const AppContext =({children})=>{




    const [productos,setProductos] = useState([])
    const [cart, setCart] = useState([]);


    useEffect(() => {
        getApiProductos().then(res => {setProductos(res)})
      }, [])
    

    const addProductoToList = (Producto)=> {
        const list = document.getElementById('Producto-list');
        // Create table row element
        const row = document.createElement('tr');
        // Insert columns
        row.innerHTML = `
            <td>${Producto.title}</td>
            <td>${Producto.quantity}</td>
            <td>${Producto.price}</td>
            <td>${Producto.subTotal}</td>
            <td><a href="#" class="delete">X</a> </td>
        `;

        list.appendChild(row);
    };


    console.log(productos);

    return(
        
        <>
        <VentaContext.Provider value={{productos,cart, setCart}}>
            {children}
        </VentaContext.Provider>

        </>
    )

}