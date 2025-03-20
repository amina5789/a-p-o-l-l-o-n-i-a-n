import styll from './Footer.module.scss';


import icon1 from '../../assets/icon/Instagram.svg';
import icon2 from '../../assets/icon/Twiter.svg';
import icon3 from '../../assets/icon/FaceBOOK.svg';
import icon4 from '../../assets/icon/youtube.svg';
import icon5 from '../../assets/icon/IN.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTER_PATHS } from '../../routes/routesPath';
export function Footer(){

    const navigit = useNavigate()

const [email,setEmail]=useState('')
const emailPattern= /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
 

const handleEmail=(e)=>{
    setEmail(e.target.value)
}

const Click =()=>{
    if(!emailPattern.test(email))alert('Enter your email address...')
    else{ alert('Thank you for subscribing')}
}




    return <footer>

<div className={styll.footerContainer}>

<div className={styll.leftContainer}> 
<ul>
    <li onClick={()=>navigit(ROUTER_PATHS.locations)}>CUSTOMER SERVICES</li>
    <li>Contact Us</li>
    <li>Track your Order</li>
    <li>Shipping & Returns</li>
</ul>
<ul>
    <li onClick={()=>navigit(ROUTER_PATHS.AboutUsSection)}>ABOUT US</li>
    <li>Origins</li>
    <li>Our Purpose</li>
    <li>Careers</li>
    <li>Sustainability</li>
    <li>Giving Back</li>
</ul>
<ul>
    <li onClick={()=>navigit(ROUTER_PATHS.main)}>MATERIAL CARE</li>
    <li>Jewelry Repair</li>
    <li>Ring Sizing</li>
    <li>Metal Allergy Resources</li>
    <li>Styling Tips</li>
</ul>

<ul>
    <li onClick={()=>navigit(ROUTER_PATHS.locations)}>MAIN LOCATIONS</li>
    <li onClick={()=>navigit(ROUTER_PATHS.locations)}>New York, NY</li>
</ul>
</div>





<div className={styll.rightContainer}>
<h6>You can be one step ahead.</h6>

<h6>Sign up to hear about our updates on the dot.</h6>
<div>
<input type="email"  placeholder='Your email address' value={email} onChange={handleEmail}   required/>
<button onClick={Click} >SIGN UP</button>
</div>

<dir className={styll.iconContainer}>

<a href="https://www.instagram.com/"><img src={icon1} alt="icon1" />
</a>
<a href="https://x.com/"><img src={icon2} alt="icon2" />
</a>
<a href="https://www.facebook.com/?locale=ru_RU"><img src={icon3} alt="icon3" />
</a>
<a href="https://www.youtube.com/?app=desktop&hl=ru"><img src={icon4} alt="icon4" />
</a>
<a href="https://ru.linkedin.com/"><img src={icon5} alt="icon5" />
</a>
</dir>


</div>



</div>







    </footer>
}