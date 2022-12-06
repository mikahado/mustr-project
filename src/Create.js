import React, { useState } from 'react'
import Button from '@mui/material/Button';
import HaikuCreate from './HaikuCreate'

const Create = () => {

  const [creationForm, setCreationForm] = useState({
    title: "",
    type: "",
    authors: 0,
    text: "",
  })

  const [toggleCreate, setToggleCreate] = useState(false)

  const handleGetStartedClick = () => {
    setToggleCreate(!toggleCreate)
  }

  const handleChange = (e) => {
    setCreationForm({
    ...creationForm, [e.target.name]: e.target.value
    })
  }

  const addHaiku = (line) => {
    setCreationForm({
      ...creationForm, line
    })
  }
    
  function handleSubmit(e) {
    e.preventDefault() 

    const newText = {
      title: creationForm.title,
      type: creationForm.type,
      authors: creationForm.authors,
      lines: creationForm.line
    }

    fetch("http://localhost:3000/creations", {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(newText)
    })
      .then(resp => resp.json())
      .then(data => console.log("persisted to backend:", data))
  }

 
  return (

    <div>
      <form id="my-submit" onSubmit={handleSubmit}>
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
          <br/><br/><br />

      </form> 

      <Button variant="outlined" onClick={handleGetStartedClick}>Get Started</Button>
          <br /><br />

      {toggleCreate ? 
          <HaikuCreate 
            creationTitle={creationForm.title} 
            addHaiku={addHaiku} 
            handleSubmit={handleSubmit}/> 
        : toggleCreate}

    </div>
  )
}

export default Create
