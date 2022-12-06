import React, {useState, useEffect} from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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

            <div>
                <h2>{showContent.title}</h2>
                <h4>{`${showContent.authors} Collaborators`}</h4>
                {showContent.lines.map(l => <p> {l.line} </p>)}
            </div>

            {/* <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {showContent.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {`${showContent.authors} Collaborators`}
                    </Typography>
                    <Typography variant="body1" component="p">
                        
                        {showContent.lines.map(l => <p key="{showContent.lines}"> {l.line} </p>)}
                        
                    <br />
                    </Typography>
                </CardContent>
            </Card> */}
            <br />
        </div>
    )
}

export default Creations