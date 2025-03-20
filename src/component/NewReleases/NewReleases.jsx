import { useState } from "react";
import { New } from "../../mockData/mockData";
import FallingStars from "./FallingStars"; 
import {ModalWindow} from "./../ModalWindow/ModalWindow"; // Импортируем модалку
import stylle from './NewReleases.module.scss';

export function NewReleases() {
  const [isModalOpen, setIsModalOpen] = useState(false); // По умолчанию модалка закрыта

  return (
    <section>
      <FallingStars /> 
    
      <div className={stylle.newContainer}>
        {New.map((item) => (
          <div key={item.id}> 
            <img 
              src={item.img} 
              alt={item.title} 
              className={stylle.imgNewReleases}  
              onClick={() => setIsModalOpen(true)} 
            />
            <p className={stylle.newReleasesp}>{item.title}</p>
          </div>
        ))}
      </div>

      <ModalWindow isOpen={isModalOpen} onClose={setIsModalOpen} />
    </section>
  );
}
