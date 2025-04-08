/* eslint-disable jsx-a11y/heading-has-content */
import cssStyle from './ReadMore.module.scss'
import img from '../../assets/img/readMore.png'
import img2 from '../../assets/img/readMore2.png'

export function ReadMore(){
    return <section className={cssStyle.readMoreContainer}>


<div className={cssStyle.oneContainer}>

<div className={cssStyle.container}>

<p className={cssStyle.date}>ARTICLE  •  OCTOBER  2022</p>
<h3 className={cssStyle.golden}>During the golden hour.</h3>
<div className={cssStyle.pContainer}>
    <p className={cssStyle.pOne}>On this conceptual jewelry website, this is an article discussing whom this brand is currently collaborating with. I chose to introduce this element as part of both the aesthetic makeup and the “official” quality of Apollonian, whose extras are inspired by Tiffany & Co.’s Stories and Cartier’s Discover sections.</p>
    <p className={cssStyle.ptwo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin sed libero enim sed. Dignissim enim sit amet venenatis urna cursus. Odio aenean sed adipiscing diam donec. Ut consequat semper viverra nam libero justo laoreet sit amet. Est lorem ipsum dolor sit amet consectetur adipiscing. Tempor orci dapibus ultrices in iaculis nunc. Tristique sollicitudin nibh sit amet commodo nulla.</p>
    <p className={cssStyle.ptwo}>At ultrices mi tempus imperdiet nulla malesuada. Varius duis at consectetur lorem donec. Cursus euismod quis viverra nibh cras pulvinar. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Nibh tortor id aliquet lectus proin nibh. Aenean sed adipiscing diam donec adipiscing. Eros in cursus turpis massa tincidunt dui. Sed odio morbi quis commodo. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Tempor id eu nisl nunc mi ipsum faucibus vitae. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam.</p>
</div> 
</div>
<img src={img} alt="img"  className={cssStyle.imgReadMore}/>
</div>


<div className={cssStyle.twoContainer}>

<div className={cssStyle.twoSection}>
    <p className={cssStyle.oneP} >“This is a quote by the collaborator discussed in this article.”</p>
    <p className={cssStyle.twoP}>—  John Fern on his plans for the brand</p>
</div>

</div>


<div className={cssStyle.threeContainer}>
    <img src={img2} alt="img2"  className={cssStyle.img2}/>

    <div className={cssStyle.pName}>
        <p className={cssStyle.pCursor}>Cursus euismod quis viverra nibh. Feugiat in ante metus dictum at tempor commodo. Purus non enim praesent elementum facilisis leo. Ipsum dolor sit amet consectetur adipiscing. Duis at consectetur lorem donec massa sapien. Quam vulputate dignissim suspendisse in est ante in nibh mauris. Sit amet est placerat in egestas erat imperdiet. Maecenas volutpat blandit aliquam etiam erat.</p>
    <p className={cssStyle.pCursor}>Morbi tempus iaculis urna id. Quam elementum pulvinar etiam non quam lacus. Lacus vestibulum sed arcu non odio euismod.</p>
    
    </div>
</div>


<div className={cssStyle.end}>

<div className={cssStyle.end2}></div>

</div>


    </section>
}