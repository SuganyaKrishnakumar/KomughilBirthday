import React from 'react';
import './css/Main.css';
import bckg from '../Components/image/month1/img1.jpg';
import bckg2 from '../Components/image/month2/img1.jpg';

function Main(){
  
    return (
            <div>
  <div class="clipped-border" onClick={() => alert("Hi")}>
    <img src={bckg} id="clipped" alt='month1'/>
  </div>
  <div class="clipped-border">
    <img src={bckg2} id="clipped" alt='month2'/>
  </div>
  <div class="clipped-border">
    <img src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fimagejournal.org%2Fwp-content%2Fuploads%2Fbb-plugin%2Fcache%2F23466317216_b99485ba14_o-panorama.jpg&f=1" id="clipped" />
  </div>
    <div class="clipped-border">
    <img src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.lokeshdhakar.com%2Fprojects%2Flightbox2%2Fimages%2Fimage-4.jpg&f=1" id="clipped" />
  </div>
    <div class="clipped-border">
    <img src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" id="clipped" />
  </div>
  <div class = "shadow"></div>
</div>


    )
}
export default Main