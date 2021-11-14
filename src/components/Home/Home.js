import React from 'react'
import "./Home.css"
import vector from "../assests/Vector 1.png"
import btnVector from "../assests/Vector4.png"
import ThumbJacket from "../assests/Thumbnail Jaket.png"
import dot from "../assests/Dot.png"
import jacket1 from "../assests/Jaket 1.png"
import jacket2 from "../assests/Jaket 2.png"
import jacket3 from "../assests/Jaket 3.png"





function Home() {
    return (
        <>
        <div className="home">
<img src={vector}  alt="vector" className="VectorBG" />


        <div className="homeTitle">
            <h4>Outfit of the day</h4>
            <h2>All your </h2>
            <h1>styles are here</h1>
            <pre>
            Consectetur adipiscing elit. Cursus condimentum donec non dictum.
            <br/>Id et sed ac mauris, adipiscing tincidunt amet vel at. 
           <br/>Quis lobortis id. consectetur adipiscing elit. </pre>
          <button className="signUp-btn">buy now
          <img src={btnVector}  alt="vector" />
          </button>
          <div className="socialLinks">
          <a rel="noreferrer" href="https://www.linkedin.com/in/khaled-mohamed-398619182/" target="_blank"  >  <img alt="socialmediaIcon" src="https://img.icons8.com/color/30/000000/linkedin.png"/>     </a>  
             <a  rel="noreferrer" href="https://www.facebook.com/khaled.muhammad.35574" target="_blank" > <img alt="socialmediaIcon" src="https://img.icons8.com/color/30/000000/facebook-new.png"/></a>  
             <a rel="noreferrer" href="https://github.com/khalledmuhammad" target="_blank" > <img alt="socialmediaIcon" src="https://img.icons8.com/ios-glyphs/30/000000/github.png"/>    </a>   
             <a rel="noreferrer" href="https://www.instagram.com/khaaledmohamad/" target="_blank" > <img alt="socialmediaIcon" src="https://img.icons8.com/fluency/30/000000/instagram-new.png"/></a>  
             <a rel="noreferrer" href="https://twitter.com/KhaledM50926178" target="_blank" > <img alt="socialmediaIcon" src="https://img.icons8.com/color/30/000000/twitter--v1.png"/></a> 

          </div>
        </div>
        <div className="products">
        
                <img className="thumbJacket" src={ThumbJacket} alt="jacket" />
           
               

                <img  className="dot" src={dot} alt="dot" />
                <div className="product_content">
                <img  style={{ width:"250px"}} src={jacket1} alt="jacket" />
                <img  src={jacket2} alt="jacket" />
                <img  src={jacket3} alt="jacket" />


                </div>
           

        </div>
          

           

          
        </div>
        </>
       
    )
}

export default Home
