import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './styles.css'

const CardFlip = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }
        const handleClickFromBack = () => {
        handleClick();
    }
    return  (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className="FlipTile" onClick={handleClick}>
          This is the front of the card.
        </div>
        <div className="FlipTile" >
        <span className="currency-input-format">
          $
          <input
            className="currency-amount"
            type="number" 
            name="mortgage-duration" 
            step="5" 
            min="0" 
            value={0}
          />
          </span>
          <button onClick={handleClickFromBack}>Save</button>
        </div>
      </ReactCardFlip>
    )
}

export default CardFlip;