import React from 'react'
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person'
import ForumIcon from '@mui/icons-material/Forum'
import { IconButton } from '@mui/material'
const Headers = () => {
  return (
    <div className="header">
        <IconButton><PersonIcon fontSize='large' className="header_icon"/></IconButton>

<img className='header-logo' src='https://seeklogo.com/images/T/tinder-logo-FAAE852EC0-seeklogo.com.png' alt='logo' />

<Link to="/post"><IconButton><ForumIcon fontSize='large' className="header_icon"/></IconButton></Link>
  </div>
  )
}

export default Headers