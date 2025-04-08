import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styl from './AutumnColection.module.scss';
import { ROUTER_PATHS } from '../../routes/routesPath';
import { Link } from "react-router-dom";


export function AutumnColection() {
  const navigate = useNavigate();

  const [jewelry, setJewelry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchJewelry = async () => {
      try {
        const response = await fetch('http://localhost:5000/jewelry');
        if (!response.ok) {
          throw new Error('Ошибка загрузки данных');
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

  const filteredJewelry = jewelry.filter((item) => item.categor === 1).slice(0, 5);
  const filteredEarrings = jewelry.filter((item) => item.categor === 2).slice(0, 5);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <section>
      <div className={styl.imgContainer}>
        <p className={styl.fall}>FALL RELEASE</p>
        <h3 className={styl.autmnh3}>the autumn equinox</h3>
        <p className={styl.dolorautum}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className={styl.oneContainerAutumn}>
        <div className={styl.textAutmn}>
          <h2 className={styl.h2Neklaces}>Necklaces</h2>
          <h2 className={styl.newAutumn}>With new beginnings come more pendants.</h2>
          <button className={styl.btnAutumn} onClick={() => navigate(ROUTER_PATHS.Necklaces)}>SHOP ALL NECKLACES</button>
        </div>

        <div className={styl.jewelryFlex}>
          {filteredJewelry.map((item) => (
            <div key={item.id} className={styl.jewelryItem}>
                 <Link to={`/product/${item.id}`}>
              <img src={item.img} alt={item.title} className={styl.jewelryImage} /> </Link>
              <p className={styl.jewelryTitle}>{item.title}</p>
              <p className={styl.jewelryPrice}>${item.prace}</p>
            </div>
          ))}
        </div>

        <div className={styl.textAutmn}>
          <h2 className={styl.h2Neklaces}>Earrings</h2>
          <h2 className={styl.newAutumn}>Adorn your ears with the new atmosphere.</h2>
          <button className={styl.btnAutumn} onClick={() => navigate(ROUTER_PATHS.Earrings)}>SHOP ALL EARRINGS</button>
        </div>

        <div className={styl.jewelryFlex}>
          {filteredEarrings.map((item) => (
            <div key={item.id} className={styl.jewelryItem}>
                 <Link to={`/product/${item.id}`}>
              <img src={item.img} alt={item.title} className={styl.jewelryImage} /></Link>
              <p className={styl.jewelryTitle}>{item.title}</p>
              <p className={styl.jewelryPrice}>${item.prace}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
