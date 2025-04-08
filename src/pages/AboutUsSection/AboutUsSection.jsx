import img from '../../assets/img/AboutUsSection.png'
import stylle from "./AboutUsSection.module.scss"


export function AboutUsSection(){
    return <section className={stylle.sectionContainer}>


<img src={img} alt="aboutUs"  className={stylle.imgSectinon}/>

    </section>
}