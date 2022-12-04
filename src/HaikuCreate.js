import React, { useState } from 'react'
import Haiku from './Haiku'
import HaikuForm from './HaikuForm'
import Button from '@mui/material/Button';

const HaikuCreate = ({handleSubmit, addHaiku, creationTitle}) => {

    const [haiku, setHaiku] = useState([])

    const addNewLine = (line) => {
      const newLine = {id: haiku.length+1, ...line}
      setHaiku([...haiku, newLine])
    }

    const haikuList = haiku.map(h => <Haiku key={h.id} haiku={h.line} />)

  return (
    <div>
      <br />
      <hr />
        <br />
        <h2>{creationTitle}</h2>
        <h4>{haikuList}</h4>
        <br/>
        
        <HaikuForm addNewLine={addNewLine}/>
        <br />
        <Button type="click" variant="outlined" onClick={() => addHaiku(haiku)}> Save </Button>
        
    </div>
  )
}

export default HaikuCreate