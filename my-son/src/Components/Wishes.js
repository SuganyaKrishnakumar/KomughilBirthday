import React from 'react';
import './css/Wishes.scss';
import bckg from "./image/month4/img1.jpg";
import history from '../history';
function Wishes(){
    return (
        <div className="wishes">

            <div ><p>WISH YOU MAY MORE HAPPY RETURN OF THE DAY.</p>
                <p>MAY THIS YEAR WILL GIVE YOU ALL SUCCESS IN YOUR LIFE.</p></div>

                <div className='wish-next'>
                    <strong>From Your Mom</strong>
                    <p>You turns one and its very memobable day in my life. You need to get all the good things
                        in you life. Always be happy and enjoy your life. Don't get scared of anyone or anythings. 
                        We are there to protect you. There are many things to share with you. Once you grow and see on 
                        this you will come to know about all those things. After your birth our life gone to next level. 
                        Wish you happy birthday my dear kutty thangam.
                    </p>
                </div>

                <div className='wish-next'>
                    <strong>From Your Dad</strong>
                    <p>You turns one and its very memobable day in my life. You need to get all the good things
                        in you life. 
                    </p>
                </div>


                <button onClick={()=>history.push('/Month')} className="btn-1"> <span>Click Me</span></button>

            
        </div>
    )
}
export default Wishes;