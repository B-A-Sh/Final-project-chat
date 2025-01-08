/* eslint-disable react/prop-types */
import React from 'react'
const GameInventationWin = (props) => {
  return (
    <div className='gameInventationWin'>
      {/* <div className='gameInventationWin-header'></div> */}
        <div className='gameButton'>
            <img src="../src/assets/memoryGameAvatar.png" alt="memoryGame" />
        </div>
        <div className='gameButton'>
            <img onClick={props.method} src="../src/assets/memoryGameAvatar.png" alt="memoryGame" />
        </div>
        

    </div>
  )
}

export default GameInventationWin