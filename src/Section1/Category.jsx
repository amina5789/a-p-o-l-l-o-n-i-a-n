import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import stylll from "./Category.module.scss";

export function Category() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:5000/categories");
        if (!response.ok) {
          throw new Error("Ошибка загрузки категорий");
        }
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <section className={stylll.categoryContainer}>
      <div className={stylll.h2Container}>
        <h2 className={stylll.category}>Shop by category</h2>
        <h2 className={stylll.offer}>Indulge in what we offer.</h2>
      </div>

      <div className={stylll.categoryDiv}>
        {categories.map((category) => (
          <div key={category.id} className={stylll.categoryCard}>
            <img
              src={category.img}
              alt={category.title}
              className={stylll.imgCategory}
              onClick={() => navigate(category.path)}
            />
            <p className={stylll.title}>{category.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
