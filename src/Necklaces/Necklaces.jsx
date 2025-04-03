import { useState, useEffect } from "react";
import stylle from "./Necklaces.module.scss";
import { Link } from "react-router-dom";


export function Necklaces() {
  const categoryId = 1;
  const [jewelry, setJewelry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJewelry = async () => {
      try {
        const response = await fetch("http://localhost:5000/jewelry");
        if (!response.ok) {
          throw new Error("Ошибка загрузки украшений");
        }
        const data = await response.json();
        setJewelry(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJewelry();
  }, []);

  const filteredJewelry = jewelry.filter((item) => item.categor === categoryId);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <section className={stylle.giftsSection}>
      <div className={stylle.neck}>
        <h2 className={stylle.h2}>Necklaces</h2>
        <h2 className={stylle.amet}>Lorem ipsum dolor sit amet.</h2>
      </div>

      <div className={stylle.container}>
        {filteredJewelry.map(({ id, title, img, prace }) => (
          <div key={id}>
            <Link to={`/product/${id}`}>
            <img src={img} alt={title} className={stylle.img} />
            </Link>
            <div>
              <p className={stylle.title}>{title}</p>
              <p className={stylle.price}>{`$${prace}`}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
