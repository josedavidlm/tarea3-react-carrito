import { useContext } from "react"
import { VentaContext } from "../context/AppContext"
import { Producto } from "./Producto"

export const CardProducto  = () =>{

    
    const{productos,agregarProductos} = useContext(VentaContext)
    

    return(        
        <div >
        <div className="cart-container">
        <div>
            <div>Productos de Catálogo</div>                                
        </div>
        </div>


        <div className="items-list">
        {productos.map((producto, idx) => {
            return <Producto key ={producto.id} {...producto}/>
                  })
        }                
        </div>
        </div>
        
    )

}