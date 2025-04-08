import { useState, useEffect } from "react";
import FallingStars from "./FallingStars"; 
import { ModalWindow } from "../../component/ModalWindow/ModalWindow";
import style from "./NewReleases.module.scss";

export function NewReleases() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newItems, setNewItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewReleases = async () => {
      try {
        const response = await fetch("http://localhost:5000/new");
        if (!response.ok) {
          throw new Error("Ошибка загрузки товаров");
        }
        const data = await response.json();
        setNewItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNewReleases();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <section>
      <FallingStars />

      <div className={style.newContainer}>
        {newItems.map((item) => (
          <div key={item.id}>
            <img
              src={item.img}
              alt={item.title}
              className={style.imgNewReleases}
              onClick={() => setIsModalOpen(true)}
            />
            <p className={style.newReleasesp}>{item.title}</p>
          </div>
        ))}
      </div>

      <ModalWindow isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
