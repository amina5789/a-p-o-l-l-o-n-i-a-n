import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchGift } from "../../redux/giftSlice";
import style from "./Gifts.module.scss";

export function Gifts() {
    const dispatch = useDispatch();
    
    const { items: gift, currentPage, totalItems, itemsPerPage, status } = useSelector((state) => state.gift);

    useEffect(() => {
        dispatch(fetchGift());
    }, [dispatch]);

    if (status === "loading") return <p>Загрузка...</p>;
    if (status === "failed") return <p>Ошибка загрузки данных</p>;

    return (
        <section className={style.giftsSection}>
            <div className={style.gif}>
                <h2 className={style.h2Gifts}>Gifts</h2>
                <h2 className={style.amet}>Lorem ipsum dolor sit amet.</h2>
            </div>

            <div className={style.giftsContainer}>
                {gift.map(({ id, title, img, prace }) => (
                    <div key={id}>
                        <Link to={`/product/${id}`}>
                            <img src={img} alt={title} className={style.imgGifts} />
                        </Link>
                        <div>
                            <p className={style.titleGifts}>{title}</p>
                            <p className={style.priceGifts}>{`$${prace}`}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
