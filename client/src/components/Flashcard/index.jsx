import React, {useState} from 'react'
import './style.css'

function Flashcard({ question, answer, deleteFlashcard, id } ) {
    const [flipped, setFlipped] = useState(false)
    const [favourite, setFavourite] = useState(false)
    

    function handleClick(e) {
      e.preventDefault()
      if (e.target.className === 'deleteBtn' ) {
        return
      } else if (e.target.className === 'favouriteBtn') {
        return
      }
 
      setFlipped(!flipped)
    }

    function handleDelete(e) {
        e.preventDefault()
        deleteFlashcard(id)
    }

    function handleFavourite(e) {
      setFavourite(!favourite)
      
    }

  return (
    <div 
      className={`card ${flipped ? 'flipped' : ''}`} 
      onClick={handleClick}
    >
      <div className='front'>
        <h2>
          {question}
        </h2>
        <button aria-label="delete" className="deleteBtn" onClick={handleDelete}>X</button>
        {
          !favourite ? <button aria-label="favourite" className="favouriteBtn" onClick={handleFavourite}> &#9825;</button> 
            : <button aria-label="favourite" className="favouriteBtn" onClick={handleFavourite}>&hearts;</button>
        }
      </div>
      <div className='back'>
        <h2>
          {answer}
        </h2>
      </div>
      {/* &hearts; */}
    </div>
  )
}

export default Flashcard
