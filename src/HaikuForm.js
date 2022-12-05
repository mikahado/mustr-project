import React, {useState} from 'react'

const HaikuForm = ({addNewLine}) => {

    const [nextLine, setNextLine] = useState({
        line: ""
    })

    const handleChange = (e) => {
        setNextLine({
            line: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addNewLine(nextLine)
        setNextLine({
            line: ""
        })
    }

  return (
    <form onSubmit={handleSubmit}>

        <br />
        <input type="text" name="line" onChange={handleChange} value={nextLine.line} placeholder="Press return"/>
        <br /><br />
        {/* <input type="submit" /> */}
       
    </form>
  )
}

export default HaikuForm
