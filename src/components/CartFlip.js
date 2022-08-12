import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';


const CartFlip = () => {
    const [isFlipped, setisFlipped] = useState(false)

    const handleClick = () => {
        setisFlipped(!isFlipped)
    }
    return (
        <>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <div>
                    <button onClick={handleClick} className="login-button" type="submit">
                        Submit
                    </button>
                </div>
                <div>
                    <button onClick={handleClick} className="login-btn" type="submit">Submit</button>
                </div>
            </ReactCardFlip>
        </>
    )
}

export default CartFlip