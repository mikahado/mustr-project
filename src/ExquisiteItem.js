import { PermPhoneMsgOutlined } from '@mui/icons-material'
import React from 'react'

const ExquisiteItem = ({poemLine}) => {

  const {line} = poemLine
  
  console.log(line)


  return (
    <div>
        <>
            <p>{line}</p>
        </>

    </div>
  )
}

export default ExquisiteItem