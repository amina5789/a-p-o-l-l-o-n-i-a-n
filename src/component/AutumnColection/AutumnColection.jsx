import { useNavigate } from 'react-router-dom';
import { jewelry } from '../../mockData/mockData';
import styl from './AutumnColection.module.scss';
import { ROUTER_PATHS } from '../../routes/routesPath';

export function AutumnColection() {

    const navigit = useNavigate()

    const filteredJewelry = jewelry.filter((item) => item.categor === 1).slice(0, 5);
    const filteredEarrings = jewelry.filter((item) => item.categor === 2).slice(0, 5);

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
                    <button className={styl.btnAutumn} onClick={()=>navigit(ROUTER_PATHS.Necklaces)}>SHOP ALL NECKLACES</button>
                </div>

                <div className={styl.jewelryFlex}>
                    {filteredJewelry.map((item) => (
                        <div key={item.id} className={styl.jewelryItem}>
                            <img src={item.img} alt={item.title} className={styl.jewelryImage} />
                            <p className={styl.jewelryTitle}>{item.title}</p>
                            <p className={styl.jewelryPrice}>${item.prace}</p>
                           
                        </div>
                    ))}
                </div>
                <div className={styl.textAutmn}>
                    <h2 className={styl.h2Neklaces}>Earrings</h2>
                    <h2 className={styl.newAutumn}>Adorn your ears with the new atmosphere.</h2>
                    <button className={styl.btnAutumn} onClick={()=>navigit(ROUTER_PATHS.Earrings)}>SHOP ALL EARRINGS</button>
                </div>
                <div className={styl.jewelryFlex}>
                    {filteredEarrings.map((item) => (
                        <div key={item.id} className={styl.jewelryItem}>
                            <img src={item.img} alt={item.title} className={styl.jewelryImage} />
                            <p className={styl.jewelryTitle}>{item.title}</p>
                            <p className={styl.jewelryPrice}>${item.prace}</p>
                           
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
