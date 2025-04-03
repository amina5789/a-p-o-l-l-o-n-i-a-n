import styles from './Heder.module.scss';
import Icon1 from '../../assets/icon/locations.svg'
import Icon2 from '../../assets/icon/like.svg'
import Icon3 from '../../assets/icon/Cart.svg'
import Icon4 from '../../assets/icon/Profile.svg'
import { Black } from '../Black/Black';
import { useNavigate } from 'react-router-dom';
import { ROUTER_PATHS } from '../../routes/routesPath';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../../redux/searchSlice';
export function Heder(){
  const navigit = useNavigate()

  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);

  const handleSearchChange = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };








    return (


      <div>
      <Black/>
      <header className={styles.hederContainer}>
<div  className={styles.oneContainer}>
<img src={Icon1} alt="iconlocation"  className={styles.icon} onClick={()=>navigit(ROUTER_PATHS.locations)}/>
<h4 onClick={()=>navigit(ROUTER_PATHS.jewelry)}>JEWELRY </h4>
<h4 onClick={()=>navigit(ROUTER_PATHS.newReleases)}>NEW RELEASES</h4>
<h4 onClick={()=>navigit(ROUTER_PATHS.gift)}>GIFTS</h4>

</div>


<div className={styles.twoContainer}>
  <h2 onClick={()=>navigit(ROUTER_PATHS.main)} className={styles.h2}> A p o l l o n i a n</h2>
</div>

<div className={styles.threeContainer}>

<input type="text" placeholder='Search'    value={query}
      onChange={handleSearchChange}    />

<div className={styles.icons}>
  <img src={Icon2} alt="icon1"  className={styles.icon}   onClick={()=>navigit(ROUTER_PATHS.Like)}/>
  <img src={Icon3} alt="icon2"  className={styles.icon} onClick={()=>navigit(ROUTER_PATHS.Cart)}/>
  <img src={Icon4} alt="icon3" className={styles.icon}  onClick={()=>navigit(ROUTER_PATHS.Profile)}/>
</div>

</div>




      </header>
      </div>
    );
}