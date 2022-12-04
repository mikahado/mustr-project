import React, {useState} from 'react'
import Create from './Create'
import Button from '@mui/material/Button';

const ExquisiteHorse = ({creationTitle, creationForm, handleChange, submitForm, creationLine}) => {


  return (

    <div>
      <hr />
      <div>
        <h1>The Exquisite Horse</h1>
        <img src={require("./img/exquisiteHorseLogo.png")} alt="A Very Exquisite Horse" height="150" />
      </div>

        <br/>

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
        <h3>{creationLine}</h3>
        
        <br/><br/>

        <form onSubmit={submitForm}>
          <input type="text" name="line" maxLength="55" onChange={handleChange} value={creationForm.line} />
          <br/><br/>
          <Button type="submit" variant="fill">Next Line</Button>
        </form>
        
        <br/><br/><br/><br/>
    </div>
  )
}

export default ExquisiteHorse