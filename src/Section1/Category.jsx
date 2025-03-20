import { useNavigate } from "react-router-dom";
import { categories } from "../mockData/mockData";
import stylll from "./Category.module.scss";

export function Category() {
  const navigate = useNavigate();

  return (
    <section className={stylll.categoryContainer}>
      <div className={stylll.h2Container}>
        <h2 className={stylll.category}>Shop by category</h2>
        <h2 className={stylll.offer}>Indulge in what we offer.</h2>
      </div>

      <div className={stylll.categoryDiv}>
        {categories.map((category) => (
          <div key={category.id} className="category-card">
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
