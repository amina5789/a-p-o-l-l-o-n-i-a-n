
import { useNavigate } from 'react-router-dom';
import stylle from './GoldenHour.module.scss';
import { ROUTER_PATHS } from '../../routes/routesPath';


export function GoldenHour(){

    const nacigit = useNavigate()



    return <section className={stylle.section}> 
<div className={stylle.goldenHourContainer}>

<div className={stylle.leftContainer}>
<div className={stylle.goldenImg}></div>
</div>


<div className={stylle.rightContainer}>

    <h6 className={stylle.data}>ARTICLE  •  OCTOBER  2022</h6>

<h6 className={stylle.h6}>During the golden hour. </h6>

<div className={stylle.pContainer}>

<p  className={stylle.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Cras semper auctor neque vitae tempus quam pellentesque. Elementum sagittis vitae et leo duis. </p>
<br />
<br />
<p className={stylle.p}>Elementum sagittis vitae et leo duis. Libero nunc consequat interdum varius. Habitant morbi tristique senectus et netus et malesuada fames ac. </p>
</div>

<button className={stylle.btn}  onClick={()=>nacigit(ROUTER_PATHS.readMore)}>READ MORE</button>
</div>



</div>
    </section>
}