import React, { useState } from 'react'
import TehPoem from './TehPoem'
import TehForm from './TehForm'
import Button from '@mui/material/Button';

  const TehMain = ({addTehPoem, creationTitle, handleSubmit}) => {

  const [tehPoem, setTehPoem] = useState([])

  const addNewLine = (line) => {
    const newLine = { ...line}
    setTehPoem([...tehPoem, newLine])
  }

  const tehGame = tehPoem.map(p => <TehPoem key={p.line} poem={p.line} />).slice(-1)

  const counter = tehPoem.length > 2 ? `(the ${tehPoem.length - 1} previous lines are hidden)` : null


  return (
    <div>
      <br />
      <hr />
      <img src={require("./img/exquisiteHorseLogo.png")} alt="A Very Exquisite Horse" height="100" />
      <p><strong>How to play <em>The Exquisite Horse</em></strong></p>
      <p>1. Write a line in the text box, then Push Enter.</p>
      <p>2. Click SEND to pass the horse to the next author.</p>
      <p>3. Repeat. </p>
     
      <hr />

        <br />
        <h1>{creationTitle}</h1>
        <em className="counter">{counter}</em>
        <h3>{tehGame}</h3>
        <br/>
        
        <TehForm addNewLine={addNewLine}/>
        <br /> <br />
        <Button type="click" variant="outlined" onClick={() => addTehPoem(tehPoem)}> Send </Button>
        <Button type="submit" variant="outlined" onClick={handleSubmit} value="Print" > Finish </Button>
        
        <br /> <br /> <br /> <br /> <br /> <br />
    </div>
  )
}

export default TehMain