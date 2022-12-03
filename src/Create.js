import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import ExquisiteHorse from './ExquisiteHorse';

const Create = () => {

    const [toggleCreate, setToggleCreate] = useState(false)

    const [creationForm, setCreationForm] = useState({
        title: "",
        type: "",
        authors: 0,
        text: "",
        poem: {
            line: ""
          },
    })

    console.log(creationForm)

    const handleChange = (e) => {
        setCreationForm({
        ...creationForm, [e.target.name]: e.target.value
        })
    }

    console.log(creationForm)

    const addNewLine = (newLine) => {
        setCreationForm({
          ...creationForm,
            poem: [
              newLine
            ]
        });
      }
    
    function handleSubmit(e) {
        e.preventDefault() 

        const newText = {
          title: creationForm.title,
          type: creationForm.type,
          authors: creationForm.authors,
          text: creationForm.text,
          poem: {
            line: creationForm.poem.line
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

    {toggleCreate ? 
      <ExquisiteHorse handleChange={handleChange} submitForm={handleSubmit} creationForm={creationForm} creationTitle={creationForm.title} creationText={creationForm.poem.line} handleAddLine={addNewLine} /> 
        : toggleCreate}

    </div>
  )
}

export default Create
