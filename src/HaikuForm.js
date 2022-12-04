import React, {useState} from 'react'
import HaikuCreate from './HaikuCreate'

const HaikuForm = ({addNewLine}) => {

    const [poem, setPoem] = useState({
        line: ""
    })

    const handleChange = (e) => {
        setPoem({
            line: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addNewLine(poem)
        setPoem({
            line: ""
        })
    }


  return (
    <form onSubmit={handleSubmit}>
        <br />
        <label>Write a new line: </label>
        <input type="text" onChange={handleChange} value={poem.line} placeholder="Enter your line"/>
        <input type="submit" />
    </form>
  )
}

export default HaikuForm
