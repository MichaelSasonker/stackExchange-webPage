import React from 'react'
import { Button } from '../Button/Button';
// import { GiMusicalScore } from 'react-icons/gi';


function HomePage() {
    return (
        <div className='home-container'>
            {/* <video src=
            "week--project\public\music\song.mp3"
            autoPlay loop muted /> */}
            <h2 className='home-title1'>STACK EXCHANGE</h2>
            <p>The important thing is not to stop quesioning... </p>
            <div className='home-btns'>
            <Button
             className='btns'
             buttonStyle='btn--outline'
             buttonSize='btn--large'
             >
              START ASK  
            </Button>
            {/* <Button
             className='btns'
             buttonStyle='btn--primary'
             buttonSize='btn--large'
             >
                
            </Button> */}
            </div>
        </div>
    )
}

export default HomePage
