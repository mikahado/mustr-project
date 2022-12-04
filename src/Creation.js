import React from 'react'
import ListItemIcon from '@mui/material/ListItemIcon';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';

const Creation = ({creation, setShowDetails}) => {

const {title, type, text, authors, poem} = creation

const handleClick = () => {
  setShowDetails(creation)
}
 
  return (
    <>
      <tr>
        <td>{title}</td>
        <td>{authors}</td>
        <td>{type}</td>
        <td>
          <ListItemIcon>
            <LaunchRoundedIcon type="button" onClick={handleClick}  />
          </ListItemIcon>
         
        </td>
      </tr>
    </>
  )
}

export default Creation