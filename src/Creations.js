import React, {useState, useEffect} from 'react'
import Creation from './Creation'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {creationsList}
                </tbody>
            </table>
            <hr/><br/>
            
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Title
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        by ___
                    </Typography>
                    <Typography variant="body1">
                    {showText} 
                    <br />
                    </Typography>
                </CardContent>
            </Card>
            
            
        </div>
    )

}

export default Creations