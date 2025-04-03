import stylle from './ProductDetail.module.scss';

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"; 
import {  fetchProductById } from "../../redux/productSlice"; 
import { ROUTER_PATHS } from '../../routes/routesPath';
import icon from './../../assets/icon//like.svg';
import { addToCart } from '../../redux/cartSlice';
import {addToFavorites, addToLike} from './../../redux/LikeSlice'
export function ProductDetail() {
    const navigate = useNavigate();
    const { id } = useParams(); 
    const dispatch = useDispatch();
    const { item: product, status, error } = useSelector((state) => state.product);

    const [count, setCount] = useState(1);

    useEffect(() => {
        if (id) {
            dispatch(fetchProductById(id)); 
        }
    }, [dispatch, id]);

    const handleAddToCart = () => {
        if (product) {
            dispatch(addToCart({ ...product, quantity: count })); 
            navigate(ROUTER_PATHS.Cart);
        }
    }; 
    
    const handleAddToLike = () => {
        if (product) {
            dispatch(addToLike({ ...product, quantity: count })); 
            navigate(ROUTER_PATHS.Like);
        }
    };
    return (
        <div className={stylle.productDetailContainer}>
            {status === "loading" && <p>Загрузка...</p>}
            {status === "failed" && <p>Ошибка: {error}</p>}
            {product && (
                <div className={stylle.productDetail}>
                    <div>
                        <img src={product.img} alt={product.title} className={stylle.img} />
                    </div>
                    <div className={stylle.divContainer}>
                        <p className={stylle.pBlack} >BACK TO SELECTION</p>
                        <div className={stylle.likeContainer}>
                            <h3 className={stylle.titleProductDetail}>{product.title}</h3>
                            <img src={icon} alt="icon" className={stylle.icon} onClick={handleAddToLike} />
                        </div>
                        <p className={stylle.pPrace}>{`$${product.prace}`}</p>
                        <p className={stylle.loremP}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <div className={stylle.counterContainer}>
                            <button className={stylle.counterBtn} onClick={() => setCount(prev => Math.max(1, prev - 1))}>-</button>
                            <span className={stylle.counterValue}>{count}</span>
                            <button className={stylle.counterBtn} onClick={() => setCount(prev => prev + 1)}>+</button>
                        </div>

                      
                        <button className={stylle.btnAdd} onClick={handleAddToCart}>ADDED</button>

                        <details>
                            <summary>DETAILS</summary>
                            <p className={stylle.detailsLorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        </details>                    
                        <details>
                            <summary>TIPS & WARNINGS</summary>
                            <p className={stylle.detailsLorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        </details>

                        <p className={stylle.detailsLocal} onClick={() => navigate(ROUTER_PATHS.locations)}>LOCAL AVAILABILITY</p>
                    </div>
                </div>
            )}
        </div>
    );
}
