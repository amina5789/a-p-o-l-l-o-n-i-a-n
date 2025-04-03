import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJewelry, changePage, setPage } from "../../redux/jewelrySlice";
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
  } = useSelector((state) => state.jewelry);

  const query = useSelector((state) => state.search.query.toLowerCase());
  const filteredItems = jewelry.filter((item) =>
    item.title.toLowerCase().includes(query)
  );

  const totalPages = totalItems > 0 ? Math.ceil(totalItems / itemsPerPage) : 1;

  useEffect(() => {
    dispatch(fetchJewelry());
  }, [dispatch, currentPage, query]);

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
      ) : (
        filteredItems.map(({ id, title, img, prace }) => (
          <div key={id} className={stylle.item}>
            <Link to={`/product/${id}`}>
              <img src={img} alt={title} className={stylle.img} />
            </Link>
            <div>
              <p className={stylle.pTitle}>{title}</p>
              <p className={stylle.pPrace}>{`$${prace}`}</p>
            </div>
            <button
              onClick={() => dispatch(addToCart({ id, title, img, prace, quantity: 1 }))}
              className={stylle.btnCart}
            >
              ADD TO CART
            </button>
          </div>
        ))
      )}

      <div className={stylle.pagination}>
        {/* <button onClick={() => dispatch(setPage(currentPage - 1))} >
                    Back
                </button> */}
        {renderPagination()}
        {/* <button onClick={() => dispatch(setPage(currentPage + 1))} >
                    Forward
                </button> */}
      </div>
    </div>
  );
}
