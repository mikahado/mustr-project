import React from 'react'
import ListItemIcon from '@mui/material/ListItemIcon';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';

const Creation = ({creation, setShowContent}) => {

const {title, type, authors} = creation

const handleClick = () => {
  setShowContent(creation)
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