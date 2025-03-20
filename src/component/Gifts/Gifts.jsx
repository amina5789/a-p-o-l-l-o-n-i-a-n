import { gift } from '../../mockData/mockData'
import style from './Gifts.module.scss'

export function Gifts(){
    return <section className={style.giftsSection}>

<div className={style.gif}>
    <h2 className={style.h2Gifts}>Gifts</h2>
    <h2 className={style.amet}>Lorem ipsum dolor sit amet.</h2>
</div>


<div className={style.giftsContainer} >
{gift.map(({ title, img, price }, index) => (
  <div key={index} >
  <img src={img} alt={title}  className={style.imgGifts}/>
  <div>
      <p className={style.titleGifts}>{title}</p>
      <p  className={style.priceGifts}>{`$${price}`}</p>
  </div>
</div>
))}
</div>



    </section>
}