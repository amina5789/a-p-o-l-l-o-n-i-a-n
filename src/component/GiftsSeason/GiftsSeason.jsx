import { useNavigate } from 'react-router-dom'
import stylle from './GiftsSeason.module.scss'
import { ROUTER_PATHS } from '../../routes/routesPath'

export function GiftsSeason(){
    const navigit = useNavigate()
    return <section>
        <div className={stylle.gifttContainer}>

<div className={stylle.leftContainer}>

<h6 className={stylle.season}>Gifts of the season</h6>

<div className={stylle.pGift}>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Cras semper auctor neque vitae tempus quam pellentesque. Elementum sagittis vitae et leo duis. 
    </p>
</div>


<button className={stylle.btnGift} onClick={()=>navigit(ROUTER_PATHS.gifts)}>SHOP GIFTS</button>
</div>


<div className={stylle.rightContainer}>

<div className={stylle.img}></div>
</div>


        </div>
    </section>
}