import { useNavigate } from 'react-router-dom';
import styles from './Hero.module.scss';
import { ROUTER_PATHS } from '../../routes/routesPath';

export function Hero(){
  const navigit = useNavigate()
    return(
        <div className={styles.heroContainer}>
            <h5 className={styles.autumn}>The autumn equinox</h5>
            <div className={styles.pConteiner}>
            {/* <p className={styles.p}>Fall has arrived.</p> */}
            <p className={styles.p}>Shop for our new releases starting today.</p>
            </div>
          
          <button className={styles.btn} onClick={()=>navigit(ROUTER_PATHS.autumnColection)}>SHOP NOW </button>
            </div>
    )
}