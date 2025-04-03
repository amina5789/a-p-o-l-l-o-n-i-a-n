import { useDispatch, useSelector } from "react-redux";
import { fetchToLike, removeFromLike } from "../../redux/LikeSlice"; 
import stylle from "./Like.module.scss";
import icon from './../../assets/icon/delete.png';
import { useEffect } from "react";

export function Like() {
    const dispatch = useDispatch();
    const { items: Like = [], status } = useSelector((state) => state.Like); 
    useEffect(() => {
        dispatch(fetchToLike()); 
    }, [dispatch]);
    return (
        <div className={stylle.cartContainer}>
            <h3 className={stylle.carth3}>Like</h3>
            {status === "loading" ? (
                <p className={stylle.loading}>loading...</p>
            ) : Like.length === 0 ? (
                <p className={stylle.loading}>Like is empty...</p>
            ) : (
                Like.map(({ id, title, img, prace, quantity }) => (
                    <div key={id} className={stylle.cartItem}>
                        <div>
                            <img src={img} alt={title} className={stylle.img} /> 
                        </div>
                        <div className={stylle.containerTitel}>
                            <div className={stylle.containerdelete}>
                                <p className={stylle.pTitle}>{title}</p>
                                <img 
                                    src={icon} 
                                    alt="deleteIcon"  
                                    onClick={() => dispatch(removeFromLike(id))}   
                                    className={stylle.btnDelete} 
                                />
                            </div>
                            <p className={stylle.pPrace}>${prace * quantity || prace}</p> 

                            <div className={stylle.counterContainer}>
                                <span className={stylle.counterValue}>Quantity: {quantity ?? 1}</span>
                                
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
