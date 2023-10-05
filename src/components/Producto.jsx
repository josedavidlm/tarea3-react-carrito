import { useContext } from "react"
import { VentaContext } from "../context/AppContext"
import { BsCart4} from 'react-icons/bs'
import { useNavigate } from "react-router-dom"

export const Producto = ({id,title,price,description,category,image,quantity})=>{    
    const{cart, setCart} = useContext(VentaContext)

    const navigate = useNavigate()
      const irPersonaje = () => {
          navigate("/cart")
      }

    const addToCart = () => {
        setCart((currItems) => {
          const isItemsFound = currItems.find((item) => item.id === id);
          if (isItemsFound) {
            return currItems.map((item) => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity + 1,subTotal: (item.quantity+ 1) * item.price };
              } else {
                return item;
              }
            });
          } else {
            return [...currItems, {id,title,price,description,category,image, quantity: 1,subTotal:price }];
          }
        });
        irPersonaje();
      }

      

      


    return(
        <>
        <div className="item-box">

            <div className="item-name-product">{title}</div>
            <img src={image} alt="" className=""  width={250} height={250} />
            <div>${price}</div>
            <div><button onClick={() => addToCart()} className="item-add-button"><BsCart4/>  Agregar Producto</button></div>
        </div>

        {/*
        <div className="col-4" key={producto.id}>
            <p>{producto.title}</p>
            <p > <img src={producto.image} alt="" className=""  width={250} height={250} /> </p>
            <p>{producto.price}</p>
            <button onClick={() => agregarProductos(producto)} className="btn btn-primary">Agregar al Producto</button>
        </div>*/
        }
        </>
    )
}