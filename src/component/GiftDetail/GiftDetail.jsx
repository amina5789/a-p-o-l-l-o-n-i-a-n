import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGift } from "../../redux/giftSlice";

export function GiftDetail() {
    const { id } = useParams();  
    const dispatch = useDispatch();
    const { item: gift, status, error } = useSelector((state) => state.giftDetail);

    useEffect(() => {
        if (id) {
            dispatch(fetchGift(id));  
        }
    }, [id, dispatch]);

    if (status === "loading") return <p>Загрузка...</p>;
    if (status === "failed") return <p>Ошибка: {error}</p>;

    return (
        <div>
            {gift ? (
                <div>
                    <h2>{gift.title}</h2>
                    <img src={gift.img} alt={gift.title} />
                    <p>{gift.price}</p>
                    <p>{gift.description}</p>
                </div>
            ) : (
                <p>Подарок не найден</p>
            )}
        </div>
    );
}
