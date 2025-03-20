import stylle from './AboutUs.module.scss'
import img from '../../assets/img/ABOUT US.png'
import { useNavigate } from 'react-router-dom'
import { ROUTER_PATHS } from '../../routes/routesPath'


export function AboutUs(){
    const navigate = useNavigate()

    return  <section className={stylle.aboutUsContainer}>
    
    <div className={stylle.leftContainer}>
<img src={img} alt="img"  className={stylle.imgAbout}/>
    </div>
    

<div className={stylle.rightContainer}> 

<h2 className={stylle.made}>What were we made for?</h2>

<div className={stylle.pContainer}>

    <p className={stylle.lorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Cras semper auctor neque vitae tempus quam pellentesque. Elementum sagittis vitae et leo duis. </p>
<p className={stylle.lorem}>Elementum sagittis vitae et leo duis. Libero nunc consequat interdum varius. Habitant morbi tristique senectus et netus et malesuada fames ac. </p>
</div>

<button className={stylle.btn}  onClick={()=>navigate(ROUTER_PATHS.AboutUsSection)}>ABOUT US</button>

</div>
    
    
    </section>  
    
}