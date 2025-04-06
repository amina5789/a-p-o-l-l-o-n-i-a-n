import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchJewelry,
  fetchAllJewelry,
  changePage,
} from "../../redux/jewelrySlice";
import { addToCart } from "../../redux/cartSlice";
import stylle from "./Jewelry.module.scss";
import { Link } from "react-router-dom";

export function Jewelry() {
  const dispatch = useDispatch();

  const {
    items: jewelry,
    totalItems,
    currentPage,
    itemsPerPage,
    status,
    allJewerly,
  } = useSelector((state) => state.jewelry);

  const [filteredItems, setFilteredItems] = useState([]);
  const query = useSelector((state) => state.search.query.toLowerCase());

  useEffect(() => {
    if (query) {
      dispatch(fetchAllJewelry()).unwrap();

      const filterItem = allJewerly?.filter((item) =>
        item.title.toLowerCase().includes(query)
      );

      setFilteredItems(filterItem);
    } else {
      setFilteredItems([]);
      dispatch(fetchJewelry());
    }
  }, [dispatch, currentPage, query]);

  console.log(allJewerly);

  const totalPages = totalItems > 0 ? Math.ceil(totalItems / itemsPerPage) : 1;
  console.log(jewelry);
  console.log(filteredItems);
  console.log(query);
  function renderPagination() {
    const btns = [];
    for (let i = 1; i <= totalPages; i++) {
      btns.push(
        <button
          key={i}
          onClick={() => dispatch(changePage(i))}
          className={`${stylle.paginationBtn} ${
            i === currentPage ? stylle.active : ""
          }`}
        >
          {i}
        </button>
      );
    }
    return btns;
  }

  return (
    <div className={stylle.jewelryContainer}>
      {status === "loading" ? (
        <p>Загрузка...</p>
      ) : status === "failed" ? (
        <p>Ошибка загрузки данных</p>
      ) : query && filteredItems.length === 0 ? (
        <h1>Ничего не найдено</h1>
      ) : filteredItems?.length ? (
        filteredItems?.map(({ id, title, img, prace }) => (
          <div key={id} className={stylle.item}>
            <Link to={`/product/${id}`}>
              <img src={img} alt={title} className={stylle.img} />
            </Link>
            <div>
              <p className={stylle.pTitle}>{title}</p>
              <p className={stylle.pPrace}>{`$${prace}`}</p>
            </div>
            <button
              onClick={() =>
                dispatch(addToCart({ id, title, img, prace, quantity: 1 }))
              }
              className={stylle.btnCart}
            >
              ADD TO CART
            </button>
          </div>
        ))
      ) : (
        jewelry?.map(({ id, title, img, prace }) => (
          <div key={id} className={stylle.item}>
            <Link to={`/product/${id}`}>
              <img src={img} alt={title} className={stylle.img} />
            </Link>
            <div>
              <p className={stylle.pTitle}>{title}</p>
              <p className={stylle.pPrace}>{`$${prace}`}</p>
            </div>
            <button
              onClick={() =>
                dispatch(addToCart({ id, title, img, prace, quantity: 1 }))
              }
              className={stylle.btnCart}
            >
              ADD TO CART
            </button>
          </div>
        ))
      )}
    {filteredItems.length === 1 || query && filteredItems.length === 0  ? (
  <div style={{ display: 'none' }} /> 
) : (
  <div className={stylle.pagination}>{renderPagination()}</div> 
)}
    </div>
  );
}
