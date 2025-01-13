/* eslint-disable react/prop-types */
const GameInvitationWin = (props) => {
  return (
    <div className='gameInventationWin'>
      {/* <div className='gameInventationWin-header'></div> */}
        <div className='gameButton'>
            <img id="RPS" onClick={props.method} src="../src/assets/chat_images/gamesLogoes/RPS-game.png" alt="memoryGame" />
        </div>
        <div className='gameButton'>
            <img id="memory" onClick={props.method} src="../src/assets/chat_images/gamesLogoes/memoryGameAvatar.png" alt="memoryGame" />
        </div>
        

    </div>
  )
}

export default GameInvitationWin