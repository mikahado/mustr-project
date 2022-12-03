import React, {useState} from 'react'
import Create from './Create'
import Button from '@mui/material/Button';

const ExquisiteHorse = ({creationTitle, creationForm, handleChange, submitForm}) => {

  const [text, setText] = useState("")

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

        <h2>{creationTitle}</h2>
        <h3>{text}</h3>
        
        <br/><br/>

        <form onSubmit={submitForm}>
          <input type="text" name="text" onChange={handleChange} value={creationForm.text} />
          <br/><br/>
          <button type="submit" >NewLine</button>
        </form>

        <Button type="click" variant="fill">Finish</Button>
          
        <br/><br/><br/><br/>
    </div>
  )
}

export default ExquisiteHorse