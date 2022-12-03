import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import ExquisiteHorse from './ExquisiteHorse';
import { CreateOutlined } from '@mui/icons-material';

const Create = () => {

    const [toggleCreate, setToggleCreate] = useState(false)

    const [creationForm, setCreationForm] = useState({
        title: "",
        type: "",
        authors: 0,
        text: {
            line: ""
        }
    })

    const handleChange = (e) => {
        setCreationForm({
        ...creationForm, [e.target.name]: e.target.value
        })
    }
    
    function handleSubmit(e) {
        e.preventDefault() 

        const newText = {
        title: creationForm.title,
        type: creationForm.type,
        authors: creationForm.authors,
        text: {
            line: creationForm.text.line,
            }
        }

        fetch("http://localhost:3000/creations", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(newText)
        })
        // .then((r) => r.json())
        // .then()

  }

  const handleGetStartedClick = () => {
    setToggleCreate(!toggleCreate)
  }

  return (

    <div>
      <form onSubmit={handleSubmit}>
        <hr/>
        <label>Working Title:</label>
          <br/>
            <input type="text" name="title" onChange={handleChange} value={creationForm.title} />
          <br/><br/>
        <label>Type: </label>
          <br />
            <select name="type" id="type" onChange={handleChange} value={creationForm.type}>
              <option></option>
              <option value="poetry">Exquisite Horse</option>
              <option value="film">Film: Coming Soon</option>
              <option value="commerical">Commerical: Coming Soon</option>
              <option value="novel">Novel: Coming Soon</option>
              <option value="poetry">Poem: Coming Soon</option>
            </select>
          <br/><br/>
        <label># of Collaborators:</label>
           <br/>
            <select name="authors" id="type" onChange={handleChange} value={creationForm.authors}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          <br/><br/> <br />

      </form> 

      <Button variant="outlined" onClick={handleGetStartedClick}>Get Started</Button>

    {toggleCreate ? <ExquisiteHorse title={creationForm.title} creationForm={creationForm.text.line} setCreationForm={setCreationForm} /> : toggleCreate}

    
    </div>
  )
}

export default Create
