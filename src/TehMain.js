import React, { useState } from 'react'
import TehPoem from './TehPoem'
import TehForm from './TehForm'
import Button from '@mui/material/Button';

const TehMain = ({addTehPoem, creationTitle, handleSubmit}) => {

  const [tehPoem, setTehPoem] = useState([])

  const addNewLine = (line) => {
    const newLine = {...line}
    setTehPoem([...tehPoem, newLine])
  }

  const poemList = tehPoem.map(h => <TehPoem key={h.title} poem={h.line} />)
  const game = poemList.slice(-1)
  console.log(game)

  return (
    <div>
      <br />
      <hr />
      <img src={require("./img/exquisiteHorseLogo.png")} alt="A Very Exquisite Horse" height="100" />
      <p><strong>How to play <em>The Exquisite Horse</em></strong></p>
      <p>1. Write a line in the text box. Push Enter.</p>
      <p>2. Click SAVE LINE, then pass the horse to the next author.</p>
      <p>3. Repeat. </p>
     
      <hr />

        <br />
        <h2>{creationTitle}</h2>
        <h4>{game}</h4>
        <br/>
        
        <TehForm addNewLine={addNewLine}/>
        <br /> <br />
        <Button type="click" variant="outlined" onClick={() => addTehPoem(tehPoem)}> Save Line </Button>
        <Button type="submit" variant="outlined" onClick={handleSubmit} value="Print" > Finish </Button>
        <br /> <br /> <br /> <br /> <br /> <br />
        
    </div>
  )
}

export default TehMain