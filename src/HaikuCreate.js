import React, { useState } from 'react'
import Haiku from './Haiku'
import HaikuForm from './HaikuForm'

const HaikuCreate = ({setCreationForm, creationForm}) => {

    const [haiku, setHaiku] = useState([{id: 1, line: "low winter sun"},{id: 2, line: "in the raspberry leaves"}, {id: 3, line: "red and green"}])

    //  const [haiku, setHaiku] = useState([])
    
    const deleteHaiku = () => {
      const noHaiku = haiku.filter(h => h != h)
      setHaiku(noHaiku)
    }

    const addNewLine = (line) => {
        const newLine = {id: haiku.length+1, ...line}
      setHaiku([...haiku, newLine])
    }
    
    const haikuList = haiku.map(h => <Haiku key={h.id} haiku={h.line} delete={deleteHaiku} />)
    
    const handleClick = () => {
      setCreationForm(...creationForm, {line: haiku})
    }
    
  return (
    <div>

        <br />
        <strong>A Haiku To Do</strong>
        <br /><br />
        {haikuList}
        <br/>
        
        <HaikuForm addNewLine={addNewLine}/>
        <br />
        <button onClick={handleClick}>Finish</button>
        
    </div>
  )
}

export default HaikuCreate