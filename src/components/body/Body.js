import './Body.css';
import image from '../../assets/images/image-hero-desktop.png';
import firstImage from '../../assets/images/client-audiophile.svg';
import secondImage from '../../assets/images/client-databiz.svg';
import thirdImage from '../../assets/images/client-maker.svg';
import fourthImage from '../../assets/images/client-meet.svg';
function Body() {
return (
    <div class='container' id="outer-container">
  
        <div class='image'>
    <img src={image} class='side-image' />
    </div>
        <div class='texts'>
            <h1>
                <span>Make</span> 
                 <br /> 
                 <span>
                 remote
                 </span>
                 <spa> </spa>
                 <span>
                 work
                 </span>
                  </h1>
                
        

            <p>Get your team in sync, no matter your location.<br /> Streamline Processes, create team rituals, and  <br /> watch productivity soar. </p>
            <button class="bordered-button">Learn More</button>

            <div class='image-list'>
                <div class='extra'>
                <img src={secondImage}  />
                </div>
            <div class='text-image'>
            <img src={firstImage}  /> 
            </div>
            <div class='extra'>
            <img src={fourthImage} /> 
            </div>
            <div class='text-image'>
            <img src={thirdImage}  /> 
            </div>
                    

            </div>
        </div>


    
     
    </div>
)
}

export default Body;