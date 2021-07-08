import './memeCard.css';
import memeImg from './img.png'
const MemeCard = () => {
    return(
        <>
            <div className='app'>
                <div className="card">
                    <div className="card-pic">
                        <img src= {memeImg} alt="memeimg"/>
                    </div>

                    <div className="card-text">
                        <h1>React Card</h1>
                        <div className="card-description">
                            <p>meeeeeeem CARD</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MemeCard