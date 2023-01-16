import React, { useState } from 'react'
import Creation from './Creation'

const Creations = ({creations}) => {

    const [search, setSearch] = useState("")

    const [showContent, setShowContent] = useState({
        title: " ",
        authors: " ",
        lines: [{
            line: " "
        }],
    })

    const handleSearchChange = (e) => {
        setSearch(e.target.value)
    }

    const filterByTitle = creations.filter(c => c.title.toLowerCase().includes(search.toLowerCase()))

    const creationsList = filterByTitle.map((c) => 
    <Creation 
        key={c.title}
        creation={c}
        setShowContent={setShowContent}
        /> 
    ) 

    return (

        <div>
            <br />
            <h2>Past Creations</h2>
            <br />
            <hr />
            <input type="text" placeholder="search by title" onChange={handleSearchChange} />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col"># of Collaborators</th>
                        <th scope="col">Type</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {creationsList}
                </tbody>
            </table>
            <hr/><br/>
            
                <h2>{showContent.title}</h2>

                {showContent.lines.map((l, index) => <p key={index}> {l.line} </p>)}
        
            <br />
        </div>
    )
}

export default Creations