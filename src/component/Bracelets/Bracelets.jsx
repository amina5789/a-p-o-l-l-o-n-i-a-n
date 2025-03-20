import {  jewelry } from './../../mockData/mockData'
import stylle from './Bracelets.module.scss'


export function Bracelets(){
    const categoryId = 3;
const filteredJewelry = jewelry.filter(item => item.categor === categoryId);
    return <section className={stylle.braceletsSection}>

    <div className={stylle.neck}>
        <h2 className={stylle.h2}>Bracelets</h2>
        <h2 className={stylle.amet}>Lorem ipsum dolor sit amet.</h2>
    </div>
    
    
    <div className={stylle.container} >
    {filteredJewelry.map(({ title, img, prace }, index) => (
      <div key={index} >
      <img src={img} alt={title}  className={stylle.img}/>
      <div>
          <p className={stylle.title}>{title}</p>
          <p  className={stylle.prace}>{`$${prace}`}</p>
      </div>
    </div>
    ))}
    </div>
        </section>
}

