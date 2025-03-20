import { useState } from 'react';
import { jewelry } from '../../mockData/mockData';
import stylle from './Jewelry.module.scss';

export function Jewelry() {
    const itemsPerPage = 12; 
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(jewelry.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = jewelry.slice(startIndex, endIndex);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className={stylle.jewelryContainer}>
            {currentItems.map(({ title, img, prace }, index) => (
                <div key={index} className={stylle.item}>
                    <img src={img} alt={title} className={stylle.img} />
                    <div>
                        <p className={stylle.pTitle}>{title}</p>
                        <p className={stylle.pPrace}>{`$${prace}`}</p>
                    </div>
                </div>
            ))}

            <div className={stylle.pagination}>
                <button onClick={prevPage} disabled={currentPage === 1}>
                    Назад
                </button>
                <span>{`${currentPage} / ${totalPages}`}</span>
                <button onClick={nextPage} disabled={currentPage === totalPages}>
                    Вперед
                </button>
            </div>
        </div>
    );
}
