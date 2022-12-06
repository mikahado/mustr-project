import React, { useState } from 'react'
import Haiku from './Haiku'
import HaikuForm from './HaikuForm'
import Button from '@mui/material/Button';

const HaikuCreate = ({addHaiku, creationTitle, handleSubmit}) => {

  const [haiku, setHaiku] = useState([])

  const addNewLine = (line) => {
    const newLine = {...line}
    setHaiku([...haiku, newLine])
  }

  const haikuList = haiku.map(h => <Haiku key={h.id} haiku={h.line} />)
  const game = haikuList.slice(-1)
  console.log(game)

  return (
    <div>
      <br />
      <hr />
      <img src={require("./img/exquisiteHorseLogo.png")} alt="A Very Exquisite Horse" height="100" />
      <p><strong>How to play <em>The Exquisite Horse</em></strong></p>
      <p><em>Collaborators take turn writing a line, then passing the horse. <br /> They can ONLY see the line written before them. <br />All others are hidden!</em></p>
      <p>1. Write a line in the text box. Push Enter.</p>
      <p>2. Click SAVE LINE, then pass the horse to the next author.</p>
      <p>3. Repeat. </p>
     
      <hr />

        <br />
        <h2>{creationTitle}</h2>
        <h4>{game}</h4>
        <br/>
        
        <HaikuForm addNewLine={addNewLine}/>
        <br /> <br />
        <Button type="click" variant="outlined" onClick={() => addHaiku(haiku)}> Save Line </Button>
        <Button type="submit" variant="outlined" onClick={handleSubmit} value="Print" > Finish </Button>
        <br /> <br /> <br /> <br /> <br /> <br />

        {/* <input type="submit" onClick={handleSubmit} value="PRINT TO BACKEND" /> */}
        
    </div>
  )
}

export default HaikuCreate