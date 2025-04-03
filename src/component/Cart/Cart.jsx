import { useDispatch, useSelector } from "react-redux";
import { fetchCart, removeFromCart, updateQuantity } from "../../redux/cartSlice"; 
import stylle from "./Cart.module.scss";
import icon from './../../assets/icon/delete.png';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ROUTER_PATHS } from "../../routes/routesPath";
import { setUser } from "../../redux/userSlice"; 
export function Cart() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { items: cart = [], status } = useSelector((state) => state.cart); 
    const user = useSelector((state) => state.user.user);









    useEffect(() => {
        dispatch(fetchCart()); 
    }, [dispatch]);
    return (
        <div className={stylle.cartContainer}>
            <h3 className={stylle.carth3}>Cart</h3>
            {status === "loading" ? (
                <p className={stylle.loading}>loading...</p>
            ) : cart.length === 0 ? (
                <p className={stylle.loading}>Cart is empty...</p>
            ) : (
                cart.map(({ id, title, img, prace, quantity }) => (
                    <div key={id} className={stylle.cartItem}>
                        <div >
                            <img src={img} alt={title} className={stylle.img} /> 

                        </div>
                        <div className={stylle.containerTitel}>
                            <div className={stylle.containerdelete}>
                                <p className={stylle.pTitle}>{title}</p>
                                <img 
                                    src={icon} 
                                    alt="deleteIcon"  
                                    onClick={() => dispatch(removeFromCart(id))}   
                                    className={stylle.btnDelete} 
                                />
                            </div>
                            <p className={stylle.pPrace}>${prace}</p> 

                            <div className={stylle.counterContainer}>
                                <span className={stylle.counterValue}>Quantity: {quantity  ||1}</span>
                            </div>
                        </div>
                      
                    </div>
                ))
            )}
            <div className={stylle.checkoutContainer} 
            style={{ display: cart.length > 0 ? 'block' : 'none' }}>
  <button className={stylle.cartBtn} onClick={()=>navigate(ROUTER_PATHS.OrderFrom)}>CHECKOUT</button>
</div>
         
        </div>
    );
}
