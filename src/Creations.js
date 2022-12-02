import React, {useState, useEffect} from 'react'
import Creation from './Creation'
// import CreationForm from './CreationForm'

const Creations = () => {

    const [creations, setCreations] = useState([])
    const [showText, setShowText] = useState("")

    useEffect(() => {
        fetch("http://localhost:3000/creations")
        .then(resp => resp.json())
        .then(data => {
            setCreations(data)
        })
    }, []) 

    const creationsList = creations.map((c) => 
    
        <Creation 
            key={c.id}
            creation={c}
            setShowText={setShowText}
            />
        )


    return (
        <div>
            <h2>Past Creations</h2>
            <hr />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col"># of Authors</th>
                        <th scope="col">Type</th>
                        <th scope="col">Read</th>
                    </tr>
                </thead>
                <tbody>
                    {creationsList}
                </tbody>
            </table>
            <hr/><br/>
            {showText}
        </div>
    )

}

export default Creations