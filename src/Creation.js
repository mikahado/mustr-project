import React from 'react'
import ListItemIcon from '@mui/material/ListItemIcon';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';

const Creation = ({creation, setShowText}) => {

const {title, type, text, authors} = creation

const handleClick = () => {
  setShowText(text)
}
 
  return (
    <>
      <tr>
        <td>{title}</td>
        <td>{authors}</td>
        <td>{type}</td>
        <td>
          {/* <button onClick={handleClick} type="button" className="btn btn-primary"> */}
          <ListItemIcon>
            <LaunchRoundedIcon onClick={handleClick} type="button"  />
          </ListItemIcon>
         
        </td>
      </tr>
    </>
  )
}

export default Creation