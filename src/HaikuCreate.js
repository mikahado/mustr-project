import React, { useState } from 'react'
import Haiku from './Haiku'
import HaikuForm from './HaikuForm'
import Button from '@mui/material/Button';

const HaikuCreate = ({addHaiku, creationTitle, handleSubmit}) => {

  const [haiku, setHaiku] = useState([])

  const addNewLine = (line) => {
    const newLine = {id: haiku.length+1, ...line}
    setHaiku([...haiku, newLine])
  }

  const haikuList = haiku.map(h => <Haiku key={h.id} haiku={h.line} />)
  const game = haikuList.slice(-1)
  console.log(game)

  return (
    <div>
      <br />
      <hr />
        <br />
        <h2>{creationTitle}</h2>
        <h4>{game}</h4>
        <br/>
        
        <HaikuForm addNewLine={addNewLine}/>
        <br />
        <Button type="click" variant="outlined" onClick={() => addHaiku(haiku)}> Save </Button>
        <input type="submit" onClick={handleSubmit} value="PRINT TO BACKEND" />
        
    </div>
  )
}

export default HaikuCreate