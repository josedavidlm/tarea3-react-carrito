import { useContext } from "react";
import { VentaContext } from "../context/AppContext";
import { Link } from "react-router-dom";

export const Navbar= () =>{

    const{cart, setCart} = useContext(VentaContext)


    const quantity = cart.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);

    const navStyles = {
        color: "#fff",
        listStyle: "none",
        textDecoration: "none",
      };

    return(
        <nav>                        

            <Link to={"/"} style={navStyles}>
                <h2>Tienda</h2>
            </Link>
            <ul className="">
                <li className="nav-list">
                    <Link to={"/cart"} style={navStyles}>
                    Carrito items <span className="cart-count" >{quantity}</span>
                    </Link>
                </li>
            </ul>

        </nav>

    )

}