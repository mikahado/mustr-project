import React, {useState} from 'react'
import Creation from './Creation'

const Creations = ({creations}) => {

    const [showContent, setShowContent] = useState({
        title: " ",
        authors: " ",
        lines: [{
            line: " "
        }],
    })


  const creationsList = creations.map((c) => 
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