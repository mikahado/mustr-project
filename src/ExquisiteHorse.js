import React, {useState} from 'react'
import Create from './Create'
import Button from '@mui/material/Button';

const ExquisiteHorse = ({title, handleChange, submitForm}) => {

  const [text, setText] = useState("")


  const handleNewLineSubmit = (e) => {
      e.preventDefault()
      setText(e.target.value)
  }
  
  const handleFinishClick = () => {
    submitForm(text)
  }

  return (

    <div>
      <div>
        <h1>The Exquisite Horse</h1>
        <img src={require("./img/exquisiteHorseLogo.png")} alt="A Very Exquisite Horse" height="150" />
        <hr/>
      </div>

        <br/><br/>

        <div >
            A Project for 3 or more collaborators.  
            <br />
            Write one line of The Exquisite Horse (45 char max), then click DONE. 
            <br />
            Each collaborator will only be able to see the line written before them. 
            <br/><br/>
            <hr />
        </div>
      
        <br />

        <h2>{title}</h2>
        <h3>{text}</h3>
        
        <br/><br/>

        <form onSubmit={handleNewLineSubmit} >
          <input type="text" name="poem" onChange={handleChange} value={text} />
          <br/><br/>
          <Button type="submit" variant="outlined">New Line</Button>
        </form>

        <Button type="click" onClick={handleFinishClick} variant="fill">Finish</Button>
          
        <br/><br/><br/><br/>
    </div>
  )
}

export default ExquisiteHorse